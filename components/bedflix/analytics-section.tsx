"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Sep", workload: 85, chatActivity: 90 },
  { month: "Oct", workload: 70, chatActivity: 85 },
  { month: "Nov", workload: 55, chatActivity: 60 },
  { month: "Dec", workload: 40, chatActivity: 35 },
  { month: "Jan", workload: 50, chatActivity: 40 },
  { month: "Feb", workload: 60, chatActivity: 30 },
  { month: "Mar", workload: 95, chatActivity: 25 },
  { month: "Apr", workload: 100, chatActivity: 20 },
  { month: "May", workload: 75, chatActivity: 15 },
  { month: "Jun", workload: 50, chatActivity: 10 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const isHighWorkload = payload[0]?.value > 80;
    const isLowChat = payload[1]?.value < 30;

    return (
      <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-4 shadow-xl">
        <p className="text-white font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
        {isHighWorkload && isLowChat && (
          <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-[#333333] max-w-xs">
            Analysis: The team works hardest (Gala/Trip) when the chat is quietest
            (Exams).
          </p>
        )}
      </div>
    );
  }
  return null;
}

export function AnalyticsSection() {
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
            Audimat & Statistiques
          </h2>
          <p className="text-muted-foreground mt-1">Season Analytics</p>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-[#333333] p-4 md:p-8"
        >
          <div className="h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                <XAxis
                  dataKey="month"
                  stroke="#6b6b6b"
                  tick={{ fill: "#b3b3b3", fontSize: 12 }}
                  axisLine={{ stroke: "#333333" }}
                />
                <YAxis
                  stroke="#6b6b6b"
                  tick={{ fill: "#b3b3b3", fontSize: 12 }}
                  axisLine={{ stroke: "#333333" }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{
                    paddingTop: "20px",
                  }}
                  formatter={(value) => (
                    <span className="text-muted-foreground text-sm">{value}</span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="workload"
                  name="Workload/Bureau Effort"
                  stroke="#E50914"
                  strokeWidth={3}
                  dot={{ fill: "#E50914", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#E50914" }}
                />
                <Line
                  type="monotone"
                  dataKey="chatActivity"
                  name="Group Chat Activity"
                  stroke="#6b6b6b"
                  strokeWidth={3}
                  dot={{ fill: "#6b6b6b", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#6b6b6b" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Insight box */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 p-4 bg-[#E50914]/10 border border-[#E50914]/30 rounded-lg"
          >
            <p className="text-sm text-muted-foreground">
              <span className="text-[#E50914] font-semibold">Key Insight:</span>{" "}
              {"The inverse correlation between workload and chat activity reveals a pattern: when there's real work to be done, the chat goes silent. When it's quiet, everyone becomes a critic."}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
