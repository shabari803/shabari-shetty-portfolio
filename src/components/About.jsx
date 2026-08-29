import { motion } from "framer-motion";
import { Database, Sparkles, Code2, TrendingUp } from "lucide-react";

const STAGES = [
  { label: "Raw Data", icon: Database },
  { label: "Analysis", icon: TrendingUp },
  { label: "Insights", icon: Sparkles },
  { label: "Decisions", icon: Code2 },
];

const STATS = [
  { title: "CSE Student", desc: "Final-year, VTU" },
  { title: "Data Analytics", desc: "Python · SQL · Power BI" },
  { title: "Full-Stack Development", desc: "React · JavaScript" },
  { title: "Project-Based Learning", desc: "Building to learn" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              A Computer Science student who thinks in{" "}
              <span className="text-gradient">data and interfaces.</span>
            </h2>
            <p className="mt-6 text-[var(--muted)] text-base md:text-lg leading-relaxed">
              I'm a final-year Computer Science &amp; Engineering student with
              a strong interest in Data Analytics and Full-Stack Development.
              I enjoy working with data — cleaning it, exploring it, and
              shaping it into visuals and stories that make sense to people.
            </p>
            <p className="mt-4 text-[var(--muted)] text-base md:text-lg leading-relaxed">
              Alongside analytics, I build web applications end-to-end, and
              I'm continuously sharpening my technical and problem-solving
              skills through hands-on, project-based learning.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="cursor-hover glass rounded-xl p-4 hover:border-[var(--cyan)]/40 transition-colors"
                >
                  <p className="font-display text-sm md:text-base font-semibold">{s.title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)] font-mono-ui">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pipeline visualization */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="glass rounded-2xl p-8"
          >
            <p className="chip mb-8">From raw numbers to real decisions</p>
            <div className="relative flex flex-col gap-8">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--cyan)] via-[var(--blue)] to-[var(--violet)] opacity-40" />
              {STAGES.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex items-center gap-4"
                >
                  <div className="relative z-10 w-10 h-10 rounded-full glass flex items-center justify-center border border-[var(--border-strong)]">
                    <stage.icon size={17} className="text-[var(--cyan)]" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">{stage.label}</p>
                  </div>
                  {i < STAGES.length - 1 && (
                    <span className="ml-auto text-[var(--muted-2)] font-mono-ui text-xs hidden sm:block">
                      0{i + 1} → 0{i + 2}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
