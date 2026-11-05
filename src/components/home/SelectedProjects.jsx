import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Eye, Maximize2 } from 'lucide-react';
import { projects } from '../../data/projects';
import Lightbox from '../common/Lightbox';

export default function SelectedProjects() {
  const [renovationView, setRenovationView] = useState('after'); // 'before', 'after', or 'combined'
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const renoProject = projects.find((p) => p.hasBeforeAfter) || projects[4];
  const renoIndex = projects.findIndex((p) => p.hasBeforeAfter);

  // Lightbox items for featured projects
  const lightboxItems = projects.map((p, idx) => {
    if (idx === renoIndex && p.beforeAfter) {
      if (renovationView === 'before') {
        return {
          image: p.beforeAfter.existing.image,
          title: p.beforeAfter.existing.title,
          category: p.category,
          location: p.location,
          description: p.beforeAfter.existing.desc
        };
      }
      if (renovationView === 'combined') {
        return {
          image: p.beforeAfter.combined?.image || '/renovation-before-after-combined.webp',
          title: p.beforeAfter.combined?.title || 'Before & After Transformation',
          category: p.category,
          location: p.location,
          description: p.beforeAfter.combined?.desc || ''
        };
      }
      return {
        image: p.beforeAfter.proposed.image,
        title: p.beforeAfter.proposed.title,
        category: p.category,
        location: p.location,
        description: p.beforeAfter.proposed.desc
      };
    }
    return {
      image: p.heroImage || '/hero-contemporary-residence.webp',
      title: p.title,
      category: p.category,
      location: p.location,
      description: p.summary || p.description || ''
    };
  });

  const getRenovationData = () => {
    const ba = renoProject?.beforeAfter;
    if (!ba) return { image: '/renovation-after.webp', title: '', desc: '', notes: '', badge: '' };
    if (renovationView === 'before') {
      return {
        image: ba.existing.image,
        title: ba.existing.title,
        desc: ba.existing.desc,
        notes: ba.existing.notes,
        badge: 'BEFORE (EXISTING HOUSE)'
      };
    }
    if (renovationView === 'combined') {
      return {
        image: ba.combined?.image || '/renovation-before-after-combined.webp',
        title: ba.combined?.title || 'Before & After Transformation',
        desc: ba.combined?.desc || 'Official transformation comparison.',
        notes: ba.combined?.notes || '@eshvaradesignarchitects showcase.',
        badge: 'BEFORE & AFTER COMPARISON'
      };
    }
    return {
      image: ba.proposed.image,
      title: ba.proposed.title,
      desc: ba.proposed.desc,
      notes: ba.proposed.notes,
      badge: 'AFTER (COMPLETED RESIDENCE)'
    };
  };

  const renoData = getRenovationData();

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxItems.length - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev < lightboxItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative bg-[#201E1C] text-[#F1EEE8] py-24 sm:py-36 overflow-hidden border-b border-[#F1EEE8]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#F1EEE8]/10 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold">
                Portfolio Curation
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F1EEE8] font-light tracking-tight">
              Work That Takes Shape.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#F1EEE8]/70 font-light leading-relaxed">
              Curated by discipline — from bespoke contemporary architecture to warm interior suites and structural transformations.
            </p>
            <div className="mt-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#B49A62] hover:text-[#F1EEE8] transition-colors group"
              >
                <span>View Complete Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="space-y-20 lg:space-y-28">
          {/* 1. ARCHITECTURE FEATURE: Residence 01 (Contemporary Architecture) */}
          {projects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div
                onClick={() => handleOpenLightbox(0)}
                className="lg:col-span-8 overflow-hidden bg-[#201E1C] relative aspect-[16/10] cursor-pointer rounded-[4px] border border-white/10 group-hover:border-[#B49A62]/50 transition-colors duration-500"
                title="Click to view full photo"
              >
                <img
                  src={projects[0].heroImage}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/hero-contemporary-residence.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C]/80 via-transparent to-transparent opacity-80" />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#161513]/85 text-[#F4F0E8] border border-white/20 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5 text-[#B49A62]" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 xs:top-4 sm:top-5 inset-x-3 xs:inset-x-4 sm:inset-x-5 flex flex-wrap items-center justify-between gap-2 z-10 pointer-events-none">
                  <div className="px-2.5 xs:px-3 sm:px-3.5 py-0.5 xs:py-1 rounded-full bg-[#201E1C]/85 backdrop-blur-md text-[#B49A62] font-sans text-[9.5px] xs:text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase border border-[#B49A62]/30 shrink-0">
                    Project {projects[0].number} • {projects[0].category}
                  </div>

                  <div className="px-2.5 xs:px-3 sm:px-3.5 py-0.5 xs:py-1 rounded-full bg-[#B49A62] text-[#161513] font-sans text-[9px] xs:text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase shrink-0 shadow-md">
                    {projects[0].status}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-semibold block">
                  {projects[0].category} • {projects[0].siteArea}
                </span>

                <h3 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8] group-hover:text-[#B49A62] transition-colors">
                  {projects[0].title}
                </h3>

                <p className="font-sans text-sm text-[#F1EEE8]/80 font-light leading-relaxed">
                  {projects[0].description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-sans text-[#F1EEE8]/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B49A62]" />
                    {projects[0].location}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(0)}
                    className="inline-flex items-center gap-1 text-[#B49A62] font-semibold hover:text-[#F1EEE8] transition-colors"
                  >
                    <span>View Photo</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. INTERIORS ROW: Residence 01 Living Room & Lounge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {/* Living Room */}
            {projects[1] && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="group space-y-4 transition-all duration-300"
              >
                <div
                  onClick={() => handleOpenLightbox(1)}
                  className="block overflow-hidden bg-[#201E1C] aspect-[4/3] relative cursor-pointer rounded-[4px] border border-white/10 group-hover:border-[#B49A62]/50 transition-colors duration-500"
                  title="Click to view full photo"
                >
                  <img
                    src={projects[1].heroImage}
                    alt={projects[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/residence-living-room.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#161513]/85 text-[#F4F0E8] border border-white/20 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4 text-[#B49A62]" />
                    </div>
                  </div>
                  <div className="absolute top-3 xs:top-4 inset-x-3 xs:inset-x-4 flex flex-wrap items-center justify-between gap-1.5 pointer-events-none z-10">
                    <div className="px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-[#201E1C]/85 text-[#B49A62] font-sans text-[9.5px] xs:text-xs tracking-wider sm:tracking-widest uppercase">
                      Interiors • 2 / 6
                    </div>
                    <div className="px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-[#F1EEE8]/90 text-[#201E1C] font-sans text-[9px] xs:text-[10px] font-bold uppercase tracking-wider">
                      {projects[1].category}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#F1EEE8] group-hover:text-[#B49A62] transition-colors">
                      {projects[1].title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#F1EEE8]/70 mt-2 font-light leading-relaxed">
                    "{projects[1].summary}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F1EEE8]/10 flex items-center justify-between text-xs text-[#F1EEE8]/60 font-sans">
                    <span>{projects[1].location}</span>
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(1)}
                      className="text-[#B49A62] hover:text-[#F1EEE8] flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                    >
                      <span>View Photo</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Lounge */}
            {projects[2] && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="group space-y-4 transition-all duration-300"
              >
                <div
                  onClick={() => handleOpenLightbox(2)}
                  className="block overflow-hidden bg-[#201E1C] aspect-[4/3] relative cursor-pointer rounded-[4px] border border-white/10 group-hover:border-[#B49A62]/50 transition-colors duration-500"
                  title="Click to view full photo"
                >
                  <img
                    src={projects[2].heroImage}
                    alt={projects[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/residence-lounge.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#161513]/85 text-[#F4F0E8] border border-white/20 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4 text-[#B49A62]" />
                    </div>
                  </div>
                  <div className="absolute top-3 xs:top-4 inset-x-3 xs:inset-x-4 flex flex-wrap items-center justify-between gap-1.5 pointer-events-none z-10">
                    <div className="px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-[#201E1C]/85 text-[#B49A62] font-sans text-[9.5px] xs:text-xs tracking-wider sm:tracking-widest uppercase">
                      Interiors • 3 / 6
                    </div>
                    <div className="px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-[#F1EEE8]/90 text-[#201E1C] font-sans text-[9px] xs:text-[10px] font-bold uppercase tracking-wider">
                      {projects[2].category}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#F1EEE8] group-hover:text-[#B49A62] transition-colors">
                      {projects[2].title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#F1EEE8]/70 mt-2 font-light leading-relaxed">
                    "{projects[2].summary}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F1EEE8]/10 flex items-center justify-between text-xs text-[#F1EEE8]/60 font-sans">
                    <span>{projects[2].location}</span>
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(2)}
                      className="text-[#B49A62] hover:text-[#F1EEE8] flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                    >
                      <span>View Photo</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            )}
          </div>

          {/* 3. RENOVATION FEATURE: Selected Renovation with Interactive 3-State Toggle */}
          {renoProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#201E1C] p-8 sm:p-12 border border-[#B49A62]/30 space-y-8 rounded-[4px]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F1EEE8]/10 pb-6">
                <div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8]">
                    Selected Renovation — Before & After
                  </h3>
                </div>

                {/* Interactive 3-State Toggle Button */}
                <div className="inline-flex flex-wrap items-center rounded-[4px] p-1 bg-[#161513] border border-[#B49A62]/40 gap-1">
                  <button
                    type="button"
                    onClick={() => setRenovationView('before')}
                    className={`px-3.5 py-1.5 rounded-[3px] text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      renovationView === 'before'
                        ? 'bg-[#B49A62] text-[#161513] shadow-md'
                        : 'text-[#F1EEE8]/70 hover:text-white'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    type="button"
                    onClick={() => setRenovationView('after')}
                    className={`px-3.5 py-1.5 rounded-[3px] text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      renovationView === 'after'
                        ? 'bg-[#B49A62] text-[#161513] shadow-md'
                        : 'text-[#F1EEE8]/70 hover:text-white'
                    }`}
                  >
                    After
                  </button>
                  <button
                    type="button"
                    onClick={() => setRenovationView('combined')}
                    className={`px-3.5 py-1.5 rounded-[3px] text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      renovationView === 'combined'
                        ? 'bg-[#B49A62] text-[#161513] shadow-md'
                        : 'text-[#F1EEE8]/70 hover:text-white'
                    }`}
                  >
                    Side-by-Side
                  </button>
                </div>
              </div>

              {/* Before/After View */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div
                  onClick={() => handleOpenLightbox(renoIndex >= 0 ? renoIndex : 4)}
                  className={`lg:col-span-8 overflow-hidden bg-[#161513] relative cursor-pointer group rounded-[4px] border border-white/10 ${
                    renovationView === 'combined'
                      ? 'aspect-[4/5] sm:aspect-[16/11]'
                      : 'aspect-[16/10]'
                  }`}
                  title="Click to view full photo"
                >
                  <img
                    src={renoData.image}
                    alt={renoData.title}
                    className={`w-full h-full transition-all duration-500 ${
                      renovationView === 'combined'
                        ? 'object-contain bg-black/80'
                        : 'object-cover'
                    }`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/renovation-after.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#161513]/85 text-[#F4F0E8] border border-white/20 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5 text-[#B49A62]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-[#161513]/85 text-xs text-[#B49A62] font-sans font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                    {renoData.badge}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <h4 className="font-editorial text-2xl text-[#F1EEE8]">
                    {renoData.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#F1EEE8]/80 font-light leading-relaxed">
                    {renoData.desc}
                  </p>
                  <div className="p-3 bg-[#161513] border border-[#F1EEE8]/10 text-xs text-[#B49A62] font-sans">
                    {renoData.notes}
                  </div>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#B49A62] hover:text-white pt-2 transition-colors group"
                  >
                    <span>View in Full Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* In-page Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        items={lightboxItems}
        currentIndex={lightboxIndex !== null ? lightboxIndex : 0}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </section>
  );
}
