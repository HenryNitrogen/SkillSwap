import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  hover?: boolean;
  blur?: "sm" | "md" | "lg" | "xl";
}

/**
 * A card component with dark blue gradient background, blur effects, and optional hover animations
 */
export function GradientCard({
  children,
  className,
  intensity = "medium",
  hover = true,
  blur = "md",
}: GradientCardProps) {
  // Map intensity to appropriate gradient and border classes
  const intensityMap = {
    light: {
      gradient: "from-[#051930]/80 to-[#0a2955]/60",
      border: "border-blue-500/10",
    },
    medium: {
      gradient: "from-[#051930]/90 to-[#0a2955]/70",
      border: "border-blue-500/20",
    },
    strong: {
      gradient: "from-[#051930] to-[#0a2955]/80",
      border: "border-blue-500/30",
    },
  };

  const { gradient, border } = intensityMap[intensity];

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-2xl border",
        border,
        "bg-gradient-to-br",
        gradient,
        `backdrop-blur-${blur}`,
        "transition-all duration-300",
        hover && "hover:border-white/20 hover:shadow-blue-500/25",
        className,
      )}
      style={{
        boxShadow: "0 0 30px -15px rgba(23, 37, 84, 0.3)",
      }}
      whileHover={hover ? { scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
