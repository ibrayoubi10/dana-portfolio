import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

const quotes = [
  {
    text: "Dana is patient and professional. My child improved in confidence and school performance.",
    author: "Parent of a 7-year-old student",
  },
  {
    text: "Her methods are creative and adapted. We saw progress within weeks.",
    author: "Parent (Online tutoring)",
  },
  {
    text: "Dana understands learners with autism and works with kindness and structure.",
    author: "Parent of an 11-year-old student",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What Parents Say"
      subtitle="(These can be replaced with real testimonials whenever available.)"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {quotes.map((q) => (
          <Card key={q.author}>
            <p className="text-sm text-black/70 leading-relaxed">“{q.text}”</p>
            <div className="mt-4 text-xs text-black/55">{q.author}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
