import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { Briefcase } from "lucide-react";

const roles = [
  {
    emoji: "🏫",
    title: "Éducatrice Spécialisée (temps plein)",
    place: "École Rawdat Al Fayhaa — Tripoli, Liban",
    time:  "Poste actuel",
    current: true,
    bullets: [
      "Encadrement d'élèves aux besoins divers (autisme, handicap intellectuel) en classe parallèle.",
      "Mise en œuvre de techniques pédagogiques spécialisées pour répondre aux défis individuels et favoriser l'inclusion.",
    ],
  },
  {
    emoji: "🧩",
    title: "Stagiaire Éducatrice Spécialisée",
    place: "North Autism Center (NAC) — Zgharta, Liban",
    time:  "Oct 2022 – Mar 2023",
    current: false,
    bullets: [
      "Cours personnalisés pour des enfants autistes âgés de 5 à 12 ans.",
      "Adaptation du programme et séances individuelles pour accompagner la réussite.",
    ],
  },
  {
    emoji: "✏️",
    title: "Enseignante particulière",
    place: "Cours 1:1 &amp; en ligne (Zoom)",
    time:  "Mars 2019 – 2023",
    current: false,
    bullets: [
      "Cours individuels pour des enfants de 6 à 10 ans avec des stratégies adaptées.",
      "Mise en place de méthodes pédagogiques personnalisées pour répondre aux besoins d'apprentissage.",
      "Création d'un environnement bienveillant favorisant la progression académique.",
    ],
  },
  {
    emoji: "🌿",
    title: "Autres stages pratiques",
    place: "Différents centres — Liban",
    time:  "Nov 2021 – Jan 2023",
    current: false,
    bullets: [
      "Dar Al Tarbiya Wal Taalim (DTT) — Tripoli : Nov 2021 – Jan 2022",
      "Center of Life – Collège des Frères de Deddeh : Fév 2021 – Nov 2021",
      "Friends in Need : Jan 2023",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Expérience professionnelle"
      subtitle="Expériences en milieu scolaire, en centres spécialisés et en tutorat individuel régulier."
    >
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[22px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-sage-300 via-sage-200 to-transparent hidden sm:block" />

        <div className="space-y-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex gap-5 sm:gap-6"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-shrink-0 flex-col items-center">
                <div className={
                  "h-11 w-11 rounded-2xl flex items-center justify-center text-lg z-10 " +
                  (r.current
                    ? "bg-sage-600 shadow-glow"
                    : "bg-white border border-sage-200 shadow-soft")
                }>
                  {r.emoji}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 glass rounded-3xl p-5 sm:p-6 border border-sage-100/80 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="font-display text-base sm:text-lg text-ink-900">{r.title}</div>
                    <div
                      className="mt-0.5 text-sm text-ink-500"
                      dangerouslySetInnerHTML={{ __html: r.place }}
                    />
                  </div>
                  <span className={
                    "flex-shrink-0 text-xs font-medium rounded-full px-3 py-1 " +
                    (r.current
                      ? "bg-sage-100 text-sage-700 border border-sage-200"
                      : "bg-cream-100 text-ink-600 border border-cream-300")
                  }>
                    {r.current && <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage-500 mr-1.5 animate-pulseRing" />}
                    {r.time}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-500">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
