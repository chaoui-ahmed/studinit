"use client";

import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onPlayClick: () => void;
}

export function HeroSection({ onPlayClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-transparent to-[#141414]/80 z-10" />
      
      {/* Abstract background */}
      <div className="absolute inset-0 bg-[#141414]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E50914]/10 rounded-full blur-[120px]" />
        </div>
        {/* Cinematic lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-white"
              style={{
                top: `${5 + i * 5}%`,
                left: 0,
                right: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Netflix-style badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[#E50914] font-bold text-sm tracking-widest">B E D F L I X</span>
            <span className="text-muted-foreground text-sm">ORIGINAL</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-4"
          >
            <img 
              src="/images/bedflixlogo.png"
              alt="BEDFLIX"
              className="h-16 md:h-24 lg:h-32 w-auto object-contain"
            />
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-white/90">
              The Presidential Cut
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-6"
          >
            Une année de production originale EURECOM
            <br />
            <span className="text-white/60">Réalisé par Ahmed Chaoui</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            {"I didn't just want to study. I wanted to build a real student life. From logistics to management, discover the behind-the-scenes of a crazy year."}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={onPlayClick}
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-6 text-lg gap-2"
            >
              <Play className="w-6 h-6 fill-black" />
              Lecture
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-[#6b6b6b]/70 hover:bg-[#6b6b6b]/90 text-white font-semibold px-8 py-6 text-lg gap-2"
            >
              <Info className="w-6 h-6" />
              {"Plus d'infos"}
            </Button>
          </motion.div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="border border-white/40 px-2 py-0.5 text-sm text-white/70">2024-2025</span>
            <span className="text-white/50 text-sm">1 Season</span>
            <span className="text-white/50 text-sm">•</span>
            <span className="text-white/50 text-sm">BDE Report</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
