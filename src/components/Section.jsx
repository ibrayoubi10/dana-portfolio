import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 sm:py-20 border-t border-sage-100/60 first:border-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        {/* Section label line */}
        <div className="section-line mb-5" />

        <h2 className="font-display text-2xl sm:text-3xl text-ink-900 tracking-tight leading-snug">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-ink-500 leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {children}
    </section>
  );
}
