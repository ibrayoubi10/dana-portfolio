import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

const faqs = [
  { q: "Do you offer online sessions?", a: "Yes. Online sessions are available through Zoom." },
  { q: "What age group do you work with?", a: "Mostly children between 5 and 12+, depending on needs." },
  { q: "How long is a session?", a: "Typically 45 minutes to 1 hour." },
  { q: "Do you work with children with autism?", a: "Yes. I have experience supporting children with autism and intellectual disabilities." },
  { q: "Do you provide learning plans?", a: "Yes. Personalized plans can be created based on the child’s profile and goals." },
];

export default function FAQ() {
  return (
    <Section id="faq" title="FAQ" subtitle="Quick answers for parents and schools.">
      <div className="grid lg:grid-cols-2 gap-5">
        {faqs.map((f) => (
          <Card key={f.q}>
            <div className="font-display text-base">{f.q}</div>
            <p className="mt-2 text-sm text-black/70">{f.a}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
