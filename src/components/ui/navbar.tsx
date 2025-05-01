"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
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

  return (
    <header className="border-border/40 bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              onClick={() => setActiveItem(item)}
              className={cn(
                "hover:text-foreground/80 text-sm font-medium transition-colors",
                activeItem === item
                  ? "text-foreground font-bold"
                  : "text-foreground/60",
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right side - Auth buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Sign up</Button>
        </div>

        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>Navigation</SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    "hover:text-foreground/80 text-sm font-medium transition-colors",
                    activeItem === item
                      ? "text-foreground font-bold"
                      : "text-foreground/60",
                  )}
                >
                  {item}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-xl font-bold text-transparent"
      >
        Skill
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-xl font-bold text-transparent"
      >
        Swap
      </motion.span>
    </div>
  );
}
