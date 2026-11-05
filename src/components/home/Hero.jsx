import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight, Layers, ShieldCheck, X } from 'lucide-react';


export default function Hero() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section
      className="relative w-full min-h-[100svh] min-h-[100dvh] hero-pro-height lg:min-h-screen bg-[#111318] text-white flex flex-col justify-between lg:justify-center overflow-x-hidden select-none"
      aria-label="Architectural Villa Hero"
    >
      {/* =========================================================================
          1. CINEMATIC NORDIC VILLA BACKDROP (Mobile 9:16 & Desktop 16:9)
          ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source media="(max-width: 1023px)" srcSet="/hero-twilight-mobile.jpg" />
          <motion.img
            src="/hero-twilight-nordic-villa.jpg"
            alt="Modern Architectural Scandinavian Villa at Dusk"
            initial={{ scale: 1.04, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-[62%_center] sm:object-center lg:object-right select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* -------------------------------------------------------------
            NATURAL ATMOSPHERIC TWILIGHT VIGNETTES (Matches Reference Mockup)
            Gentle, subtle gradient that preserves the natural dusk sky & clouds,
            seamlessly integrating the navbar without heavy artificial blackening.
            ------------------------------------------------------------- */}
        {/* Soft Top Vignette (Blends into top fixed navbar smoothly) */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-[#111318]/75 via-[#111318]/25 to-transparent z-10 pointer-events-none" />

        {/* Subtle Atmospheric Left Tint (Mobile: gentle 40% tone; Desktop: editorial depth) */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-[#111318]/45 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#111318]/85 via-[#111318]/40 to-transparent z-10 pointer-events-none" />

        {/* Bottom Ground Blend (Seamless transition to next section) */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#111318] to-transparent z-10 pointer-events-none" />

        {/* Ambient Warm Golden Interior Glow Breathing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.12, 0.24, 0.12] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute right-0 top-1/3 w-[55%] h-[55%] bg-[#D4A373]/15 blur-[120px] rounded-full pointer-events-none z-10"
        />
      </div>

      {/* =========================================================================
          2. MAIN HERO EDITORIAL CONTENT (Masked Line Reveals & Staggered Transitions)
          ========================================================================= */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-14 pt-[calc(env(safe-area-inset-top,0px)+clamp(9rem,17.5vh,10.25rem))] lg:pt-36 pb-6 z-20">
        <div className="w-full max-w-[clamp(285px,85vw,350px)] sm:max-w-md lg:max-w-xl space-y-2.5 xs:space-y-3 sm:space-y-4 lg:space-y-5 lg:translate-y-[5px]">
          
          {/* Eyebrow: Animated Gold Line Drawing + Disciplines */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 sm:gap-2.5 text-[#D4A373] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="w-6 sm:w-8 h-[2px] bg-[#D4A373] inline-block shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            />
            <span className="font-sans text-[clamp(9.5px,2.2vw,11px)] uppercase tracking-[clamp(0.18em,0.5vw,0.24em)] font-semibold text-[#D4A373]">
              ARCHITECTURE / INTERIORS / CONSTRUCTION
            </span>
          </motion.div>

          {/* Headline: Editorial Display with Italic Gold Accent */}
          <h1 className="font-editorial text-[clamp(1.78rem,5.1vw+0.1rem,2.2rem)] sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] sm:leading-[1.12] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)]">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              We Will Help To Make
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block mt-0.5"
            >
              Your <span className="italic font-light text-[#D4A373]">Dream Come True</span>
            </motion.span>
          </h1>

          {/* Subtitle Description (Enhanced Contrast & Drop Shadow) */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[clamp(11.5px,2.4vw,13px)] sm:text-[13.5px] lg:text-sm text-[#F1EEE8] leading-[1.5] sm:leading-relaxed max-w-[clamp(280px,82vw,345px)] sm:max-w-md font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          >
            Our website provides the best real estate search for houses, apartments, land, and foreclosure properties. Feeling lost? You can always speak with one of our agents.
          </motion.p>

          {/* Golden CTA Button "Start Searching" (Smooth Scale & Hover Entrance) */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="pt-0.5 sm:pt-1"
          >
            <button
              type="button"
              onClick={() => setIsSearchModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5.5 sm:px-7 py-2.5 sm:py-3.5 rounded-[10px] bg-[#D4A373] text-[#14161C] font-sans font-bold text-[12.5px] sm:text-sm tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:bg-[#E2B17B] active:scale-95 transition-all group cursor-pointer shrink-0"
            >
              <span>Start Searching</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Trust Badges matching screenshot with Divider */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="pt-1 sm:pt-1.5 flex items-center gap-2.5 xs:gap-3 sm:gap-4 text-xs font-sans text-neutral-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A373] shrink-0 drop-shadow-sm" />
              <div className="leading-tight text-[10.5px] sm:text-xs">
                <span className="block font-medium text-white">Curated</span>
                <span className="block font-light text-neutral-300">Architecture</span>
              </div>
            </div>

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              style={{ originY: 0 }}
              className="h-3.5 sm:h-4.5 w-[1px] bg-white/25 shrink-0"
            />

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A373] shrink-0 drop-shadow-sm" />
              <div className="leading-tight text-[10.5px] sm:text-xs">
                <span className="block font-medium text-white">Verified</span>
                <span className="block font-light text-neutral-300">Properties</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          3. MOBILE ONLY: ARCHITECTURAL HIGHLIGHT BOXES (Under the Foreground Stone)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden relative z-20 w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-24 pt-2 mt-auto"
      >
        <div className="grid grid-cols-3 gap-2 xs:gap-2.5 sm:gap-3 w-full">
          {/* Box 1: Years Legacy */}
          <Link
            to="/about"
            className="group bg-[#14161C]/85 backdrop-blur-md border border-white/12 hover:border-[#D4A373]/50 border-t-2 border-t-[#D4A373] rounded-[8px] p-2 xs:p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex flex-col justify-between active:scale-95 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-editorial text-base xs:text-lg text-[#D4A373] font-normal leading-none">
                48+
              </span>
              <ArrowUpRight className="w-3 h-3 text-[#D4A373]/60 group-hover:text-[#D4A373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="mt-1">
              <span className="block font-sans text-[10px] xs:text-[11px] font-bold text-white leading-tight">
                Years Legacy
              </span>
              <span className="block font-sans text-[7.5px] xs:text-[8px] uppercase tracking-wider text-neutral-400 mt-0.5">
                Contracting
              </span>
            </div>
          </Link>

          {/* Box 2: Completed Projects */}
          <Link
            to="/projects"
            className="group bg-[#14161C]/85 backdrop-blur-md border border-white/12 hover:border-[#D4A373]/50 border-t-2 border-t-[#D4A373] rounded-[8px] p-2 xs:p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex flex-col justify-between active:scale-95 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-editorial text-base xs:text-lg text-[#D4A373] font-normal leading-none">
                500+
              </span>
              <ArrowUpRight className="w-3 h-3 text-[#D4A373]/60 group-hover:text-[#D4A373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="mt-1">
              <span className="block font-sans text-[10px] xs:text-[11px] font-bold text-white leading-tight">
                Completed
              </span>
              <span className="block font-sans text-[7.5px] xs:text-[8px] uppercase tracking-wider text-neutral-400 mt-0.5">
                Projects
              </span>
            </div>
          </Link>

          {/* Box 3: In-House Execution */}
          <Link
            to="/process"
            className="group bg-[#14161C]/85 backdrop-blur-md border border-white/12 hover:border-[#D4A373]/50 border-t-2 border-t-[#D4A373] rounded-[8px] p-2 xs:p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex flex-col justify-between active:scale-95 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-editorial text-base xs:text-lg text-[#D4A373] font-normal leading-none">
                100%
              </span>
              <ArrowUpRight className="w-3 h-3 text-[#D4A373]/60 group-hover:text-[#D4A373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="mt-1">
              <span className="block font-sans text-[10px] xs:text-[11px] font-bold text-white leading-tight">
                In-House
              </span>
              <span className="block font-sans text-[7.5px] xs:text-[8px] uppercase tracking-wider text-neutral-400 mt-0.5">
                Execution
              </span>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* =========================================================================
          4. INTERACTIVE SEARCH / PROPERTY EXPLORER MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsSearchModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 25 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1C1F27] border border-white/10 rounded-[10px] p-6 sm:p-8 max-w-xl w-full text-white shadow-2xl relative space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsSearchModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-[4px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D4A373]">
                  EXPLORE ARCHITECTURAL PROPERTIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-editorial">
                  Find Your Ideal Space
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Search through bespoke luxury villas, Scandinavian retreats, and architectural sanctuaries.
                </p>
              </div>

              {/* Search Bar Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Enter location, villa name, or architectural style..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#14161C] border border-white/15 rounded-[6px] py-3.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4A373] transition-colors"
                  autoFocus
                />
              </div>

              {/* Quick Filter Tags */}
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Popular Categories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Nordic Timber Villas', 'Modern A-Frame', 'Minimalist Courtyard', 'Kerala Tropical'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="px-3.5 py-1.5 rounded-[4px] bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 hover:bg-[#D4A373]/20 hover:border-[#D4A373] hover:text-[#D4A373] transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/projects"
                  onClick={() => setIsSearchModalOpen(false)}
                  className="flex-1 py-3.5 rounded-[6px] bg-[#D4A373] text-[#14161C] font-bold text-center text-sm hover:bg-[#E2B17B] transition-all shadow-md"
                >
                  View All Properties
                </Link>
                <button
                  type="button"
                  onClick={() => setIsSearchModalOpen(false)}
                  className="px-6 py-3.5 rounded-[6px] bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
