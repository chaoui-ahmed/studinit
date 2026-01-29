"use client";

import { motion } from "framer-motion";
import { Check, Play, ArrowRight } from "lucide-react";

interface Recommendation {
  id: number;
  title: string;
  description: string;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Simplify the hierarchy",
    description: "Less bureaucracy, more action. Flatten the structure for faster decisions.",
  },
  {
    id: 2,
    title: "Fix one venue for parties",
    description: "Don't change every month. Consistency builds better relationships with venues.",
  },
  {
    id: 3,
    title: "Create a dedicated International Student Pole",
    description: "Better integration for international students with dedicated resources.",
  },
  {
    id: 4,
    title: "Implement a yearly subscription fee",
    description: "Financial independence through member contributions, reducing reliance on subsidies.",
  },
];

function RecommendationCard({ recommendation, index }: { recommendation: Recommendation; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="flex gap-4 p-4 rounded-lg border border-transparent hover:border-[#333333] hover:bg-[#1a1a1a] transition-all cursor-pointer">
        {/* Play icon / Check icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded bg-[#E50914]/20 flex items-center justify-center group-hover:bg-[#E50914] transition-colors">
          <Play className="w-4 h-4 text-[#E50914] group-hover:text-white transition-colors fill-current" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-white group-hover:text-[#E50914] transition-colors">
              {recommendation.title}
            </h4>
            <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {recommendation.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function RecommendationsSection() {
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
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#E50914] font-bold text-sm tracking-widest">SEASON 2</span>
            <span className="bg-[#E50914] text-white text-xs font-bold px-2 py-0.5 rounded">TEASER</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Suggestions pour la Saison 2
          </h2>
          <p className="text-muted-foreground mt-1">Recommendations for the Next Bureau</p>
        </motion.div>

        {/* Recommendations list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-[#333333] p-4 md:p-6 max-w-3xl"
        >
          <div className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard
                key={recommendation.id}
                recommendation={recommendation}
                index={index}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-6 pt-6 border-t border-[#333333]">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Implementation Progress</span>
              <span className="text-white font-semibold">Ready to Start</span>
            </div>
            <div className="h-1 bg-[#333333] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-full bg-[#E50914] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
