"use client";

import React from "react"
import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  ChevronLeft, ChevronRight, Trophy, Heart, Plane, PartyPopper, Users, 
  Gamepad2, Coffee, Music, Sun, Utensils, Calendar, Film
} from "lucide-react";
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
  // NOVEMBER
  {
    id: 1,
    episode: "Ep 1",
    title: "Interactive Film Session",
    subtitle: "Early Nov",
    description: "Pinède Park (Stop-Motion Contest)",
    icon: Film,
    gradient: "from-blue-500/30 to-blue-600/10",
  },
  {
    id: 2,
    episode: "Ep 2",
    title: "Video Games Day",
    subtitle: "Nov 11",
    description: "Discord (Gartic Phone, Cards Against Humanity)",
    icon: Gamepad2,
    gradient: "from-green-500/30 to-green-600/10",
  },
  {
    id: 3,
    episode: "Ep 3",
    title: "Breakfast",
    subtitle: "Nov 13",
    description: "Salsa Room (Crêpes, Popcorn)",
    icon: Coffee,
    gradient: "from-yellow-500/30 to-yellow-600/10",
  },
  {
    id: 4,
    episode: "Ep 4",
    title: "Blind Test & Game",
    subtitle: "Nov 13",
    description: "Time's Up, Paper plane contest",
    icon: Gamepad2,
    gradient: "from-purple-500/30 to-purple-600/10",
  },
  {
    id: 5,
    episode: "Ep 5",
    title: "BEDFLIX PARTY (Gala)",
    subtitle: "Nov 15",
    description: "Villa (1291 Ch. des Brusquets) - Red Carpet",
    icon: PartyPopper,
    gradient: "from-red-500/30 to-red-600/10",
  },
  {
    id: 6,
    episode: "Ep 6",
    title: "Squid Game Event",
    subtitle: "Nov 17",
    description: "Villa Djunah Beach (Red Light, Green Light)",
    icon: Trophy,
    gradient: "from-pink-500/30 to-pink-600/10",
  },
  {
    id: 7,
    episode: "Ep 7",
    title: "ELECTION DAY",
    subtitle: "Victory!",
    description: "The campaign, the votes, and the moment everything changed.",
    icon: Trophy,
    gradient: "from-yellow-500/30 to-yellow-600/10",
  },

  // DECEMBER
  {
    id: 8,
    episode: "Ep 8",
    title: "All I Want Is You Party",
    subtitle: "Dec 12",
    description: "YOU Club (Antibes)",
    icon: PartyPopper,
    gradient: "from-indigo-500/30 to-indigo-600/10",
  },
  {
    id: 9,
    episode: "Ep 9",
    title: "Secret Santa",
    subtitle: "Dec 18",
    description: "With FACE06 / Gare Croisette",
    icon: Heart,
    gradient: "from-red-500/30 to-red-600/10",
  },
  {
    id: 10,
    episode: "Ep 10",
    title: "Ugly Sweater Day",
    subtitle: "Dec 18",
    description: "'Pull Moche' Day",
    icon: Users,
    gradient: "from-green-500/30 to-green-600/10",
  },

  // JANUARY
  {
    id: 11,
    episode: "Ep 11",
    title: "New Year's Party",
    subtitle: "Jan 03",
    description: "Gift Exchange",
    icon: PartyPopper,
    gradient: "from-purple-500/30 to-purple-600/10",
  },
  {
    id: 12,
    episode: "Ep 12",
    title: "King Cake",
    subtitle: "Jan 08",
    description: "Galette des Rois on Campus",
    icon: Coffee,
    gradient: "from-yellow-500/30 to-yellow-600/10",
  },

  // MAY
  {
    id: 13,
    episode: "Ep 13",
    title: "First Beach Party",
    subtitle: "May 08",
    description: "Juan-les-Pins (Season Opening)",
    icon: Sun,
    gradient: "from-orange-500/30 to-orange-600/10",
  },
  {
    id: 14,
    episode: "Ep 14",
    title: "Appartathon",
    subtitle: "May 16",
    description: "Appartathon + Beach Party Afterwork",
    icon: PartyPopper,
    gradient: "from-blue-500/30 to-blue-600/10",
  },
  {
    id: 15,
    episode: "Ep 15",
    title: "THE PROMOTRIP",
    subtitle: "May 28 - Jun 1",
    description: "Novalja, Croatia",
    icon: Plane,
    gradient: "from-cyan-500/30 to-cyan-600/10",
  },

  // JUNE
  {
    id: 16,
    episode: "Ep 16",
    title: "END OF YEAR GALA",
    subtitle: "Jun 14",
    description: "Bedflix Villa (Caterer, DJ, Photobooth, Awards)",
    icon: PartyPopper,
    gradient: "from-rose-500/30 to-rose-600/10",
  },

  // SEPTEMBER
  {
    id: 17,
    episode: "Ep 17",
    title: "Welcome Cocktail",
    subtitle: "Sep 04",
    description: "Music Workshop + Drinks",
    icon: PartyPopper,
    gradient: "from-purple-500/30 to-purple-600/10",
  },
  {
    id: 18,
    episode: "Ep 18",
    title: "French Food Tasting",
    subtitle: "Date TBC",
    description: "Tasting of French products",
    icon: Utensils,
    gradient: "from-yellow-500/30 to-yellow-600/10",
  },
  {
    id: 19,
    episode: "Ep 19",
    title: "Challenge Launch",
    subtitle: "Sep 08",
    description: "Team Creation",
    icon: Trophy,
    gradient: "from-red-500/30 to-red-600/10",
  },
  {
    id: 20,
    episode: "Ep 20",
    title: "Beach Party",
    subtitle: "Sep 08",
    description: "Villa Djunah (JLP)",
    icon: Sun,
    gradient: "from-orange-500/30 to-orange-600/10",
  },
  {
    id: 21,
    episode: "Ep 21",
    title: "Breakfast",
    subtitle: "Sep 10",
    description: "Campus",
    icon: Coffee,
    gradient: "from-amber-500/30 to-amber-600/10",
  },
  {
    id: 22,
    episode: "Ep 22",
    title: "Nightclub Outing",
    subtitle: "Date TBC",
    description: "Bisous Bisous (Cannes)",
    icon: PartyPopper,
    gradient: "from-pink-500/30 to-pink-600/10",
  },
  {
    id: 23,
    episode: "Ep 23",
    title: "WEI Teaser",
    subtitle: "Sep 15",
    description: "Trading Game / Student Challenge",
    icon: Gamepad2,
    gradient: "from-emerald-500/30 to-emerald-600/10",
  },
  {
    id: 24,
    episode: "Ep 24",
    title: "Old School Beach Party",
    subtitle: "Sep 20",
    description: "Plage Le Vieux Rocher (2000s Theme)",
    icon: Sun,
    gradient: "from-blue-500/30 to-blue-600/10",
  },
  {
    id: 25,
    episode: "Ep 25",
    title: "Integration Concert",
    subtitle: "Sep 24",
    description: "Salsa Room (+ Snacks)",
    icon: Music,
    gradient: "from-violet-500/30 to-violet-600/10",
  },
  {
    id: 26,
    episode: "Ep 26",
    title: "JAE (Welcome Day)",
    subtitle: "Sep 25",
    description: "With FACE06 (Castle Hill + Concert)",
    icon: Users,
    gradient: "from-indigo-500/30 to-indigo-600/10",
  },
  {
    id: 27,
    episode: "Ep 27",
    title: "WEI",
    subtitle: "Sep 26-28",
    description: "Weekend of Integration",
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
        className={`relative h-40 md:h-48 rounded-lg overflow-hidden bg-gradient-to-br ${episode.gradient} border border-white/10`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <episode.icon className="w-12 h-12 md:w-16 md:h-16 text-white/80 group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="absolute bottom-2 left-3 bg-black/60 px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
          {episode.episode}
        </div>
      </div>
      
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#E50914] transition-colors">
            {episode.title}
          </h3>
          <span className="text-xs text-muted-foreground">{episode.subtitle}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mt-1 line-clamp-2">
          {episode.description}
        </p>
      </div>
    </motion.div>
  );
}

export function EpisodesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
              Tous les Événements
            </h2>
            <p className="text-muted-foreground mt-1">Season 1: 2024-2025</p>
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