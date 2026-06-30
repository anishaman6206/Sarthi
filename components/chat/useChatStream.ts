"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatContext {
  careerSlug?: string;
  stageTitle?: string;
  profile?: Record<string, unknown>;
}

export interface UseChatStreamResult {
  messages: Message[];
  input: string;
  setInput: (next: string) => void;
  send: (text?: string) => Promise<void>;
  isStreaming: boolean;
  error: string | undefined;
}

interface StreamDelta {
  delta?: string;
  done?: boolean;
  error?: string;
}

const STORAGE_PREFIX = "sarthi-chat:";

const storageKey = (context: ChatContext): string =>
  `${STORAGE_PREFIX}${context.careerSlug ?? "global"}`;

const isBrowser = (): boolean =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const loadMessages = (key: string): Message[] => {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (m): m is Message =>
        typeof m === "object" &&
        m !== null &&
        "role" in m &&
        "content" in m &&
        ((m as { role: unknown }).role === "user" ||
          (m as { role: unknown }).role === "assistant") &&
        typeof (m as { content: unknown }).content === "string",
    );
  } catch {
    return [];
  }
};

const saveMessages = (key: string, messages: Message[]): void => {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(messages));
  } catch {
    /* quota or disabled storage — silently ignore */
  }
};

const splitIntoChunks = (text: string, wordsPerChunk = 8): string[] => {
  const tokens = text.split(/(\s+)/);
  const chunks: string[] = [];
  let current = "";
  let wordCount = 0;

  for (const token of tokens) {
    const isWhitespace = /^\s+$/.test(token);
    if (!isWhitespace) wordCount += 1;
    current += token;
    if (!isWhitespace && wordCount >= wordsPerChunk) {
      chunks.push(current);
      current = "";
      wordCount = 0;
    }
  }
  if (current.length > 0) chunks.push(current);
  return chunks;
};

export function useChatStream(context: ChatContext): UseChatStreamResult {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const keyRef = useRef<string>(storageKey(context));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    keyRef.current = storageKey(context);
    setMessages(loadMessages(keyRef.current));
  }, [context.careerSlug, context.stageTitle]);

  useEffect(() => {
    if (messages.length === 0) return;
    saveMessages(keyRef.current, messages);
  }, [messages]);

  const send = useCallback(
    async (text?: string): Promise<void> => {
      const trimmed = (text ?? input).trim();
      if (trimmed.length === 0 || isStreaming) return;

      const userMsg: Message = { role: "user", content: trimmed };
      const baseMessages = messages;
      const nextMessages: Message[] = [...baseMessages, userMsg];

      setInput("");
      setError(undefined);
      setIsStreaming(true);
      setMessages([...nextMessages, { role: "assistant", content: "" }]);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...baseMessages, userMsg],
            context: {
              careerSlug: context.careerSlug,
              stageTitle: context.stageTitle,
              profile: context.profile ?? {},
            },
          }),
        });

        if (!response.ok || !response.body) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let accumulated = "";

        const applyDelta = (delta: string): void => {
          accumulated += delta;
          setMessages((prev) => {
            const copy = [...prev];
            const last = copy[copy.length - 1];
            if (last && last.role === "assistant") {
              copy[copy.length - 1] = { ...last, content: accumulated };
            }
            return copy;
          });
        };

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const rawLine of lines) {
            const line = rawLine.trim();
            if (line.length === 0) continue;
            try {
              const parsed = JSON.parse(line) as StreamDelta;
              if (parsed.done === true) {
                setIsStreaming(false);
                return;
              }
              if (typeof parsed.error === "string") {
                setError(parsed.error);
              }
              if (typeof parsed.delta === "string") {
                applyDelta(parsed.delta);
              }
            } catch {
              /* skip malformed lines */
            }
          }
        }

        const tail = buffer.trim();
        if (tail.length > 0) {
          try {
            const parsed = JSON.parse(tail) as StreamDelta;
            if (typeof parsed.delta === "string") {
              applyDelta(parsed.delta);
            }
          } catch {
            /* ignore */
          }
        }

        setIsStreaming(false);
      } catch (err) {
        console.error("[useChatStream] send error", err);
        setError("Sorry, something went wrong. Try again?");
        setIsStreaming(false);
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last && last.role === "assistant" && last.content.length === 0) {
            copy.pop();
          }
          return copy;
        });
      }
    },
    [context.careerSlug, context.stageTitle, context.profile, input, isStreaming, messages],
  );

  return { messages, input, setInput, send, isStreaming, error };
}

// Exported for tests / advanced consumers — not used by the UI panel.
export const __test__ = { splitIntoChunks, storageKey };