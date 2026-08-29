import { motion } from "framer-motion";

const Bars = ({ values, color }) => (
  <div className="flex items-end gap-1.5 h-16">
    {values.map((v, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${v}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
        className="w-3 rounded-t-sm"
        style={{ background: color }}
      />
    ))}
  </div>
);

const Donut = ({ pct = 68, color = "var(--cyan)" }) => {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16">
      <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
      <motion.circle
        cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * pct) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        transform="rotate(-90 32 32)"
      />
    </svg>
  );
};

export function DashboardVisual() {
  return (
    <div className="grid grid-cols-3 gap-3 items-end">
      <div className="col-span-2 glass rounded-lg p-3">
        <p className="chip mb-2">Spend by segment</p>
        <Bars values={[40, 65, 50, 80, 60, 92, 70]} color="var(--cyan)" />
      </div>
      <div className="glass rounded-lg p-3 flex flex-col items-center justify-center">
        <p className="chip mb-2">Retention</p>
        <Donut pct={72} color="var(--blue)" />
      </div>
      <div className="col-span-3 flex gap-2">
        {["Segment A", "Segment B", "Segment C"].map((s) => (
          <span key={s} className="chip flex-1 text-center">{s}</span>
        ))}
      </div>
    </div>
  );
}

export function SalesVisual() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="glass rounded-lg p-3">
        <p className="chip mb-2">Sales by product</p>
        <Bars values={[55, 80, 35, 95, 60]} color="var(--violet-soft)" />
      </div>
      <div className="glass rounded-lg p-3 flex flex-col items-center justify-center">
        <p className="chip mb-2">Age group share</p>
        <Donut pct={54} color="var(--violet)" />
      </div>
    </div>
  );
}

export function SentimentVisual() {
  return (
    <div className="glass rounded-lg p-4">
      <p className="chip mb-3">Text input</p>
      <div className="font-mono-ui text-xs text-[var(--muted)] border border-[var(--border)] rounded-md p-2 mb-4">
        "The product quality exceeded expectations..."
      </div>
      <div className="flex gap-2">
        {[
          { label: "Positive", pct: 78, color: "var(--cyan)" },
          { label: "Neutral", pct: 15, color: "var(--muted)" },
          { label: "Negative", pct: 7, color: "var(--violet)" },
        ].map((s) => (
          <div key={s.label} className="flex-1">
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-1">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <span className="text-[10px] font-mono-ui text-[var(--muted)]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CareerQuestVisual() {
  return (
    <div className="glass rounded-lg p-4">
      <div className="flex gap-2 mb-3">
        {["Amazon", "TCS", "Infosys"].map((c) => (
          <span key={c} className="chip">{c}</span>
        ))}
      </div>
      <div className="space-y-2">
        {[70, 45, 90].map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[10px] font-mono-ui text-[var(--muted)] w-14">Round {i + 1}</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--cyan), var(--blue))" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
