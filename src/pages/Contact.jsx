import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, CheckCircle2, Instagram, Navigation } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { brandInfo } from '../data/brand';

const projectTypes = [
  "New Home (Architecture & Build)",
  "Renovation (Care Before Design)",
  "Development (Master Planning & Villas)",
  "The Collection (Developed Concepts)",
  "Interior Architecture & Millwork",
  "Other Consultation"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'New Home (Architecture & Build)',
    projectLocation: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Project Enquiry — ESHVARA DESIGN ARCHITECTS*
• *Name:* ${formData.fullName}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone}
• *Type:* ${formData.projectType}
• *Location:* ${formData.projectLocation}
• *Brief:* ${formData.description}`;

    const url = `https://wa.me/${brandInfo.contacts.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaMailto = () => {
    const subject = `Project Enquiry: ${formData.projectType} — ${formData.fullName}`;
    const body = `Dear Eshvara Design Architects,

I would like to discuss an upcoming architectural project:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Location: ${formData.projectLocation}

Project Brief & Site Description:
${formData.description}

Looking forward to your guidance.`;

    const mailtoUrl = `mailto:${brandInfo.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

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
                  Studio Inquiry
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#201E1C] font-light tracking-tight leading-[1.02]">
                Let's Build Something Together.
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                Have a project in mind? Let's begin with a conversation. Connect directly with our Principal Architect or Managing Director.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Studio Details Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#201E1C] text-[#F1EEE8] p-8 sm:p-12 border border-[#B49A62]/30 shadow-xl">
              <div className="mb-8">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-bold block mb-2">
                  Project Consultation
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8] font-light">
                  Tell Us About Your Project
                </h2>
                <p className="font-sans text-xs text-[#F1EEE8]/70 mt-1 font-light">
                  Complete the project brief below. You can transmit this enquiry directly via WhatsApp or your default email client.
                </p>
              </div>

              {submitted ? (
                <div className="space-y-6 py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B49A62]/20 text-[#B49A62] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl text-[#F1EEE8]">
                    Brief Ready to Transmit
                  </h3>
                  <p className="font-sans text-sm text-[#F1EEE8]/80 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-[#B49A62] font-medium">{formData.fullName}</strong>. To transmit your specifications directly to Ar. Sreejith Chandran and K. Sreeramachandran, choose your preferred communication channel:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] bg-[#B49A62] text-[#201E1C] font-sans text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#F1EEE8] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transmit via WhatsApp</span>
                    </button>

                    <button
                      onClick={handleSendViaMailto}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] border border-[#F1EEE8]/30 hover:border-white bg-[#201E1C] text-[#F1EEE8] font-sans text-xs uppercase tracking-[0.18em] font-semibold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#B49A62]" />
                      <span>Send via Email Client</span>
                    </button>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#B49A62] underline underline-offset-4 font-sans hover:text-[#F1EEE8]"
                    >
                      Edit details or submit another brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#F1EEE8] mb-2 font-medium">
                        Your Name <span className="text-[#B49A62]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Thomas Mathew"
                        className="w-full px-4 py-3 bg-[#201E1C] border border-[#F1EEE8]/20 text-sm font-sans text-[#F1EEE8] placeholder-[#F1EEE8]/40 focus:outline-none focus:border-[#B49A62]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#F1EEE8] mb-2 font-medium">
                        Email Address <span className="text-[#B49A62]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="thomas@example.com"
                        className="w-full px-4 py-3 bg-[#201E1C] border border-[#F1EEE8]/20 text-sm font-sans text-[#F1EEE8] placeholder-[#F1EEE8]/40 focus:outline-none focus:border-[#B49A62]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#F1EEE8] mb-2 font-medium">
                        Phone / WhatsApp <span className="text-[#B49A62]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#201E1C] border border-[#F1EEE8]/20 text-sm font-sans text-[#F1EEE8] placeholder-[#F1EEE8]/40 focus:outline-none focus:border-[#B49A62]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-[#F1EEE8] mb-2 font-medium">
                        Site / Project Location <span className="text-[#B49A62]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        placeholder="e.g. Kulanada / Pathanamthitta"
                        className="w-full px-4 py-3 bg-[#201E1C] border border-[#F1EEE8]/20 text-sm font-sans text-[#F1EEE8] placeholder-[#F1EEE8]/40 focus:outline-none focus:border-[#B49A62]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#F1EEE8] mb-2 font-medium">
                      Project Typology <span className="text-[#B49A62]">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#201E1C] border border-[#F1EEE8]/20 text-sm font-sans text-[#F1EEE8] focus:outline-none focus:border-[#B49A62]"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#201E1C] text-[#F1EEE8]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#F1EEE8] mb-2 font-medium">
                      Project Description & Site Context
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Share your plot size, existing structure details (for renovations), living requirements, and target timeline..."
                      className="w-full px-4 py-3 bg-[#201E1C] border border-[#F1EEE8]/20 text-sm font-sans text-[#F1EEE8] placeholder-[#F1EEE8]/40 focus:outline-none focus:border-[#B49A62]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[4px] bg-[#B49A62] text-[#201E1C] font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#F1EEE8] transition-colors shadow-md active:scale-95"
                    >
                      <span>Prepare Project Submission</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-sans text-[11px] text-[#F1EEE8]/60 text-center font-light pt-1">
                    Direct review by Ar. Sreejith Chandran & K. Sreeramachandran guaranteed.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Direct Leadership Lines & Studio Address */}
            <div className="lg:col-span-5 space-y-8">
              {/* Principal Leadership Contact Cards */}
              <div className="p-8 bg-[#D9D0C1]/40 border border-[#201E1C]/10 space-y-6">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-bold block">
                  Direct Studio Leadership
                </span>

                <div className="space-y-4">
                  <div className="border-b border-[#201E1C]/10 pb-4">
                    <h3 className="font-editorial text-2xl text-[#201E1C]">
                      {brandInfo.contacts.principalArchitect.name}
                    </h3>
                    <p className="font-sans text-xs text-[#77766F] font-semibold uppercase tracking-wider">
                      {brandInfo.contacts.principalArchitect.title}
                    </p>
                    <a
                      href={`tel:${brandInfo.contacts.principalArchitect.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-sm text-[#201E1C] font-semibold hover:text-[#B49A62] transition-colors mt-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B49A62]" />
                      <span>{brandInfo.contacts.principalArchitect.phone}</span>
                    </a>
                  </div>

                  <div className="border-b border-[#201E1C]/10 pb-4">
                    <h3 className="font-editorial text-2xl text-[#201E1C]">
                      {brandInfo.contacts.managingDirector.name}
                    </h3>
                    <p className="font-sans text-xs text-[#77766F] font-semibold uppercase tracking-wider">
                      {brandInfo.contacts.managingDirector.title}
                    </p>
                    <a
                      href={`tel:${brandInfo.contacts.managingDirector.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-sm text-[#201E1C] font-semibold hover:text-[#B49A62] transition-colors mt-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B49A62]" />
                      <span>{brandInfo.contacts.managingDirector.phone}</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="font-editorial text-2xl text-[#201E1C]">
                      {brandInfo.contacts.studioLine.name}
                    </h3>
                    <p className="font-sans text-xs text-[#77766F] font-semibold uppercase tracking-wider">
                      {brandInfo.contacts.studioLine.title}
                    </p>
                    <a
                      href={`tel:${brandInfo.contacts.studioLine.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-sm text-[#201E1C] font-semibold hover:text-[#B49A62] transition-colors mt-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B49A62]" />
                      <span>{brandInfo.contacts.studioLine.phone}</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-[#201E1C]/10">
                    <a
                      href={`mailto:${brandInfo.contacts.email}`}
                      className="inline-flex items-center gap-2 text-xs text-[#201E1C] hover:text-[#B49A62] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B49A62]" />
                      <span>{brandInfo.contacts.email}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#201E1C]/10">
                  <a
                    href={`https://wa.me/${brandInfo.contacts.whatsapp}?text=Hello%20Eshvara%20Design%20Architects,%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#201E1C] text-[#F1EEE8] font-sans text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#B49A62] hover:text-[#201E1C] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#B49A62]" />
                    <span>WhatsApp Direct Channel</span>
                  </a>
                </div>
              </div>

              {/* Studio Address & Interactive Google Maps Card */}
              <div className="p-6 sm:p-8 bg-[#D9D0C1]/40 border border-[#201E1C]/10 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#B49A62]">
                    <MapPin className="w-4 h-4" />
                    <h3 className="font-editorial text-2xl text-[#201E1C]">Studio Location</h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#77766F] uppercase tracking-wider bg-[#201E1C]/5 px-2 py-0.5 rounded">
                    {brandInfo.coordinates}
                  </span>
                </div>

                <address className="not-italic font-sans text-xs text-[#77766F] leading-relaxed space-y-0.5">
                  <p className="font-semibold text-[#201E1C] text-sm">{brandInfo.name}</p>
                  <p className="text-[#201E1C]/80">{brandInfo.contacts.address.full}</p>
                </address>

                {/* Interactive Google Map Embed */}
                <div className="relative w-full h-56 sm:h-64 rounded-[4px] overflow-hidden border border-[#201E1C]/15 bg-[#201E1C]/5 shadow-inner">
                  <iframe
                    title="Eshvara Design Architects Studio Location — Kulanada, Pathanamthitta"
                    src={brandInfo.contacts.address.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[10%] contrast-[1.02] hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Directions and Google Maps Links */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
                  <a
                    href={brandInfo.contacts.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] bg-[#201E1C] text-[#F1EEE8] font-sans text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#B49A62] hover:text-[#201E1C] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#B49A62]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={brandInfo.contacts.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs text-[#201E1C] hover:text-[#B49A62] font-sans font-medium transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-6 bg-[#201E1C] text-[#F1EEE8] flex items-center justify-between">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#B49A62] font-bold block">
                    Official Instagram
                  </span>
                  <p className="font-editorial text-xl text-[#F1EEE8]">
                    {brandInfo.contacts.instagram.handle}
                  </p>
                </div>
                <a
                  href={brandInfo.contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#B49A62] text-[#201E1C] hover:bg-[#F1EEE8] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
