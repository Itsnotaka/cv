/** biome-ignore-all lint/suspicious/noArrayIndexKey: Im lazy */
import { AboutSection } from "~/components/about-section";
import { EducationSection } from "~/components/education-section";
import { ExperienceSection } from "~/components/experience-section";
import { ProfileHeader } from "~/components/profile-header";
import { resumeData } from "~/lib/cv-data";

export default function Home() {
  return (
    <div className="mx-auto my-20 w-full max-w-[580px] space-y-4 px-4 sm:px-0 print:my-0 print:max-w-none print:px-0">
      <ProfileHeader
        email={resumeData.email}
        links={resumeData.links}
        location={resumeData.location}
        name={resumeData.name}
        phone={resumeData.phone}
        profileImage="https://om32oh4l85.ufs.sh/f/ZSTWlVhf6QMwVngkI4jbZ1SlxuUWiBGCoRXn5L4rfjeIwPVJ"
        title={resumeData.title}
        twitter={resumeData.twitter}
      />

      <AboutSection summary={resumeData.summary} />

      <ExperienceSection experiences={resumeData.experience} />

      <EducationSection education={resumeData.education} />
    </div>
  );
}
