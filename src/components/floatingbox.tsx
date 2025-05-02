import Image from 'next/image';

interface FloatingBoxProps {
  cols: number;
  rows: number;
  minOpacity: number;
}

export default function FloatingBox({ cols = 5, rows = 4, minOpacity = 0.2 }: FloatingBoxProps) {
    const imageUrls = Array.from({ length: 16 }, (_, i) => `/${i + 1}.jpg`);

    return(
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
    )
}