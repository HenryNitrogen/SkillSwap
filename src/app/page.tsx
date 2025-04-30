import React from 'react';
import Image from 'next/image';

// 在此对象中填写图片路径，键名为从 0 到 cols*rows-1 的索引
// 索引对应顺序：先按列（从左到右），再按列内行（从上到下）
const imageUrls: Record<number, string> = {
  0: '', // 示例: 'https://example.com/image1.jpg'
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  10: '',
  11: '',
  12: '',
  13: '',
  14: '',
  15: '',
  16: '',
  17: '',
  18: '',
  19: '' // 确保索引总数等于 cols * rows
};

export default function Home() {
  const cols = 5;
  const rows = 4;
  const minOpacity = 0.2; // 最小不透明度
  const angle = 15; // 倾斜度数

  return (
    <div className="bg-black">
      {/* 全局动画定义 */}
      <style>{`
        @keyframes floatUpDownRotated {
          0%   { transform: rotate(${angle}deg) translateY(0); }
          50%  { transform: rotate(${angle}deg) translateY(-20px); }
          100% { transform: rotate(${angle}deg) translateY(0); }
        }
        @keyframes floatDownUpRotated {
          0%   { transform: rotate(${angle}deg) translateY(0); }
          50%  { transform: rotate(${angle}deg) translateY(20px); }
          100% { transform: rotate(${angle}deg) translateY(0); }
        }
      `}</style>

      {/* 主容器：屏幕小于 md 时居中，大于等于 md 时左右分布 */}
      <div className="flex h-screen items-center px-16 space-x-2 justify-center md:justify-between">
        {/* 左侧：始终 flex 容器，文字左对齐；md 及以上宽度为 1/2 */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 space-y-6 text-left">
          <div className="flex space-x-4">
            <span className="px-4 py-1 rounded-full bg-gray-800 text-white text-sm">100+ members</span>
            <span className="px-4 py-1 rounded-full bg-gray-800 text-white text-sm">3 countries</span>
          </div>
          <h1 className="text-5xl font-bold text-white">Swap Skills, Build Community</h1>
          <h2 className="text-3xl text-blue-400">Teach & Learn Anything</h2>
          <p className="text-gray-300">Meet, chat, and study with students ...</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            SWAP SKILLS NOW →
          </button>
          <p className="text-sm text-gray-400">Don&apos;t have an account? Sign up for free!</p>
        </div>

        {/* 右侧漂浮列：md 及以上显示，小屏隐藏 */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div
            className="border border-white p-4"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              maskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
            }}
          >
            <div className="flex space-x-4">
              {Array.from({ length: cols }).map((_, colIndex) => {
                const animationName =
                  colIndex % 2 === 0 ? 'floatUpDownRotated' : 'floatDownUpRotated';

                return (
                  <div
                    key={colIndex}
                    className="inline-block"
                    style={{ animation: `${animationName} 4s ease-in-out infinite` }}
                  >
                    <div className="flex flex-col space-y-4">
                      {Array.from({ length: rows }).map((_, rowIndex) => {
                        const idx = colIndex * rows + rowIndex;

                        // 透明度计算
                        const maxColDist = (cols - 1) / 2;
                        const maxRowDist = (rows - 1) / 2;
                        const colDist = Math.min(colIndex, cols - 1 - colIndex);
                        const rowDist = Math.min(rowIndex, rows - 1 - rowIndex);
                        const normCol = maxColDist === 0 ? 0 : colDist / maxColDist;
                        const normRow = maxRowDist === 0 ? 0 : rowDist / maxRowDist;
                        const opacity = Math.min(normCol, normRow) * (1 - minOpacity) + minOpacity;

                        return (
                          <div
                            key={rowIndex}
                            className="w-[80px] h-[120px] rounded-md border overflow-hidden"
                            style={{ opacity, borderColor: `rgba(255,255,255,${opacity})` }}
                          >
                            {imageUrls[idx] ? (
                              <Image
                                src={imageUrls[idx]}
                                alt={`box-${idx}`}
                                width={80}
                                height={120}
                                style={{ objectFit: 'cover' }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-800" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}