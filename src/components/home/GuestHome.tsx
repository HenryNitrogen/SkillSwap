"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { MotionButton } from "@/components/ui/motion-button";
import { MotionText } from "@/components/ui/motion-text";
import { FloatingColumn } from "@/components/ui/floating-column";

export function GuestHome() {
  const images = Array.from({ length: 16 }, (_, i) => `/${i + 1}.jpg`);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#020b18] via-[#031629] to-[#062137]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-5"></div>

      {/* Glow elements */}
      <div className="absolute top-1/4 right-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative container mx-auto flex min-h-screen items-center justify-center space-x-2 px-4 md:justify-between md:px-8">
        {/* Left Content Section */}
        <motion.div
          className="z-10 flex w-full flex-col items-start justify-center space-y-4 text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-600/20 bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-md">
              100+ members
            </span>
            <span className="rounded-full border border-blue-600/20 bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-md">
              3 countries
            </span>
          </div>

          <MotionText
            as="h1"
            className="text-4xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Swap Skills, Build Community
          </MotionText>

          <MotionText
            as="h2"
            className="text-2xl font-semibold md:text-3xl"
            gradient
            gradientFrom="from-blue-400"
            gradientTo="to-blue-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Teach & Learn Anything
          </MotionText>

          <MotionText
            as="p"
            className="text-blue-100/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Meet, chat, and study with students from around the world
          </MotionText>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <MotionButton
              className="w-full sm:w-[220px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => signIn("discord", { callbackUrl: "/" })}
            >
              <span>SWAP SKILLS NOW</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </MotionButton>
            
            <MotionButton
              glass
              className="w-full sm:w-auto"
              variant="outline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={() => window.location.href = "#how-it-works"}
            >
              <span>LEARN MORE</span>
            </MotionButton>
          </div>
        </motion.div>

        {/* Right Side - Floating Image Grid */}
        <motion.div
          className="z-10 hidden flex-1 items-center justify-center md:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className="rounded-2xl border border-blue-900/30 bg-gradient-to-br from-[#040f22] via-[#061332]/90 to-[#0a1e4b]/80 p-6 backdrop-blur-xl"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              boxShadow: "0 0 60px -15px rgba(30, 64, 175, 0.3)",
            }}
          >
            <div className="flex gap-4">
              {Array.from({ length: 5 }).map((_, colIndex) => (
                <FloatingColumn
                  key={colIndex}
                  images={images}
                  index={colIndex}
                  angle={15}
                  rows={4}
                  cols={5}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}