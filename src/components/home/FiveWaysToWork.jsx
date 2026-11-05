import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { processData } from '../../data/process';

export default function FiveWaysToWork() {
  return (
    <section className="relative bg-[#201E1C] text-[#F1EEE8] py-24 sm:py-36 border-b border-[#F1EEE8]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
              Engagement Models
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#F1EEE8] font-light">
              Five Ways to Work With Us
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#F1EEE8]/70 max-w-md font-light leading-relaxed">
            Tailored collaborative pathways calibrated for individual homeowners, property developers, and multi-generational estates.
          </p>
        </div>

        {/* Stacking Overlapping Cards on Scroll */}
        <div className="relative space-y-10 sm:space-y-14 pb-24 sm:pb-36">
          {processData.fiveWaysToWork.map((way, idx) => (
            <div
              key={way.number}
              style={{
                top: `calc(env(safe-area-inset-top, 0px) + 78px + ${idx * 22}px)`,
                zIndex: 10 + idx,
              }}
              className="sticky bg-[#1E1C1A] border border-[#F1EEE8]/15 hover:border-[#B49A62]/60 p-6 sm:p-8 lg:p-10 rounded-[8px] shadow-[0_-18px_50px_rgba(0,0,0,0.85)] group transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left: Image with Index Badge */}
                <div className="md:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-[4px] overflow-hidden bg-[#161514] border border-white/10 group-hover:border-[#B49A62]/40 transition-colors">
                  <img
                    src={way.image}
                    alt={way.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.98]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/hero-twilight-nordic-villa.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-[3px] bg-[#161514]/90 backdrop-blur-sm text-[11px] font-sans text-[#B49A62] font-bold tracking-widest uppercase border border-white/10">
                    0{way.number}
                  </div>
                </div>

                {/* Right: Narrative & CTA */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#F1EEE8]/10 pb-3 mb-3">
                      <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-bold">
                        Offering 0{way.number}
                      </span>
                      <span className="font-sans text-xs text-[#F1EEE8]/50 uppercase tracking-wider">
                        Pathway 0{way.number} / 05
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F1EEE8] group-hover:text-[#B49A62] transition-colors mb-2.5">
                      {way.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm lg:text-base text-[#F1EEE8]/75 font-light leading-relaxed">
                      {way.fullDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1EEE8]/10 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#B49A62] font-sans font-semibold group-hover:text-white transition-colors"
                    >
                      <span>{way.cta}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <span className="text-[11px] font-sans text-[#F1EEE8]/40 uppercase tracking-widest hidden sm:inline">
                      Eshvara Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

