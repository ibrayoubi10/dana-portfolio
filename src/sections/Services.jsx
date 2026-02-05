import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { GraduationCap, Puzzle, ClipboardList, Laptop, Users, BookOpen } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "1:1 Learning Support Sessions",
    desc: "Personalized sessions to strengthen learning strategies, confidence, and academic skills.",
  },
  {
    icon: Puzzle,
    title: "Autism Support (Ages 5–12)",
    desc: "Tailored methods supporting communication, structured learning, and progress in key areas.",
  },
  {
    icon: ClipboardList,
    title: "Curriculum Adaptation & IEP Support",
    desc: "Individual learning plans and adapted activities aligned with each child’s needs.",
  },
  {
    icon: BookOpen,
    title: "Primary School Tutoring (Ages 6–10)",
    desc: "One-on-one tutoring using motivating, step-by-step approaches to improve performance.",
  },
  {
    icon: Laptop,
    title: "Online Special Education Support",
    desc: "Remote sessions through Zoom for children abroad or in international schools.",
  },
  {
    icon: Users,
    title: "Parent Guidance & Educational Counseling",
    desc: "Practical tools for home routines, motivation, and consistency between school and home.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Clear, structured support designed for children with learning difficulties—always adapted to the child’s pace."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Card key={s.title} className="group hover:-translate-y-0.5 transition">
            <div className="h-11 w-11 rounded-2xl bg-brand-teal/10 flex items-center justify-center">
              <s.icon className="h-5 w-5 text-brand-teal" />
            </div>
            <div className="mt-4 font-display text-lg">{s.title}</div>
            <p className="mt-2 text-sm text-black/70">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
