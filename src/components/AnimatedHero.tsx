"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AnimatedHero() {
  return (
    <motion.div
      className="flex w-full flex-col items-start justify-center space-y-4 text-left md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-sm">
          100+ members
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-sm">
          3 countries
        </span>
      </div>

      <motion.h1
        className="text-4xl font-bold text-white md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Swap Skills, Build Community
      </motion.h1>

      <motion.h2
        className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Teach & Learn Anything
      </motion.h2>

      <motion.p
        className="text-gray-300/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Meet, chat, and study with students from around the world
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button className="w-[220px] rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:from-violet-600 hover:to-indigo-600">
          <span>SWAP SKILLS NOW</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Button
          variant="link"
          size="sm"
          className="h-auto p-0 text-xs text-white/80 hover:text-white"
        >
          Don&apos;t have an account?{" "}
          <span className="ml-1 underline">Sign up for free!</span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
