import { Button } from "./Button.jsx";
import { BookOpen, Sparkles } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-black/5 bg-white/55 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-white/75 border border-black/5 shadow-soft flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-brand-teal" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm sm:text-base">Dana El Cheikh Mohamad</div>
            <div className="text-xs text-black/60 flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" /> Special Educator
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="rounded-2xl px-3 py-2 text-sm text-black/70 hover:bg-white/60 hover:text-black transition"
              type="button"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" as="a" href="#contact">
            Book a Session
          </Button>
          <Button variant="primary" as="a" href="#contact">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
