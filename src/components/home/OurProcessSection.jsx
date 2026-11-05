import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Eye, Bookmark, RefreshCw, ArrowRight } from 'lucide-react';
import { processData } from '../../data/process';

export default function OurProcessSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative bg-[#F1EEE8] text-[#201E1C] py-24 sm:py-36 border-b border-[#201E1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#201E1C]/10 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                Working Methodology
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#201E1C] font-light leading-[1.08]">
              {processData.headline}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
              {processData.subheadline}
            </p>
          </div>
        </div>

        {/* 4-Stage Interactive Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {processData.stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`p-6 sm:p-7 xl:p-8 min-w-0 overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#201E1C] text-[#F1EEE8] border-[#B49A62] shadow-xl'
                    : 'bg-[#D9D0C1]/40 border-[#201E1C]/10 text-[#201E1C] hover:bg-[#D9D0C1]'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-sans text-xs font-bold tracking-widest ${
                      isActive ? 'text-[#B49A62]' : 'text-[#77766F]'
                    }`}>
                      STAGE {stage.number}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#B49A62]' : 'bg-[#201E1C]/20'}`} />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-2xl lg:text-[1.3rem] xl:text-2xl 2xl:text-3xl mb-3 font-normal tracking-tight break-words hyphens-auto">
                    {stage.title}
                  </h3>

                  <p className={`font-sans text-xs sm:text-sm font-light leading-relaxed ${
                    isActive ? 'text-[#F1EEE8]/80' : 'text-[#77766F]'
                  }`}>
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-current/15 flex items-center justify-between text-xs font-sans">
                  <span className="text-[10px] uppercase tracking-wider font-semibold">
                    {isActive ? "Active Overview" : "Click to Inspect"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Expanded Detail */}
        <div className="bg-[#201E1C] text-[#F1EEE8] p-8 sm:p-12 mb-28 border border-[#B49A62]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-semibold">
                Stage {processData.stages[activeStage].number} Deliverables
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F1EEE8] break-words">
                {processData.stages[activeStage].title} — In Practice
              </h3>
              <p className="font-sans text-sm text-[#F1EEE8]/80 font-light leading-relaxed">
                {processData.stages[activeStage].desc}
              </p>

              <div className="space-y-2.5 pt-4">
                {processData.stages[activeStage].details.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#F1EEE8]/90">
                    <Check className="w-4 h-4 text-[#B49A62] mt-0.5 flex-shrink-0" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] overflow-hidden bg-[#201E1C]">
              <img
                src={processData.stages[activeStage].image}
                alt={processData.stages[activeStage].title}
                className="w-full h-full object-cover filter grayscale-[10%]"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/process/stage-01-concept.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* CARE BEFORE DESIGN Section with Stacking Overlapping Cards on Scroll */}
        <div className="space-y-12">
          <div className="max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-bold block mb-2">
              Diagnostic Architecture
            </span>
            <h3 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light">
              {processData.careBeforeDesign.headline}
            </h3>
            <p className="font-sans text-sm text-[#77766F] font-light mt-2 leading-relaxed">
              {processData.careBeforeDesign.subtitle}
            </p>
          </div>

          {/* Stacking Overlapping Cards Deck */}
          <div className="relative space-y-10 sm:space-y-14 pb-24 sm:pb-36">
            {processData.careBeforeDesign.steps.map((step, idx) => (
              <div
                key={step.tag}
                style={{
                  top: `calc(env(safe-area-inset-top, 0px) + 78px + ${idx * 24}px)`,
                  zIndex: 10 + idx,
                }}
                className="sticky bg-[#FAF8F5] border border-[#201E1C]/15 rounded-[8px] p-6 sm:p-9 lg:p-11 shadow-[0_-16px_45px_rgba(32,30,28,0.18)] space-y-5 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#201E1C]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B49A62]">
                      {step.tag}
                    </span>
                    <span className="h-3 w-[1px] bg-[#201E1C]/20" />
                    <span className="font-sans text-xs text-[#77766F] uppercase tracking-wider font-medium">
                      Step 0{step.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#201E1C]/5 border border-[#201E1C]/10 text-xs font-sans text-[#77766F]">
                    {idx === 0 && <Eye className="w-3.5 h-3.5 text-[#B49A62]" />}
                    {idx === 1 && <Bookmark className="w-3.5 h-3.5 text-[#B49A62]" />}
                    {idx === 2 && <RefreshCw className="w-3.5 h-3.5 text-[#B49A62]" />}
                    <span className="font-semibold text-[#201E1C]">Phase 0{step.number}</span>
                  </div>
                </div>

                {/* Card Main Content */}
                <div className="space-y-2.5">
                  <h4 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#201E1C] font-normal leading-snug">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm lg:text-base text-[#55544E] font-light leading-relaxed max-w-3xl">
                    {step.desc}
                  </p>
                </div>

                {/* Card Footer Principle */}
                {step.emphasis && (
                  <div className="pt-4 border-t border-[#201E1C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="font-sans uppercase tracking-wider text-[#B49A62] font-bold text-[11px]">
                      Care Principle:
                    </span>
                    <span className="font-editorial italic text-xs sm:text-sm text-[#77766F]">
                      "{step.emphasis}"
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

