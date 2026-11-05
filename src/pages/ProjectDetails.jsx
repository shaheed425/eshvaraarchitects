import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Check, AlertCircle, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import Lightbox from '../components/common/Lightbox';
import { projects } from '../data/projects';
import FinalCTA from '../components/home/FinalCTA';

export default function ProjectDetails() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex] || projects[0];

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [renovationView, setRenovationView] = useState('proposed');

  const galleryList = project.gallery || [];

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <main className="w-full bg-[#F1EEE8] text-[#201E1C]">
        {/* Full-Screen Project Hero */}
        <section className="relative min-h-[85vh] lg:min-h-screen w-full flex flex-col justify-between bg-[#201E1C] text-[#F1EEE8] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/residence-clean-crop.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C] via-[#201E1C]/35 to-transparent" />
          </div>

          {/* Top Breadcrumb */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-32 flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-[#F1EEE8]/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#B49A62]" />
              <span>Back to Portfolio</span>
            </Link>

            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] bg-[#201E1C]/65 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#B49A62]/30">
              {project.category} • {project.status}
            </span>
          </div>

          {/* Bottom Hero Info */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pb-16">
            <div className="max-w-4xl space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold">
                Project {project.number}
              </span>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#F1EEE8] font-light leading-none">
                {project.title}
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#F1EEE8]/85 font-light leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Project Meta Bar */}
        <section className="border-b border-[#201E1C]/10 bg-[#D9D0C1]/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-sans">
            <div>
              <span className="block text-[#77766F] uppercase tracking-wider text-[10px] mb-1">Category</span>
              <span className="text-[#201E1C] font-semibold text-sm">{project.category}</span>
            </div>
            <div>
              <span className="block text-[#77766F] uppercase tracking-wider text-[10px] mb-1">Location</span>
              <span className="text-[#201E1C] font-semibold text-sm flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B49A62]" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="block text-[#77766F] uppercase tracking-wider text-[10px] mb-1">Scale / Area</span>
              <span className="text-[#201E1C] font-semibold text-sm">{project.siteArea}</span>
            </div>
            <div>
              <span className="block text-[#77766F] uppercase tracking-wider text-[10px] mb-1">Status</span>
              <span className="text-[#B49A62] font-bold text-sm uppercase">{project.status}</span>
            </div>
          </div>
        </section>

        {/* Statutory Disclaimer if Proposed */}
        {project.disclaimer && (
          <section className="bg-[#201E1C] text-[#F1EEE8] border-b border-[#B49A62]/30 py-5">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-3 text-xs font-sans">
              <AlertCircle className="w-4 h-4 text-[#B49A62] flex-shrink-0" />
              <p className="font-light">
                <strong className="text-[#B49A62] font-semibold">Statutory Note: </strong>
                {project.disclaimer}
              </p>
            </div>
          </section>
        )}

        {/* Before & After Interactive Section (for Selected Renovation) */}
        {project.hasBeforeAfter && project.beforeAfter && (
          <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-[#201E1C]/10">
            <div className="bg-[#201E1C] text-[#F1EEE8] p-8 sm:p-12 border border-[#B49A62]/40 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F1EEE8]/10 pb-6">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#B49A62] font-bold block mb-1">
                    Care Before Design Diagnosis
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl">
                    Comparative Study: Existing vs Proposed
                  </h3>
                </div>

                <div className="inline-flex rounded-full p-1 bg-[#201E1C] border border-[#B49A62]/40">
                  <button
                    onClick={() => setRenovationView('existing')}
                    className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all ${
                      renovationView === 'existing'
                        ? 'bg-[#B49A62] text-[#201E1C]'
                        : 'text-[#F1EEE8]/70 hover:text-white'
                    }`}
                  >
                    Existing House
                  </button>
                  <button
                    onClick={() => setRenovationView('proposed')}
                    className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all ${
                      renovationView === 'proposed'
                        ? 'bg-[#B49A62] text-[#201E1C]'
                        : 'text-[#F1EEE8]/70 hover:text-white'
                    }`}
                  >
                    Proposed Architecture
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 overflow-hidden bg-[#201E1C] aspect-[16/10] relative">
                  <img
                    src={
                      renovationView === 'proposed'
                        ? project.beforeAfter.proposed.image
                        : project.beforeAfter.existing.image
                    }
                    alt={renovationView === 'proposed' ? 'Proposed Architecture' : 'Existing House'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = renovationView === 'proposed' ? '/hero-dusk-residence-clean.jpg' : '/renovation-before.jpg';
                    }}
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-[#201E1C]/85 text-xs text-[#B49A62] font-sans font-bold uppercase tracking-wider">
                    {renovationView === 'proposed' ? 'PROPOSED ARCHITECTURE' : 'EXISTING HOUSE'}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <h4 className="font-editorial text-2xl text-[#F1EEE8]">
                    {renovationView === 'proposed'
                      ? project.beforeAfter.proposed.title
                      : project.beforeAfter.existing.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#F1EEE8]/80 font-light leading-relaxed">
                    {renovationView === 'proposed'
                      ? project.beforeAfter.proposed.desc
                      : project.beforeAfter.existing.desc}
                  </p>
                  <div className="p-3 bg-[#201E1C] border border-[#F1EEE8]/10 text-xs text-[#B49A62] font-sans">
                    {renovationView === 'proposed'
                      ? project.beforeAfter.proposed.notes
                      : project.beforeAfter.existing.notes}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Narrative & Details */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold block">
                Design Intent
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light leading-[1.1]">
                Bridging architectural vision with structural certainty.
              </h2>
              <div className="p-6 bg-[#D9D0C1]/40 border-l-2 border-[#B49A62]">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#B49A62] font-bold block mb-1">
                  Eshvara Practice Standard
                </span>
                <p className="font-sans text-xs text-[#201E1C] font-light leading-relaxed">
                  "Combining architectural design with hands-on construction experience, allowing projects to move from concept and planning through documentation, coordination and execution."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
              <div>
                <h3 className="font-editorial text-2xl text-[#201E1C] mb-2 font-normal">
                  Overview
                </h3>
                <p>{project.description}</p>
              </div>

              {project.details && (
                <div className="pt-2">
                  <h3 className="font-editorial text-2xl text-[#201E1C] mb-3 font-normal">
                    Project Scope & Features
                  </h3>
                  <div className="space-y-2.5">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#201E1C]">
                        <Check className="w-4 h-4 text-[#B49A62] mt-0.5 flex-shrink-0" />
                        <span className="font-light">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Materials Palette */}
        {project.materials && project.materials.length > 0 && (
          <section className="bg-[#201E1C] text-[#F1EEE8] py-20 border-y border-[#F1EEE8]/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="mb-12">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
                  Tectonic Honesty
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8] font-light">
                  Material & Execution Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.materials.map((mat, i) => (
                  <div key={i} className="p-6 bg-[#201E1C] border border-[#F1EEE8]/15 space-y-2">
                    <span className="font-sans text-[11px] text-[#B49A62] font-bold">0{i + 1}</span>
                    <h4 className="font-editorial text-xl text-[#F1EEE8] font-normal">{mat.name}</h4>
                    <p className="font-sans text-xs text-[#F1EEE8]/70 font-light leading-relaxed">{mat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {galleryList.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="flex items-baseline justify-between mb-12">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold block mb-2">
                  Visual Documentation
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light">
                  Project Gallery
                </h2>
              </div>
              <span className="font-sans text-xs text-[#77766F]">
                Click image for architectural lightbox
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {galleryList.map((item, idx) => {
                const isWide = idx === 0;
                return (
                  <div
                    key={idx}
                    onClick={() => handleOpenLightbox(idx)}
                    className={`group cursor-pointer overflow-hidden bg-[#201E1C] relative ${
                      isWide ? 'md:col-span-12 aspect-[16/10]' : 'md:col-span-6 aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-full object-cover img-editorial-zoom filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/residence-clean-crop.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-xs sm:text-sm font-sans text-[#F1EEE8] font-light">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Navigation Between Projects */}
        <section className="border-t border-[#201E1C]/10 bg-[#D9D0C1]/30">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 flex items-center justify-between">
            <Link to={`/projects/${prevProject.slug}`} className="group flex items-center gap-4 text-left">
              <div className="p-3 rounded-full border border-[#201E1C]/15 group-hover:bg-[#201E1C] group-hover:text-white transition-all">
                <ArrowLeft className="w-5 h-5 text-[#B49A62]" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-sans text-[10px] uppercase tracking-widest text-[#77766F]">Previous Project</span>
                <span className="font-editorial text-xl sm:text-2xl text-[#201E1C]">{prevProject.title}</span>
              </div>
            </Link>

            <Link to="/projects" className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-[#77766F] hover:text-[#201E1C] transition-colors">
              All Projects
            </Link>

            <Link to={`/projects/${nextProject.slug}`} className="group flex items-center gap-4 text-right">
              <div className="hidden sm:block">
                <span className="block font-sans text-[10px] uppercase tracking-widest text-[#77766F]">Next Project</span>
                <span className="font-editorial text-xl sm:text-2xl text-[#201E1C]">{nextProject.title}</span>
              </div>
              <div className="p-3 rounded-full border border-[#201E1C]/15 group-hover:bg-[#201E1C] group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5 text-[#B49A62]" />
              </div>
            </Link>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={galleryList.map(g => ({ url: g.url, caption: g.caption, title: project.title, location: project.location }))}
          currentIndex={activeImageIndex}
          onPrev={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryList.length - 1))}
          onNext={() => setActiveImageIndex((prev) => (prev < galleryList.length - 1 ? prev + 1 : 0))}
        />

        <FinalCTA />
      </main>
    </PageTransition>
  );
}
