import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, CheckCircle2, Users, HardHat, Compass } from 'lucide-react';
import { people } from '../../data/people';
import { brandInfo } from '../../data/brand';

export default function OurPeoplePreview() {
  return (
    <section className="relative bg-[#201E1C] text-[#F1EEE8] py-24 sm:py-36 overflow-hidden border-b border-[#F1EEE8]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold">
              Leadership & Experience
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#F1EEE8] font-light leading-[1.08]">
            {people.headline}
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#F1EEE8]/70 font-light mt-4 leading-relaxed">
            {people.subheadline}
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-20">
          {people.leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-[#201E1C] border border-[#B49A62]/30 p-8 sm:p-10 flex flex-col justify-between group hover:border-[#B49A62] transition-colors"
            >
              <div>
                <div className="flex items-start justify-between border-b border-[#F1EEE8]/10 pb-6 mb-6">
                  <div>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8]">
                      {leader.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#B49A62] font-semibold mt-1">
                      {leader.role}
                    </p>
                  </div>
                  <span className="font-sans text-[11px] text-[#F1EEE8]/70 border border-[#B49A62]/40 px-3 py-1 rounded-full bg-[#201E1C]">
                    {leader.experience}
                  </span>
                </div>

                <p className="font-sans text-sm text-[#F1EEE8]/80 font-light leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Key Focus / Strengths */}
                <div className="space-y-2 pt-4 border-t border-[#F1EEE8]/10">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#B49A62] font-semibold block mb-2">
                    {leader.leads ? "Key Leadership Domains:" : "Core Construction Strengths:"}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#F1EEE8]/70">
                    {(leader.leads || leader.strengths).map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B49A62]" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#F1EEE8]/10 flex items-center justify-between text-xs text-[#F1EEE8]/50 font-sans">
                <span>Eshvara Leadership</span>
                <span>Kulanada, Kerala</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 50+ Workforce & Visual Construction Workflow */}
        <div className="bg-[#201E1C] border border-[#F1EEE8]/10 p-8 sm:p-12 lg:p-16 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#F1EEE8]/10 pb-8">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-semibold">
                On-Site Execution Strength
              </span>
              <h3 className="font-editorial text-3xl sm:text-5xl text-[#F1EEE8] font-light">
                {people.workforce.headline}
              </h3>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-editorial text-6xl text-[#B49A62] font-light">50+</span>
              <span className="font-sans text-xs uppercase tracking-widest text-[#F1EEE8]/70 max-w-[140px] leading-tight">
                Dedicated Technical & Trade Personnel
              </span>
            </div>
          </div>

          {/* 7-Stage Construction Workflow */}
          <div className="space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#B49A62] font-semibold block">
              Integrated Site Execution Flow
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {people.workforce.workflowStages.map((wf, idx) => (
                <div key={wf.stage} className="p-4 bg-[#201E1C] border border-[#F1EEE8]/10 space-y-1.5">
                  <span className="font-sans text-[10px] text-[#B49A62] font-bold tracking-widest">
                    {wf.stage}
                  </span>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#F1EEE8]">
                    {wf.name}
                  </h4>
                  <p className="font-sans text-[11px] text-[#F1EEE8]/60 font-light leading-snug line-clamp-2">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#F1EEE8]/10">
            <p className="font-sans text-xs text-[#F1EEE8]/60 font-light">
              Civil engineers, technical coordinators, master carpenters, and site supervisors working as one cohesive team.
            </p>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#B49A62] hover:text-white transition-colors"
            >
              <span>Explore Complete Team Roster</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

