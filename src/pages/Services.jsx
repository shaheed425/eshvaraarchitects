import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Wrench, Truck, Compass, Hammer } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { mainServices } from '../data/services';
import { capabilities } from '../../src/data/capabilities';
import FinalCTA from '../components/home/FinalCTA';

export default function Services() {
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
                  Integrated Capabilities
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#201E1C] font-light tracking-tight leading-[1.02]">
                Services & Resources
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                Five core architectural disciplines supported by in-house fabrication workshops, manufacturing, and heavy site mobilisation equipment.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Core Disciplines */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-20">
          <div className="mb-8">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
              Practice Disciplines
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light">
              Core Architectural & Construction Offerings
            </h2>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-[#201E1C]/10"
                >
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#201E1C] shadow-lg group">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover img-editorial-zoom filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/services/landscape-architecture.jpg';
                        }}
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#201E1C]/80 text-[#B49A62] text-xs font-sans font-bold tracking-widest uppercase">
                        Discipline {service.number}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#B49A62]">
                      0{index + 1} / 05
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#201E1C] font-light">
                      {service.title}
                    </h3>

                    <p className="font-sans text-base text-[#201E1C]/90 font-light leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#77766F] font-light leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="pt-3 border-t border-[#201E1C]/10 space-y-2">
                      <span className="font-sans text-[11px] uppercase tracking-wider text-[#B49A62] font-semibold block mb-2">
                        Deliverables & Scope
                      </span>
                      <div className="space-y-1.5 text-xs font-sans text-[#201E1C]">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B49A62] mt-0.5 flex-shrink-0" />
                            <span className="font-light">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#201E1C] hover:text-[#B49A62] transition-colors"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed In-House Capabilities Breakdown */}
        <section id="capabilities" className="bg-[#201E1C] text-[#F1EEE8] py-24 sm:py-36 border-t border-[#F1EEE8]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
                Turnkey Equipment & Workshops
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl text-[#F1EEE8] font-light">
                In-House Manufacturing & Site Mobilisation
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#F1EEE8]/70 font-light mt-4 leading-relaxed">
                By controlling manufacturing and heavy equipment directly, Eshvara ensures millimeter-precise quality control and uncompromised timelines across every construction phase.
              </p>
            </div>

            {/* Two Groups */}
            {capabilities.groups.map((group) => (
              <div key={group.id} className="space-y-8 pt-6 border-t border-[#F1EEE8]/15">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#B49A62]">
                    {group.name}
                  </h3>
                  <p className="font-sans text-xs text-[#F1EEE8]/60 font-light max-w-md">
                    {group.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#201E1C] border border-[#F1EEE8]/15 hover:border-[#B49A62] p-6 space-y-4 group transition-all"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-[#201E1C] relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover img-editorial-zoom filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/capabilities/welding-fabrication.jpg';
                          }}
                        />
                        <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#201E1C]/85 text-[10px] text-[#B49A62] font-bold">
                          {item.number}
                        </div>
                      </div>

                      <h4 className="font-editorial text-2xl text-[#F1EEE8] group-hover:text-[#B49A62] transition-colors">
                        {item.title}
                      </h4>

                      <p className="font-sans text-xs text-[#F1EEE8]/70 font-light leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="pt-2 border-t border-[#F1EEE8]/10 text-[11px] text-[#B49A62] font-sans">
                        {item.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
    </PageTransition>
  );
}

