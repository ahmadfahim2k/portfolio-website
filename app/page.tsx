import Link from "next/link";
import { getFeaturedProjects, getAllExperience } from "@/lib/mdx";
import { siteConfig } from "@/config/site";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

const skills = [
  "Python", "SQL", "Machine Learning", "Deep Learning",
  "NLP & LLMs", "Data Engineering", "Statistics", "Data Visualisation",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(4);
  const experience = getAllExperience();

  return (
    <div className="max-w-3xl mx-auto px-6 py-14 lg:py-16 space-y-20">

      {/* ── Hero / About ── */}
      <section id="about">
        <FadeIn>
          <p className="section-label">About</p>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-4">
            {siteConfig.tagline}
          </h2>
          <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-base">
            {siteConfig.bio}
          </p>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.1} className="mt-8">
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-3">
            Skills & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Featured Projects ── */}
      <section id="projects">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="section-label">Work</p>
              <h2 className="text-2xl font-black tracking-tight text-stone-900 dark:text-white">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent hover:underline"
            >
              View all →
            </Link>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={0.05 * i}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience">
        <FadeIn>
          <p className="section-label">Career</p>
          <h2 className="text-2xl font-black tracking-tight text-stone-900 dark:text-white mb-8">
            Experience
          </h2>
        </FadeIn>

        <div className="relative pl-5 border-l-2 border-stone-200 dark:border-stone-800 space-y-8">
          {experience.map((item, i) => (
            <FadeIn key={item.slug} delay={0.05 * i}>
              <div className="relative">
                {/* Dot */}
                <span className="absolute -left-[1.4rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-2 ring-white dark:ring-stone-950" />

                <p className="text-xs font-bold tracking-wide text-accent uppercase mb-0.5">
                  {item.frontmatter.period}
                </p>
                <h3 className="font-bold text-stone-900 dark:text-white">
                  {item.frontmatter.title}
                </h3>
                <p className="text-sm text-accent mb-2">{item.frontmatter.company}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {item.content.trim()}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact">
        <FadeIn>
          <div className="card text-center py-12">
            <p className="section-label justify-center flex">Contact</p>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-2">
              Let's work together
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">
              Open to collaborations, research opportunities, and interesting conversations.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                ✉ Email Me
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="pt-4 pb-2 text-center text-xs text-stone-400 dark:text-stone-600">
        © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </div>
  );
}
