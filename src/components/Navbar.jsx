import { useState, useEffect } from "react";
import { Button } from "./Button.jsx";
import { BookOpen, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const nav = {
  en: {
    links: [
      { id: "about",      label: "About" },
      { id: "experience", label: "Experience" },
      { id: "education",  label: "Education" },
      { id: "approach",   label: "Approach" },
      { id: "services",   label: "Services" },
    ],
    tagline: "Special Education & Learning Support",
    cta:     "View Services",
    contact: "Contact",
    mobile:  "Get in Touch",
  },
  fr: {
    links: [
      { id: "about",      label: "À propos" },
      { id: "experience", label: "Expérience" },
      { id: "education",  label: "Formation" },
      { id: "approach",   label: "Méthode" },
      { id: "services",   label: "Services" },
    ],
    tagline: "Éducation Spécialisée & Soutien Scolaire",
    cta:     "Voir les services",
    contact: "Contact",
    mobile:  "Prendre contact",
  },
  ar: {
    links: [
      { id: "about",      label: "عن دانا" },
      { id: "experience", label: "الخبرة" },
      { id: "education",  label: "التعليم" },
      { id: "approach",   label: "المنهجية" },
      { id: "services",   label: "الخدمات" },
    ],
    tagline: "التربية الخاصة والدعم التعليمي",
    cta:     "استعرض الخدمات",
    contact: "تواصل",
    mobile:  "تواصلي معنا",
  },
};

const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = nav[lang] ?? nav.en;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={
        "sticky top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-white/40 bg-white/50 backdrop-blur-xl shadow-soft"
          : "bg-transparent")
      }>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">

          {/* ── Brand ── */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-mauve-500 to-blush-400 flex items-center justify-center shadow-glow-sm flex-shrink-0">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm sm:text-base text-ink-900 tracking-tight">
                Step By Step Learning
              </div>
              <div className="text-[11px] text-ink-500">{t.tagline}</div>
            </div>
          </div>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {t.links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="rounded-xl px-3.5 py-2 text-sm text-ink-500 hover:text-mauve-700 hover:bg-mauve-50/60 transition-all font-medium"
                type="button"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* ── Right: lang toggle + CTA ── */}
          <div className="flex items-center gap-2">

            {/* 3-language toggle */}
            <div className="lang-toggle">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  className={`lang-btn ${lang === code ? "active" : ""}`}
                  onClick={() => setLang(code)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>

            <Button variant="secondary" as="a" href="#contact"
              className="hidden sm:inline-flex text-xs px-4 py-2">
              {t.contact}
            </Button>
            <Button variant="primary" as="a" href="#services"
              className="hidden sm:inline-flex text-xs px-4 py-2">
              {t.cta}
            </Button>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-mauve-50/60 transition text-ink-700"
              onClick={() => setOpen(v => !v)}
              type="button"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {open && (
          <div className="md:hidden border-t border-white/40 bg-white/70 backdrop-blur-xl px-4 pb-4 pt-2 space-y-1">
            {t.links.map((l) => (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setOpen(false); }}
                className="w-full text-left rounded-xl px-3 py-2.5 text-sm text-ink-700 hover:bg-mauve-50 hover:text-mauve-700 transition font-medium"
                type="button"
              >
                {l.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 rounded-xl px-4 py-2.5 text-sm font-semibold btn-primary"
            >
              {t.mobile}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
