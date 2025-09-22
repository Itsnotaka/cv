interface ProjectItemProps {
  year: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  hasPreview?: boolean;
}

export function ProjectItem({
  year,
  title,
  company,
  companyUrl,
  description,
  hasPreview = false,
}: ProjectItemProps) {
  return (
    <div className="mb-12 grid grid-cols-[100px_1fr] gap-x-8">
      <div className="text-13 text-gray11 leading-24">{year}</div>
      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="font-600 text-18 text-high-contrast leading-24">
            {title} at{" "}
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
        </div>
        <p className="text-13 text-gray11 leading-24">{description}</p>
        {hasPreview && (
          <div className="mt-4">
            <div className="max-w-sm rounded-lg bg-gray3 p-6">
              <div className="mb-3 flex items-start gap-x-3">
                <div className="size-10 rounded bg-gray5" />
                <div className="flex-1">
                  <div className="mb-2 h-4 w-3/4 rounded bg-gray5" />
                  <div className="h-3 w-1/2 rounded bg-gray5" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 rounded bg-gray5" />
                <div className="h-3 w-5/6 rounded bg-gray5" />
                <div className="h-3 w-4/6 rounded bg-gray5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
