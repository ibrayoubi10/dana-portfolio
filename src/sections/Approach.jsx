import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { Search, BookOpen, LineChart } from "lucide-react";

const steps = [
  {
    emoji: "🔍",
    icon:   Search,
    title:  "Évaluation éducative",
    badge:  "Étape 1",
    color:  "bg-sage-50 border-sage-200",
    iconBg: "bg-sage-100",
    iconColor: "text-sage-600",
    desc: (
      <>
        Une évaluation complète (3 à 4 séances) pour identifier les forces et les difficultés de
        l'enfant en langage (arabe, français ou anglais) et en mathématiques.
        <br /><br />
        Un rapport détaillé avec des recommandations pour les parents et l'école est fourni à l'issue du processus.
      </>
    ),
  },
  {
    emoji: "📚",
    icon:   BookOpen,
    title:  "Soutien pédagogique personnalisé",
    badge:  "Étape 2",
    color:  "bg-gold-100/40 border-gold-200",
    iconBg: "bg-gold-100",
    iconColor: "text-amber-600",
    desc: (
      <>
        Séances individuelles adaptées au profil de l'enfant pour travailler&nbsp;:
        <ul className="mt-2 space-y-1">
          {["Lecture", "Écriture", "Raisonnement", "Mathématiques"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Chaque séance dure <span className="font-semibold text-ink-800">45 minutes</span> et inclut
          un bref échange avec les parents.
        </p>
      </>
    ),
  },
  {
    emoji: "📈",
    icon:   LineChart,
    title:  "Bilan de progression",
    badge:  "Étape 3",
    color:  "bg-sage-50 border-sage-200",
    iconBg: "bg-sage-100",
    iconColor: "text-sage-600",
    desc: (
      <>
        Après <span className="font-semibold text-ink-800">6 mois</span> d'accompagnement, un bilan
        de suivi est proposé aux parents et à l'école.
        <br /><br />
        Il permet d'évaluer les progrès, d'ajuster les objectifs et de fournir des recommandations mises à jour.
      </>
    ),
  },
];

export default function Approach() {
  return (
    <Section
      id="approach"
      title="Accompagner chaque enfant vers la réussite"
      subtitle="Un soutien éducatif personnalisé pour les enfants ayant des difficultés d'apprentissage — pour développer leurs compétences, leur confiance et une progression durable."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={
                "group glass rounded-3xl p-6 border card-hover relative overflow-hidden " + s.color
              }
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sage-300/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Header */}
              <div className="flex items-start justify-between gap-3 relative">
                <div className={`h-11 w-11 rounded-2xl ${s.iconBg} flex items-center justify-center shadow-soft`}>
                  <Icon className={`h-5 w-5 ${s.iconColor}`} />
                </div>
                <span className="text-[11px] font-semibold rounded-full border border-sage-200 bg-white/60 px-3 py-1 text-ink-500">
                  {s.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative mt-4 font-display text-base sm:text-lg text-ink-900 leading-snug">
                {s.title}
              </h3>

              {/* Desc */}
              <div className="relative mt-2 text-sm text-ink-500 leading-relaxed">
                {s.desc}
              </div>

              {/* Accent line */}
              <div className="relative mt-5 h-[2px] w-8 rounded-full bg-sage-400 group-hover:w-14 transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>

      {/* Closing note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-7 glass rounded-2xl border border-sage-100 px-5 py-4 flex items-start gap-3"
      >
        <span className="text-xl flex-shrink-0">💚</span>
        <p className="text-sm text-ink-600 leading-relaxed">
          Une approche bienveillante et structurée pour aider chaque enfant à gagner en autonomie,
          en confiance et en réussite scolaire.
        </p>
      </motion.div>
    </Section>
  );
}
