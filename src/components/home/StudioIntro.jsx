import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Hammer, ShieldCheck, Ruler } from 'lucide-react';
import { brandInfo } from '../../data/brand';

export default function StudioIntro() {
  const pillars = [
    {
      icon: <Ruler className="w-5 h-5 text-[#B49A62]" />,
      title: "Design",
      desc: "Architectural form, passive solar ventilation, material honesty, and spatial clarity."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#B49A62]" />,
      title: "Coordinate",
      desc: "Statutory documentation, structural engineering, MEP coordination, and site sequencing."
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#B49A62]" />,
      title: "Build",
      desc: "Turnkey execution with in-house machinery, specialized workshops, and 50+ personnel."
    }
  ];

  return (
    <section id="studio-intro" className="relative bg-[#F1EEE8] py-24 sm:py-36 overflow-hidden border-b border-[#201E1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[92%] aspect-[4/5] overflow-hidden bg-[#201E1C] shadow-2xl group cursor-pointer"
            >
              <motion.img
                src="/studio-atelier-interior.webp"
                alt="Eshvara Architecture & Interior Atelier in Kerala"
                animate={{ scale: [1, 1.035, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.97]"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/hero-twilight-nordic-villa.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C]/85 via-[#201E1C]/20 to-transparent transition-opacity duration-500 group-hover:opacity-75" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F1EEE8] transform transition-transform duration-500 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B49A62] block mb-1 font-semibold">
                  Studio In Practice • Atelier
                </span>
                <p className="font-editorial text-2xl font-light">
                  "Our own studio was designed and built by the team, starting from an empty room."
                </p>
              </div>
            </motion.div>

            {/* Overlapping Detail Image with Subtle Floating Breathing Motion */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              animate={{ y: [-3, 4, -3] }}
              className="absolute -bottom-6 -right-2 xs:-bottom-8 xs:right-0 sm:right-2 z-20 w-[54%] xs:w-[52%] sm:w-[50%] aspect-[4/3] sm:aspect-square overflow-hidden shadow-2xl border-4 border-[#F1EEE8] bg-[#201E1C] group"
            >
              <img
                src="/studio-sculptural-villa.webp"
                alt="Sculptural Modern Architectural Villa & Construction Execution"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/concept-dusk-residence.webp';
                }}
              />
              <div className="absolute inset-0 bg-[#201E1C]/15 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Subtle background monogram */}
            <div className="absolute -top-12 -left-8 z-0 opacity-10 pointer-events-none select-none">
              <span className="font-editorial text-[140px] text-[#201E1C] font-bold">ESHVARA</span>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                  Studio Introduction
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#201E1C] font-light leading-[1.08]">
                Built on Design. <br />
                <span className="italic text-[#B49A62]">Backed by Experience.</span>
              </h2>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#201E1C]/85 font-light leading-relaxed">
              <p>{brandInfo.studioNarrative.p1}</p>
              <p>{brandInfo.studioNarrative.p2}</p>
              <p>{brandInfo.studioNarrative.p3}</p>
            </div>

            {/* Core Manifesto Callout */}
            <div className="p-6 bg-[#D9D0C1]/40 border-l-2 border-[#B49A62] space-y-2">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-bold">
                The Eshvara Ethos
              </span>
              <p className="font-editorial text-2xl text-[#201E1C] font-normal">
                DESIGN. COORDINATE. BUILD.
              </p>
              <p className="font-sans text-xs text-[#77766F] font-light">
                {brandInfo.studioNarrative.studioHighlight}
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 border-t border-[#201E1C]/10">
              {pillars.map((p, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {p.icon}
                    <h3 className="font-editorial text-xl text-[#201E1C] font-medium">{p.title}</h3>
                  </div>
                  <p className="font-sans text-xs text-[#77766F] leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-[4px] bg-[#201E1C] text-[#F1EEE8] font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#B49A62] hover:text-[#201E1C] transition-all shadow-md active:scale-95"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/process"
                className="font-sans text-xs uppercase tracking-[0.18em] text-[#77766F] hover:text-[#201E1C] transition-colors font-medium underline underline-offset-4"
              >
                Our 4-Stage Process
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
