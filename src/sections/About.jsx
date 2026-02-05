import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

export default function About() {
  return (
    <Section
      id="about"
      title="Meet Dana"
      subtitle="Warm, structured support for children who struggle at school—built on personalized strategies and collaboration."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <Card className="lg:col-span-2">
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
        </Card>

        <Card>
          <div className="font-display text-lg">Highlights</div>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            <li>• Special Education Specialist</li>
            <li>• Autism & Intellectual Disabilities experience</li>
            <li>• Private tutoring (ages 6–10)</li>
            <li>• Online support for international students</li>
            <li>• French DELF B2 (High score)</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
