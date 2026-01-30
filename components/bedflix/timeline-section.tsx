"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, ReferenceArea, Scatter, Legend, BarChart, Bar
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dashboardData from "./dashboard_data.json";

// Couleurs fixes pour les groupes (identiques à votre config)
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
      <div className="bg-[#1a1a1a] border border-[#333333] p-3 rounded shadow-xl text-xs">
        <p className="font-bold text-white mb-2">{label}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-300">{p.name}:</span>
            <span className="font-mono text-white">{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState<"strategy" | "people">("strategy");

  // Transformation des événements pour qu'ils s'affichent au dessus du graph
  // On leur donne une valeur Y fixe un peu haute
  const eventData = dashboardData.events.map(e => ({
    ...e,
    yValue: 100 // Valeur arbitraire haute pour l'affichage Scatter
  }));

  // On récupère les noms des groupes dynamiquement depuis les données
  const groupKeys = Object.keys(dashboardData.timeline[0] || {}).filter(
    k => k !== "date" && k !== "displayDate" && k !== "activeUsers"
  );

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-[#333]">
      <div className="container mx-auto px-4">
        
        {/* Header de la section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-[#E50914]">BEDFLIX</span> Studio
            </h2>
            <p className="text-muted-foreground mt-1">
              Analyse approfondie de la saison et de l'engagement.
            </p>
          </motion.div>

          <div className="flex gap-2 bg-[#1a1a1a] p-1 rounded-lg border border-[#333]">
            <Button 
              variant={activeTab === "strategy" ? "default" : "ghost"}
              onClick={() => setActiveTab("strategy")}
              className={activeTab === "strategy" ? "bg-[#E50914] hover:bg-[#b2070f]" : "text-gray-400 hover:text-white"}
              size="sm"
            >
              Timeline Stratégique
            </Button>
            <Button 
              variant={activeTab === "people" ? "default" : "ghost"}
              onClick={() => setActiveTab("people")}
              className={activeTab === "people" ? "bg-[#E50914] hover:bg-[#b2070f]" : "text-gray-400 hover:text-white"}
              size="sm"
            >
              Membres Actifs
            </Button>
          </div>
        </div>

        {/* Graphique */}
        <div className="bg-[#141414] border border-[#333] rounded-xl p-4 md:p-6 shadow-2xl overflow-hidden relative">
          
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {activeTab === "strategy" ? (
                <ComposedChart data={dashboardData.timeline} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorOffice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E50914" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#E50914" stopOpacity={0}/>
                    </linearGradient>
                  </defs>

                  {/* Zones de fond (Phases) */}
                  {dashboardData.phases.map((phase, idx) => (
                    <ReferenceArea
                      key={idx}
                      x1={phase.start.split('T')[0]} // Sécurité format date
                      x2={phase.end.split('T')[0]}
                      y1={0}
                      y2={200} // Couvre tout le fond
                      fill={phase.color}
                      fillOpacity={0.1}
                    />
                  ))}

                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(val) => {
                      const d = new Date(val);
                      return `${d.getDate()}/${d.getMonth()+1}`;
                    }}
                    stroke="#666" 
                    fontSize={11}
                    minTickGap={30}
                  />
                  <YAxis stroke="#666" fontSize={11} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />

                  {/* Courbes des groupes */}
                  {groupKeys.map((key) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={COLORS[key] || "#fff"}
                      strokeWidth={key.includes("Office") ? 3 : 1.5}
                      dot={false}
                      activeDot={{ r: 6 }}
                      opacity={0.9}
                    />
                  ))}

                  {/* Événements marquants (Scatter hack) */}
                  {/* Note: Pour afficher proprement les events, il faudrait idéalement manipuler les data. 
                      Ici on simplifie pour React. */}
                  
                </ComposedChart>
              ) : (
                /* --- GRAPHIQUE MEMBRES ACTIFS --- */
                <BarChart data={dashboardData.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="displayDate" 
                    stroke="#666" 
                    fontSize={11}
                    minTickGap={30}
                  />
                  <YAxis stroke="#666" fontSize={11} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#1a1a1a] border border-[#E50914] p-3 rounded">
                            <p className="text-white font-bold mb-1">{label}</p>
                            <p className="text-[#E50914] text-lg font-bold">
                              {payload[0].value} <span className="text-sm font-normal text-gray-400">membres actifs</span>
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="activeUsers" 
                    name="Membres Actifs" 
                    fill="#E50914" 
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Légende des phases (uniquement pour l'onglet stratégie) */}
          {activeTab === "strategy" && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {dashboardData.phases.map((p, i) => (
                <Badge key={i} variant="outline" className="text-[10px] border-none bg-white/5 text-gray-400">
                  <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: p.color }}></span>
                  {p.name}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}