"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingImage } from "./floating-image";

interface FloatingColumnProps {
  images: string[];
  index: number;
  angle?: number;
  rows?: number;
  cols?: number;
  minOpacity?: number;
}

export function FloatingColumn({
  images,
  index,
  angle = 15,
  rows = 4,
  cols = 5,
  minOpacity = 0.2,
}: FloatingColumnProps) {
  const animationVariants = {
    initial: { y: 0 },
    animate: {
      y: index % 2 === 0 ? [-20, 0, -20] : [20, 0, 20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="inline-block"
      style={{ rotate: `${angle}deg` }}
      variants={animationVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col gap-5">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const idx = index * rows + rowIndex;
          const imageIndex = idx % images.length;

          const maxColDist = (cols - 1) / 2;
          const maxRowDist = (rows - 1) / 2;
          const colDist = Math.min(index, cols - 1 - index);
          const rowDist = Math.min(rowIndex, rows - 1 - rowIndex);
          const normCol = maxColDist === 0 ? 0 : colDist / maxColDist;
          const normRow = maxRowDist === 0 ? 0 : rowDist / maxRowDist;
          const opacity =
            Math.min(normCol, normRow) * (1 - minOpacity) + minOpacity;

          return (
            <FloatingImage
              key={rowIndex}
              src={images[imageIndex]}
              alt={`skill-${idx}`}
              opacity={opacity}
              delay={0.1 * (idx % 5)}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
