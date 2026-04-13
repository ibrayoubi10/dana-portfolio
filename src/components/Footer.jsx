import { BookOpen, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  en: {
    role:   "Special Educator",
    links:  [{ href: "#about", label: "About" }, { href: "#services", label: "Services" }, { href: "#contact", label: "Contact" }],
    copy:   "Special Educator · All rights reserved.",
    made:   "Made with",
    forAll: "for every child",
  },
  fr: {
    role:   "Éducatrice Spécialisée",
    links:  [{ href: "#about", label: "À propos" }, { href: "#services", label: "Services" }, { href: "#contact", label: "Contact" }],
    copy:   "Éducatrice Spécialisée · Tous droits réservés.",
    made:   "Fait avec",
    forAll: "pour chaque enfant",
  },
  ar: {
    role:   "معلّمة تربية خاصة",
    links:  [{ href: "#about", label: "عن دانا" }, { href: "#services", label: "الخدمات" }, { href: "#contact", label: "تواصل" }],
    copy:   "معلّمة تربية خاصة · جميع الحقوق محفوظة.",
    made:   "صُنع بكلّ",
    forAll: "لكلّ طفل",
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang] ?? content.en;
  const year = new Date().getFullYear();
  const wa   = "https://wa.me/96179170076";

  return (
    <footer className="border-t border-white/40 bg-white/25 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-mauve-500 to-blush-400 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm text-ink-900">Step By Step Learning</div>
              <div className="text-xs text-ink-500 mt-0.5">Dana El Cheikh · {t.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-ink-500">
            {t.links.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-mauve-600 transition">{label}</a>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1 text-mauve-600 hover:text-mauve-700 font-semibold transition">
              <FaWhatsapp className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-7 pt-5 border-t border-white/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <span>© {year} Dana El Cheikh Mohamad · {t.copy}</span>
          <span className="flex items-center gap-1">
            {t.made} <Heart className="h-3 w-3 text-blush-400 fill-blush-400" /> {t.forAll}
          </span>
        </div>
      </div>
    </footer>
  );
}
