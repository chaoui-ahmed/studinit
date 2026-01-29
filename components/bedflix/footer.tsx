"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Logo */}
          <h3 className="text-2xl font-bold text-[#E50914] mb-4">BEDFLIX</h3>

          {/* Credits */}
          <p className="text-muted-foreground text-sm mb-2">
            Based on the Bedflix 2024-2025 Report
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            EURECOM • Sophia Antipolis
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-[#333333] mx-auto mb-6" />

          {/* Footer links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground mb-6">
            <span className="hover:text-white transition-colors cursor-pointer">Audio Description</span>
            <span className="hover:text-white transition-colors cursor-pointer">Help Center</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Use</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © 2024-2025 BEDFLIX. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
