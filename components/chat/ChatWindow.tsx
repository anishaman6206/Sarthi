"use client";

import { AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import ChatPanel from "@/components/chat/ChatPanel";

export default function ChatWindow(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Allow other UI to open the chat by dispatching a custom event:
  // `window.dispatchEvent(new Event('open-sarthi-chat'))`.
  // This keeps the floating button while letting page banners open the panel.
  useEffect(() => {
    const handler = (): void => setIsOpen(true);
    if (typeof window !== "undefined") {
      window.addEventListener("open-sarthi-chat", handler as EventListener);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("open-sarthi-chat", handler as EventListener);
      }
    };
  }, []);

  return (
    <>
      {!isOpen ? (
        <div className="fixed bottom-6 right-6 z-50">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-sarthi-violet opacity-30"
          />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Sarthi AI chat"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sarthi-violet text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-sarthi-violet/60"
          >
            <MessageCircle className="h-6 w-6" aria-hidden />
          </button>
        </div>
      ) : null}

      <AnimatePresence>
        {isOpen ? (
          <ChatPanel open={isOpen} onClose={() => setIsOpen(false)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}