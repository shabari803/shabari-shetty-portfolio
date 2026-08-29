import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene"));

const MiniChart = () => {
  const points = "0,28 10,24 20,26 30,16 40,19 50,9 60,13 70,6 80,10 90,3";
  return (
    <svg viewBox="0 0 92 32" className="w-full h-8" fill="none">
      <motion.polyline
        points={points}
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
      />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-[var(--blue)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-[var(--violet)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

      <Suspense fallback={null}>
        <HeroScene reducedMotion={prefersReduced} />
      </Suspense>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-16 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="chip inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse" />
            Open to Data Analyst &amp; Full-Stack Roles
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Shabari Shetty</span>
          </h1>

          <p className="mt-4 font-mono-ui text-sm sm:text-base text-[var(--muted)] tracking-tight">
            Data Analyst &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; CSE Student
          </p>

          <p className="mt-6 max-w-lg text-[var(--muted)] text-base sm:text-lg leading-relaxed">
            Turning data into insights and ideas into intelligent, scalable
            digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => go("projects")}
              className="cursor-hover btn-primary rounded-full px-6 py-3 text-sm flex items-center gap-2"
            >
              View My Work <ArrowRight size={16} />
            </button>
            <button
              onClick={() => go("contact")}
              className="cursor-hover btn-ghost rounded-full px-6 py-3 text-sm flex items-center gap-2"
            >
              Let's Connect <Mail size={16} />
            </button>
          </div>

        </motion.div>

        {/* Photo + floating data column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm aspect-[4/5]"
          style={{
            transform: prefersReduced
              ? undefined
              : `rotateY(${mouse.x * 4}deg) rotateX(${-mouse.y * 4}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--cyan)]/25 via-[var(--blue)]/15 to-[var(--violet)]/25 blur-2xl" />

          <motion.div
            animate={prefersReduced ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-[2rem] glass p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden border border-white/10">
              <img
                src="/profile.jpg"
                alt="Portrait of Shabari Shetty"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-transparent to-transparent" />
            </div>

            {/* animated border ring */}
            <motion.div
              className="absolute -inset-[2px] rounded-[2rem] pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, var(--cyan), transparent 30%)",
                opacity: 0.5,
                mixBlendMode: "screen",
              }}
              animate={prefersReduced ? {} : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* floating skill tag */}
          <motion.div
            animate={prefersReduced ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -left-8 top-6 glass rounded-xl px-4 py-3 w-40 hidden sm:block"
          >
            <p className="chip mb-2">DATA</p>
            <ul className="text-xs text-[var(--muted)] font-mono-ui leading-6">
              <li>Python</li>
              <li>SQL</li>
              <li>Power BI</li>
            </ul>
          </motion.div>

          {/* floating analytics card */}
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-6 bottom-10 glass rounded-xl px-4 py-3 w-44 hidden sm:block"
          >
            <p className="chip mb-2">Analytics</p>
            <MiniChart />
            <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[90%] rounded-full" style={{ background: "linear-gradient(90deg, var(--cyan), var(--violet))" }} />
            </div>
          </motion.div>

          {/* floating insight badge */}
          <motion.div
            animate={prefersReduced ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute right-2 -top-6 glass rounded-full px-3 py-1.5 text-xs font-mono-ui text-[var(--cyan)] hidden sm:block"
          >
            insight ✓
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("about")}
        className="cursor-hover absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[var(--muted)] text-xs font-mono-ui tracking-widest"
        animate={prefersReduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll to explore
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
