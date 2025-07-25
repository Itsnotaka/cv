interface EducationItemProps {
  institution: string;
  degree: string;
  time: string;
}

export function EducationItem({
  institution,
  degree,
  time,
}: EducationItemProps) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-4">
        <h3 className="font-weight-600 text-14 text-high-contrast leading-20">
          {institution}
        </h3>
        <span className="flex-shrink-0 whitespace-nowrap text-13 text-gray10 leading-16">
          {time}
        </span>
      </div>
      <p className="text-14 text-gray11 leading-20">{degree}</p>
    </div>
  );
}
