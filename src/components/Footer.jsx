import { BookOpen, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const wa   = "https://wa.me/96179170076";

  return (
    <footer className="border-t border-sage-100 bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-sage-600 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="font-display text-sm font-semibold text-ink-900">
                Step By Step Learning
              </div>
              <div className="text-xs text-ink-500 mt-0.5">Dana El Cheikh Mohamad</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-4 text-xs text-ink-500">
            <a href="#about"      className="hover:text-sage-700 transition">À propos</a>
            <a href="#services"   className="hover:text-sage-700 transition">Services</a>
            <a href="#contact"    className="hover:text-sage-700 transition">Contact</a>
            <a href={wa} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1 text-sage-600 hover:text-sage-700 font-medium transition">
              <FaWhatsapp className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-5 border-t border-sage-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <span>© {year} Dana El Cheikh Mohamad • Éducatrice Spécialisée</span>
          <span className="flex items-center gap-1">
            Fait avec <Heart className="h-3 w-3 text-red-400 fill-red-400" /> pour chaque enfant
          </span>
        </div>
      </div>
    </footer>
  );
}
