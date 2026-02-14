import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

const services = [
  {
    title: "1:1 Learning Support Sessions",
    desc: "Personalized sessions to strengthen learning strategies, confidence, and academic skills.",
    tag: "Core support",
  },
  {
    title: "Autism Support (Ages 5–12)",
    desc: "Tailored methods supporting communication, structured learning, and progress in key areas.",
    tag: "Neurodevelopment",
  },
  {
    title: "Curriculum Adaptation & IEP Support",
    desc: "Individual learning plans and adapted activities aligned with each child’s needs.",
    tag: "School alignment",
  },
  {
    title: "Primary School Tutoring (Ages 6–10)",
    desc: "One-on-one tutoring using motivating, step-by-step approaches to improve performance.",
    tag: "Academics",
  },
  {
    title: "Online Special Education Support",
    desc: "Remote sessions through Zoom for children abroad or in international schools.",
    tag: "Online",
  },
  {
    title: "Parent Guidance & Educational Counseling",
    desc: "Practical tools for home routines, motivation, and consistency between school and home.",
    tag: "Family",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Clear, structured support designed for children with learning difficulties—always adapted to the child’s pace."
    >
      {/* Removed the left “Structured support” card + removed icons */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group relative overflow-hidden hover:-translate-y-0.5 transition"
          >
            <div className="text-[11px] text-black/60 rounded-full border border-black/10 bg-white/60 px-2.5 py-1 inline-flex">
              {s.tag}
            </div>

            <div className="mt-3 font-display text-lg leading-snug">
              {s.title}
            </div>

            <p className="mt-2 text-sm text-black/70 leading-relaxed">
              {s.desc}
            </p>

            <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-teal/40 group-hover:w-16 transition-all" />
          </Card>
        ))}
      </div>
    </Section>
  );
}
