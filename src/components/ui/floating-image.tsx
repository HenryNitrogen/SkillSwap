"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FloatingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  opacity?: number;
  className?: string;
  delay?: number;
}

export function FloatingImage({
  src,
  alt,
  width = 80,
  height = 120,
  opacity = 1,
  className = "",
  delay = 0,
}: FloatingImageProps) {
  return (
    <motion.div
      className={`overflow-hidden rounded-xl shadow-lg ${className}`}
      style={{
        boxShadow: `0 8px 25px rgba(0,5,15,0.6), 0 0 0 1px rgba(30,64,175,${opacity * 0.25})`,
        opacity,
        background:
          "linear-gradient(to bottom right, rgba(10,25,50,0.9), rgba(5,12,25,0.95))",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1, delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 12px 30px rgba(0,5,15,0.7), 0 0 0 1px rgba(59,130,246,${opacity * 0.4})`,
      }}
    >
      <div className="group relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover opacity-75 mix-blend-luminosity transition-transform duration-500 ease-out group-hover:opacity-90 hover:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041e42] via-[#072a5a]/60 to-transparent"></div>
      </div>
    </motion.div>
  );
}
