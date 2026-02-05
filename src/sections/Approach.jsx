import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

const steps = [
  { title: "Observation & Assessment", desc: "Understand strengths, challenges, and learning style." },
  { title: "Personalized Plan", desc: "Set clear, achievable goals and a structured path." },
  { title: "Targeted Sessions", desc: "Adapted activities, motivating tools, and consistent methods." },
  { title: "Progress Tracking", desc: "Monitor improvement and adjust strategies over time." },
  { title: "Family & Teacher Collaboration", desc: "Consistency between home and school for better results." },
];

export default function Approach() {
  return (
    <Section
      id="approach"
      title="How Sessions Work"
      subtitle="A clear framework that keeps support structured, calm, and measurable."
    >
      <div className="grid lg:grid-cols-5 gap-4">
        {steps.map((s, idx) => (
          <Card key={s.title} className="lg:col-span-1">
            <div className="text-xs text-black/50">Step {idx + 1}</div>
            <div className="mt-2 font-display text-base">{s.title}</div>
            <p className="mt-2 text-sm text-black/70">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
