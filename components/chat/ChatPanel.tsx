"use client";

import { motion } from "framer-motion";
import { X, Send, Trash2 } from "lucide-react";
import { clearAllChats, backupAllChats, restoreAllChats, getStorageKey } from "@/components/chat/useChatStream";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useUserStore } from "@/components/store/useUserStore";
import { useChatContext } from "@/components/chat/ChatContext";
import { useChatStream, type Message } from "@/components/chat/useChatStream";
import { CAREERS } from "@/lib/data/careers";
import { usePathname } from "next/navigation";

interface ChatPanelProps {
  open: boolean;
  onClose: () => void;
}

const MAX_TEXTAREA_ROWS = 8;

export default function ChatPanel({ open, onClose }: ChatPanelProps): JSX.Element | null {
  const profile = useUserStore((state) => state.profile);
  const { stageTitle } = useChatContext();

  const rawCareerSlug = profile.chosenCareerSlug;
  const pathname = usePathname();

  // Only attach career/roadmap context when the user is actually on a roadmap
  // page (e.g. /roadmap/[slug]). When they navigate back to home, keep the
  // chat in a global context so it doesn't reference the last-visited card.
  const onRoadmapPage = typeof pathname === "string" && pathname.startsWith("/roadmap");
  const careerSlug = onRoadmapPage ? rawCareerSlug : undefined;
  const career = careerSlug ? CAREERS.find((c) => c.slug === careerSlug) : undefined;

  const { messages, input, setInput, send, clearMessages, restoreMessages, isStreaming, error } = useChatStream({
    careerSlug,
    stageTitle: onRoadmapPage ? stageTitle : undefined,
    profile: profile as Record<string, unknown>,
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [toast, setToast] = useState<{
    visible: boolean;
    type: "context" | "all" | null;
    backup?: Message[];
    backupAll?: Record<string, Message[]>;
    timerId?: number | null;
  }>({ visible: false, type: null });

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isStreaming]);

  const handleTextareaChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(e.target.value);
  }, [setInput]);

  const autoResize = useCallback((): void => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    const lineHeight = 24;
    const maxHeight = lineHeight * MAX_TEXTAREA_ROWS;
    ta.style.height = `${Math.min(ta.scrollHeight, maxHeight)}px`;
  }, []);

  useEffect(() => {
    autoResize();
  }, [input, autoResize]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>): void => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        void send();
      }
    },
    [send],
  );

  if (!open) return null;

  const subheader = career
    ? `Telling me about: ${career.title} - ${stageTitle ?? "overview"}`
    : `Telling me about: your future - ${onRoadmapPage ? stageTitle ?? "overview" : "general"}`;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close chat"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Sarthi AI chat"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
        className="absolute right-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl sm:max-w-md"
      >
        <header className="flex items-center justify-between bg-gradient-to-br from-sarthi-violet to-sarthi-peach p-4 text-white">
          <div>
            <h3 className="font-display text-lg font-bold">Sarthi AI</h3>
            <p className="mt-0.5 text-xs opacity-90">{subheader}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => {
              const backup = messages.slice();
              clearMessages();
              const tid = window.setTimeout(() => setToast((t) => ({ ...t, visible: false })), 6000);
              setToast({ visible: true, type: "context", backup, timerId: tid });
            }}
            aria-label="Clear chat history"
            className="ml-2 rounded-full p-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <Trash2 className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => {
              // Backup all chat data then clear; provide undo via toast.
              const backup = backupAllChats();
              clearAllChats();
              clearMessages();
              setToast({
                visible: true,
                type: "all",
                backupAll: backup,
                timerId: window.setTimeout(() => setToast((t) => ({ ...t, visible: false })), 6000),
              });
            }}
            aria-label="Clear all chat history"
            className="ml-2 rounded-full px-3 py-1 text-xs font-medium bg-white/10 hover:bg-white/15"
          >
            Clear all
          </button>
        </header>

        <div
          ref={scrollRef}
          className="scrollbar-clean flex-1 space-y-3 overflow-y-auto bg-sarthi-cream/40 p-4"
        >
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-sarthi-ink/60">
              <p>
                Hey, I&apos;m Sarthi — your career guide. Ask me about subjects,
                exams, colleges, or scholarships.
              </p>
            </div>
          ) : (
            messages.map((msg, idx) => {
              if (msg.role === "user") {
                return (
                  <div key={`u-${idx}`} className="flex">
                    <div className="ml-auto max-w-[80%] rounded-2xl bg-sarthi-cream px-4 py-2 text-sarthi-ink shadow-sm">
                      {msg.content}
                    </div>
                  </div>
                );
              }
              return (
                <div key={`a-${idx}`} className="flex">
                  <div className="mr-auto max-w-[80%] rounded-2xl border border-sarthi-ink/10 bg-white px-4 py-3 text-sarthi-ink shadow-sm">
                    {msg.content.length > 0 ? (
                      <div className="prose prose-sm max-w-none text-sarthi-ink">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sarthi-violet underline-offset-2 hover:underline"
                              >
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <span className="text-sarthi-ink/40">...</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {isStreaming ? (
          <div className="flex items-center gap-2 border-t border-sarthi-ink/10 bg-white p-3 text-sarthi-ink/60">
            <span className="sr-only">Sarthi is typing</span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-sarthi-violet [animation-delay:-0.3s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-sarthi-violet [animation-delay:-0.15s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-sarthi-violet" />
          </div>
        ) : null}

        {error ? (
          <div className="border-t border-sarthi-ink/10 bg-sarthi-peach/20 px-4 py-2 text-xs text-sarthi-ink">
            {error}
          </div>
        ) : null}

        <footer className="border-t border-sarthi-ink/10 bg-white p-3">
          <div className="flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask Sarthi anything..."
              aria-label="Message Sarthi"
              className="scrollbar-clean max-h-48 flex-1 resize-none rounded-xl border border-sarthi-ink/15 bg-sarthi-cream/40 px-3 py-2 text-sm text-sarthi-ink placeholder:text-sarthi-ink/40 focus:border-sarthi-violet focus:outline-none focus:ring-2 focus:ring-sarthi-violet/30"
            />
            <button
              type="button"
              onClick={() => void send()}
              disabled={isStreaming || input.trim().length === 0}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sarthi-violet text-white shadow-md transition hover:bg-sarthi-violet/90 disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-sarthi-ink/50">
            Sarthi AI may produce inaccurate info — verify with an expert.
          </p>
        </footer>
      </motion.div>
      {toast.visible ? (
        <div className="fixed right-6 bottom-28 z-60">
          <div className="flex items-center gap-3 rounded-lg bg-sarthi-ink/95 px-4 py-2 text-white shadow">
            <span>
              {toast.type === "all" ? "All chats cleared" : "Chat cleared"}
            </span>
            <button
              type="button"
              onClick={() => {
                // Undo handler
                if (toast.type === "context" && toast.backup) {
                  restoreMessages(toast.backup);
                }
                if (toast.type === "all" && toast.backupAll) {
                  restoreAllChats(toast.backupAll);
                  // restore current context messages if present
                  const key = getStorageKey({ careerSlug });
                  const kmsgs = toast.backupAll[key];
                  if (kmsgs) restoreMessages(kmsgs);
                }
                if (toast.timerId) window.clearTimeout(toast.timerId);
                setToast({ visible: false, type: null });
              }}
              className="ml-2 rounded-md bg-white/10 px-2 py-1 text-xs"
            >
              Undo
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}