import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Eye, Bookmark, RefreshCw, ArrowUpRight, Compass, Hammer } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { processData } from '../data/process';
import FinalCTA from '../components/home/FinalCTA';

export default function Process() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  return (
    <PageTransition>
      <main className="w-full pt-32 sm:pt-40 bg-[#F1EEE8] text-[#201E1C] min-h-screen">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#201E1C]/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                  Methodology & Care
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#201E1C] font-light tracking-tight leading-[1.02]">
                Our Working Process
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                From first sketch to finished space: combining diagnostic site appraisal, iterative architectural design, and half a century of hands-on structural construction execution.
              </p>
            </div>
          </div>
        </section>

        {/* 4-Stage Process Breakdown */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 space-y-20">
          <div className="max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
              The 4-Stage Continuum
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light">
              End-to-End Architectural Journey
            </h2>
          </div>

          <div className="space-y-16">
            {processData.stages.map((stage, idx) => (
              <div
                key={stage.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#201E1C]/10"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#B49A62]">
                    Stage {stage.number}
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#201E1C]">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-base text-[#201E1C]/85 font-light leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="pt-3 border-t border-[#201E1C]/10 space-y-2">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#B49A62] font-semibold block mb-2">
                      Stage Milestone Checks
                    </span>
                    <div className="space-y-1.5 text-xs font-sans text-[#201E1C]">
                      {stage.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B49A62] mt-0.5 flex-shrink-0" />
                          <span className="font-light">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#201E1C] shadow-lg">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover filter grayscale-[10%]"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/process/stage-01-concept.webp';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CARE BEFORE DESIGN Full Deep Dive */}
        <section className="bg-[#201E1C] text-[#F1EEE8] py-24 sm:py-36 border-t border-[#F1EEE8]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
                Contextual Ethos
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl text-[#F1EEE8] font-light">
                {processData.careBeforeDesign.headline}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#F1EEE8]/70 font-light mt-4 leading-relaxed">
                {processData.careBeforeDesign.subtitle}
              </p>
            </div>

            <div className="relative space-y-10 sm:space-y-14 pb-24 sm:pb-36">
              {processData.careBeforeDesign.steps.map((step, idx) => (
                <div
                  key={step.tag}
                  style={{
                    top: `calc(env(safe-area-inset-top, 0px) + 78px + ${idx * 24}px)`,
                    zIndex: 10 + idx,
                  }}
                  className="sticky bg-[#24211E] border border-[#F1EEE8]/15 rounded-[8px] p-6 sm:p-9 lg:p-11 shadow-[0_-16px_45px_rgba(0,0,0,0.6)] space-y-5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between border-b border-[#F1EEE8]/10 pb-4">
                    <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B49A62] font-bold">
                      {step.tag} • 0{step.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-sans text-[#B49A62]">
                      Principle 0{step.number}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F1EEE8] font-light">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm lg:text-base text-[#F1EEE8]/75 font-light leading-relaxed max-w-3xl">
                      {step.desc}
                    </p>
                  </div>

                  {step.emphasis && (
                    <div className="pt-4 border-t border-[#F1EEE8]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <span className="font-sans uppercase tracking-wider text-[#B49A62] font-bold text-[11px]">
                        Care Principle:
                      </span>
                      <span className="font-editorial italic text-xs sm:text-sm text-[#F1EEE8]/60">
                        "{step.emphasis}"
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Construction Storytelling Sequence */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
              On-Site Execution Chronicle
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#201E1C] font-light">
              Construction Journey
            </h2>
            <p className="font-sans text-sm text-[#77766F] font-light mt-3 leading-relaxed">
              How a project transitions seamlessly from technical drawings into a permanent physical home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Steps Navigation */}
            <div className="lg:col-span-5 space-y-4">
              {processData.storytellingJourney.map((item, idx) => {
                const isActive = activeStoryIndex === idx;
                return (
                  <div
                    key={item.step}
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`p-5 border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#201E1C] text-[#F1EEE8] border-[#B49A62] shadow-md'
                        : 'bg-[#D9D0C1]/30 border-[#201E1C]/10 text-[#201E1C] hover:bg-[#D9D0C1]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-sans text-xs font-bold ${isActive ? 'text-[#B49A62]' : 'text-[#77766F]'}`}>
                        {item.step} — {item.title}
                      </span>
                      <span className="text-[10px] font-sans uppercase tracking-wider text-[#B49A62]">
                        {item.phase}
                      </span>
                    </div>
                    <p className={`font-sans text-xs font-light leading-relaxed ${isActive ? 'text-[#F1EEE8]/80' : 'text-[#77766F]'}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Visual Preview */}
            <div className="lg:col-span-7 aspect-[16/11] overflow-hidden bg-[#201E1C] relative shadow-2xl">
              <img
                src={processData.storytellingJourney[activeStoryIndex].image}
                alt={processData.storytellingJourney[activeStoryIndex].title}
                className="w-full h-full object-cover transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/hero-dusk-residence-clean.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F1EEE8]">
                <span className="text-xs uppercase tracking-widest text-[#B49A62] font-bold block mb-1">
                  Stage {processData.storytellingJourney[activeStoryIndex].step} • {processData.storytellingJourney[activeStoryIndex].phase}
                </span>
                <p className="font-editorial text-3xl font-light">
                  {processData.storytellingJourney[activeStoryIndex].title}
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
    </PageTransition>
  );
}

