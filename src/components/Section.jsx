import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="font-display text-2xl sm:text-3xl tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-black/70">
            {subtitle}
          </p>
        ) : null}
      </motion.div>
      {children}
    </section>
  );
}
