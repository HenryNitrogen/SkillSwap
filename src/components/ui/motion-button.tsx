"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MotionButtonProps extends ButtonProps {
  motionProps?: React.ComponentProps<typeof motion.div>;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  gradient?: boolean;
  glass?: boolean;
}

export function MotionButton({
  children,
  className,
  motionProps,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
  gradient = true,
  glass = false,
  ...props
}: MotionButtonProps) {
  const defaultClassName = gradient
    ? glass
      ? "bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 backdrop-blur-md text-white shadow-lg shadow-blue-500/20 rounded-xl"
      : "bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg shadow-blue-900/30 rounded-xl"
    : "";

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={
        whileHover || {
          scale: 1.03,
          boxShadow: "0 8px 20px rgba(0, 20, 50, 0.25)",
        }
      }
      whileTap={whileTap || { scale: 0.97 }}
      {...motionProps}
    >
      <Button className={cn(defaultClassName, className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
