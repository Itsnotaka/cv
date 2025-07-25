import type { Skill } from '~/lib/cv-data';

interface SkillListProps {
  skills: Skill[];
}

export function SkillList({ skills }: SkillListProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
    architecture: 'Architecture',
    integration: 'Integration',
  };

  return (
    <div className="space-y-4">
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category}>
          <h4 className="mb-2 font-weight-700 text-13/16 text-high-contrast capitalize">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </h4>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => (
              <span
                className="rounded-6 border border-gray6 bg-gray2 px-3 py-1 font-weight-500 text-13/16 text-gray12 print:border-gray4"
                key={skill.name}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
