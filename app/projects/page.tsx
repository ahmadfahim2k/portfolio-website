import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-3xl mx-auto px-6 py-14 lg:py-16">
      <FadeIn>
        <p className="section-label">Work</p>
        <h1 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-2">
          All Projects
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-10">
          {projects.length} projects — from research prototypes to production systems.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={0.05 * i}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
