"use client";

import React from "react"

import { motion } from "framer-motion";
import { useState } from "react";
import { DollarSign, MapPin, Brain, ArrowRight } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "The Financial Trap",
    subtitle: "Le Piège Financier",
    description:
      "Too much subsidy made us lazy on sponsorships. Future goal: Financial independence.",
    icon: DollarSign,
    color: "#E50914",
  },
  {
    id: 2,
    title: "The Riviera Location",
    subtitle: "La Localisation Côte d'Azur",
    description:
      "Expensive venues, transport nightmares, and logistical stress in the South of France.",
    icon: MapPin,
    color: "#f59e0b",
  },
  {
    id: 3,
    title: "The Mental Load",
    subtitle: "La Charge Mentale",
    description:
      "Facing criticism despite hard work. Learning resilience when students act as consumers.",
    icon: Brain,
    color: "#8b5cf6",
  },
];

function FlipCard({ challenge }: { challenge: Challenge }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: challenge.id * 0.1 }}
      className="perspective-1000 h-72 md:h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden border border-[#333333] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 flex flex-col justify-between cursor-pointer"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: `${challenge.color}20` }}
            >
              <challenge.icon className="w-7 h-7" style={{ color: challenge.color }} />
            </div>
            <p className="text-sm text-muted-foreground mb-1">{challenge.subtitle}</p>
            <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Hover to reveal</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden border border-[#333333] p-6 flex flex-col justify-center cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: challenge.color,
          }}
        >
          <p className="text-sm font-medium mb-2 text-white/70">{challenge.subtitle}</p>
          <h3 className="text-xl font-bold text-white mb-4">{challenge.title}</h3>
          <p className="text-white/90 leading-relaxed">{challenge.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ChallengesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Les Défis de la Saison
          </h2>
          <p className="text-muted-foreground mt-1">Plot Twists</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <FlipCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}
