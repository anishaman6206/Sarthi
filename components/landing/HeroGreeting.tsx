"use client";

import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="inline-flex"
        >
          <span className="rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-sarthi-violet ring-1 ring-sarthi-violet/30 backdrop-blur">
            Made for Indian students • Class 8 to 12
          </span>
        </motion.div>

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