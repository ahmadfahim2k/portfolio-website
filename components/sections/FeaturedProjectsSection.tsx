import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/mdx";

export default function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects(4);

  return (
    <section id="projects" className="!mt-8">
      <FadeIn>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="section-label">Work</p>
            <h2 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <Link href="/projects" className="text-base font-semibold text-accent hover:underline">
            View all →
          </Link>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-5">
        {featuredProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={0.05 * i}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
