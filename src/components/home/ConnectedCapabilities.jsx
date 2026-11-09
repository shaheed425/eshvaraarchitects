import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Wrench, Truck, ArrowRight } from 'lucide-react';
import { capabilities } from '../../data/capabilities';

export default function ConnectedCapabilities() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const currentGroup = capabilities.groups[activeGroupIndex];
  const [activeItem, setActiveItem] = useState(currentGroup.items[0]);

  const handleGroupChange = (idx) => {
    setActiveGroupIndex(idx);
    setActiveItem(capabilities.groups[idx].items[0]);
  };

  return (
    <section className="relative bg-[#F1EEE8] text-[#201E1C] py-24 sm:py-36 overflow-hidden border-b border-[#201E1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#201E1C]/10 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                Turnkey Resources
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#201E1C] font-light leading-[1.08]">
              {capabilities.headline}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
              {capabilities.subheadline}
            </p>
          </div>
        </div>

        {/* Group Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {capabilities.groups.map((group, idx) => {
            const isActive = activeGroupIndex === idx;
            return (
              <button
                key={group.id}
                onClick={() => handleGroupChange(idx)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-[4px] font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#201E1C] text-[#F1EEE8] shadow-md'
                    : 'bg-[#D9D0C1]/50 text-[#77766F] hover:bg-[#D9D0C1] hover:text-[#201E1C]'
                }`}
              >
                {idx === 0 ? <Wrench className="w-3.5 h-3.5 text-[#B49A62]" /> : <Truck className="w-3.5 h-3.5 text-[#B49A62]" />}
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Numbered Items List */}
          <div className="lg:col-span-7 divide-y divide-[#201E1C]/10">
            {currentGroup.items.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)}
                  className={`group py-6 transition-all duration-300 cursor-pointer ${
                    isActive ? 'pl-2 sm:pl-4 bg-[#D9D0C1]/20' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-baseline justify-between pr-4">
                    <div className="flex items-baseline gap-5 sm:gap-7">
                      <span className={`font-sans text-sm font-bold tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-[#B49A62]' : 'text-[#77766F]/60'
                      }`}>
                        {item.number}
                      </span>
                      <h3 className={`font-editorial text-2xl sm:text-3xl transition-colors duration-300 ${
                        isActive ? 'text-[#201E1C] font-normal translate-x-1' : 'text-[#201E1C]/80 group-hover:text-[#201E1C]'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#201E1C] text-[#B49A62]' : 'border border-[#201E1C]/10 text-[#77766F]'
                    }`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className={`font-sans text-xs sm:text-sm text-[#77766F] font-light mt-2 max-w-xl pl-10 sm:pl-12 leading-relaxed transition-opacity duration-300 ${
                    isActive ? 'opacity-100 text-[#201E1C]' : 'opacity-70'
                  }`}>
                    {item.desc}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pl-10 sm:pl-12 pt-2 border-t border-[#B49A62]/20 space-y-3"
                    >
                      {/* Mobile Inline Image Preview */}
                      <div className="lg:hidden relative aspect-[16/10] w-full rounded-[4px] overflow-hidden shadow-md mt-2 border border-[#201E1C]/10">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-sans font-medium tracking-wide">
                          {item.title} • In-House Facility
                        </div>
                      </div>

                      <div>
                        <span className="font-sans text-[11px] text-[#B49A62] font-semibold uppercase tracking-wider block">
                          Execution Standard:
                        </span>
                        <p className="font-sans text-xs text-[#77766F] font-light">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Real-time Image Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#201E1C] shadow-2xl border border-[#201E1C]/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/capabilities/welding-fabrication.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C]/90 via-[#201E1C]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#F1EEE8]">
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B49A62] font-semibold block mb-1">
                      Resource {activeItem.number} • {currentGroup.name}
                    </span>
                    <h4 className="font-editorial text-2xl font-light">{activeItem.title}</h4>
                    <p className="font-sans text-xs text-[#F1EEE8]/70 mt-1 font-light leading-relaxed">
                      {activeItem.details}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Link to Full Services */}
        <div className="mt-14 pt-8 border-t border-[#201E1C]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#77766F] font-light">
            In-house resources eliminate contractor markups, rental bottlenecks, and communication delays.
          </p>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#201E1C] hover:text-[#B49A62] transition-colors"
          >
            <span>Explore All Services & Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

