"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedImageGridProps {
  cols?: number;
  rows?: number;
  angle?: number;
  minOpacity?: number;
}

export function AnimatedImageGrid({
  cols = 5,
  rows = 4,
  angle = 15,
  minOpacity = 0.2,
}: AnimatedImageGridProps) {
  return (
    <motion.div
      className="hidden flex-1 items-center justify-center md:flex"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          boxShadow: "0 0 60px -15px rgba(138, 116, 249, 0.3)",
        }}
      >
        <div className="flex gap-4">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <motion.div
              key={colIndex}
              className="inline-block"
              style={{ rotate: `${angle}deg` }}
              initial={{ y: 0 }}
              animate={{
                y: colIndex % 2 === 0 ? [-20, 0, -20] : [20, 0, 20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex flex-col gap-5">
                {Array.from({ length: rows }).map((_, rowIndex) => {
                  const idx = colIndex * rows + rowIndex;
                  const imageIndex = (idx % 16) + 1;

                  const maxColDist = (cols - 1) / 2;
                  const maxRowDist = (rows - 1) / 2;
                  const colDist = Math.min(colIndex, cols - 1 - colIndex);
                  const rowDist = Math.min(rowIndex, rows - 1 - rowIndex);
                  const normCol = maxColDist === 0 ? 0 : colDist / maxColDist;
                  const normRow = maxRowDist === 0 ? 0 : rowDist / maxRowDist;
                  const opacity =
                    Math.min(normCol, normRow) * (1 - minOpacity) + minOpacity;

                  return (
                    <motion.div
                      key={rowIndex}
                      className="h-[120px] w-[80px] overflow-hidden rounded-xl shadow-lg"
                      style={{
                        boxShadow: `0 8px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,64,110,${opacity * 0.25})`,
                        opacity,
                        background:
                          "linear-gradient(to bottom right, rgba(13,30,60,0.9), rgba(5,10,25,0.95))",
                        backdropFilter: "blur(8px)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity }}
                      transition={{ duration: 1, delay: 0.1 * (idx % 5) }}
                    >
                      <div className="group relative h-full w-full">
                        <Image
                          src={`/${imageIndex}.jpg`}
                          alt={`skill-${idx}`}
                          width={80}
                          height={120}
                          className="h-full w-full object-cover opacity-70 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051930] to-transparent opacity-60"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
