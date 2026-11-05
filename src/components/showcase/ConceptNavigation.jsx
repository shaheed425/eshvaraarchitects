import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';

export default function ConceptNavigation({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  isPlaying,
  onTogglePlay,
  className = ""
}) {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');
  const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 py-4 select-none ${className}`}>
      {/* Left: Interactive Progress Bar & Slide Ticks */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        {/* Dynamic Progress Bar */}
        <div className="relative w-full sm:w-48 h-[2px] bg-[#F4F0E8]/15 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-[#B49A62]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Slide Dots / Ticks */}
        <div className="hidden md:flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSlide(idx)}
              aria-label={`Jump to concept ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-6 bg-[#B49A62]'
                  : 'w-1.5 bg-[#F4F0E8]/20 hover:bg-[#F4F0E8]/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Slide Number & Arrow Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        {/* Play/Pause Autoplay Toggle */}
        <button
          type="button"
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans text-[#C5C0B8] hover:text-[#B49A62] transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-[#B49A62]" />
              <span className="hidden sm:inline">AUTOPLAY ON</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3" />
              <span className="hidden sm:inline">AUTOPLAY OFF</span>
            </>
          )}
        </button>

        {/* Counter Display with Framer Motion slide-in */}
        <div className="flex items-baseline gap-1 font-sans text-xs tracking-widest text-[#F4F0E8]">
          <span className="font-bold text-[#B49A62] text-sm tabular-nums">
            {currentFormatted}
          </span>
          <span className="text-[#F4F0E8]/40">/</span>
          <span className="text-[#C5C0B8] tabular-nums">{totalFormatted}</span>
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous architectural concept"
            className="group w-10 h-10 rounded-full border border-[#F4F0E8]/20 hover:border-[#B49A62] bg-[#201E1C]/80 hover:bg-[#B49A62] text-[#F4F0E8] hover:text-[#201E1C] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next architectural concept"
            className="group w-10 h-10 rounded-full border border-[#F4F0E8]/20 hover:border-[#B49A62] bg-[#201E1C]/80 hover:bg-[#B49A62] text-[#F4F0E8] hover:text-[#201E1C] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

