"use client";

import React from "react"

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Trophy, Heart, Plane, PartyPopper, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Episode {
  id: number;
  episode: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    episode: "Ep 1",
    title: "The Election",
    subtitle: "Victory!",
    description: "The campaign, the votes, and the moment everything changed.",
    icon: Trophy,
    gradient: "from-yellow-500/30 to-yellow-600/10",
  },
  {
    id: 2,
    episode: "Ep 2",
    title: "Lunar New Year",
    subtitle: "Keeping Engagement",
    description: "Cultural celebration and community building at its finest.",
    icon: Heart,
    gradient: "from-red-500/30 to-red-600/10",
  },
  {
    id: 3,
    episode: "Ep 3",
    title: "The Promotrip",
    subtitle: "Novalja, Croatia",
    description: "Logistics nightmare turned into an unforgettable adventure.",
    icon: Plane,
    gradient: "from-blue-500/30 to-blue-600/10",
  },
  {
    id: 4,
    episode: "Ep 4",
    title: "The Gala",
    subtitle: "End of Year Climax",
    description: "The grand finale - months of preparation for one magical night.",
    icon: PartyPopper,
    gradient: "from-purple-500/30 to-purple-600/10",
  },
  {
    id: 5,
    episode: "Ep 5",
    title: "Integration Month",
    subtitle: "Passing the Torch",
    description: "Training the next generation and ensuring continuity.",
    icon: Users,
    gradient: "from-green-500/30 to-green-600/10",
  },
];

function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex-shrink-0 w-64 md:w-72 cursor-pointer group"
    >
      <div
        className={`relative h-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br ${episode.gradient} border border-[#333333] group-hover:border-[#E50914]/50 transition-colors`}
      >
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <episode.icon className="w-16 h-16 text-white/40 group-hover:text-white/60 transition-colors" />
        </div>

        {/* Episode badge */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white">
          {episode.episode}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h4 className="font-semibold text-white group-hover:text-[#E50914] transition-colors">
          {episode.title}
        </h4>
        <p className="text-sm text-muted-foreground">{episode.subtitle}</p>
      </div>
    </motion.div>
  );
}

export function EpisodesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Épisodes Marquants
            </h2>
            <p className="text-muted-foreground mt-1">Key Episodes</p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="text-white hover:bg-[#333333]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="text-white hover:bg-[#333333]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Horizontal scroll container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <EpisodeCard episode={episode} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
