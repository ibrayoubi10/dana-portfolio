import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";

const roles = [
  {
    title: "Special Educator (Full-time)",
    place: "Rawdat Al Fayhaa School — Tripoli, Lebanon",
    time: "Current",
    bullets: [
      "Educating students with diverse needs, including autism and intellectual disabilities, in a parallel class setting.",
      "Implementing specialized instructional techniques to address individual learning challenges and promote inclusion.",
    ],
  },
  {
    title: "Trainee Special Educator",
    place: "North Autism Center (NAC) — Zgharta, Lebanon",
    time: "Oct 2022 – Mar 2023",
    bullets: [
      "Delivered tailored lessons to children with autism aged 5–12.",
      "Adapted curriculum and provided individual sessions supporting successful completion.",
    ],
  },
  {
    title: "Private Tutor",
    place: "1:1 & Online (Zoom)",
    time: "Mar 2019 – 2023",
    bullets: [
      "One-on-one lessons for children aged 6–10 with tailored strategies.",
      "Online lessons for children with special needs in Saudi Arabia attending international schools.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="School-based and center-based experience, plus consistent 1:1 tutoring."
    >
      <div className="space-y-5">
        {roles.map((r) => (
          <Card key={r.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-display text-lg">{r.title}</div>
              <div className="text-xs text-black/55">{r.time}</div>
            </div>
            <div className="mt-1 text-sm text-black/70">{r.place}</div>
            <ul className="mt-4 space-y-2 text-sm text-black/70 list-disc pl-5">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
