import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Compass, ShieldCheck } from 'lucide-react';
import { studioInfo } from '../../data/studio';

export default function AboutPreview() {
  return (
    <section className="relative bg-[#EAE5DA] py-24 sm:py-36 overflow-hidden border-b border-[#292B26]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#777B6A]" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
              Leadership & Origins
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#292B26] font-light leading-[1.1]">
            A young studio with a clear design philosophy.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#77766F] font-light mt-4 leading-relaxed">
            Founded in 2019, AKAM Architects operates at the intersection of climate science, artisanal craft, and contemporary architectural discipline.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {studioInfo.founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-[#F4F0E8] p-8 sm:p-10 border border-[#292B26]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#292B26]/10 pb-5 mb-6">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#292B26]">
                      {founder.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#777B6A] font-semibold mt-0.5">
                      {founder.role}
                    </p>
                  </div>
                  <span className="font-sans text-[11px] text-[#77766F] border border-[#292B26]/10 px-2.5 py-1 rounded-full">
                    {founder.qualification}
                  </span>
                </div>

                <p className="font-sans text-sm text-[#77766F] font-light leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#292B26]/10 flex items-center justify-between text-xs text-[#77766F]">
                <span className="font-sans uppercase tracking-widest text-[10px] text-[#B8A58A]">
                  AKAM Leadership
                </span>
                <span className="font-sans text-[11px]">Since {studioInfo.foundedYear}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multidisciplinary Approach Banner */}
        <div className="bg-[#292B26] text-[#F4F0E8] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B8A58A]">
              Integrated Methodology
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F4F0E8] font-light">
              From concept sketch to turnkey construction.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/70 font-light leading-relaxed">
              We bridge the gap between design aspiration and construction reality by integrating architecture, interior millwork, lighting engineering, and on-site build supervision into one seamless continuum.
            </p>
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B8A58A] text-[#292B26] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F4F0E8] transition-all flex-shrink-0"
          >
            <span>Explore Studio Story</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

