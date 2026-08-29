import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { LINKS } from "../config/links";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) errs.message = "Message should be at least 10 characters.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-8 bg-[var(--bg-alt)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
          <span className="chip">Contact</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          Let's build something <span className="text-gradient">meaningful.</span>
        </h2>
        <p className="text-[var(--muted)] max-w-lg mb-12">
          Have a role, project or idea in mind? I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
              { icon: LinkedinIcon, label: "LinkedIn", value: "shabari-shetty", href: LINKS.linkedin },
              { icon: GithubIcon, label: "GitHub", value: "shabari803", href: LINKS.github },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="cursor-hover flex items-center gap-4 glass rounded-xl p-4 hover:border-[var(--cyan)]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border-strong)] text-[var(--cyan)]">
                  <item.icon size={17} />
                </div>
                <div>
                  <p className="text-xs font-mono-ui text-[var(--muted-2)]">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <CheckCircle2 size={48} className="text-[var(--cyan)] mb-4" />
                  </motion.div>
                  <p className="font-display text-lg font-semibold mb-2">Message ready to send</p>
                  <p className="text-sm text-[var(--muted)] max-w-sm">
                    This form isn't connected to an email service yet, so please
                    reach out directly at{" "}
                    <a href={`mailto:${LINKS.email}`} className="text-[var(--cyan)] cursor-hover">
                      {LINKS.email}
                    </a>{" "}
                    and I'll get back to you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="cursor-hover mt-6 btn-ghost rounded-full px-5 py-2.5 text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono-ui text-[var(--muted)] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="cursor-hover w-full rounded-lg bg-white/[0.02] border border-[var(--border-strong)] px-4 py-3 text-sm focus:border-[var(--cyan)] outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono-ui text-[var(--muted)] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="cursor-hover w-full rounded-lg bg-white/[0.02] border border-[var(--border-strong)] px-4 py-3 text-sm focus:border-[var(--cyan)] outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono-ui text-[var(--muted)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="cursor-hover w-full rounded-lg bg-white/[0.02] border border-[var(--border-strong)] px-4 py-3 text-sm focus:border-[var(--cyan)] outline-none transition-colors resize-none"
                      placeholder="Tell me a bit about what you have in mind..."
                    />
                    {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="cursor-hover btn-primary rounded-full px-6 py-3 text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Send Message <Send size={15} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
