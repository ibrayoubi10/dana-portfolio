import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

export default function Education() {
  return (
    <Section
      id="education"
      title="Education & Certifications"
      subtitle="Academic training plus specialized courses supporting inclusive education."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <Card>
          <div className="font-display text-lg">Education</div>
          <div className="mt-4 space-y-3 text-sm text-black/70">
            <div>
              <div className="font-semibold">Master 1 — Teaching Diploma (Special Education)</div>
              <div>Saint Joseph University, Ras Maska, Lebanon (2023–2024)</div>
            </div>
            <div>
              <div className="font-semibold">Bachelor’s Degree — Special Education</div>
              <div>Faculty of Human Sciences CEULN (2020–2023)</div>
            </div>
            <div>
              <div className="font-semibold">Lebanese Baccalaureate — Life Sciences</div>
              <div>ENGO, Tripoli (2014–2020)</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="font-display text-lg">Certifications</div>
          <ul className="mt-4 space-y-2 text-sm text-black/70 list-disc pl-5">
            <li>Braille literacy training (Mountada).</li>
            <li>Modern methods for kindergarten education (IABC).</li>
            <li>Music therapy training for children with special needs.</li>
            <li>Public safety & firefighting course (Lebanese firefighters).</li>
            <li>Volunteer at "مائدة المحبة الميناء" (serving food to the elderly).</li>
            <li>Volunteer at "تكافل" (charity organization).</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
