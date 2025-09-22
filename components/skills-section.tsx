interface SkillsSectionProps {
  skills?: { category: string; items: string[] }[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return null;
  }
  return (
    <section>
      <h2 className="mb-1 font-700 text-13 text-gray12">Skills & tools</h2>
      <div className="space-y-1 text-13 text-gray11">
        {skills.map((s, idx) => (
          <div key={`${s.category}-${idx}`}>
            <span className="font-600 text-gray12">{s.category}: </span>
            <span>{s.items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
