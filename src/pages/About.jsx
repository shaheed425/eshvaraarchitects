import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Hammer, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { brandInfo } from '../data/brand';
import FinalCTA from '../components/home/FinalCTA';
import CircularBadge from '../components/common/CircularBadge';

export default function About() {
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
                  Studio Story & Philosophy
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#201E1C] font-light tracking-tight leading-[1.02]">
                About Eshvara
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                An architecture, design and construction practice based in Kulanada, Pathanamthitta, Kerala. Built on design, backed by over 48 years of construction experience.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Split */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-[#201E1C]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold block">
                The Eshvara Ethos
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl text-[#201E1C] font-light leading-[1.08]">
                DESIGN. COORDINATE. BUILD.
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#201E1C]/85 font-light leading-relaxed">
                <p>{brandInfo.studioNarrative.p1}</p>
                <p>{brandInfo.studioNarrative.p2}</p>
                <p>{brandInfo.studioNarrative.p3}</p>
              </div>

              {/* Highlight */}
              <div className="p-6 bg-[#D9D0C1]/40 border-l-2 border-[#B49A62] space-y-2">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#B49A62] font-bold block">
                  Studio Reality
                </span>
                <p className="font-editorial text-2xl text-[#201E1C] font-light">
                  "{brandInfo.studioNarrative.studioHighlight}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#201E1C] shadow-2xl group">
                <img
                  src="/eshvara-studio-atelier.webp"
                  alt="Eshvara Design Architects Studio Atelier in Kulanada, Kerala"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/studio-atelier-interior.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C]/85 via-[#201E1C]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F1EEE8]">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B49A62] font-semibold block mb-1">
                    Studio Location • Atelier
                  </span>
                  <p className="font-editorial text-2xl font-light">
                    Kulanada, Pathanamthitta, Kerala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="bg-[#201E1C] text-[#F1EEE8] py-20 border-b border-[#F1EEE8]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {brandInfo.stats.map((s, idx) => (
              <div key={idx} className="space-y-2 p-6 bg-[#201E1C] border border-[#F1EEE8]/10">
                <span className="font-editorial text-5xl sm:text-6xl text-[#B49A62] font-light block">
                  {s.value}
                </span>
                <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#F1EEE8]">
                  {s.label}
                </h4>
                <p className="font-sans text-xs text-[#F1EEE8]/60 font-light leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
    </PageTransition>
  );
}
