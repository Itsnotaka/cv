/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { CVSection } from '~/components/cv-section';
import { EducationItem } from '~/components/education-item';
import { ExperienceItem } from '~/components/experience-item';
import { ProfileHeader } from '~/components/profile-header';
import { SkillList } from '~/components/skill-list';
import { resumeData } from '~/lib/cv-data';

export default function Home() {
  return (
    <div className="min-h-dvh bg-gray1 text-gray12 print:bg-white">
      <div className="mx-auto w-full max-w-2xl px-8 py-10 print:max-w-none print:px-0 print:py-0">
        <ProfileHeader
          {...resumeData}
          profileImage="https://om32oh4l85.ufs.sh/f/ZSTWlVhf6QMwHjJC1esTyb2ri8KE51zJCkDBmtNxGR7AwL3n"
        />

        <CVSection title="Experience">
          <div className="space-y-5">
            {resumeData.experience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </CVSection>

        <CVSection title="Education">
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </div>
        </CVSection>

        <CVSection className="mb-0" title="Skills">
          <SkillList skills={resumeData.skills} />
        </CVSection>
      </div>
    </div>
  );
}
