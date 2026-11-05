import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Pause, Maximize2, Compass } from 'lucide-react';
import { architecturalConcepts } from '../../data/concepts';
import Lightbox from '../common/Lightbox';

export default function ArchitecturalShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const totalSlides = architecturalConcepts.length;
  const timerRef = useRef(null);

  // Navigate to Next
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Navigate to Prev
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Direct Selection by index
  const handleSelectSlide = useCallback((index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Optional Autoplay
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, handleNext]);

  // Swipe gesture for touch/mobile
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const currentConcept = architecturalConcepts[currentIndex];
  const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;

  // Lightbox items
  const lightboxItems = architecturalConcepts.map((c) => ({
    image: c.image,
    title: c.title,
    category: c.category,
    description: c.description
  }));

  return (
    <section
      id="concept-showcase"
      className="relative w-full bg-[#131211] text-[#F4F0E8] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-14 overflow-hidden border-t border-white/10"
      aria-label="Architectural Concept Showcase"
    >
      {/* Background Architectural Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-[1480px] mx-auto relative z-10">
        {/* ========================================================
            1. SECTION HEADER: Editorial Atelier Introduction
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-14 border-b border-white/10">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-[#B49A62] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
              <span>CONCEPT ARCHITECTURE • DESIGN EXPLORATIONS</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#F4F0E8]">
              Spaces Conceived with <br className="hidden sm:inline" />
              <span className="italic text-[#B49A62] font-light">Singular Purpose.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#C5C0B8] font-light leading-relaxed max-w-xl">
              An immersive editorial sequence of architectural studies by Eshvara Design Architects. Each study investigates climate responsiveness, tectonic honesty, lightwells, and bespoke client lifestyles.
            </p>
          </div>

          {/* Header Controls: Slide Counter, Autoplay, Arrow Navigation */}
          <div className="flex items-center gap-6">
            {/* Slide Index Counter */}
            <div className="flex items-baseline gap-1.5 font-sans text-xs tracking-widest text-[#F4F0E8]">
              <span className="font-bold text-[#B49A62] text-base tabular-nums">
                0{currentIndex + 1}
              </span>
              <span className="text-white/30">/</span>
              <span className="text-[#C5C0B8] tabular-nums">0{totalSlides}</span>
            </div>

            {/* Autoplay Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-sans text-[#C5C0B8] hover:text-[#B49A62] transition-colors py-1 px-2.5 rounded-[4px] border border-white/10 hover:border-[#B49A62]"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#B49A62]" />
                  <span>AUTOPLAY ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>AUTOPLAY OFF</span>
                </>
              )}
            </button>

            {/* Circular Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Concept"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#B49A62] bg-[#1C1A18] hover:bg-[#B49A62] text-white hover:text-[#131211] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Concept"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#B49A62] bg-[#1C1A18] hover:bg-[#B49A62] text-white hover:text-[#131211] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. MAIN STAGE: Split-Screen Architectural Exhibition
            ======================================================== */}
        <div className="pt-10 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* ----------------------------------------------------
                LEFT: Cinematic Architectural Photo Frame (58% Col-Span 7)
                ---------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="relative w-full aspect-[16/10] sm:aspect-[16/10.5] rounded-[4px] overflow-hidden bg-[#181716] border border-white/10 shadow-2xl cursor-grab active:cursor-grabbing group"
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentConcept.id}
                    custom={direction}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={currentConcept.image}
                      alt={`${currentConcept.title} — Concept Architecture`}
                      className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/hero-dusk-residence-clean.webp';
                      }}
                    />

                    {/* Ambient Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Floating Concept Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="px-3.5 py-1.5 rounded-[4px] bg-[#131211]/85 backdrop-blur-md border border-white/15 text-white font-sans text-xs tracking-wider font-semibold shadow-md flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B49A62]" />
                        <span>{currentConcept.conceptBadge || `Concept ${currentConcept.index}`}</span>
                      </div>
                    </div>

                    {/* Fullscreen Expand Lightbox Button */}
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      aria-label="View Fullscreen"
                      className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#B49A62] text-white hover:text-[#131211] border border-white/20 flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-sm"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Bottom Typology Badge on Image */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-xs text-[#F4F0E8] font-sans">
                      <span className="px-3 py-1 rounded-[2px] bg-black/60 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-wider font-semibold text-[#B49A62]">
                        {currentConcept.category}
                      </span>
                      <span className="font-mono text-[11px] text-[#C5C0B8]/80 hidden sm:inline">
                        {currentConcept.slideNumber}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* ----------------------------------------------------
                RIGHT: Editorial Narrative & Client Lifestyle Panel (42% Col-Span 5)
                ---------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#191817] p-8 sm:p-10 lg:p-12 rounded-[4px] border border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentConcept.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Index Eyebrow */}
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#B49A62] font-semibold mb-3">
                      <Compass className="w-3.5 h-3.5" />
                      <span>STUDY {currentConcept.index} • ARCHITECTURAL CONCEPT</span>
                    </div>

                    {/* Large Serif Title */}
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.08] tracking-tight text-[#F4F0E8]">
                      {currentConcept.title}
                    </h3>

                    {/* Gold Divider */}
                    <div className="w-14 h-[2px] bg-[#B49A62] mt-4 mb-5" />

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm lg:text-[14.5px] font-light leading-relaxed text-[#C5C0B8]">
                      {currentConcept.description}
                    </p>

                    {/* "Made for" Bespoke Lifestyle Box */}
                    <div className="mt-6 p-5 rounded-r-[4px] bg-[#131211]/80 border-l-2 border-[#B49A62] space-y-1.5 shadow-sm">
                      <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B49A62] font-bold block">
                        {currentConcept.madeForLabel || "MADE FOR"}
                      </span>
                      <p className="font-editorial italic text-base sm:text-lg lg:text-[1.25rem] font-light leading-relaxed text-[#F4F0E8]">
                        "{currentConcept.madeForDescription}"
                      </p>
                    </div>

                    {/* Key Architectural Specs Micro-Grid */}
                    {currentConcept.specs && (
                      <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3">
                        {currentConcept.specs.map((spec, i) => (
                          <div key={i} className="space-y-0.5">
                            <span className="font-sans text-[9px] uppercase tracking-wider text-[#C5C0B8]/60 block font-semibold">
                              {spec.label}
                            </span>
                            <span className="font-sans text-[11px] sm:text-xs text-[#F4F0E8] font-medium block truncate">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Line Signature */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#C5C0B8]/70 font-sans tracking-wider">
                    <span>{currentConcept.footerTagline || "Made for one."}</span>
                    <span className="font-mono text-white/90">{currentConcept.slideNumber}</span>
                    <span>{currentConcept.footerSignature || "@eshvaradesignarchitects"}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. INTERACTIVE CONCEPT SWITCHER TABS (One-Click Direct Jump)
            ======================================================== */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {architecturalConcepts.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`text-left p-4 sm:p-5 rounded-[4px] transition-all duration-300 border relative ${
                    isActive
                      ? 'border-[#B49A62] bg-[#1E1C1A] shadow-lg'
                      : 'border-white/10 hover:border-white/20 bg-[#161514] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-xs tracking-widest font-semibold ${
                      isActive ? 'text-[#B49A62]' : 'text-[#C5C0B8]'
                    }`}>
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B49A62]" />
                    )}
                  </div>
                  <h4 className="font-editorial text-base sm:text-lg text-[#F4F0E8] font-normal truncate">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-[#C5C0B8]/60 truncate mt-0.5">
                    {item.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
