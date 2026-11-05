import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import { brandInfo } from '../data/brand';

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <main className="w-full pt-32 sm:pt-40 bg-[#F1EEE8] text-[#201E1C] min-h-screen">
        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
          <div className="mb-12 border-b border-[#201E1C]/10 pb-8">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block mb-2">
              Legal & Discretion
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#201E1C] font-light">
              Privacy & Client Discretion Policy
            </h1>
            <p className="font-sans text-xs text-[#77766F] mt-3">
              Last Updated: March 2026 • ESHVARA DESIGN ARCHITECTS
            </p>
          </div>

          <div className="space-y-8 font-sans text-xs sm:text-sm text-[#77766F] font-light leading-relaxed">
            <div>
              <h2 className="font-editorial text-2xl text-[#201E1C] mb-2 font-normal">
                1. Architectural Discretion & Client Privacy
              </h2>
              <p>
                Eshvara Design Architects ("Eshvara", "we", "us") places the highest priority on client confidentiality and spatial privacy. For private residential homes, family estates, and commercial developments, we uphold strict client anonymity and safeguard site coordinate data unless explicit consent is granted for portfolio publication.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl text-[#201E1C] mb-2 font-normal">
                2. Information We Collect
              </h2>
              <p>
                When you initiate an architectural enquiry or submit a project brief via our website, WhatsApp, or telephone, we collect only the necessary details required to assess your project: your name, contact telephone, email address, plot location, and programmatic requirements. We never sell, lease, or monetize client data.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl text-[#201E1C] mb-2 font-normal">
                3. Proprietary Architectural Drawings
              </h2>
              <p>
                All conceptual drawings, master plans, structural schemas, 3D visualisations, and photographs displayed on this website are the intellectual property of Eshvara Design Architects. Any unauthorized duplication or commercial reuse without written permission is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-editorial text-2xl text-[#201E1C] mb-2 font-normal">
                4. Studio Contact
              </h2>
              <p>
                If you have questions regarding our privacy practices or wish to update any details provided during consultations, please contact our studio principals directly:
              </p>
              <address className="not-italic mt-3 p-4 bg-[#D9D0C1]/40 border border-[#201E1C]/10 text-xs text-[#201E1C] space-y-1">
                <p className="font-semibold">Eshvara Design Architects</p>
                <p>Kulanada, Pathanamthitta District, Kerala 689503</p>
                <p>Email: <a href={`mailto:${brandInfo.contacts.email}`} className="text-[#B49A62] underline">{brandInfo.contacts.email}</a></p>
                <p>Phone: {brandInfo.contacts.principalArchitect.phone} / {brandInfo.contacts.managingDirector.phone}</p>
              </address>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#201E1C]/10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#201E1C] hover:text-[#B49A62] transition-colors"
            >
              ← Return to Studio Homepage
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
