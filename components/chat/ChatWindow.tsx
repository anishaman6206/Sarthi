"use client";

import { AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatPanel from "@/components/chat/ChatPanel";

export default function ChatWindow(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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