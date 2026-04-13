import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-24 border-t border-white/40 first:border-none">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 sm:mb-12"
      >
        <div className="section-line" />
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-ink-900 tracking-tight leading-tight">
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
