import Section from "../components/Section.jsx";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Special Education Specialist",
  "Autism & Intellectual Disabilities experience",
  "Private tutoring (ages 6–10)",
  "Online support for international students",
];

export default function About() {
  return (
    <Section
      id="about"
      title="Meet Dana"
      subtitle="Warm, structured support for children who struggle at school—built on personalized strategies and collaboration."
    >
      {/* No Card layout */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Text */}
        <div className="lg:col-span-7">
          <p className="text-sm sm:text-base text-black/70 leading-relaxed">
            I am a Special Educator dedicated to supporting children who experience learning
            difficulties and developmental challenges. My goal is to help each child progress at
            their own pace while building self-confidence, independence, and motivation.
          </p>

          <p className="mt-4 text-sm sm:text-base text-black/70 leading-relaxed">
            I work closely with families and educators to create supportive learning environments,
            using adapted teaching methods and individualized plans to make learning more accessible
            and meaningful.
          </p>
        </div>

        {/* Highlights (simple, clean) */}
        <div className="lg:col-span-5">
          <div className="font-display text-base">Highlights</div>

          <ul className="mt-3 space-y-3 text-sm text-black/70">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-teal" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 h-[2px] w-12 rounded-full bg-brand-teal/40" />
        </div>
      </div>
    </Section>
  );
}