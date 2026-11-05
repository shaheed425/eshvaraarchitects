import React from 'react';
import { motion } from 'framer-motion';
import { Users, HardHat, Compass, CheckCircle2, Shield, Wrench } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { people } from '../data/people';
import FinalCTA from '../components/home/FinalCTA';

export default function Team() {
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
                  Studio & Site Workforce
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#201E1C] font-light tracking-tight leading-[1.02]">
                Our Team & Craftsmen
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                A multidisciplinary collective of architects, civil engineers, project coordinators, and over 50 skilled tradesmen dedicated to flawless architectural execution.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Profiles */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#201E1C]/10">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
              Studio Principals
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light">
              Leadership Built Around Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {people.leaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-[#D9D0C1]/30 border border-[#201E1C]/10 p-8 sm:p-10 space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#201E1C] mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover filter grayscale-[15%]"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = leader.fallbackImage || '/concept-dusk-residence.jpg';
                      }}
                    />
                  </div>

                  <div className="border-b border-[#201E1C]/10 pb-4 mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-editorial text-3xl text-[#201E1C]">
                        {leader.name}
                      </h3>
                      <span className="text-xs font-sans text-[#B49A62] font-semibold bg-[#201E1C] px-3 py-1 rounded">
                        {leader.experience}
                      </span>
                    </div>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#77766F] font-semibold mt-1">
                      {leader.role}
                    </p>
                  </div>

                  <p className="font-sans text-sm text-[#77766F] font-light leading-relaxed mb-4">
                    {leader.bio}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#B49A62] font-bold block mb-1">
                      {leader.leads ? "Leads:" : "Strengths:"}
                    </span>
                    {(leader.leads || leader.strengths).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#201E1C]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B49A62]" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#201E1C]/10 flex items-center justify-between text-xs text-[#77766F] font-sans">
                  <span>Eshvara Leadership</span>
                  <span>Kulanada, Kerala</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Office & Construction Teams Structure */}
        <section className="bg-[#201E1C] text-[#F1EEE8] py-24 sm:py-32 border-b border-[#F1EEE8]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
            {/* Office Team */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <Compass className="w-6 h-6 text-[#B49A62]" />
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8]">
                  Studio & Technical Office Team
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {people.workforce.officeTeam.map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#201E1C] border border-[#F1EEE8]/15 space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#B49A62] font-bold">
                      Unit 0{idx + 1}
                    </span>
                    <h4 className="font-editorial text-xl text-[#F1EEE8] font-normal">
                      {item.role}
                    </h4>
                    <p className="font-sans text-xs text-[#F1EEE8]/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Construction & Site Team */}
            <div className="space-y-10 pt-8 border-t border-[#F1EEE8]/15">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="flex items-center gap-3">
                  <HardHat className="w-6 h-6 text-[#B49A62]" />
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8]">
                    On-Site Engineering & Trade Personnel
                  </h3>
                </div>
                <span className="font-sans text-xs text-[#B49A62] uppercase tracking-widest font-bold">
                  50+ Dedicated Tradesmen & Supervisors
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {people.workforce.constructionTeam.map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#201E1C] border border-[#F1EEE8]/15 space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#B49A62] font-bold">
                      Site Division 0{idx + 1}
                    </span>
                    <h4 className="font-editorial text-xl text-[#F1EEE8] font-normal">
                      {item.role}
                    </h4>
                    <p className="font-sans text-xs text-[#F1EEE8]/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Construction Workflow */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold block mb-2">
              Execution Sequence
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#201E1C] font-light">
              Site Workflow Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {people.workforce.workflowStages.map((wf) => (
              <div key={wf.stage} className="p-5 bg-[#D9D0C1]/40 border border-[#201E1C]/10 space-y-2">
                <span className="font-sans text-xs text-[#B49A62] font-bold">{wf.stage}</span>
                <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-[#201E1C]">
                  {wf.name}
                </h4>
                <p className="font-sans text-[11px] text-[#77766F] font-light leading-snug">
                  {wf.desc}
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

