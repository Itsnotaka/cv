import Image from 'next/image';
import Link from 'next/link';

interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary?: string;
  twitter?: string;
  links: Array<{ name: string; url: string }>;
  profileImage: string;
}

export function ProfileHeader({
  name,
  title,
  location,
  email,
  phone,
  summary,
  twitter,
  links,
  profileImage,
}: ProfileHeaderProps) {
  return (
    <header className="mb-8 print:mb-6">
      <div className="flex items-start gap-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            alt={name}
            className="h-24 w-24 rounded-12 bg-gray3 object-cover print:h-20 print:w-20"
            height={96}
            src={profileImage}
            width={96}
          />
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <div className="mb-3">
            <h1 className="mb-1 font-weight-700 text-20 text-high-contrast leading-28">
              {name}
            </h1>
            <p className="font-weight-500 text-14 text-gray11 leading-20">
              {title}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1 text-13 text-gray11 leading-16">
            <span>{location}</span>
            <span className="text-gray10">•</span>
            <Link
              className="underline-offset-2 transition-colors hover:text-gray12 hover:underline"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
            <span className="text-gray10">•</span>
            <span>{phone}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-13 leading-16">
            {twitter && (
              <Link
                className="group flex items-center gap-1.5 text-gray11 transition-colors hover:text-gray12"
                href={`https://twitter.com/${twitter.replace('@', '')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="X/Twitter"
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                  height={14}
                  src="/x.svg"
                  width={14}
                />
                <span className="underline-offset-2 group-hover:underline">
                  Twitter
                </span>
              </Link>
            )}
            {links.map((link) => (
              <Link
                className="group flex items-center gap-1.5 text-gray11 transition-colors hover:text-gray12"
                href={link.url}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={link.name}
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                  height={14}
                  src={`/${link.name.toLowerCase()}.svg`}
                  width={14}
                />
                <span className="underline-offset-2 group-hover:underline">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <p className="mt-4 text-14 text-gray12 leading-20">{summary}</p>
      )}
    </header>
  );
}
