import { motion } from "framer-motion";
import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { CheckCircle2, Sparkles } from "lucide-react";

const bullets = [
  "Support for children with learning difficulties",
  "Experience with autism and intellectual disabilities",
  "Personalized strategies, progress tracking, and family collaboration",
];

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 pb-10">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-2xl glass px-3 py-1.5 text-xs text-black/70 shadow-soft">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-xl bg-brand-teal/15">
              <Sparkles className="h-3.5 w-3.5 text-brand-teal" />
            </span>
            Tripoli, Lebanon • Online support available
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight leading-[1.05]">
            Helping Children Learn with{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
              Confidence
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-brand-coral to-brand-blue bg-clip-text text-transparent">
              Joy
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-black/70 leading-relaxed">
            I support children facing learning difficulties through personalized educational
            strategies, inclusive teaching, and structured interventions—especially for learners
            with autism and diverse needs.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" as="a" href="#contact">
              Book a Session
            </Button>
            <Button variant="secondary" as="a" href="#services">
              Explore Services
            </Button>
          </div>

          <div className="mt-6 space-y-2">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-2 text-sm text-black/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-teal" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-brand-teal/20 blur-3xl animate-float" />
          <div className="absolute -bottom-14 -left-14 h-64 w-64 rounded-full bg-brand-coral/15 blur-3xl animate-float" />

          <Card className="relative overflow-hidden">
            <div className="font-display text-xl">Quick Overview</div>
            <p className="mt-2 text-sm text-black/70 leading-relaxed">
              Special Educator offering 1:1 learning support, autism-focused sessions, curriculum
              adaptation, and parent guidance—on-site and online.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <MiniStat label="Focus" value="Children (5–12+)" />
              <MiniStat label="Languages" value="Arabic • French • English" />
              <MiniStat label="Sessions" value="On-site & Online" />
              <MiniStat label="Strength" value="Personalized Plans" />
            </div>

            <div className="mt-6 rounded-2xl bg-white/60 border border-black/5 p-4">
              <div className="text-sm font-semibold">Contact</div>
              <div className="mt-2 text-sm text-black/70 space-y-1">
                <div>Phone: +961 76 170 79</div>
                <div>Email: danaelcheikh.2002@gmail.com</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/55 border border-black/5 p-4">
      <div className="text-xs text-black/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
