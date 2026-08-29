import { motion, AnimatePresence } from "framer-motion";

const NAME = "SHABARI SHETTY";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[var(--bg)] bg-grid overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* ambient glow behind the name */}
          <motion.div
            className="pointer-events-none absolute w-[28rem] h-[28rem] rounded-full bg-[var(--cyan)]/15 blur-[110px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="pointer-events-none absolute w-[22rem] h-[22rem] rounded-full bg-[var(--violet)]/15 blur-[110px] translate-x-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          />

          {/* thin rotating ring accent */}
          <motion.div
            className="pointer-events-none absolute w-64 h-64 rounded-full border border-[var(--cyan)]/20"
            style={{ borderTopColor: "var(--cyan)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-mono-ui tracking-[0.35em] text-2xl md:text-4xl text-gradient"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.035, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="relative mt-4 font-mono-ui text-xs md:text-sm text-[var(--muted)] tracking-[0.35em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            DATA <span className="text-[var(--cyan)]">×</span> CODE{" "}
            <span className="text-[var(--cyan)]">×</span> INSIGHTS
          </motion.p>

          <motion.div
            className="relative mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <motion.div
              className="h-full w-1/3 rounded-full"
              style={{ background: "linear-gradient(90deg, var(--cyan), var(--blue), var(--violet))" }}
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
