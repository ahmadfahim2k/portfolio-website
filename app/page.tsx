import { siteConfig } from "@/config/site";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="px-10 lg:px-16 py-14 lg:py-12 space-y-24">
      <AboutSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />

      <footer className="!mt-8 pt-4 pb-2 text-center text-sm text-stone-400 dark:text-stone-600">
        © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </div>
  );
}
