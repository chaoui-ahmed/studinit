"use client";

import { motion } from "framer-motion";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

import chatData from "./chat_data.json";

export function AnalyticsSection() {
  const total = chatData.reduce((acc, curr) => acc + curr.volume, 0);

  return (
    <section className="py-16 md:py-24 bg-[#141414]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Statistiques du Groupe</h2>
          <p className="text-muted-foreground mt-1">Analyse de {total.toLocaleString()} messages WhatsApp</p>
        </motion.div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-[#333333] p-4 md:p-8">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chatData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                <XAxis dataKey="displayDate" stroke="#6b6b6b" tick={{fontSize: 10}} />
                <YAxis stroke="#6b6b6b" tick={{fontSize: 10}} />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                <Legend />
                <Bar dataKey="volume" name="Messages" fill="#ffcccc" opacity={0.5} barSize={20} />
                <Line type="monotone" dataKey="trend" name="Tendance" stroke="#E50914" strokeWidth={3} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}