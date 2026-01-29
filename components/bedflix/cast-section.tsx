"use client";

import { motion } from "framer-motion";
import { User, Star, Zap, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CastSection() {
  const traits = [
    { label: "Swiss Army Knife", icon: Zap },
    { label: "Logistics Lead", icon: Star },
    { label: "Team Motivator", icon: Heart },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#141414]">
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
            Distribution & Rôles
          </h2>
          <p className="text-muted-foreground mt-1">The Cast & Role</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden border border-[#333333] max-w-4xl">
            <div className="flex flex-col md:flex-row">
              {/* Avatar section */}
              <div className="relative w-full md:w-64 h-64 md:h-auto bg-gradient-to-br from-[#E50914]/20 to-[#E50914]/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#E50914]/30 flex items-center justify-center border-2 border-[#E50914]/50">
                  <User className="w-16 h-16 text-[#E50914]" />
                </div>
                <div className="absolute top-4 left-4 bg-[#E50914] text-white text-xs font-bold px-2 py-1 rounded">
                  LEAD
                </div>
              </div>

              {/* Content section */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Ahmed</h3>
                    <p className="text-[#E50914] font-semibold">The President</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-semibold">5.0</span>
                  </div>
                </div>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {traits.map((trait, index) => (
                    <motion.div
                      key={trait.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/30 hover:bg-[#E50914]/30 px-3 py-1.5 text-sm gap-1.5"
                      >
                        <trait.icon className="w-3.5 h-3.5" />
                        {trait.label}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {"My role wasn't just shaking hands. It was "}
                  <span className="text-white font-semibold">80% preparation</span>
                  {", "}
                  <span className="text-white font-semibold">20% execution</span>
                  {". Managing logistics, budgets, and the hardest part: "}
                  <span className="text-[#E50914]">managing friends</span>.
                </p>

                {/* Stats row */}
                <div className="mt-6 pt-6 border-t border-[#333333] grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">12+</p>
                    <p className="text-xs text-muted-foreground">Events Organized</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">500+</p>
                    <p className="text-xs text-muted-foreground">Students Served</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">1</p>
                    <p className="text-xs text-muted-foreground">Crazy Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
