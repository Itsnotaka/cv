interface ExperienceItemProps {
  role: string;
  company: string;
  companyUrl?: string;
  time: string;
  description: string;
}

export function ExperienceItem({
  company,
  companyUrl,
  time,
  description,
}: ExperienceItemProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row items-center gap-x-1">
        <h3 className="font-600 text-13 text-high-contrast leading-20">
          {companyUrl ? (
            <a
              className="hover:underline"
              href={companyUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p className="text-13 leading-20 opacity-50">{time}</p>
      </div>
      <p className="text-13 leading-20 opacity-75">{description}</p>
    </div>
  );
}
