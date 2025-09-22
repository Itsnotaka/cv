import type { SkillGroup } from "~/lib/cv-data";

interface SkillsInlineProps {
  skills?: SkillGroup[];
}

export function SkillsInline({ skills }: SkillsInlineProps) {
  if (!skills || skills.length === 0) {
    return null;
  }
  const line = skills
    .map((s) => `${s.heading}: ${s.items.join(", ")}`)
    .join("; ");
  return (
    <section>
      <h2 className="mb-1 font-700 text-13 text-gray12">Skills & tools</h2>
      <p className="text-13 text-gray11">{line}</p>
    </section>
  );
}
