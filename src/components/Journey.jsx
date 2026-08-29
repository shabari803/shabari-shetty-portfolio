import { motion } from "framer-motion";
import { GraduationCap, LineChart, Code2, FolderGit2 } from "lucide-react";

const ITEMS = [
  {
    icon: GraduationCap,
    title: "Computer Science & Engineering",
    subtitle: "Final-year student, VTU",
    desc: "Building a strong foundation across programming, data structures, databases and modern computing coursework.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    subtitle: "Self-driven learning",
    desc: "Learning Python, SQL and Power BI, and applying exploratory data analysis to real datasets.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    subtitle: "Self-driven learning",
    desc: "Developing with HTML, CSS, JavaScript and React.js to build complete, usable web applications.",
  },
  {
    icon: FolderGit2,
    title: "Projects & Practical Experience",
    subtitle: "Ongoing",
    desc: "Turning what I learn into projects — from analytics dashboards to a full web platform — as the primary way I build practical experience.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">My Journey</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14">
          Where I've been <span className="text-gradient">focusing my time.</span>
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--cyan)] via-[var(--blue)] to-[var(--violet)] opacity-40" />
          <div className="space-y-12">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full glass border border-[var(--border-strong)] flex items-center justify-center">
                  <item.icon size={15} className="text-[var(--cyan)]" />
                </div>
                <p className="font-mono-ui text-xs text-[var(--muted-2)] mb-1">{item.subtitle}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed max-w-xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
