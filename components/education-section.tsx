import type { Education } from "~/lib/cv-data";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section>
      <h2 className="mb-1 font-700 text-13 text-gray12">Education</h2>
      {education.map((edu) => (
        <div
          className="mb-3 flex flex-col gap-1 md:flex-row"
          key={`${edu.institution}-${edu.time}`}
        >
          <div className="min-w-[180px] text-13 text-gray9">{edu.time}</div>
          <div>
            <p className="mb-1 text-13 text-gray12">{edu.degree}</p>
            <p className="text-13 text-gray11">{edu.institution}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
