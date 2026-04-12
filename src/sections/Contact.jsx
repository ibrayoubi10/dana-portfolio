import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const waText = encodeURIComponent(
    "Bonjour Dana, j'ai vu votre portfolio et j'aimerais vous poser des questions sur une séance."
  );
  const waUrl    = `https://wa.me/96179170076?text=${waText}`;
  const emailUrl = "mailto:danaelcheikh.2002@gmail.com";

  return (
    <Section
      id="contact"
      title="Prenons contact"
      subtitle="Envoyez un message à tout moment — WhatsApp est le moyen le plus rapide."
    >
      <div className="grid lg:grid-cols-5 gap-6 max-w-5xl">

        {/* ── Left: main CTA card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-3xl border border-sage-100 p-7 relative overflow-hidden"
        >
          {/* Background blobs */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 blob bg-sage-100/80" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 blob bg-gold-100/60" />

          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl text-ink-900 leading-tight">
              Contactez Dana<br />
              <span className="text-gradient">en un clic.</span>
            </h3>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed max-w-sm">
              WhatsApp est le canal le plus rapide. L'email est disponible pour les
              demandes détaillées.
            </p>

            {/* Primary WhatsApp button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 hover:bg-[#20ba5c] transition shadow-soft hover:shadow-hover"
            >
              <FaWhatsapp className="h-5 w-5" />
              Écrire sur WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Info chips */}
            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <InfoRow
                icon={<Clock className="h-4 w-4" />}
                label="Temps de réponse"
                value="Généralement sous 24 h"
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Localisation"
                value="Tripoli, Liban • Séances en ligne"
              />
            </div>

            {/* Tip box */}
            <div className="mt-5 rounded-2xl bg-sage-50 border border-sage-100 p-4 text-sm text-sage-700 leading-relaxed">
              💡 <strong>Conseil :</strong> Indiquez l'âge de l'enfant et sa principale difficulté
              pour une réponse plus rapide.
            </div>
          </div>
        </motion.div>

        {/* ── Right: contact tiles ── */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* WhatsApp tile */}
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group glass rounded-3xl border border-sage-100 p-5 flex items-center gap-4 hover:border-sage-300 transition-colors"
          >
            <div className="h-12 w-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-ink-800">WhatsApp</div>
              <div className="text-xs text-ink-500 mt-0.5">79 170 076</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-sage-600 transition-colors flex-shrink-0" />
          </motion.a>

          {/* Email tile */}
          <motion.a
            href={emailUrl}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.17 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group glass rounded-3xl border border-sage-100 p-5 flex items-center gap-4 hover:border-sage-300 transition-colors"
          >
            <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-amber-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-ink-800">Email</div>
              <div className="text-xs text-ink-500 mt-0.5 break-all">
                danaelcheikh.2002@gmail.com
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-sage-600 transition-colors flex-shrink-0" />
          </motion.a>

          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="glass rounded-3xl border border-sage-100 p-5"
          >
            <div className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-3">
              Disponibilité
            </div>
            {[
              { day: "Lundi – Vendredi", time: "Sur rendez-vous" },
              { day: "Samedi",           time: "Sessions matinales" },
              { day: "Zoom",             time: "Horaires flexibles" },
            ].map(({ day, time }) => (
              <div key={day} className="flex justify-between text-sm py-1.5 border-b border-sage-50 last:border-none">
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
    <div className="flex items-start gap-3 rounded-2xl border border-sage-100 bg-white/60 px-4 py-3">
      <div className="mt-0.5 text-sage-600 flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-ink-500">{label}</div>
        <div className="mt-0.5 text-sm text-ink-700 font-medium break-words">{value}</div>
      </div>
    </div>
  );
}
