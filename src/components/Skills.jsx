import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database, FileSpreadsheet, BarChart3, LineChart, Sigma, Rows3,
  Braces, Coffee, FileCode2, Globe, Palette, Layers,
  GitBranch, TerminalSquare,
} from "lucide-react";
import { GithubIcon, FigmaIcon } from "./BrandIcons";

const GROUPS = [
  {
    key: "analytics",
    title: "Data Analytics",
    accent: "var(--cyan)",
    skills: [
      { name: "Python", icon: FileCode2 },
      { name: "SQL", icon: Database },
      { name: "Power BI", icon: BarChart3 },
      { name: "Pandas", icon: Rows3 },
      { name: "NumPy", icon: Sigma },
      { name: "Matplotlib", icon: LineChart },
      { name: "Seaborn", icon: LineChart },
      { name: "Data Visualization", icon: FileSpreadsheet },
      { name: "Exploratory Data Analysis", icon: BarChart3 },
    ],
  },
  {
    key: "programming",
    title: "Programming",
    accent: "var(--blue)",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "Python", icon: FileCode2 },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    key: "webdev",
    title: "Full-Stack / Web",
    accent: "var(--violet)",
    skills: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React.js", icon: Layers },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    accent: "var(--cyan)",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GithubIcon },
      { name: "VS Code", icon: TerminalSquare },
      { name: "Figma", icon: FigmaIcon },
    ],
  },
];

function SkillCard({ skill, accent }) {
  const Icon = skill.icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="cursor-hover group relative glass rounded-xl p-4 flex flex-col items-center gap-3 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 0%, ${accent}22, transparent 70%)` }}
      />
      <div
        className="relative w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border-strong)] group-hover:scale-110 transition-transform"
        style={{ color: accent }}
      >
        <Icon size={18} />
      </div>
      <span className="relative text-xs font-mono-ui text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState(GROUPS[0].key);
  const active = GROUPS.find((g) => g.key === tab);

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-8 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">Skills</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
          Tools I reach for, <span className="text-gradient">grouped by craft.</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {GROUPS.map((g) => (
            <button
              key={g.key}
              onClick={() => setTab(g.key)}
              className={`cursor-hover rounded-full px-4 py-2 text-sm font-mono-ui transition-all border ${
                tab === g.key
                  ? "border-[var(--cyan)] text-[var(--text)] bg-[var(--cyan)]/10"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--border-strong)]"
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {active.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} accent={active.accent} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
