import type { Experience } from '~/lib/cv-data';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section>
      <h2 className="mb-1 font-700 text-13 text-gray12">Experience</h2>
      {experiences.map((exp, index) => (
        <div className="mb-4 flex flex-col gap-1 md:flex-row" key={index}>
          <div className="min-w-[180px] text-13 text-gray9">{exp.time}</div>
          <div>
            <a
              className="mb-1 inline-flex items-center gap-1 text-13 text-gray12 transition-colors duration-300 hover:text-gray12"
              href={exp.companyUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {exp.company}
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 16.5 16.5 7.5m0 0h-6.75m6.75 0v6.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p className="text-13 text-gray11">{exp.role}</p>
            <p className="text-13 text-gray11">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
