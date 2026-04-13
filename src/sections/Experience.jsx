import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const data = {
  en: {
    title:    "Professional Experience",
    subtitle: "School-based and center-based experience, combined with consistent 1:1 private tutoring.",
    roles: [
      { emoji: "🏫", title: "Special Educator (Full-time)", place: "Rawdat Al Fayhaa School — Tripoli, Lebanon", time: "Current", current: true,
        bullets: ["Educating students with diverse needs including autism and intellectual disabilities in a parallel class setting.", "Implementing specialized instructional techniques to address individual learning challenges and promote inclusion."] },
      { emoji: "🧩", title: "Trainee Special Educator", place: "North Autism Center (NAC) — Zgharta, Lebanon", time: "Oct 2022 – Mar 2023", current: false,
        bullets: ["Delivered tailored lessons to children with autism aged 5–12.", "Adapted curriculum and provided individual sessions supporting successful learning completion."] },
      { emoji: "✏️", title: "Private Tutor", place: "1:1 & Online (Zoom)", time: "Mar 2019 – 2023", current: false,
        bullets: ["One-on-one lessons for children aged 6–10 with tailored strategies.", "Implemented individualized educational methods to meet each student's learning needs.", "Fostered a supportive environment to enhance academic growth and confidence."] },
      { emoji: "🌿", title: "Other Practical Traineeships", place: "Various Centers — Lebanon", time: "Nov 2021 – Jan 2023", current: false,
        bullets: ["Dar Al Tarbiya Wal Taalim (DTT) — Tripoli: Nov 2021 – Jan 2022", "Center of Life – College of Deddeh Brothers: Feb 2021 – Nov 2021", "Friends in Need: Jan 2023"] },
    ],
  },
  fr: {
    title:    "Expérience professionnelle",
    subtitle: "Expériences en milieu scolaire, en centres spécialisés et en tutorat individuel régulier.",
    roles: [
      { emoji: "🏫", title: "Éducatrice Spécialisée (temps plein)", place: "École Rawdat Al Fayhaa — Tripoli, Liban", time: "Poste actuel", current: true,
        bullets: ["Encadrement d'élèves aux besoins divers (autisme, handicap intellectuel) en classe parallèle.", "Mise en œuvre de techniques pédagogiques spécialisées pour répondre aux défis individuels et favoriser l'inclusion."] },
      { emoji: "🧩", title: "Stagiaire Éducatrice Spécialisée", place: "North Autism Center (NAC) — Zgharta, Liban", time: "Oct 2022 – Mar 2023", current: false,
        bullets: ["Cours personnalisés pour des enfants autistes âgés de 5 à 12 ans.", "Adaptation du programme et séances individuelles pour accompagner la réussite."] },
      { emoji: "✏️", title: "Enseignante particulière", place: "Cours 1:1 & en ligne (Zoom)", time: "Mars 2019 – 2023", current: false,
        bullets: ["Cours individuels pour des enfants de 6 à 10 ans avec des stratégies adaptées.", "Mise en place de méthodes pédagogiques personnalisées pour répondre aux besoins d'apprentissage.", "Création d'un environnement bienveillant favorisant la progression académique."] },
      { emoji: "🌿", title: "Autres stages pratiques", place: "Différents centres — Liban", time: "Nov 2021 – Jan 2023", current: false,
        bullets: ["Dar Al Tarbiya Wal Taalim (DTT) — Tripoli : Nov 2021 – Jan 2022", "Center of Life – Collège des Frères de Deddeh : Fév 2021 – Nov 2021", "Friends in Need : Jan 2023"] },
    ],
  },
};

export default function Experience() {
  const { lang } = useLanguage();
  const t = data[lang];

  return (
    <Section id="experience" title={t.title} subtitle={t.subtitle}>
      <div className="relative">
        <div className="absolute left-[21px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-mauve-300 via-blush-300/50 to-transparent hidden sm:block" />
        <div className="space-y-5">
          {t.roles.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex gap-5 sm:gap-6"
            >
              {/* Dot */}
              <div className="hidden sm:flex flex-shrink-0">
                <div className={
                  "h-11 w-11 rounded-2xl flex items-center justify-center text-lg z-10 " +
                  (r.current
                    ? "bg-gradient-to-br from-mauve-500 to-blush-400 shadow-glow-sm"
                    : "glass border border-white/70 shadow-soft")
                }>{r.emoji}</div>
              </div>

              {/* Card */}
              <div className="flex-1 glass rounded-3xl p-5 sm:p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-base sm:text-lg text-ink-900">{r.title}</div>
                    <div className="mt-0.5 text-sm text-ink-500">{r.place}</div>
                  </div>
                  <span className={
                    "flex-shrink-0 text-xs font-semibold rounded-full px-3 py-1 " +
                    (r.current
                      ? "bg-mauve-100 text-mauve-700 border border-mauve-200"
                      : "bg-white/60 text-ink-500 border border-white/60")
                  }>
                    {r.current && <span className="inline-block h-1.5 w-1.5 rounded-full bg-mauve-500 mr-1.5 animate-pulseRing" />}
                    {r.time}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-500">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mauve-400 flex-shrink-0" />
                      {b}
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
