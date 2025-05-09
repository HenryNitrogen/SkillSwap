"use client";

import React, { useEffect, useRef } from "react";

interface InfiniteScrollColumnsProps {
  images: string[];
  columns?: number;
  rows?: number;
  speedRange?: [number, number]; // pixels per second
}

const InfiniteScrollColumns: React.FC<InfiniteScrollColumnsProps> = ({
  images,
  columns = 5,
  rows = 20,
  speedRange = [20, 50],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = Array.from(
      containerRef.current?.querySelectorAll(".scroll-column") || []
    );

    containers.forEach((col) => {
      const imgs = Array.from(col.children) as HTMLImageElement[];
      let positions = imgs.map((_, i) => i * 120);
      const speed =
        speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]);

      const animate = () => {
        imgs.forEach((img, i) => {
          positions[i] += speed / 60;
          if (positions[i] > window.innerHeight) {
            positions[i] -= rows * 120;
          }
          img.style.top = `${positions[i]}px`;
        });

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [images]);

  // 构造足够数量的图片填充
  const totalFrames = columns * rows;
  let imagePool = [];
  while (imagePool.length < totalFrames) {
    imagePool = imagePool.concat(images);
  }
  imagePool = imagePool.slice(0, totalFrames).sort(() => Math.random() - 0.5);

  return (
    <div
      ref={containerRef}
      className="flex gap-3 relative w-full h-[480px] overflow-hidden"
    >
      {Array.from({ length: columns }).map((_, colIdx) => (
        <div
          key={colIdx}
          className="scroll-column relative w-[80px] h-full overflow-hidden"
        >
          {Array.from({ length: rows }).map((_, rowIdx) => {
            const imgIndex = colIdx * rows + rowIdx;
            return (
              <img
                key={rowIdx}
                src={imagePool[imgIndex % imagePool.length]}
                alt=""
                className="absolute w-[80px] h-[120px] object-cover"
                style={{ top: `${rowIdx * 120}px` }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrollColumns;
