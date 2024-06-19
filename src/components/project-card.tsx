import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
interface Props {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  logo: any; // use any to avoid conflict
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ logo, title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <Image
              src={logo}
              alt={title}
              height={16}
              quality={100}
              className="rounded-[2px]"
            />
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                  rel="noreferrer"
                >
                  {title} <span className="size-1 rounded-full bg-green-500" />
                </a>
              ) : (
                title
              )}
            </CardTitle>
          </div>

          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
