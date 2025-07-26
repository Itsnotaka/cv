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
  email,
  summary,
  twitter,
  links,
}: ProfileHeaderProps) {
  return (
    <header className="mb-10 print:mb-6">
      <div className="flex flex-col gap-y-10">
        <h1 className="font-700 text-20 text-high-contrast leading-28">
          {name}
        </h1>
        
        <div className="flex flex-col gap-y-4">
          <p className="text-14 leading-20">{title}</p>
          
          {summary && (
            <p className="text-14 leading-20">{summary}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-y-3">
          <h2 className="font-700 text-14 text-high-contrast leading-16">Let's get in touch</h2>
          <div className="flex flex-row gap-x-4">
            <Link
              className="flex flex-row gap-x-1 items-center text-14 leading-20 hover:underline"
              href={`mailto:${email}`}
            >
              <p>Email</p>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Link>
            {twitter && (
              <Link
                className="flex flex-row gap-x-1 items-center text-14 leading-20 hover:underline"
                href={`https://twitter.com/${twitter.replace('@', '')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Twitter</p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Link>
            )}
            {links.map((link) => (
              <Link
                className="flex flex-row gap-x-1 items-center text-14 leading-20 hover:underline"
                href={link.url}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>{link.name}</p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
