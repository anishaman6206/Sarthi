"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export interface ChatContextValue {
  stageTitle: string | undefined;
  setStageTitle: (title: string | undefined) => void;
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

interface ChatContextProviderProps {
  children: ReactNode;
  initialStageTitle?: string;
}

export function ChatContextProvider({
  children,
  initialStageTitle,
}: ChatContextProviderProps): JSX.Element {
  const [stageTitle, setStageTitle] = useState<string | undefined>(initialStageTitle);

  const value = useMemo<ChatContextValue>(
    () => ({ stageTitle, setStageTitle }),
    [stageTitle],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatContext(): ChatContextValue {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    return { stageTitle: undefined, setStageTitle: () => undefined };
  }
  return ctx;
}