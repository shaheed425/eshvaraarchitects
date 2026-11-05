import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Shield, Lock, Send, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { testimonials, testimonialPrinciples } from '../data/testimonials';
import FinalCTA from '../components/home/FinalCTA';

export default function Testimonials() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    role: '',
    feedback: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <PageTransition>
      <main className="w-full pt-32 sm:pt-40 bg-[#F4F0E8] text-[#292B26] min-h-screen">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#292B26]/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#777B6A]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                  Client Reflections
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#292B26] font-light tracking-tight leading-[1.02]">
                Testimonials & Trust
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                Reflections from homeowners, institutional patrons, and commercial partners who have collaborated with AKAM Architects across Kerala and South India.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Testimonial Quotations Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {testimonials.map((test, index) => (
              <motion.article
                key={test.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="bg-[#EAE5DA]/70 border border-[#292B26]/10 p-8 sm:p-12 flex flex-col justify-between relative group hover:border-[#777B6A] transition-colors"
              >
                <div>
                  <Quote className="w-10 h-10 text-[#B8A58A]/50 mb-6" />
                  <p className="font-editorial text-2xl sm:text-3xl text-[#292B26] font-light leading-snug mb-8">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#292B26]/10 flex items-end justify-between">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[#292B26]">
                      {test.client}
                    </h4>
                    <p className="font-sans text-xs text-[#77766F] mt-0.5">
                      {test.role} • {test.project}
                    </p>
                  </div>
                  <span className="font-sans text-[11px] text-[#B8A58A] uppercase tracking-wider font-medium">
                    {test.location} • {test.year}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Confidentiality & Studio Standards */}
        <section className="bg-[#292B26] text-[#F4F0E8] py-20 border-y border-[#F4F0E8]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B8A58A] block mb-2 font-semibold">
                Client Discretion Policy
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#F4F0E8] font-light">
                Confidentiality & Provenance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialPrinciples.map((principle, idx) => (
                <div key={idx} className="p-8 border border-[#F4F0E8]/10 bg-[#292B26] space-y-3">
                  <div className="flex items-center gap-2 text-[#B8A58A]">
                    <Lock className="w-4 h-4" />
                    <h3 className="font-editorial text-xl text-[#F4F0E8]">{principle.title}</h3>
                  </div>
                  <p className="font-sans text-xs text-[#F4F0E8]/70 font-light leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reflection Feedback Form Placeholder */}
        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-24">
          <div className="bg-[#EAE5DA] p-8 sm:p-12 border border-[#292B26]/10 text-center">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#77766F] block mb-2 font-semibold">
              Project Archival
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#292B26] font-light mb-4">
              Share Your Architectural Experience
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#77766F] max-w-xl mx-auto font-light leading-relaxed mb-8">
              Are you an existing client or patron of AKAM Architects? We welcome your candid reflections on the spatial living experience and construction journey.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#F4F0E8] border border-[#777B6A] max-w-md mx-auto space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#777B6A] mx-auto" />
                <h4 className="font-editorial text-2xl text-[#292B26]">Thank You for Your Feedback</h4>
                <p className="font-sans text-xs text-[#77766F]">
                  Your reflection has been received by the principal studio architects.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#77766F] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand & Family"
                      className="w-full px-4 py-2.5 bg-[#F4F0E8] border border-[#292B26]/15 text-xs font-sans text-[#292B26] focus:outline-none focus:border-[#777B6A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#77766F] mb-1">
                      Project Commission
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      placeholder="e.g. Private Villa, Kochi"
                      className="w-full px-4 py-2.5 bg-[#F4F0E8] border border-[#292B26]/15 text-xs font-sans text-[#292B26] focus:outline-none focus:border-[#777B6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#77766F] mb-1">
                    Your Reflection / Testimonial
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    placeholder="Describe your collaboration with Ar. Karthik Dileepan and Ar. Anakha V S..."
                    className="w-full px-4 py-2.5 bg-[#F4F0E8] border border-[#292B26]/15 text-xs font-sans text-[#292B26] focus:outline-none focus:border-[#777B6A]"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#292B26] text-[#F4F0E8] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#777B6A] transition-colors"
                  >
                    <span>Submit Reflection</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        <FinalCTA />
      </main>
    </PageTransition>
  );
}

