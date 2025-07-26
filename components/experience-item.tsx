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
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-x-1 items-center">
        <h3 className="font-600 text-14 text-high-contrast leading-20">
          {companyUrl ? (
            <a
              href={companyUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p className="opacity-50 text-14 leading-20">{time}</p>
      </div>
      <p className="opacity-75 text-14 leading-20">{description}</p>
    </div>
  );
}
