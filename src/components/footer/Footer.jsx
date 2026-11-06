import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { brandInfo } from '../../data/brand';
import { footerQuickLinks } from '../../data/navigation';
import CircularBadge from '../common/CircularBadge';

export default function Footer() {
  return (
    <footer className="relative bg-[#201E1C] text-[#F1EEE8] pt-10 sm:pt-12 lg:pt-16 pb-8 lg:pb-10 overflow-hidden border-t border-[#F1EEE8]/10">
      {/* Background architectural grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F1EEE8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* =========================================================================
            1. MOBILE COMPACT BOX VIEW (All essential footer content consolidated into one box)
            ========================================================================= */}
        <div className="block lg:hidden">
          <div className="bg-[#181716] border border-white/10 rounded-[12px] p-6 sm:p-8 space-y-5 shadow-2xl">
            {/* Brand Header */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/eshvara-logo.svg"
                  alt="Eshvara Design Architects Logo"
                  width="36"
                  height="36"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
                />
                <div>
                  <span className="font-editorial text-2xl tracking-[0.22em] text-[#F1EEE8] font-normal block leading-tight">
                    ESHVARA
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#B49A62] font-semibold block leading-tight">
                    DESIGN ARCHITECTS • KERALA
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-[#F1EEE8]/70 pt-1 font-light leading-relaxed">
                "Designing Future, Brick by Brick." — Kulanada, Pathanamthitta
              </p>
            </div>

            {/* Direct Contact Information */}
            <div className="space-y-2.5 font-sans text-xs text-[#F1EEE8]/85">
              <a
                href={`tel:${brandInfo.contacts?.principalArchitect?.phoneRaw || '+918848758571'}`}
                className="flex items-center gap-2.5 hover:text-[#B49A62] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B49A62] flex-shrink-0" />
                <span>{brandInfo.contacts?.principalArchitect?.phone || '+91 88487 58571'}</span>
              </a>
              <a
                href={`mailto:${brandInfo.contacts?.email || 'hello@eshvara.design'}`}
                className="flex items-center gap-2.5 hover:text-[#B49A62] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B49A62] flex-shrink-0" />
                <span>{brandInfo.contacts?.email || 'hello@eshvara.design'}</span>
              </a>
              <div className="flex items-start gap-2.5 text-[#F1EEE8]/65 pt-0.5">
                <MapPin className="w-4 h-4 text-[#B49A62] flex-shrink-0 mt-0.5" />
                <span>Eshvara Studio, Kulanada, Pathanamthitta, Kerala</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 border-t border-white/10 text-xs font-sans text-[#F1EEE8]/75">
              {footerQuickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-[#B49A62] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/privacy-policy" className="hover:text-[#B49A62] transition-colors">
                Privacy Policy
              </Link>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#B49A62] text-[#201E1C] font-sans text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#F1EEE8] transition-all shadow-md active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Minimal Bottom Bar on mobile */}
          <div className="pt-5 pb-2 flex items-center justify-between text-[11px] text-[#F1EEE8]/50 font-sans px-2">
            <p>© {new Date().getFullYear()} ESHVARA ARCHITECTS</p>
            <a
              href={brandInfo.contacts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#F1EEE8]/70 hover:text-[#B49A62] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B49A62]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            2. DESKTOP MULTI-COLUMN VIEW (Visible only on lg and larger screens)
            ========================================================================= */}
        <div className="hidden lg:block">
          {/* Top Header Row with Brand & Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 lg:pb-10 border-b border-[#F1EEE8]/10 items-center">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/eshvara-logo.svg"
                  alt="Eshvara Design Architects Logo"
                  width="36"
                  height="36"
                  className="w-9 h-9 object-contain shrink-0"
                />
                <span className="inline-block font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold">
                  ESHVARA DESIGN ARCHITECTS • DESIGN. COORDINATE. BUILD.
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] text-[#F1EEE8] font-light leading-[1.12]">
                Designing Future, <span className="italic text-[#B49A62]">Brick by Brick.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#F1EEE8]/70 max-w-xl leading-relaxed font-light">
                An architecture, design, and construction practice based in Kulanada, Pathanamthitta, Kerala. Bridging design imagination with 48+ years of hands-on structural construction execution.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-6">
              <div className="hidden sm:block">
                <CircularBadge
                  text="ESHVARA DESIGN ARCHITECTS • KULANADA KERALA • DESIGN COORDINATE BUILD • "
                  size={105}
                  dark={true}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-[4px] bg-[#B49A62] text-[#201E1C] font-sans text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#F1EEE8] transition-all duration-300 shadow-md active:scale-95"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
                <a
                  href={`https://wa.me/${brandInfo.contacts.whatsapp}?text=Hello%20Eshvara%20Design%20Architects,%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F1EEE8]/60 hover:text-[#B49A62] transition-colors font-sans uppercase tracking-[0.15em] px-1 py-1"
                >
                  <span>Direct WhatsApp Inquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Columns: Navigation, Leadership Lines, Studio Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-8 lg:py-10 border-b border-[#F1EEE8]/10">
            {/* Col 1: Quick Links */}
            <div className="lg:col-span-4 space-y-3">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-semibold">
                Explore Practice
              </p>
              <ul className="space-y-2">
                {footerQuickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-sans text-xs text-[#F1EEE8]/70 hover:text-[#B49A62] transition-colors duration-200 tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Studio Location */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-[#B49A62]">
                <MapPin className="w-4 h-4" />
                <p className="font-sans text-xs uppercase tracking-[0.25em] font-semibold">
                  Studio Location
                </p>
              </div>
              <address className="not-italic font-sans text-xs text-[#F1EEE8]/70 leading-relaxed space-y-1">
                <p className="text-white font-medium">Eshvara Design Architects</p>
                <p>Kulanada, Pathanamthitta District</p>
                <p>Kerala, India — 689503</p>
              </address>
              <p className="text-[11px] text-[#F1EEE8]/50 font-light pt-0.5">
                "Our own studio was designed and built by the team, starting from an empty room."
              </p>
            </div>

            {/* Col 3: Direct Contacts & Leadership Lines */}
            <div className="lg:col-span-4 space-y-3">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#B49A62] font-semibold">
                Direct Studio Contact
              </p>
              <div className="space-y-2.5 font-sans text-xs text-[#F1EEE8]/80">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#B49A62]">
                    Principal Architect: Sreejith Chandran
                  </span>
                  <a
                    href={`tel:${brandInfo.contacts.principalArchitect.phoneRaw}`}
                    className="flex items-center gap-2 hover:text-[#B49A62] transition-colors font-medium text-xs mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B49A62]" />
                    <span>{brandInfo.contacts.principalArchitect.phone}</span>
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#B49A62]">
                    Managing Director: K. Sreeramachandran
                  </span>
                  <a
                    href={`tel:${brandInfo.contacts.managingDirector.phoneRaw}`}
                    className="flex items-center gap-2 hover:text-[#B49A62] transition-colors font-medium text-xs mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B49A62]" />
                    <span>{brandInfo.contacts.managingDirector.phone}</span>
                  </a>
                </div>

                <div className="pt-1.5 border-t border-[#F1EEE8]/10">
                  <a
                    href={`mailto:${brandInfo.contacts.email}`}
                    className="flex items-center gap-2 hover:text-[#B49A62] transition-colors text-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B49A62]" />
                    <span>{brandInfo.contacts.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Instagram Link */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F1EEE8]/50 font-sans">
            <div className="flex flex-wrap items-center gap-4">
              <p>© {new Date().getFullYear()} ESHVARA DESIGN ARCHITECTS. All rights reserved.</p>
              <span className="hidden sm:inline text-[#F1EEE8]/20">•</span>
              <Link to="/privacy-policy" className="hover:text-[#F1EEE8] transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={brandInfo.contacts.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F1EEE8]/70 hover:text-[#B49A62] transition-colors text-xs uppercase tracking-wider"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B49A62]" />
                <span>{brandInfo.contacts.instagram.handle}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
