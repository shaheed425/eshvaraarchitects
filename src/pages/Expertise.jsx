import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Compass, Layers, Sparkles } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { services } from '../data/services';
import FinalCTA from '../components/home/FinalCTA';

export default function Expertise() {
  return (
    <PageTransition>
      <main className="w-full pt-32 sm:pt-40 bg-[#F4F0E8] text-[#292B26] min-h-screen">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#292B26]/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#777B6A]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                  Disciplines & Capabilities
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#292B26] font-light tracking-tight leading-[1.02]">
                Our Expertise
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                Ten specialized disciplines operating as one unified creative continuum. From regional masterplanning to custom furniture prototyping and turnkey construction.
              </p>
            </div>
          </div>
        </section>

        {/* 10 Services Detailed Editorial Layout */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24 sm:space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 border-t border-[#292B26]/10"
              >
                {/* Visual Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#292B26] shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover img-editorial-zoom filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/concept-dusk-residence.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/80 via-transparent to-transparent opacity-70" />
                    <div className="absolute top-5 left-5 px-3.5 py-1 rounded-full bg-[#292B26]/80 backdrop-blur-md text-[#F4F0E8] font-sans text-xs font-semibold tracking-widest uppercase">
                      Discipline {service.number}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-[#F4F0E8]">
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B8A58A] block mb-1">
                        Core Value
                      </span>
                      <p className="font-editorial text-2xl font-light">
                        {service.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#777B6A]">
                      {service.number} / 10
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#292B26] font-light leading-[1.1]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-sans text-base text-[#292B26]/90 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#77766F] font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Scope of Deliverables List */}
                  <div className="pt-4 border-t border-[#292B26]/10 space-y-2.5">
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B8A58A] font-semibold block mb-3">
                      Key Deliverables & Scope
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292B26] font-sans">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#777B6A] mt-0.5 flex-shrink-0" />
                          <span className="font-light">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#292B26] hover:text-[#777B6A] transition-colors"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* Closing Final CTA */}
        <FinalCTA />
      </main>
    </PageTransition>
  );
}

