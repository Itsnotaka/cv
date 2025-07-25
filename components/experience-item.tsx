interface ExperienceItemProps {
  role: string;
  company: string;
  time: string;
  description: string;
}

export function ExperienceItem({
  role,
  company,
  time,
  description,
}: ExperienceItemProps) {
  return (
    <div className="group">
      <div className="mb-1 flex items-baseline justify-between gap-4">
        <h3 className="font-weight-600 text-14 text-high-contrast leading-20">
          {role}
        </h3>
        <span className="flex-shrink-0 whitespace-nowrap text-13 text-gray10 leading-16">
          {time}
        </span>
      </div>
      <p className="mb-1 text-14 text-gray11 leading-20">{company}</p>
      <p className="text-14 text-gray12 leading-20">{description}</p>
    </div>
  );
}
