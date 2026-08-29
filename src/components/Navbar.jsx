import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { LINKS } from "../config/links";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl transition-all duration-300 ${
            scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : ""
          }`}
        >
          <button
            onClick={() => go("home")}
            className="cursor-hover font-display font-semibold text-lg tracking-tight"
          >
            <span className="text-[var(--text)]">Shabari Shetty</span>
            <span className="text-gradient">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 font-mono-ui text-sm">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`cursor-hover nav-link ${active === s.id ? "active" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={LINKS.resume}
              download
              className="cursor-hover btn-ghost flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <button
            className="md:hidden cursor-hover text-[var(--text)]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              className="flex flex-col items-center justify-center h-full gap-8 font-display text-2xl"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {SECTIONS.map((s) => (
                <motion.button
                  key={s.id}
                  onClick={() => go(s.id)}
                  variants={{
                    closed: { opacity: 0, y: 16 },
                    open: { opacity: 1, y: 0 },
                  }}
                  className={active === s.id ? "text-gradient" : "text-[var(--text)]"}
                >
                  {s.label}
                </motion.button>
              ))}
              <a
                href={LINKS.resume}
                download
                className="btn-primary rounded-full px-6 py-3 text-base font-mono-ui"
              >
                Download Resume
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
