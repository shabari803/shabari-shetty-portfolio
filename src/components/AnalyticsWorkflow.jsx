import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Sparkles, Search, BarChart2, LineChart, Lightbulb } from "lucide-react";

const STAGES = [
  {
    key: "collect",
    label: "Collect",
    icon: Download,
    desc: "Gather data from files, databases and APIs, understanding its source and structure before touching it.",
  },
  {
    key: "clean",
    label: "Clean",
    icon: Sparkles,
    desc: "Handle missing values, duplicates, inconsistent formats and prepare reliable datasets.",
  },
  {
    key: "explore",
    label: "Explore",
    icon: Search,
    desc: "Profile the data — distributions, outliers and relationships — to build early intuition.",
  },
  {
    key: "analyze",
    label: "Analyze",
    icon: BarChart2,
    desc: "Apply statistical thinking and Python/SQL to answer specific business questions.",
  },
  {
    key: "visualize",
    label: "Visualize",
    icon: LineChart,
    desc: "Turn results into clear charts and Power BI dashboards that are easy to read at a glance.",
  },
  {
    key: "insight",
    label: "Insight",
    icon: Lightbulb,
    desc: "Summarize what the data means and what action it points to.",
  },
];

export default function AnalyticsWorkflow() {
  const [active, setActive] = useState(STAGES[0].key);
  const activeStage = STAGES.find((s) => s.key === active);

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">Workflow</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
          How I <span className="text-gradient">work with data.</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl mb-12">
          Click or hover a stage to see what it involves.
        </p>

        <div className="grid md:grid-cols-6 gap-3">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = active === stage.key;
            return (
              <motion.button
                key={stage.key}
                onMouseEnter={() => setActive(stage.key)}
                onClick={() => setActive(stage.key)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`cursor-hover relative rounded-xl p-5 text-left transition-all border ${
                  isActive
                    ? "border-[var(--cyan)] bg-[var(--cyan)]/10"
                    : "border-[var(--border)] glass hover:border-[var(--border-strong)]"
                }`}
              >
                <span className="font-mono-ui text-[10px] text-[var(--muted-2)]">
                  0{i + 1}
                </span>
                <Icon
                  size={20}
                  className="mt-2 mb-3"
                  style={{ color: isActive ? "var(--cyan)" : "var(--muted)" }}
                />
                <p className="font-display text-sm font-semibold">{stage.label}</p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-6 glass rounded-2xl p-6 md:p-8"
          >
            <p className="font-display text-lg font-semibold text-gradient mb-2">
              {activeStage.label}
            </p>
            <p className="text-[var(--muted)] max-w-2xl leading-relaxed">
              {activeStage.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
