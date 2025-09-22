import { AboutSection } from "~/components/about-section";
import { EducationSection } from "~/components/education-section";
import { ExperienceSectionBullets } from "~/components/experience-section-bullets";
import { ProfileHeader } from "~/components/profile-header";
import { resumeData } from "~/lib/cv-data";

export default function Home() {
  const maxTopExperiences = 3;

  return (
    <div className="mx-auto my-12 w-full max-w-[580px] space-y-3 px-4 sm:px-0 print:my-0 print:max-w-none print:px-0">
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

      <AboutSection summary={resumeData.about} />

      <ExperienceSectionBullets
        experiences={resumeData.experience.slice(0, maxTopExperiences)}
      />

      <EducationSection education={resumeData.education} />
    </div>
  );
}
