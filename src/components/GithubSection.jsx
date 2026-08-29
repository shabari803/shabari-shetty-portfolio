import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { LINKS } from "../config/links";

export default function GithubSection() {
  return (
    <section className="relative py-24 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="chip mb-4 inline-block">Building Beyond the Portfolio</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
              This portfolio shows the highlights — <span className="text-gradient">GitHub shows the process.</span>
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Every project here is backed by real code and practical learning.
              Explore my repositories to see how these ideas were built, or
              connect with me on LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover btn-ghost rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2"
            >
              <GithubIcon size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover btn-primary rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2"
            >
              <LinkedinIcon size={17} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
