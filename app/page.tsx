import Hero from "@/components/sections/Hero";
import BentoProjects from "@/components/sections/BentoProjects";
import GitHubCard from "@/components/sections/GitHubCard";
import SkillsGrid from "@/components/sections/SkillsGrid";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* GitHub stats card */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <GitHubCard />
      </section>

      <BentoProjects />
      <SkillsGrid />
      <ExperienceTimeline />
      <ContactCTA />
    </>
  );
}
