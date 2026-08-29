import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../config/links";
import CertificationModal from "./CertificationModal";

function CertCard({ cert, onOpen }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`,
    });
  };
  const reset = () =>
    setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0) translateY(0)" });

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
      onClick={() => onOpen(cert)}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border-strong)] text-[var(--cyan)] mb-5 group-hover:scale-110 group-hover:border-[var(--cyan)] transition-transform">
        <Award size={19} />
      </div>

      <h3 className="font-display text-base font-semibold mb-1 leading-snug">
        {cert.title}
      </h3>
      <p className="text-sm text-[var(--muted)] font-mono-ui mb-3">{cert.issuer}</p>
      <span className="chip w-fit mb-4">{cert.date}</span>

      <p className="text-sm text-[var(--muted)] leading-relaxed mb-6 flex-1">
        {cert.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-mono-ui text-[var(--cyan)] flex items-center gap-1 group/link">
          View Certificate
          <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="relative py-28 md:py-36 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">Certifications</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
          Credentials that back up{" "}
          <span className="text-gradient">what I know.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <CertCard key={cert.title} cert={cert} onOpen={setActive} />
          ))}
        </div>
      </div>

      <CertificationModal cert={active} onClose={() => setActive(null)} />
    </section>
  );
}
