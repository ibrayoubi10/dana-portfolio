import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { Heart, CheckCircle2 } from "lucide-react";

const highlights = [
  "Spécialiste de l'éducation adaptée",
  "Expérience avec l'autisme & handicap intellectuel",
  "Cours particuliers (6–10 ans)",
  "Soutien en ligne pour élèves internationaux",
];

const values = [
  { emoji: "🌱", title: "Bienveillance",     desc: "Un environnement sécurisé et encourageant." },
  { emoji: "🎯", title: "Personnalisation",  desc: "Chaque plan est conçu pour l'enfant." },
  { emoji: "🤝", title: "Collaboration",     desc: "Un partenariat étroit avec les familles." },
];

export default function About() {
  return (
    <Section
      id="about"
      title="À propos de Dana"
      subtitle="Un soutien chaleureux et structuré pour les enfants en difficulté scolaire — fondé sur des stratégies personnalisées et une collaboration étroite."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">

        {/* ── Text ── */}
        <div className="lg:col-span-7 space-y-5">
          <p className="text-sm sm:text-base text-ink-500 leading-relaxed">
            Je suis éducatrice spécialisée, passionnée par l'accompagnement des enfants qui
            rencontrent des difficultés d'apprentissage ou des défis développementaux. Mon objectif
            est d'aider chaque enfant à progresser à son propre rythme, tout en renforçant sa
            confiance en soi, son autonomie et sa motivation.
          </p>

          <p className="text-sm sm:text-base text-ink-500 leading-relaxed">
            Je travaille en étroite collaboration avec les familles et les enseignants pour créer
            des environnements d'apprentissage adaptés, en utilisant des méthodes pédagogiques
            individualisées pour rendre l'apprentissage accessible et porteur de sens.
          </p>

          {/* Values row */}
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {values.map(({ emoji, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-4 border border-sage-100/80"
              >
                <div className="text-2xl mb-2">{emoji}</div>
                <div className="text-sm font-semibold text-ink-800">{title}</div>
                <div className="mt-1 text-xs text-ink-500 leading-relaxed">{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Highlights ── */}
        <div className="lg:col-span-5">
          <div className="glass rounded-3xl p-6 border border-sage-100">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-sage-600" />
              <span className="font-semibold text-ink-800 text-sm">Points forts</span>
            </div>

            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sage-500 flex-shrink-0" />
                  <span className="text-sm text-ink-600">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-2xl bg-sage-50 border border-sage-100 text-xs text-sage-700 leading-relaxed">
              💬 Séances disponibles en <strong>arabe, français et anglais</strong> — en présentiel
              à Tripoli ou à distance via Zoom.
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
