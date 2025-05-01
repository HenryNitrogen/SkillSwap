"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionTextProps extends HTMLMotionProps<"div"> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  gradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  children: React.ReactNode;
  className?: string;
}

export function MotionText({
  as = "p",
  gradient = false,
  gradientFrom = "from-blue-400",
  gradientTo = "to-blue-300",
  className,
  children,
  ...props
}: MotionTextProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(
        gradient &&
          `bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
