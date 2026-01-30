"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposedChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, ReferenceArea, Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dashboardData from "./dashboard_data.json";

// Couleurs des lignes
const COLORS: Record<string, string> = {
  "Intégration (1A)": "#FF9900", 
  "Office (Stratégie)": "#E50914",
  "Général (Communauté)": "#B3B3B3", 
  "Bureau (Opérationnel)": "#000000",
  "Novalja (Projet)": "#00CC99", 
  "Passation (Next Gen)": "#800080"
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 border border-[#333] p-3 rounded text-xs text-white shadow-xl">
        <p className="font-bold mb-2 text-[#E50914]">{label}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-300">{p.name}:</span>
            <span className="font-mono">{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState<"strategy" | "people">("strategy");
  
  // On récupère les clés des groupes (sauf les champs techniques)
  const groupKeys = Object.keys(dashboardData.timeline[0] || {}).filter(
    k => !["date", "displayDate", "activeUsers"].includes(k)
  );

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-[#333]">
      <div className="container mx-auto px-4">
        
        {/* En-tête avec boutons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#E50914]">BEDFLIX</span> Studio
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {activeTab === "strategy" ? "Volume d'activité par pôle" : "Engagement réel (Membres actifs/semaine)"}
            </p>
          </motion.div>
          
          <div className="flex bg-[#1a1a1a] rounded-lg p-1 border border-[#333]">
            <Button size="sm" variant={activeTab === "strategy" ? "default" : "ghost"} 
              onClick={() => setActiveTab("strategy")} 
              className={activeTab === "strategy" ? "bg-[#E50914] hover:bg-red-700" : "text-gray-400 hover:text-white"}>
              Stratégie
            </Button>
            <Button size="sm" variant={activeTab === "people" ? "default" : "ghost"} 
              onClick={() => setActiveTab("people")} 
              className={activeTab === "people" ? "bg-[#E50914] hover:bg-red-700" : "text-gray-400 hover:text-white"}>
              Membres Actifs
            </Button>
          </div>
        </div>

        {/* Graphique */}
        <div className="bg-[#141414] border border-[#333] rounded-xl p-4 h-[500px] relative shadow-2xl">
          <ResponsiveContainer width="100%" height="100%">
            {activeTab === "strategy" ? (
              <ComposedChart data={dashboardData.timeline} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                {/* Zones de fond (Phases) */}
                {dashboardData.phases.map((p, i) => (
                  <ReferenceArea key={i} x1={p.start} x2={p.end} fill={p.color} fillOpacity={0.07} />
                ))}
                
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="displayDate" stroke="#666" fontSize={10} minTickGap={30} />
                <YAxis stroke="#666" fontSize={10} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "15px" }} />
                
                {groupKeys.map(key => (
                  <Line key={key} type="monotone" dataKey={key} stroke={COLORS[key] || "#fff"} 
                    strokeWidth={key.includes("Office") ? 3 : 1.5} dot={false} activeDot={{ r: 6 }} />
                ))}
              </ComposedChart>
            ) : (
              /* Graphique Membres Actifs */
              <BarChart data={dashboardData.timeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="displayDate" stroke="#666" fontSize={10} minTickGap={30} />
                <YAxis stroke="#666" fontSize={10} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#1a1a1a] border border-[#E50914] p-3 rounded shadow-xl">
                          <p className="text-white font-bold mb-1">{label}</p>
                          <p className="text-[#E50914] text-xl font-bold">
                            {payload[0].value} <span className="text-xs font-normal text-gray-400">actifs</span>
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="activeUsers" name="Membres Actifs" fill="#E50914" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Légende Phases (Uniquement pour Stratégie) */}
        {activeTab === "strategy" && (
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {dashboardData.phases.map((p, i) => (
              <Badge key={i} variant="outline" className="text-[10px] bg-white/5 text-gray-400 border-0">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: p.color }}></span>
                {p.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}