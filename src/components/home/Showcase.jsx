import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative bg-[#292B26] text-[#F4F0E8] py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B8A58A] block mb-2">
              Atmosphere & Materiality
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#F4F0E8] font-light">
              Light, Shadow & Texture
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/60 max-w-md font-light leading-relaxed">
            Architecture comes alive at the threshold where honest raw materials collide with changing tropical daylight and monsoonal shadows.
          </p>
        </div>

        {/* Dynamic Editorial Visual Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Large Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 group relative overflow-hidden bg-[#292B26] aspect-[16/10]"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
              alt="AKAM Architectural Lighting & Veranda"
              className="w-full h-full object-cover img-editorial-zoom filter brightness-90 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B8A58A]">Spatial Experience</span>
              <p className="font-editorial text-2xl sm:text-3xl font-light">Verandas that dissolve the barrier between dwelling and garden.</p>
            </div>
          </motion.div>

          {/* Right Column: Stacked Detail Shots */}
          <div className="md:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden bg-[#292B26] aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85"
                alt="Travertine and Wood Material Junction"
                className="w-full h-full object-cover img-editorial-zoom filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-editorial text-lg text-[#F4F0E8]">Travertine & Smoked Oak</p>
                <span className="font-sans text-[10px] text-[#B8A58A] uppercase tracking-wider">Tactile Detail</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative overflow-hidden bg-[#292B26] aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85"
                alt="Zenithal Skylights & Glulam Timber"
                className="w-full h-full object-cover img-editorial-zoom filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-editorial text-lg text-[#F4F0E8]">Zenithal Daylight Studies</p>
                <span className="font-sans text-[10px] text-[#B8A58A] uppercase tracking-wider">Civic Volume</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA to Gallery */}
        <div className="mt-16 pt-8 border-t border-[#F4F0E8]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#F4F0E8]/60 font-light">
            Curated archive of architectural photography, textures, and construction studies.
          </p>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#B8A58A] hover:text-white transition-colors"
          >
            <span>Explore Curated Gallery</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

