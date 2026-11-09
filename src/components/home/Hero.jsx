import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Home } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative w-full bg-[#07111c] text-white overflow-hidden select-none lg:min-h-screen lg:flex lg:items-center"
      aria-label="Eshvara Design Architects Hero"
    >
      {/* =========================================================================
          1. DESKTOP CINEMATIC LUXURY ARCHITECTURAL VILLA BACKDROP (Desktop Only)
          Preserves exact desktop design, composition, and right-anchored villa
          ========================================================================= */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <motion.img
          src="/hero-modern-luxury-villa.webp"
          alt="Eshvara Modern Luxury Architectural Villa at Twilight"
          initial={{ scale: 1.02, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-right select-none pointer-events-none will-change-transform"
          style={{ imageRendering: 'high-quality', WebkitBackfaceVisibility: 'hidden' }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Desktop Top Navbar Blend */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#07111c]/90 via-[#07111c]/30 to-transparent z-10 pointer-events-none" />

        {/* Desktop Left Editorial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111c] via-[#07111c]/70 via-42% to-transparent z-10 pointer-events-none" />

        {/* Desktop Bottom Ground Blend Transition */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07111c] to-transparent z-10 pointer-events-none" />
      </div>

      {/* =========================================================================
          2. MAIN CONTENT AREA (Strict Single Left-Alignment Grid with 24px Padding)
          - Spacing System (Mobile):
            * Navbar bottom to eyebrow: exactly 20px gap (pt-[calc(env(safe-area-inset-top,0px)+91px)])
            * Eyebrow to heading: 20px (mb-5)
            * Heading to description: 20px (mb-5)
            * Description to CTA: 24px (mb-6)
            * CTA to service highlights: 28px (mb-7)
            * Service highlights to image: 32px (pb-8)
          - Desktop: Preserves original left container positioning with lg:space-y-6
          ========================================================================= */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-14 pt-[calc(env(safe-area-inset-top,0px)+91px)] sm:pt-[calc(env(safe-area-inset-top,0px)+104px)] lg:pt-0 pb-8 sm:pb-9 lg:pb-0 z-20">
        <div className="w-full max-w-lg lg:max-w-xl text-left">
          
          {/* Eyebrow: Gold Dash + Disciplines (20px mb to heading) */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 sm:gap-2.5 text-[#D4A373] mb-5 lg:mb-6"
          >
            <span className="w-6 sm:w-8 h-[2px] bg-[#D4A373] inline-block shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
            <span className="font-sans text-[10.5px] xs:text-[11px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-[#D4A373]">
              ARCHITECTURE / INTERIORS / CONSTRUCTION
            </span>
          </motion.div>

          {/* Main Heading: Editorial Serif with Warm Gold Italic Accent (20px mb to description) */}
          <h1 className="font-editorial text-[clamp(2.15rem,7.5vw,3.25rem)] sm:text-5xl md:text-[3.5rem] lg:text-[3.85rem] xl:text-[4.35rem] font-normal leading-[1.12] sm:leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] mb-5 lg:mb-6">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              We Design Spaces
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block mt-0.5 sm:mt-1.5"
            >
              That <span className="italic font-light text-[#D4A373]">Inspire Living</span>
            </motion.span>
          </h1>

          {/* Subtitle Description (24px mb to CTA) */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[14px] xs:text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#F1EEE8]/85 leading-relaxed max-w-[430px] font-normal mb-6 lg:mb-6"
          >
            Architecture, interiors and construction solutions that bring together aesthetics, functionality and modern living.
          </motion.p>

          {/* Primary CTA Button (28px mb to Service Highlights) */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 lg:mb-6"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[8px] sm:rounded-[10px] bg-[#D4A373] text-[#14161C] font-sans font-bold text-xs sm:text-[13px] tracking-wider shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:bg-[#DE9E48] active:scale-95 transition-all group shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Two Minimal Service Highlights in Single Row with Outline Icons & Divider */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 sm:gap-6 lg:gap-8 text-xs font-sans text-neutral-200"
          >
            {/* Highlight 1: Architecture & Planning */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A373] shrink-0 drop-shadow-sm" strokeWidth={1.6} />
              <div className="leading-tight text-[11px] xs:text-[11.5px] sm:text-xs text-left">
                <span className="block font-medium text-white whitespace-nowrap">Architecture</span>
                <span className="block font-light text-neutral-300 whitespace-nowrap">&amp; Planning</span>
              </div>
            </div>

            {/* Subtle Vertical Divider */}
            <div className="h-5 w-[1px] bg-white/20 shrink-0" />

            {/* Highlight 2: Interior Design */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A373] shrink-0 drop-shadow-sm" strokeWidth={1.6} />
              <div className="leading-tight text-[11px] xs:text-[11.5px] sm:text-xs text-left">
                <span className="block font-medium text-white whitespace-nowrap">Interior</span>
                <span className="block font-light text-neutral-300 whitespace-nowrap">Design</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          3. DEDICATED MOBILE ARCHITECTURAL VILLA IMAGE (Mobile Only)
          - 32px below service highlights
          - Smooth dark gradient transition into #07111c content section
          - Villa and supercar clearly visible without text obstruction
          ========================================================================= */}
      <div className="lg:hidden relative w-full aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
        <motion.img
          src="/hero-modern-luxury-villa.webp"
          alt="Eshvara Modern Luxury Architectural Villa at Twilight"
          initial={{ scale: 1.04, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-[32%_center] select-none pointer-events-none"
          style={{ imageRendering: 'high-quality' }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Smooth Top Gradient Transition (Feathers invisibly into #07111c content area) */}
        <div className="absolute inset-x-0 top-0 h-14 xs:h-18 sm:h-24 bg-gradient-to-b from-[#07111c] via-[#07111c]/60 to-transparent pointer-events-none z-10" />

        {/* Smooth Bottom Ground Fade */}
        <div className="absolute inset-x-0 bottom-0 h-10 xs:h-14 sm:h-18 bg-gradient-to-t from-[#07111c] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
