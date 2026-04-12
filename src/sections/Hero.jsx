import { motion } from "framer-motion";
import { BookOpen, MapPin, Star, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../components/Button.jsx";

/* ── Fade/slide in helper ── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const waUrl = `https://wa.me/96179170076?text=${encodeURIComponent(
    "Bonjour Dana, j'ai vu votre portfolio et j'aimerais en savoir plus sur vos séances."
  )}`;

  return (
    <section className="relative pt-10 sm:pt-16 pb-16 overflow-hidden">

      {/* ── Background decorative blobs ── */}
      <motion.div
        className="blob pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] bg-sage-100/70"
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob pointer-events-none absolute top-1/2 -left-40 h-[320px] w-[320px] bg-gold-100/60"
        animate={{ x: [0, -8, 0], y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-1.5 text-xs font-semibold text-sage-700">
              <span className="h-2 w-2 rounded-full bg-sage-500 animate-pulseRing" />
              Disponible • En présentiel &amp; En ligne
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.06)} className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-ink-900">
            Dana{" "}
            <span className="text-gradient">El Cheikh</span>
          </motion.h1>

          {/* Role */}
          <motion.p {...fadeUp(0.12)} className="mt-4 text-lg sm:text-xl text-ink-500 font-light">
            Éducatrice Spécialisée &nbsp;·&nbsp; Soutien scolaire &nbsp;·&nbsp; Éducation inclusive
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.18)} className="mt-5 text-sm sm:text-base text-ink-500 leading-relaxed max-w-lg">
            J'accompagne chaque enfant à son propre rythme avec des méthodes adaptées,
            un soutien individualisé et une collaboration étroite avec les familles.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="gap-2 px-6 py-3 text-base">
                <FaWhatsapp className="h-4 w-4" />
                Prendre contact
              </Button>
            </a>
            <Button variant="secondary" as="a" href="#services" className="px-6 py-3 text-base">
              Voir les services
            </Button>
          </motion.div>

          {/* Trust chips */}
          <motion.div {...fadeUp(0.30)} className="mt-8 flex flex-wrap gap-2">
            {[
              { icon: <Users className="h-3.5 w-3.5" />, text: "Enfants 3–12+ ans" },
              { icon: <MapPin className="h-3.5 w-3.5" />, text: "Tripoli, Liban" },
              { icon: <BookOpen className="h-3.5 w-3.5" />, text: "Arabe • Français • Anglais" },
              { icon: <Star className="h-3.5 w-3.5" />, text: "Plans personnalisés" },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-sage-200/80 bg-white/70 px-3 py-1.5 text-xs text-ink-600 font-medium"
              >
                <span className="text-sage-600">{icon}</span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Visual card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main card */}
            <div className="glass rounded-4xl shadow-hover p-8 border border-sage-100">

              {/* Avatar circle */}
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-sage-400 to-sage-700 flex items-center justify-center shadow-glow mb-6 animate-float">
                <span className="font-display text-3xl text-white font-bold select-none">D</span>
              </div>

              <div className="text-center">
                <div className="font-display text-2xl text-ink-900">Dana El Cheikh</div>
                <div className="mt-1 text-sm text-ink-500">M1 — Éducation Spécialisée · USJ</div>
              </div>

              {/* Stat row */}
              <div className="mt-7 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "5+", label: "Années d'expérience" },
                  { value: "1:1", label: "Séances individuelles" },
                  { value: "3+", label: "Langues" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-2xl bg-sage-50 border border-sage-100 py-3">
                    <div className="font-display text-xl text-sage-700 font-bold">{value}</div>
                    <div className="mt-1 text-[11px] text-ink-500 leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              {/* Specialties */}
              <div className="mt-6 space-y-2">
                {[
                  "Autisme & handicap intellectuel",
                  "Difficultés d'apprentissage",
                  "Soutien aux familles",
                  "Séances en ligne via Zoom",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-ink-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] text-white text-sm font-semibold py-3 hover:bg-[#20ba5c] transition shadow-soft"
              >
                <FaWhatsapp className="h-4 w-4" />
                Écrire sur WhatsApp
              </a>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-2xl shadow-card px-4 py-3 border border-sage-100"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🌟</span>
                <div>
                  <div className="text-xs font-semibold text-ink-900">Plans IEP adaptés</div>
                  <div className="text-[10px] text-ink-500">Chaque enfant est unique</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 glass rounded-2xl shadow-card px-4 py-3 border border-sage-100"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <div>
                  <div className="text-xs font-semibold text-ink-900">Présentiel &amp; Zoom</div>
                  <div className="text-[10px] text-ink-500">Disponible en ligne</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
