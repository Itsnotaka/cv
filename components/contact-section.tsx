import type { Link } from "~/lib/cv-data";

interface ContactSectionProps {
  email: string;
  links: Link[];
}

export function ContactSection({ email, links }: ContactSectionProps) {
  return (
    <section>
      <h2 className="mb-2 text-gray12">Contact</h2>

      <div className="mb-1 flex gap-2">
        <div className="min-w-[100px] text-gray9 sm:min-w-[180px]">Email</div>
        <a
          className="mb-1 inline-flex items-center gap-1 text-gray12 transition-colors duration-300 hover:text-gray12"
          href={`mailto:${email}`}
        >
          {email}
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
      </div>

      {links.map((link, index) => (
        <div className="mb-1 flex gap-2" key={index}>
          <div className="min-w-[100px] text-gray9 sm:min-w-[180px]">
            {link.name}
          </div>
          <a
            className="mb-1 inline-flex items-center gap-1 text-gray12 transition-colors duration-300 hover:text-gray12"
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.url}
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
        </div>
      ))}
    </section>
  );
}
