"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = ["Home", "How it Works", "Community Service", "About"];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const { data: session } = useSession();
  
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [64, 48]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 12]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.3]);
  
  const width = useTransform(scrollY, [0, 100], ['95%', '85%']);
  const margin = useTransform(scrollY, [0, 100], ['2.5%', '7.5%']);

  const handleAuthAction = () => {
    if (session) {
      void signOut();
    } else {
      void signIn("discord", { callbackUrl: "/" });
    }
  };

  const GradientText = ({
    text,
    colors,
    delay = 0,
  }: {
    text: string;
    colors: string;
    delay?: number;
  }) => (
    <motion.span
      initial={{ opacity: 0, y: delay === 0 ? -10 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-gradient-to-r ${colors} bg-clip-text text-xl font-bold text-transparent`}
    >
      {text}
    </motion.span>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 py-3">
      <motion.div 
        className="rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg"
        style={{ 
          height,
          width,
          marginLeft: margin,
          marginRight: margin,
          scale,
          opacity,
          backdropFilter: `blur(${backdropBlur.get()}px)`,
          borderColor: `rgba(255,255,255,${borderOpacity.get()})`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="flex h-full items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-1">
            <GradientText text="Skill" colors="from-violet-400 to-indigo-300" />
            <GradientText
              text="Swap"
              colors="from-indigo-300 to-sky-200"
              delay={0.2}
            />
          </Link>

          <nav className="hidden gap-6 md:flex">
            {navItems.map((item, idx) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                onClick={() => setActiveItem(item)}
                className={cn(
                  "relative py-1 text-sm font-medium transition-all duration-200 hover:text-white/90",
                  activeItem === item
                    ? "font-medium text-white"
                    : "text-white/70",
                )}
              >
                {item}
                {activeItem === item && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-300"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md shadow-indigo-500/25 hover:from-violet-600 hover:to-indigo-600"
                onClick={handleAuthAction}
              >
                {session ? "Signout" : "Login / Signup"}
              </Button>
            </motion.div>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/5 bg-[#0d0b20]/95 backdrop-blur-xl"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-1">
                  <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text font-bold text-transparent">
                    Skill
                  </span>
                  <span className="bg-gradient-to-r from-indigo-300 to-sky-200 bg-clip-text font-bold text-transparent">
                    Swap
                  </span>
                </SheetTitle>
                <SheetDescription className="text-white/50">
                  Navigation
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    onClick={() => setActiveItem(item)}
                    className={cn(
                      "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      activeItem === item
                        ? "bg-white/5 font-medium text-white"
                        : "text-white/70 hover:bg-white/5",
                    )}
                  >
                    {item}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button 
                    className="w-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:from-violet-600 hover:to-indigo-600"
                    onClick={handleAuthAction}
                  >
                    {session ? "Dashboard" : "Login / Signup"}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
