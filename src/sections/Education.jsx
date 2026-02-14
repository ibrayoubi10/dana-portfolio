import Section from "../components/Section.jsx";

function EduRow({ idx = 0, title, meta }) {
  return (
    <div
      className="
        group relative py-4 sm:py-5
        border-b border-black/10
        transition-ui duration-350 ease-soft
        hover:border-black/25
        motion-safe:animate-fadeUp
      "
      style={{ animationDelay: `${idx * 70}ms` }}
    >
      <span
        className="
          pointer-events-none absolute left-0 bottom-0 h-px w-0
          bg-primary/70
          transition-all duration-350 ease-soft
          group-hover:w-full
        "
      />

      <div className="flex items-start gap-3 sm:gap-4">
        <span
          className="
            mt-2.5 h-2 w-2 shrink-0 rounded-full
            bg-primary/60
            transition-ui duration-350 ease-soft
            group-hover:bg-primary group-hover:scale-110 group-hover:translate-x-0.5
          "
        />

        <div className="min-w-0 text-left">
          <div className="font-semibold text-text text-[15px] sm:text-base leading-snug">
            {title}
          </div>
          <div className="mt-1 text-sm text-muted leading-relaxed break-words">
            {meta}
          </div>
        </div>
      </div>
    </div>
  );
}

function CertItem({ idx = 0, children }) {
  return (
    <li
      className="
        group relative flex items-start gap-3 sm:gap-4 py-2.5
        transition-ui duration-350 ease-soft
        motion-safe:animate-fadeUp
      "
      style={{ animationDelay: `${idx * 55}ms` }}
    >
      <span
        className="
          pointer-events-none absolute left-0 top-3 h-0 w-[2px]
          bg-secondary/70 rounded-full
          transition-all duration-350 ease-soft
          group-hover:h-6
        "
      />

      <span
        className="
          mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60
          transition-ui duration-350 ease-soft
          group-hover:bg-secondary group-hover:scale-110 group-hover:translate-x-0.5
        "
      />

      <span className="min-w-0 text-[14px] sm:text-sm text-muted leading-relaxed break-words group-hover:text-text">
        {children}
      </span>
    </li>
  );
}

export default function Education() {
  const edu = [
    {
      title: "Master 1 — Teaching Diploma (Special Education)",
      meta: "Saint Joseph University, Ras Maska, Lebanon (2023–2024)",
    },
    {
      title: "Bachelor’s Degree — Special Education",
      meta: "Faculty of Human Sciences CEULN (2020–2023)",
    },
    {
      title: "Lebanese Baccalaureate — Life Sciences",
      meta: "ENGO, Tripoli (2014–2020)",
    },
  ];

  const certs = [
    "Braille literacy training (Mountada).",
    "Modern methods for kindergarten education (IABC).",
    "Music therapy training for children with special needs.",
    "Public safety & firefighting course (Lebanese firefighters).",
    "Volunteer at \"مائدة المحبة الميناء\" (serving food to the elderly).",
    "Volunteer at \"تكافل\" (charity organization).",
  ];

  return (
    <Section
      id="education"
      title="Education & Certifications"
      subtitle="Academic training plus specialized courses supporting inclusive education."
    >
      {/* mobile padding + limit line length */}
      <div className="mx-auto max-w-3xl lg:max-w-none">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <div className="font-display text-lg sm:text-xl text-text">
              Education
            </div>
            <div className="mt-3">
              {edu.map((e, i) => (
                <EduRow key={e.title} idx={i} title={e.title} meta={e.meta} />
              ))}
            </div>
          </div>

          <div className="text-left">
            <div className="font-display text-lg sm:text-xl text-text">
              Certifications
            </div>
            <ul className="mt-3">
              {certs.map((c, i) => (
                <CertItem key={c} idx={i}>
                  {c}
                </CertItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
