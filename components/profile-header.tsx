import Image from "next/image";
import { Fragment } from "react";

interface Link {
  name: string;
  url: string;
}

interface ProfileHeaderProps {
  name: string;
  title: string;
  profileImage: string;
  email: string;
  phone: string;
  location: string;
  twitter?: string;
  links: Link[];
}

export function ProfileHeader({
  name,
  title,
  profileImage,
  email,
  phone,
  location,
  twitter,
  links,
}: ProfileHeaderProps) {
  const getIconForLink = (linkName: string) => {
    switch (linkName.toLowerCase()) {
      case "github":
        return "/github.svg";
      case "linkedin":
        return "/linkedin.svg";
      default:
        return null;
    }
  };

  return (
    <header>
      <div className="flex items-center gap-6">
        <Image
          alt={`${name} profile photo`}
          className="size-[92px] rounded-full object-cover"
          height={92}
          src={profileImage}
          width={92}
        />
        <div>
          <h1 className="mb-2 text-20 text-gray12">{name}</h1>
          <p className="mb-2 text-13 text-gray11">{title}</p>
          <div className="flex flex-col gap-1 text-13 text-gray11">
            <div className="flex items-center gap-3">
              <span>{location}</span>
              <span className="text-gray9">•</span>
              <a
                className="transition-colors duration-300 hover:text-gray12"
                href={`mailto:${email}`}
              >
                {email}
              </a>
              <span className="text-gray9">•</span>
              <a
                className="transition-colors duration-300 hover:text-gray12"
                href={`tel:${phone.replace(/\s/g, "")}`}
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              {twitter && (
                <>
                  <a
                    className="flex items-center gap-1 transition-colors duration-300 hover:text-gray12"
                    href={`https://twitter.com/${twitter.replace("@", "")}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt="X/Twitter"
                      className="h-3.5 w-3.5"
                      height={14}
                      src="/x.svg"
                      width={14}
                    />
                    {twitter}
                  </a>
                  <span className="text-gray9">•</span>
                </>
              )}
              {links.map((link, index) => {
                const icon = getIconForLink(link.name);
                return (
                  <Fragment key={link.url}>
                    <a
                      className="flex items-center gap-1 transition-colors duration-300 hover:text-gray12"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {icon && (
                        <Image
                          alt={link.name}
                          className="h-3.5 w-3.5"
                          height={14}
                          src={icon}
                          width={14}
                        />
                      )}
                      {link.name}
                    </a>
                    {index < links.length - 1 && (
                      <span className="text-gray9">•</span>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
