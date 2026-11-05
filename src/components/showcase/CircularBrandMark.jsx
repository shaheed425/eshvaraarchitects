import React from 'react';
import { motion } from 'framer-motion';

export default function CircularBrandMark({
  text = "ESHVARA DESIGN ARCHITECTS • CONCEPTS • ",
  size = 130,
  onClick,
  className = ""
}) {
  const radius = size * 0.38;
  const viewBoxSize = size;
  const center = viewBoxSize / 2;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Advance to next architectural concept"
      className={`group relative inline-flex items-center justify-center cursor-pointer select-none focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[#B49A62]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Rotating SVG Circular Text */}
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full animate-spin-slow origin-center drop-shadow-md"
      >
        <defs>
          <path
            id={`conceptCircle-${size}`}
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          className="text-[8.5px] uppercase tracking-[0.28em] font-medium fill-[#F4F0E8]/70 group-hover:fill-[#B49A62] transition-colors duration-300"
        >
          <textPath href={`#conceptCircle-${size}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Icon: Minimal Gold Twin Crescent & Subtle Arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border border-[#B49A62]/40 bg-[#201E1C]/80 backdrop-blur-sm flex items-center justify-center text-[#B49A62] group-hover:border-[#B49A62] group-hover:bg-[#B49A62] group-hover:text-[#201E1C] transition-all duration-300 shadow-inner">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-0.5">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

