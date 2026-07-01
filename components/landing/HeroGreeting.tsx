"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const openChat = (): void => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-sarthi-chat"));
  }
};

export default function HeroGreeting() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sarthi-violet/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-sarthi-peach/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-flex items-center"
          >
            <span className="rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-sarthi-violet ring-1 ring-sarthi-violet/30 backdrop-blur">
              Made for Indian students • Class 8 to 12
            </span>
          </motion.div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={openChat}
              className="inline-flex items-center gap-3 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-sarthi-ink shadow-sm hover:shadow-md"
            >
              <MessageCircle className="h-5 w-5 text-sarthi-violet" />
              <span className="text-xs">
                Chat with your friend Sarthi AI — feel free to ask about any career
                related things
              </span>
            </button>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display mt-6 text-4xl font-extrabold tracking-tight text-sarthi-ink md:text-6xl"
        >
          What do you want to become,{" "}
          <span className="bg-gradient-to-r from-sarthi-violet to-sarthi-peach bg-clip-text text-transparent">
            my friend?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sarthi-ink/70 mt-6 max-w-2xl text-lg"
        >
          Pick any career. We&apos;ll show you the exact subjects, exams, colleges,
          scholarships, and fees — tailored to your state and family income.
        </motion.p>
      </div>
    </section>
  );
}