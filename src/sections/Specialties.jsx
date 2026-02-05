import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

const items = [
  "Learning difficulties & academic delays",
  "Autism Spectrum Disorder (ASD)",
  "Intellectual disabilities",
  "Attention & focus challenges",
  "Reading, writing, and comprehension support",
  "School-related stress and confidence building",
];

export default function Specialties() {
  return (
    <Section
      id="specialties"
      title="Who I Support"
      subtitle="Each child is unique. Support is built around strengths, challenges, and a clear, realistic plan."
    >
      <Card>
        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((t) => (
            <div key={t} className="rounded-2xl bg-white/70 border border-black/5 p-4 text-sm text-black/70">
              {t}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
