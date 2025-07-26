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

  // Sort categories by average stack position (frontend first)
  const sortedCategories = Object.entries(skillsByCategory).sort(
    ([, aSkills], [, bSkills]) => {
      const aAvg =
        aSkills.reduce((sum, s) => sum + s.stackPosition, 0) / aSkills.length;
      const bAvg =
        bSkills.reduce((sum, s) => sum + s.stackPosition, 0) / bSkills.length;
      return aAvg - bAvg;
    }
  );

  return (
    <div className="space-y-2">
      {sortedCategories.map(([category, categorySkills]) => {
        // Sort skills within category by proficiency (expert first)
        const sortedSkills = [...categorySkills].sort((a, b) => {
          const proficiencyOrder = {
            expert: 0,
            advanced: 1,
            intermediate: 2,
            beginner: 3,
          };
          return (
            proficiencyOrder[a.proficiency] - proficiencyOrder[b.proficiency]
          );
        });

        return (
          <div
            className="flex flex-wrap items-baseline gap-x-1.5"
            key={category}
          >
            {sortedSkills.map((skill, index) => (
              <span className="inline-flex items-baseline" key={skill.name}>
                <span className="text-13/20" style={{ color: '#1b1b18' }}>
                  {skill.name}
                </span>
                {index < sortedSkills.length - 1 && (
                  <span className="text-13/20" style={{ color: '#1b1b1833' }}>
                    {' · '}
                  </span>
                )}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
