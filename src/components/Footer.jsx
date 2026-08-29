import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { LINKS } from "../config/links";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative px-6 md:px-8 pt-16 pb-10 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display text-xl font-semibold">
            Shabari Shetty<span className="text-gradient">.</span>
          </p>
          <p className="mt-1 text-sm font-mono-ui text-[var(--muted)]">
            Data Analyst · Full-Stack Developer · CSE Student
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="cursor-hover text-[var(--muted)] hover:text-[var(--cyan)] transition-colors" aria-label="GitHub">
            <GithubIcon size={19} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-hover text-[var(--muted)] hover:text-[var(--cyan)] transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={19} />
          </a>
          <a href={`mailto:${LINKS.email}`} className="cursor-hover text-[var(--muted)] hover:text-[var(--cyan)] transition-colors" aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[var(--border)] text-xs font-mono-ui text-[var(--muted-2)]">
        © 2026 Shabari Shetty
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16, pointerEvents: visible ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        className="cursor-hover fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--cyan)] shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
