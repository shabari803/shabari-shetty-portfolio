import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";

export default function CertificationModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
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
            className="relative w-full max-w-md max-h-[85vh] overflow-y-auto glass rounded-2xl p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <button
              onClick={onClose}
              className="cursor-hover absolute top-5 right-5 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Close certificate details"
            >
              <X size={20} />
            </button>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border-strong)] text-[var(--cyan)] mb-5">
              <Award size={22} />
            </div>

            <h3 id="cert-modal-title" className="font-display text-xl md:text-2xl font-semibold mb-1">
              {cert.title}
            </h3>
            <p className="text-sm font-mono-ui text-[var(--muted)] mb-1">{cert.issuer}</p>
            <p className="chip w-fit mt-2 mb-5">{cert.date}</p>

            <p className="text-[var(--muted)] leading-relaxed mb-8">{cert.description}</p>

            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover btn-primary rounded-full px-5 py-2.5 text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Certificate <ExternalLink size={15} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
