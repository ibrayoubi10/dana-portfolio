import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 pb-10">
      <div className="grid gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          {/* Name */}
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight leading-[1.05]">
            Dana{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
              El Cheikh
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mt-3 text-sm sm:text-base text-black/70">
            Special Educator • Learning Support • Inclusive Education
          </div>

          {/* Attractive non-card overview */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 relative overflow-hidden rounded-3xl border border-black/10 bg-white/45 backdrop-blur shadow-soft"
          >
            {/* animated glow blobs */}
            <motion.div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-teal/20 blur-3xl"
              animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-coral/15 blur-3xl"
              animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-xs text-black/70">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/70 border border-black/10">
                    <Sparkles className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="font-semibold">Quick Overview</span>
                </div>

                <div className="text-xs text-black/60 rounded-full border border-black/10 bg-white/60 px-3 py-1">
                  Available • On-site & Online
                </div>
              </div>

              <p className="mt-3 text-sm text-black/70 leading-relaxed max-w-2xl">
                Special Educator offering 1:1 learning support, autism-focused sessions, curriculum
                adaptation, and parent guidance—on-site and online.
              </p>

              {/* Stats as chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <InfoChip label="Focus" value="Children (3–12+)" />
                <InfoChip label="Languages" value="Arabic • French • English" />
                <InfoChip label="Sessions" value="On-site & Online" />
                <InfoChip label="Strength" value="Personalized Plans" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoChip({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl border border-black/10 bg-white/65 px-4 py-2"
    >
      <div className="text-[11px] text-black/60">{label}</div>
      <div className="text-sm font-semibold text-black/80">{value}</div>
    </motion.div>
  );
}
