import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const data = {
  en: {
    title:    "Education & Certifications",
    subtitle: "A strong academic background complemented by specialized training in inclusive and special education.",
    eduLabel:  "Academic Background",
    certLabel: "Certifications & Volunteering",
    edu: [
      { icon: "🎓", title: "Master 1 — Teaching Diploma (Special Education)", meta: "Saint Joseph University, Ras Maska, Lebanon (2023–2024)" },
      { icon: "📖", title: "Bachelor's Degree — Special Education",           meta: "Faculty of Human Sciences CEULN (2020–2023)" },
      { icon: "🏫", title: "Lebanese Baccalaureate — Life Sciences",          meta: "ENGO, Tripoli (2014–2020)" },
    ],
    certs: [
      { icon: "👁",  text: "Braille literacy training (Mountada)" },
      { icon: "🧸",  text: "Modern methods for kindergarten education (IABC)" },
      { icon: "🎵",  text: "Music therapy training for children with special needs" },
      { icon: "🚒",  text: "Public safety & firefighting course (Lebanese Firefighters)" },
      { icon: "❤️", text: "Volunteer — مائدة المحبة الميناء (serving meals to the elderly)" },
      { icon: "🤲",  text: "Volunteer — تكافل (charitable organization)" },
    ],
  },
  fr: {
    title:    "Formation & Certifications",
    subtitle: "Un parcours académique solide, complété par des formations spécialisées en éducation inclusive.",
    eduLabel:  "Parcours académique",
    certLabel: "Certifications & Bénévolat",
    edu: [
      { icon: "🎓", title: "Master 1 — Diplôme d'Enseignement (Éducation Spécialisée)", meta: "Université Saint-Joseph, Ras Maska, Liban (2023–2024)" },
      { icon: "📖", title: "Licence — Éducation Spécialisée",                          meta: "Faculté des Sciences Humaines CEULN (2020–2023)" },
      { icon: "🏫", title: "Baccalauréat Libanais — Sciences de la Vie",               meta: "ENGO, Tripoli (2014–2020)" },
    ],
    certs: [
      { icon: "👁",  text: "Formation en alphabétisation Braille (Mountada)" },
      { icon: "🧸",  text: "Méthodes modernes pour l'éducation préscolaire (IABC)" },
      { icon: "🎵",  text: "Formation en musicothérapie pour enfants à besoins spéciaux" },
      { icon: "🚒",  text: "Sécurité publique & cours de lutte contre l'incendie" },
      { icon: "❤️", text: "Bénévole — مائدة المحبة الميناء (distribution de repas aux personnes âgées)" },
      { icon: "🤲",  text: "Bénévole — تكافل (organisation caritative)" },
    ],
  },
};

export default function Education() {
  const { lang } = useLanguage();
  const t = data[lang];

  return (
    <Section id="education" title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-mauve-400 to-blush-400 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg text-ink-900">{t.eduLabel}</span>
          </div>
          <div>
            {t.edu.map((e, i) => (
              <motion.div key={e.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.45 }}
                className="group relative flex items-start gap-4 py-4 border-b border-mauve-100/60 last:border-none hover:border-mauve-300 transition-colors"
              >
                <span className="pointer-events-none absolute left-0 bottom-0 h-[1.5px] w-0 rounded-full bg-gradient-to-r from-mauve-400 to-blush-400 transition-all duration-300 group-hover:w-full" />
                <span className="text-2xl flex-shrink-0 mt-0.5">{e.icon}</span>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-ink-800 leading-snug">{e.title}</div>
                  <div className="mt-1 text-xs sm:text-sm text-ink-500">{e.meta}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-lilac-300 to-mauve-400 flex items-center justify-center">
              <Award className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg text-ink-900">{t.certLabel}</span>
          </div>
          <div className="glass rounded-3xl overflow-hidden shadow-glass">
            {t.certs.map((c, i) => (
              <motion.div key={c.text}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="group flex items-start gap-3 px-5 py-3.5 border-b border-white/50 last:border-none hover:bg-mauve-50/50 transition-colors"
              >
                <span className="text-lg flex-shrink-0">{c.icon}</span>
                <span className="text-sm text-ink-600 leading-relaxed group-hover:text-ink-800 transition-colors">{c.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
