import React from 'react';
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import StudioIntro from '../components/home/StudioIntro';
import SelectedProjects from '../components/home/SelectedProjects';
import ArchitecturalShowcase from '../components/showcase/ArchitecturalShowcase';
import ConnectedCapabilities from '../components/home/ConnectedCapabilities';
import OurProcessSection from '../components/home/OurProcessSection';
import FiveWaysToWork from '../components/home/FiveWaysToWork';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full">
        <Hero />
        <StudioIntro />
        <SelectedProjects />
        <ArchitecturalShowcase />
        <ConnectedCapabilities />
        <OurProcessSection />
        <FiveWaysToWork />
        <FinalCTA />
      </main>
    </PageTransition>
  );
}
