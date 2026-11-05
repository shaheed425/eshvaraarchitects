import React from 'react';
import { motion } from 'framer-motion';

export default function ConceptSlide({ concept }) {
  if (!concept) return null;

  return (
    <div className="w-full max-w-[820px] mx-auto bg-[#1F1E1C] rounded-[4px] overflow-hidden shadow-2xl border border-white/10 flex flex-col select-none">
      {/* ========================================================
          1. TOP ARCHITECTURAL PHOTOGRAPH AREA (~48-52% Height)
          ======================================================== */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.6] bg-[#141312] overflow-hidden">
        <motion.img
          key={`img-${concept.id}`}
          initial={{ scale: 1.04, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          src={concept.image}
          alt={`${concept.title} — Eshvara Design Architects Concept`}
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03]"
          loading="eager"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = concept.fullCardImage || '/concepts/the-cantilever.webp';
          }}
        />

        {/* Minimal Black 'Concept' Badge matching reference */}
        <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
          <div className="px-3.5 py-1.5 rounded-[4px] bg-[#141312]/85 backdrop-blur-md border border-white/15 text-white font-sans text-xs tracking-wider font-medium shadow-md">
            {concept.conceptBadge || "Concept"}
          </div>
        </div>

        {/* Subtle Ambient Vignette at Bottom of Image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1F1E1C] via-[#1F1E1C]/40 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
          2. BOTTOM EDITORIAL INFORMATION AREA (Charcoal #1F1E1C)
          ======================================================== */}
      <div className="w-full bg-[#1F1E1C] px-7 sm:px-12 lg:px-14 pt-8 sm:pt-10 pb-7 sm:pb-9 text-[#F4F0E8] flex flex-col justify-between">
        <div>
          {/* Large Elegant Serif Title (Cormorant Garamond / Playfair) */}
          <motion.h3
            key={`title-${concept.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl lg:text-[2.85rem] font-normal leading-[1.1] tracking-tight text-[#F4F0E8]"
          >
            {concept.title}
          </motion.h3>

          {/* Short Antique-Gold Horizontal Divider */}
          <motion.div
            key={`divider-${concept.id}`}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-14 sm:w-16 h-[2px] bg-[#B49A62] mt-3.5 sm:mt-4 mb-4 sm:mb-5"
          />

          {/* Concept Description (Manrope, Clean Sans-Serif) */}
          <motion.p
            key={`desc-${concept.id}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed text-[#C5C0B8] max-w-xl"
          >
            {concept.description}
          </motion.p>

          {/* "Made for" Label + Italic Serif Lifestyle Statement */}
          <motion.div
            key={`madefor-${concept.id}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-8 space-y-1.5"
          >
            <span className="font-sans text-[11px] sm:text-xs text-[#B49A62] uppercase tracking-[0.2em] font-semibold block">
              {concept.madeForLabel || "Made for"}
            </span>

            <p className="font-editorial italic text-base sm:text-lg lg:text-[1.35rem] font-light leading-relaxed text-[#F4F0E8] max-w-xl">
              "{concept.madeForDescription}"
            </p>
          </motion.div>
        </div>

        {/* Thin Horizontal Separator */}
        <div className="w-full h-[1px] bg-white/10 mt-8 sm:mt-10 mb-4 sm:mb-5" />

        {/* Bottom Information Row: "Made for one." | Slide # | Signature */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans text-[#C5C0B8]/75 tracking-wider">
          <span>{concept.footerTagline || "Made for one."}</span>
          <span className="font-mono text-[#F4F0E8]/90 font-medium">
            {concept.slideNumber}
          </span>
          <span>{concept.footerSignature || "@eshvaradesignarchitects"}</span>
        </div>
      </div>
    </div>
  );
}
