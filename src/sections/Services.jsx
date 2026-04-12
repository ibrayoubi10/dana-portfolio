import { motion } from "framer-motion";
import Section from "../components/Section.jsx";

const services = [
  {
    emoji: "🧑‍🏫",
    title: "Séances de soutien individuel (1:1)",
    desc:  "Des séances personnalisées pour renforcer les stratégies d'apprentissage, la confiance et les compétences académiques.",
    tag:   "Soutien principal",
    color: "bg-sage-50 border-sage-200",
    tagColor: "text-sage-700 bg-sage-100",
  },
  {
    emoji: "🧩",
    title: "Soutien autisme (5–12 ans)",
    desc:  "Méthodes adaptées soutenant la communication, l'apprentissage structuré et la progression dans les domaines clés.",
    tag:   "Neurodéveloppement",
    color: "bg-gold-100/40 border-gold-200",
    tagColor: "text-amber-800 bg-gold-100",
  },
  {
    emoji: "📋",
    title: "Adaptation du programme & PEI",
    desc:  "Plans d'apprentissage individualisés (PEI/IEP) et activités adaptées aux besoins spécifiques de chaque enfant.",
    tag:   "Alignement scolaire",
    color: "bg-sage-50 border-sage-200",
    tagColor: "text-sage-700 bg-sage-100",
  },
  {
    emoji: "✏️",
    title: "Cours particuliers primaire (6–10 ans)",
    desc:  "Tutorat individuel avec des approches motivantes et progressives pour améliorer les performances scolaires.",
    tag:   "Académique",
    color: "bg-cream-100/60 border-cream-300",
    tagColor: "text-ink-700 bg-cream-200",
  },
  {
    emoji: "💻",
    title: "Soutien spécialisé en ligne",
    desc:  "Séances à distance via Zoom pour les enfants à l'étranger ou dans des écoles internationales.",
    tag:   "En ligne",
    color: "bg-gold-100/40 border-gold-200",
    tagColor: "text-amber-800 bg-gold-100",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Accompagnement parental",
    desc:  "Outils pratiques pour les routines à domicile, la motivation et la cohérence entre l'école et la maison.",
    tag:   "Famille",
    color: "bg-sage-50 border-sage-200",
    tagColor: "text-sage-700 bg-sage-100",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      title="Services proposés"
      subtitle="Un soutien clair et structuré conçu pour les enfants ayant des difficultés d'apprentissage — toujours adapté au rythme de l'enfant."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={
              "group glass rounded-3xl p-6 border card-hover cursor-default " + s.color
            }
          >
            {/* Emoji icon */}
            <div className="text-3xl mb-4">{s.emoji}</div>

            {/* Tag */}
            <span className={`text-[11px] font-semibold rounded-full px-2.5 py-1 ${s.tagColor}`}>
              {s.tag}
            </span>

            {/* Title */}
            <h3 className="mt-3 font-display text-base sm:text-lg text-ink-900 leading-snug">
              {s.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              {s.desc}
            </p>

            {/* Accent line */}
            <div className="mt-5 h-[2px] w-8 rounded-full bg-sage-400 group-hover:w-14 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 glass rounded-3xl border border-sage-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <p className="text-sm font-semibold text-ink-800">
            Besoin d'un service sur mesure ?
          </p>
          <p className="text-xs text-ink-500 mt-0.5">
            Contactez Dana pour discuter des besoins spécifiques de votre enfant.
          </p>
        </div>
        <a
          href={`https://wa.me/96179170076?text=${encodeURIComponent("Bonjour Dana, j'aimerais discuter d'un soutien pour mon enfant.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-2xl bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#20ba5c] transition shadow-soft"
        >
          💬 Discuter sur WhatsApp
        </a>
      </motion.div>
    </Section>
  );
}
