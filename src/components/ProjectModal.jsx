import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-2xl p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              onClick={onClose}
              className="cursor-hover absolute top-5 right-5 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <span className="chip">{project.category}</span>
            <h3 id="project-modal-title" className="font-display text-2xl md:text-3xl font-semibold mt-4 mb-4">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <div className="space-y-5 text-sm md:text-base">
              <div>
                <p className="font-display font-semibold text-[var(--cyan)] mb-1">Problem</p>
                <p className="text-[var(--muted)] leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="font-display font-semibold text-[var(--cyan)] mb-1">Solution</p>
                <p className="text-[var(--muted)] leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="font-display font-semibold text-[var(--cyan)] mb-1">Key Features</p>
                <ul className="list-disc list-inside text-[var(--muted)] space-y-1">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display font-semibold text-[var(--cyan)] mb-1">What I Learned</p>
                <p className="text-[var(--muted)] leading-relaxed">{project.learned}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover btn-ghost rounded-full px-5 py-2.5 text-sm flex items-center gap-2"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover btn-primary rounded-full px-5 py-2.5 text-sm flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
