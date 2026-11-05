import React from 'react';

export default function CircularBadge({
  text = "ESHVARA DESIGN ARCHITECTS • DESIGN COORDINATE BUILD • ",
  size = 140,
  centerContent = null,
  className = "",
  dark = true
}) {
  const radius = size * 0.38;
  const viewBoxSize = size;
  const center = viewBoxSize / 2;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full animate-spin-slow origin-center"
      >
        <defs>
          <path
            id={`eshvaraCircle-${size}`}
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          className={`text-[8.5px] uppercase tracking-[0.27em] font-medium ${
            dark ? 'fill-[#F1EEE8]/80' : 'fill-[#201E1C]/80'
          }`}
        >
          <textPath href={`#eshvaraCircle-${size}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {centerContent || (
          <div className="flex items-center justify-center text-[#C4A66B]">
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-[#C4A66B]">
              <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12c2.8 0 5.37-.96 7.42-2.58l-1.6-1.6A9.68 9.68 0 0 1 16 26c-5.52 0-10-4.48-10-10S10.48 6 16 6c2.32 0 4.45.79 6.14 2.12l1.6-1.6A11.95 11.95 0 0 0 16 4z" />
              <path d="M20 9a7 7 0 1 0 0 14c1.63 0 3.15-.56 4.35-1.5l-1.6-1.6A4.7 4.7 0 0 1 20 21c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.1 0 2.11.36 2.95 1l1.6-1.6A6.94 6.94 0 0 0 20 9z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
