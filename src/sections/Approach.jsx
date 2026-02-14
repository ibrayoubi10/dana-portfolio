import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Search, BookOpen, LineChart, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Educational Assessment",
    desc: (
      <>
        A complete assessment (3 to 4 sessions) to identify the child’s strengths and difficulties
        in language (Arabic, French, or English) and mathematics.
        <br />
        <br />
        A detailed report with recommendations for parents and the school is provided at the end of
        the process.
      </>
    ),
    icon: Search,
  },
  {
    title: "Personalized Learning Support",
    desc: (
      <>
        Individual sessions adapted to the child’s profile to work on:
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Reading</li>
          <li>Writing</li>
          <li>Reasoning</li>
          <li>Mathematics</li>
        </ul>
        <p className="mt-2">
          Each session lasts <span className="font-semibold">45 minutes</span> and includes a short
          discussion with parents.
        </p>
      </>
    ),
    icon: BookOpen,
  },
  {
    title: "Progress Review",
    desc: (
      <>
        After <span className="font-semibold">6 months</span> of support, a follow-up review is
        offered to parents and the school.
        <br />
        <br />
        It helps evaluate progress, adjust goals, and provide updated recommendations.
      </>
    ),
    icon: LineChart,
  },
];

export default function Approach() {
  return (
    <Section
      id="approach"
      title="Supporting Every Child Toward Academic Success"
      subtitle="I provide personalized educational support for children with learning difficulties or special educational needs—helping them build skills, confidence, and long-term progress."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Card key={s.title} className="group relative overflow-hidden">
              {/* subtle glow */}
              <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-brand-teal/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

              <div className="flex items-start justify-between gap-3">
                {/* icon */}
                <div className="h-10 w-10 rounded-2xl bg-white/70 border border-black/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>

                {/* step badge */}
                <div className="text-[11px] text-black/60 rounded-full border border-black/10 bg-white/60 px-2.5 py-1">
                  Step {idx + 1}
                </div>
              </div>

              <div className="mt-3 font-display text-base">{s.title}</div>

              <div className="mt-2 text-sm text-black/70 leading-relaxed">
                {s.desc}
              </div>

              {/* bottom accent line */}
              <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-teal/40 group-hover:w-16 transition-all" />
            </Card>
          );
        })}
      </div>

      {/* Final closing message */}
      <div className="mt-6 flex items-start gap-2 text-sm text-black/70">
        <Sparkles className="h-4 w-4 text-brand-coral mt-0.5" />
        <p className="leading-relaxed">
          A supportive and caring approach to help every child gain independence, confidence, and
          academic success.
        </p>
      </div>
    </Section>
  );
}
