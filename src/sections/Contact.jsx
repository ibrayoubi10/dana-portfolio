import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

const data = {
  en: {
    title:    "Let's Connect",
    subtitle: "Send a message anytime — WhatsApp is the fastest way to reach Dana.",
    heading:  "Reach out in one click.",
    subtext:  "WhatsApp is the fastest channel. Email is available for detailed requests.",
    waBtn:    "Message on WhatsApp",
    waText:   "Hello Dana, I saw your portfolio and I'd like to ask about a session.",
    responseLabel: "Response time",
    responseVal:   "Usually within 24 hours",
    locationLabel: "Location",
    locationVal:   "Tripoli, Lebanon · Online available",
    tip:      "Include the child's age and main learning difficulty for a faster response.",
    hours: [
      { day: "Monday – Friday", time: "By appointment" },
      { day: "Saturday",        time: "Morning sessions" },
      { day: "Zoom",            time: "Flexible hours" },
    ],
    availability: "Availability",
  },
  fr: {
    title:    "Prenons contact",
    subtitle: "Envoyez un message à tout moment — WhatsApp est le moyen le plus rapide.",
    heading:  "Contactez Dana en un clic.",
    subtext:  "WhatsApp est le canal le plus rapide. L'email est disponible pour les demandes détaillées.",
    waBtn:    "Écrire sur WhatsApp",
    waText:   "Bonjour Dana, j'ai vu votre portfolio et j'aimerais poser des questions sur une séance.",
    responseLabel: "Temps de réponse",
    responseVal:   "Généralement sous 24 h",
    locationLabel: "Localisation",
    locationVal:   "Tripoli, Liban · Séances en ligne",
    tip:      "Indiquez l'âge de l'enfant et sa principale difficulté pour une réponse plus rapide.",
    hours: [
      { day: "Lundi – Vendredi", time: "Sur rendez-vous" },
      { day: "Samedi",           time: "Sessions matinales" },
      { day: "Zoom",             time: "Horaires flexibles" },
    ],
    availability: "Disponibilité",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = data[lang];
  const waUrl    = `https://wa.me/96179170076?text=${encodeURIComponent(t.waText)}`;
  const emailUrl = "mailto:danaelcheikh.2002@gmail.com";

  return (
    <Section id="contact" title={t.title} subtitle={t.subtitle}>
      <div className="grid lg:grid-cols-5 gap-5 max-w-5xl">

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-4xl p-7 relative overflow-hidden shadow-glass"
        >
          <div className="blob pointer-events-none absolute -top-16 -right-16 h-44 w-44 bg-mauve-200/50" />
          <div className="blob pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 bg-blush-200/40" />

          <div className="relative">
            <h3 className="font-extrabold text-2xl sm:text-3xl text-ink-900 leading-tight">
              {t.heading.split(".")[0]}.<br />
              <span className="text-gradient">{t.heading.split(".")[1]?.trim()}</span>
            </h3>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed max-w-sm">{t.subtext}</p>

            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 hover:bg-[#1eb85a] transition shadow-soft hover:shadow-card">
              <FaWhatsapp className="h-5 w-5" />
              {t.waBtn}
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <InfoRow icon={<Clock className="h-4 w-4" />}  label={t.responseLabel} value={t.responseVal} />
              <InfoRow icon={<MapPin className="h-4 w-4" />} label={t.locationLabel} value={t.locationVal} />
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-mauve-50 to-blush-50 border border-mauve-100/60 p-4 text-sm text-mauve-700 leading-relaxed">
              💡 {t.tip}
            </div>
          </div>
        </motion.div>

        {/* Right tiles */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          <motion.a href={waUrl} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group glass rounded-3xl p-5 flex items-center gap-4 hover:shadow-glass transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-ink-800">WhatsApp</div>
              <div className="text-xs text-ink-500 mt-0.5">79 170 076</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-mauve-600 transition-colors flex-shrink-0" />
          </motion.a>

          <motion.a href={emailUrl}
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.17 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group glass rounded-3xl p-5 flex items-center gap-4 hover:shadow-glass transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-lilac-100 to-mauve-100 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-mauve-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-ink-800">Email</div>
              <div className="text-xs text-ink-500 mt-0.5 break-all">danaelcheikh.2002@gmail.com</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-mauve-600 transition-colors flex-shrink-0" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}
            className="glass rounded-3xl p-5 flex-1"
          >
            <div className="text-xs font-bold text-ink-500 uppercase tracking-widest mb-3">{t.availability}</div>
            {t.hours.map(({ day, time }) => (
              <div key={day} className="flex justify-between text-sm py-2 border-b border-mauve-50 last:border-none">
                <span className="text-ink-700 font-medium">{day}</span>
                <span className="text-ink-500">{time}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/40 px-4 py-3">
      <div className="mt-0.5 text-mauve-500 flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-ink-500">{label}</div>
        <div className="mt-0.5 text-sm text-ink-700 font-medium break-words">{value}</div>
      </div>
    </div>
  );
}
