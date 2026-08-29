import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import ProjectModal from "./ProjectModal";
import {
  DashboardVisual,
  SalesVisual,
  SentimentVisual,
  CareerQuestVisual,
} from "./ProjectVisual";
import { PROJECT_LINKS } from "../config/links";

const FILTERS = ["All", "Data Analytics", "AI / ML", "Full-Stack"];

const PROJECTS = [
  {
    id: "customer-behavior",
    title: "Customer Behavior Analysis",
    category: "Data Analytics",
    description:
      "Analyzed customer purchasing patterns, demographics, spending behavior and customer segments to identify meaningful business insights.",
    tech: ["Python", "SQL", "Power BI"],
    visual: DashboardVisual,
    problem: "Business stakeholders lacked a clear view of who their customers were and how their purchasing behavior varied across segments.",
    solution: "Combined SQL queries and Python analysis to segment customers by demographics and spending, then built a Power BI dashboard to present the findings.",
    features: [
      "Customer segmentation by demographics and spend",
      "Interactive Power BI dashboard",
      "SQL-based data extraction and aggregation",
    ],
    learned: "How to move from raw transactional data to a segmentation model, and how to present analytical findings in a way non-technical stakeholders can act on.",
    links: PROJECT_LINKS.customerBehavior,
  },
  {
    id: "diwali-sales",
    title: "Python Diwali Sales Analysis",
    category: "Data Analytics",
    description:
      "Performed exploratory data analysis on Diwali sales data to identify customer purchasing patterns, product trends and sales insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    visual: SalesVisual,
    problem: "Diwali sales data needed to be explored to understand which products and customer groups drove the most revenue during the festive season.",
    solution: "Used Pandas for cleaning and aggregation, then Matplotlib and Seaborn to visualize sales trends across products, age groups and regions.",
    features: [
      "End-to-end exploratory data analysis in Python",
      "Product and demographic trend charts",
      "Clear, presentation-ready visualizations",
    ],
    learned: "Practical EDA workflow — from cleaning messy sales data to communicating trends visually.",
    links: PROJECT_LINKS.diwaliSales,
  },
  {
    id: "sentiment-analysis",
    title: "AI Sentiment Analysis Tool",
    category: "AI / ML",
    description:
      "Built an AI-powered sentiment analysis application capable of analyzing text and identifying sentiment using modern NLP techniques.",
    tech: ["Python", "Streamlit", "NLP", "Transformers"],
    visual: SentimentVisual,
    problem: "Manually reading through text feedback to gauge sentiment doesn't scale.",
    solution: "Built a Streamlit app powered by transformer-based NLP models that classifies input text as positive, neutral or negative in real time.",
    features: [
      "Real-time text sentiment classification",
      "Transformer-based NLP model",
      "Simple, interactive Streamlit interface",
    ],
    learned: "How to apply modern NLP models to a practical use case and wrap them in an accessible interface.",
    links: PROJECT_LINKS.sentimentAnalysis,
  },
  {
    id: "careerquest",
    title: "CareerQuest",
    category: "Full-Stack",
    description:
      "Developed a web platform designed to help students prepare for company-specific interviews by organizing and presenting relevant interview preparation resources.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    visual: CareerQuestVisual,
    problem: "Students preparing for interviews often struggle to find organized, company-specific preparation material in one place.",
    solution: "Built a React-based web platform that organizes interview resources by company, making preparation more structured and focused.",
    features: [
      "Company-specific resource organization",
      "Clean, responsive React interface",
      "Structured navigation for interview prep",
    ],
    learned: "Structuring a full front-end application with React and translating a real student pain point into a usable product.",
    links: PROJECT_LINKS.careerQuest,
  },
];

function TiltCard({ project, onOpen }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const Visual = project.visual;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`,
    });
  };
  const reset = () => setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0) translateY(0)" });

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className="cursor-hover group card-tilt glass rounded-2xl p-6 flex flex-col transition-[transform] duration-150 ease-out hover:border-[var(--cyan)]/40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 group-hover:scale-[1.02] transition-transform duration-300">
        <Visual />
      </div>

      <span className="chip w-fit mb-3">{project.category}</span>
      <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => onOpen(project)}
          className="cursor-hover text-sm font-mono-ui text-[var(--cyan)] flex items-center gap-1 group/link"
        >
          Details
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </button>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="cursor-hover text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          aria-label={`${project.title} on GitHub`}
        >
          <GithubIcon size={18} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-8 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">Featured Projects</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Things I've <span className="text-gradient">built and shipped.</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`cursor-hover rounded-full px-4 py-2 text-xs sm:text-sm font-mono-ui transition-all border ${
                  filter === f
                    ? "border-[var(--cyan)] text-[var(--text)] bg-[var(--cyan)]/10"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--border-strong)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <TiltCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
