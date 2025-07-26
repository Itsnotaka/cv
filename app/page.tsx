/** biome-ignore-all lint/suspicious/noArrayIndexKey: Im lazy */
import { EducationItem } from '~/components/education-item';
import { ExperienceItem } from '~/components/experience-item';
import { ProfileHeader } from '~/components/profile-header';
import { resumeData } from '~/lib/cv-data';

export default function Home() {
  return (
    <div className="min-h-dvh bg-gray1 text-gray12 print:bg-white">
      <div className="mx-auto w-full max-w-[500px] px-5 py-20 print:max-w-none print:px-0 print:py-0">
        <div className="flex flex-col gap-y-10">
          <ProfileHeader
            {...resumeData}
            profileImage="https://om32oh4l85.ufs.sh/f/ZSTWlVhf6QMwHjJC1esTyb2ri8KE51zJCkDBmtNxGR7AwL3n"
          />

          <div className="flex flex-col gap-y-6">
            <h2 className="font-700 text-14 text-high-contrast leading-16">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>

          <div className="flex flex-col gap-y-6">
            <h2 className="font-700 text-14 text-high-contrast leading-16">Education</h2>
            <div className="flex flex-col gap-y-4">
              {resumeData.education.map((edu, index) => (
                <EducationItem key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
