import type { Skill } from '~/lib/cv-data';

interface SkillSpectrumProps {
  skills: Skill[];
}

export function SkillSpectrum({ skills }: SkillSpectrumProps) {
  // Sort skills by stack position for visual spectrum
  const sortedSkills = [...skills].sort(
    (a, b) => a.stackPosition - b.stackPosition
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {sortedSkills.map((skill) => {
          // Determine visual weight based on proficiency
          const isExpert = skill.proficiency === 'expert';
          const isAdvanced = skill.proficiency === 'advanced';

          return (
            <span
              key={skill.name}
              className={`
                rounded-6 border px-3 py-1 text-13/16 transition-colors
                ${
                  isExpert
                    ? 'border-gray8 bg-gray3 font-weight-600 text-gray12'
                    : isAdvanced
                      ? 'border-gray6 bg-gray2 font-weight-500 text-gray12'
                      : 'border-gray5 bg-gray1 font-weight-400 text-gray11'
                }
                print:border-gray4 print:bg-gray2 print:text-gray12
              `}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
