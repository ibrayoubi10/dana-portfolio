import { useState, useEffect } from "react";
import { Button } from "./Button.jsx";
import { BookOpen, Menu, X } from "lucide-react";

const links = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "approach",   label: "Approach" },
  { id: "services",   label: "Services" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={
          "sticky top-0 z-50 transition-all duration-300 " +
          (scrolled
            ? "border-b border-mauve-100 bg-pearl-50/90 backdrop-blur shadow-soft"
            : "bg-transparent")
        }
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">

          {/* ── Brand ── */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-mauve-600 flex items-center justify-center shadow-soft">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm sm:text-base text-ink-900 font-semibold">
                Step By Step Learning
              </div>
              <div className="text-[11px] text-ink-500">
                Special Education &amp; Learning Support
              </div>
            </div>
          </div>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="rounded-xl px-3 py-2 text-sm text-ink-500 hover:text-mauve-700 hover:bg-mauve-50 transition font-medium"
                type="button"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="flex items-center gap-2">
            <Button variant="secondary" as="a" href="#contact" className="hidden sm:inline-flex text-xs px-4 py-2">
              📩 Contact
            </Button>
            <Button variant="primary" as="a" href="#services" className="text-xs px-4 py-2">
              View Services
            </Button>
            {/* Hamburger */}
            <button
              className="md:hidden ml-1 p-2 rounded-xl hover:bg-mauve-50 transition text-ink-700"
              onClick={() => setOpen((v) => !v)}
              type="button"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {open && (
          <div className="md:hidden border-t border-mauve-100 bg-pearl-50/95 backdrop-blur px-4 pb-4 pt-2 space-y-1">
            {links.map((l) => (
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
              Get in Touch
            </a>
          </div>
        )}
      </header>
    </>
  );
}
