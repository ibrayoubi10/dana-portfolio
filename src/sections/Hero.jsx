import { motion } from "framer-motion";
import { BookOpen, MapPin, Star, Users, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../components/Button.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  en: {
    badge:    "Available · In-person & Online",
    role:     "Special Educator · Learning Support · Inclusive Education",
    desc:     "I guide each child at their own pace using adapted methods, individualized support, and close collaboration with families — because every child deserves to thrive.",
    cta1:     "Get in Touch",
    cta2:     "View Services",
    chips:    ["Ages 3–12+", "Tripoli, Lebanon", "Arabic · French · English", "Tailored Plans"],
    stats:    [{ v: "5+", l: "Years" }, { v: "1:1", l: "Sessions" }, { v: "3", l: "Languages" }],
    specs:    ["Autism & intellectual disabilities", "Learning difficulties", "Family guidance", "Online via Zoom"],
    waBtn:    "Message on WhatsApp",
    degree:   "M1 — Special Education · USJ",
    badge1t:  "Tailored IEP Plans",
    badge1s:  "Every child is unique",
    badge2t:  "In-person & Zoom",
    badge2s:  "Available online",
  },
  fr: {
    badge:    "Disponible · Présentiel & En ligne",
    role:     "Éducatrice Spécialisée · Soutien Scolaire · Éducation Inclusive",
    desc:     "J'accompagne chaque enfant à son rythme avec des méthodes adaptées, un soutien individualisé et une collaboration étroite avec les familles.",
    cta1:     "Prendre contact",
    cta2:     "Voir les services",
    chips:    ["3–12+ ans", "Tripoli, Liban", "Arabe · Français · Anglais", "Plans personnalisés"],
    stats:    [{ v: "5+", l: "Années" }, { v: "1:1", l: "Séances" }, { v: "3", l: "Langues" }],
    specs:    ["Autisme & handicap intellectuel", "Difficultés d'apprentissage", "Accompagnement familial", "Séances via Zoom"],
    waBtn:    "Écrire sur WhatsApp",
    degree:   "M1 — Éducation Spécialisée · USJ",
    badge1t:  "Plans IEP sur mesure",
    badge1s:  "Chaque enfant est unique",
    badge2t:  "Présentiel & Zoom",
    badge2s:  "Disponible en ligne",
  },
};

const chipIcons = [
  <Users className="h-3.5 w-3.5" />,
  <MapPin className="h-3.5 w-3.5" />,
  <BookOpen className="h-3.5 w-3.5" />,
  <Star className="h-3.5 w-3.5" />,
];

const fu = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];

  const waUrl = `https://wa.me/96179170076?text=${encodeURIComponent(
    lang === "fr"
      ? "Bonjour Dana, j'ai vu votre portfolio et j'aimerais en savoir plus."
      : "Hello Dana, I saw your portfolio and I'd like to learn more."
  )}`;

  return (
    <section className="relative pt-10 sm:pt-16 pb-16 overflow-hidden">

      {/* ── Large background blobs ── */}
      <motion.div
        className="blob absolute -top-40 -right-40 h-[500px] w-[500px] bg-lilac-200/50"
        animate={{ x: [0,14,0], y: [0,-12,0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute bottom-0 -left-48 h-[380px] w-[380px] bg-blush-100/60"
        animate={{ x: [0,-10,0], y: [0,14,0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute top-1/3 left-1/2 h-[260px] w-[260px] bg-mauve-200/30"
        animate={{ x: [0,8,0], y: [0,-8,0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── LEFT ── */}
        <div className="flex flex-col">

          {/* Availability badge */}
          <motion.div {...fu(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-mauve-200/70 bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-semibold text-mauve-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulseRing absolute inline-flex h-full w-full rounded-full bg-mauve-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mauve-500" />
              </span>
              {t.badge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fu(0.06)}
            className="font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-ink-900">
            Dana<br />
            <span className="text-gradient">El Cheikh</span>
          </motion.h1>

          {/* Role */}
          <motion.p {...fu(0.12)}
            className="mt-4 text-base sm:text-lg text-ink-500 font-light leading-relaxed">
            {t.role}
          </motion.p>

          {/* Description */}
          <motion.p {...fu(0.18)}
            className="mt-4 text-sm sm:text-base text-ink-500 leading-relaxed max-w-lg">
            {t.desc}
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fu(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="px-6 py-3 text-sm">
                <FaWhatsapp className="h-4 w-4" />
                {t.cta1}
              </Button>
            </a>
            <Button variant="secondary" as="a" href="#services" className="px-6 py-3 text-sm">
              {t.cta2}
            </Button>
          </motion.div>

          {/* Chips */}
          <motion.div {...fu(0.30)} className="mt-7 flex flex-wrap gap-2">
            {t.chips.map((text, i) => (
              <span key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-mauve-200/60 bg-white/55 backdrop-blur px-3 py-1.5 text-xs text-ink-600 font-medium">
                <span className="text-mauve-500">{chipIcons[i]}</span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Profile card ── */}
        <motion.div
          initial={{ opacity: 0, x: 32, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative">

            {/* Main card */}
            <div className="glass rounded-5xl shadow-glass glow-ring p-8">

              {/* Avatar */}
              <div className="relative mx-auto w-28 h-28 mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-mauve-400 via-blush-400 to-lilac-400 flex items-center justify-center shadow-glow animate-float">
                  <span className="font-extrabold text-4xl text-white select-none">D</span>
                </div>
                {/* Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/40 scale-110" />
                <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-gradient-to-br from-mauve-500 to-blush-400 border-2 border-white flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="text-center">
                <div className="font-bold text-2xl text-ink-900">Dana El Cheikh</div>
                <div className="mt-1 text-sm text-ink-500">{t.degree}</div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {t.stats.map(({ v, l }) => (
                  <div key={l} className="glass-dark rounded-2xl py-3 text-center">
                    <div className="font-extrabold text-xl text-gradient-2">{v}</div>
                    <div className="mt-0.5 text-[11px] text-ink-500 leading-tight">{l}</div>
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div className="mt-5 space-y-2">
                {t.specs.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-ink-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-mauve-400 to-blush-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] text-white text-sm font-semibold py-3 hover:bg-[#1eb85a] transition shadow-soft">
                <FaWhatsapp className="h-4 w-4" />
                {t.waBtn}
              </a>
            </div>

            {/* Floating badge — bottom left */}
            <motion.div
              className="absolute -bottom-5 -left-5 glass rounded-2xl shadow-glass px-4 py-3 border border-white/70"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🌟</span>
                <div>
                  <div className="text-xs font-bold text-ink-900">{t.badge1t}</div>
                  <div className="text-[10px] text-ink-500">{t.badge1s}</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute -top-5 -right-5 glass rounded-2xl shadow-glass px-4 py-3 border border-white/70"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📚</span>
                <div>
                  <div className="text-xs font-bold text-ink-900">{t.badge2t}</div>
                  <div className="text-[10px] text-ink-500">{t.badge2s}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
