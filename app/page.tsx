"use client";

import { useRef } from "react";
import { HeroSection } from "@/components/bedflix/hero-section";
import { CastSection } from "@/components/bedflix/cast-section";
import { ChallengesSection } from "@/components/bedflix/challenges-section";
import { AnalyticsSection } from "@/components/bedflix/analytics-section";
import { TimelineSection } from "@/components/bedflix/timeline-section"; // <--- L'IMPORT IMPORTANT
import { EpisodesSection } from "@/components/bedflix/episodes-section";
import { RecommendationsSection } from "@/components/bedflix/recommendations-section";
import { Footer } from "@/components/bedflix/footer";

export default function BedflixPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#141414] text-white overflow-x-hidden">
      {/* Netflix-style top gradient */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 to-transparent z-50 pointer-events-none" />

      {/* Hero Section */}
      <HeroSection onPlayClick={handlePlayClick} />

      {/* Content Sections */}
      <div ref={contentRef}>
        <CastSection />
        <ChallengesSection />
        <AnalyticsSection />
        
        {/* NOUVELLE SECTION ICI */}
        <TimelineSection /> 
        
        <EpisodesSection />
        <RecommendationsSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}