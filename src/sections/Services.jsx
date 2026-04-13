import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const data = {
  en: {
    title:    "Services Offered",
    subtitle: "Clear, structured support designed for children with learning difficulties — always adapted to the child's own pace and needs.",
    services: [
      { emoji: "🧑‍🏫", title: "1:1 Learning Support Sessions", desc: "Personalized sessions to strengthen learning strategies, build confidence, and improve academic skills.", tag: "Core Support" },
      { emoji: "🧩", title: "Autism Support (Ages 5–12)",      desc: "Tailored methods supporting communication, structured learning, and progress in key developmental areas.", tag: "Neurodevelopment" },
      { emoji: "📋", title: "Curriculum Adaptation & IEP",     desc: "Individualized learning plans and adapted activities aligned with each child's specific needs.", tag: "School Alignment" },
      { emoji: "✏️", title: "Primary Tutoring (Ages 6–10)",    desc: "One-on-one tutoring using motivating, step-by-step approaches to improve academic performance.", tag: "Academics" },
      { emoji: "💻", title: "Online Special Ed. Support",       desc: "Remote sessions via Zoom for children abroad or attending international schools.", tag: "Online" },
      { emoji: "👨‍👩‍👧", title: "Parent Guidance & Counseling", desc: "Practical tools for home routines, motivation strategies, and school-home consistency.", tag: "Family" },
    ],
    ctaTitle: "Need a tailored service?",
    ctaDesc:  "Reach out to Dana to discuss your child's specific needs.",
    ctaBtn:   "Chat on WhatsApp",
  },
  fr: {
    title:    "Services proposés",
    subtitle: "Un soutien clair et structuré pour les enfants ayant des difficultés d'apprentissage — toujours adapté au rythme de l'enfant.",
    services: [
      { emoji: "🧑‍🏫", title: "Séances de soutien individuel (1:1)", desc: "Séances personnalisées pour renforcer les stratégies d'apprentissage, la confiance et les compétences académiques.", tag: "Soutien principal" },
      { emoji: "🧩", title: "Soutien autisme (5–12 ans)",            desc: "Méthodes adaptées soutenant la communication, l'apprentissage structuré et la progression dans les domaines clés.", tag: "Neurodéveloppement" },
      { emoji: "📋", title: "Adaptation du programme & PEI",         desc: "Plans d'apprentissage individualisés et activités adaptées aux besoins spécifiques de chaque enfant.", tag: "Alignement scolaire" },
      { emoji: "✏️", title: "Cours particuliers primaire (6–10 ans)", desc: "Tutorat individuel avec des approches motivantes et progressives pour améliorer les performances scolaires.", tag: "Académique" },
      { emoji: "💻", title: "Soutien spécialisé en ligne",            desc: "Séances à distance via Zoom pour les enfants à l'étranger ou dans des écoles internationales.", tag: "En ligne" },
      { emoji: "👨‍👩‍👧", title: "Accompagnement parental",             desc: "Outils pratiques pour les routines à domicile, la motivation et la cohérence entre l'école et la maison.", tag: "Famille" },
    ],
    ctaTitle: "Besoin d'un service sur mesure ?",
    ctaDesc:  "Contactez Dana pour discuter des besoins spécifiques de votre enfant.",
    ctaBtn:   "Discuter sur WhatsApp",
  },
};

const tagColors = [
  "bg-mauve-100 text-mauve-700",
  "bg-blush-100 text-blush-500",
  "bg-lilac-100 text-lilac-500",
  "bg-mauve-50  text-mauve-600",
  "bg-blush-50  text-blush-500",
  "bg-lilac-50  text-lilac-500",
];

export default function Services() {
  const { lang } = useLanguage();
  const t = data[lang];
  const waUrl = `https://wa.me/96179170076?text=${encodeURIComponent(
    lang === "fr"
      ? "Bonjour Dana, j'aimerais discuter d'un soutien pour mon enfant."
      : "Hello Dana, I'd like to discuss support for my child."
  )}`;

  return (
    <Section id="services" title={t.title} subtitle={t.subtitle}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group glass rounded-3xl p-6 card-hover cursor-default"
          >
            <div className="text-3xl mb-4">{s.emoji}</div>
            <span className={`text-[11px] font-bold rounded-full px-2.5 py-1 ${tagColors[i]}`}>
              {s.tag}
            </span>
            <h3 className="mt-3 font-bold text-base text-ink-900 leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.desc}</p>
            <div className="mt-5 h-[2px] w-8 rounded-full bg-gradient-to-r from-mauve-400 to-blush-400 group-hover:w-14 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 glass rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <p className="text-sm font-bold text-ink-800">{t.ctaTitle}</p>
          <p className="text-xs text-ink-500 mt-0.5">{t.ctaDesc}</p>
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-2xl bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#1eb85a] transition shadow-soft">
          💬 {t.ctaBtn}
        </a>
      </motion.div>
    </Section>
  );
}
