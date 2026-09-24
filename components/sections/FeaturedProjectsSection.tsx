import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/mdx";

export default function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects(); // sorted by featuredOrder 1–4

  const top3 = featuredProjects.slice(0, 3);
  const top4 = featuredProjects.slice(0, 4);

  return (
    <section id="projects" className="!mt-8">
      <FadeIn>
        <div className="mb-8">
          <p className="section-label">Work</p>
          <h2 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white">
            Featured Projects
          </h2>
        </div>
      </FadeIn>

      {/* Grid A — top 3: mobile (<768px) and 2xl+ (≥1536px), hidden md–xl */}
      <div className="grid md:hidden 2xl:grid sm:grid-cols-2 2xl:grid-cols-3 gap-5">
        {top3.map((project, i) => (
          <FadeIn key={project.slug} delay={0.05 * i}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      {/* Grid B — top 4: md through xl (768px–1535px) */}
      <div className="hidden md:grid 2xl:hidden grid-cols-2 gap-5">
        {top4.map((project, i) => (
          <FadeIn key={project.slug} delay={0.05 * i}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-sm font-semibold text-stone-700 dark:text-stone-200 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            View all projects →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
