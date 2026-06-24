import Link from "next/link";
import { getFeaturedProjects, getAllExperience } from "@/lib/mdx";
import type { ExperienceFrontmatter } from "@/lib/mdx";
import { siteConfig } from "@/config/site";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

function CompanyLink({ fm }: { fm: ExperienceFrontmatter }) {
  if (fm.companyUrl) {
    return (
      <a href={fm.companyUrl} target="_blank" rel="noopener noreferrer"
        className="text-base text-accent hover:underline mb-2 inline-block">
        {fm.company} ↗
      </a>
    );
  }
  return <p className="text-base text-accent mb-2">{fm.company}</p>;
}

const skills = [
  "Python", "SQL", "Machine Learning", "Deep Learning",
  "NLP & LLMs", "Data Engineering", "Statistics", "Data Visualisation",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(4);
  const allExperience = getAllExperience();
  const work = allExperience.filter((e) => e.frontmatter.type === "work");
  const education = allExperience.filter((e) => e.frontmatter.type === "education");

  return (
    <div className="px-10 lg:px-16 py-14 lg:py-12 space-y-24">

      {/* ── Hero / About ── */}
      <section id="about">
        <FadeIn>
          <p className="section-label">About</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white mt-2 mb-5 leading-tight">
            {siteConfig.tagline}
          </h2>
          <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-lg">
            {siteConfig.bio}
          </p>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.1} className="mt-10">
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-4">
            Skills & Tools
          </p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span key={s} className="tag text-sm px-4 py-1.5">{s}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Featured Projects ── */}
      <section id="projects">
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

      {/* ── Experience ── */}
      {/* ── Work Experience ── */}
      <section id="experience">
        <FadeIn>
          <p className="section-label">Career</p>
          <h2 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white mb-10">
            Experience
          </h2>
        </FadeIn>
        <div className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800 space-y-10">
          {work.map((item, i) => (
            <FadeIn key={item.slug} delay={0.05 * i}>
              <div className="relative">
                <span className="absolute -left-[1.5rem] top-2 w-3.5 h-3.5 rounded-full bg-accent ring-2 ring-white dark:ring-stone-950" />
                <p className="text-xs font-bold tracking-wide text-accent uppercase mb-1">
                  {item.frontmatter.period}
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                  {item.frontmatter.title}
                </h3>
                <CompanyLink fm={item.frontmatter} />
                <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed">
                  {item.content.trim()}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      {education.length > 0 && (
        <section id="education">
          <FadeIn>
            <p className="section-label">Academic</p>
            <h2 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white mb-10">
              Education
            </h2>
          </FadeIn>
          <div className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800 space-y-10">
            {education.map((item, i) => (
              <FadeIn key={item.slug} delay={0.05 * i}>
                <div className="relative">
                  <span className="absolute -left-[1.5rem] top-2 w-3.5 h-3.5 rounded-full bg-stone-400 dark:bg-stone-600 ring-2 ring-white dark:ring-stone-950" />
                  <p className="text-xs font-bold tracking-wide text-stone-400 uppercase mb-1">
                    {item.frontmatter.period}
                  </p>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                    {item.frontmatter.title}
                  </h3>
                  <CompanyLink fm={item.frontmatter} />
                  <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed">
                    {item.content.trim()}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* ── Contact CTA ── */}
      <section id="contact">
        <FadeIn>
          <div className="card text-center py-14">
            <p className="section-label justify-center flex">Contact</p>
            <h2 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-3">
              Let&apos;s work together
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-base mb-8">
              Open to collaborations, research opportunities, and interesting conversations.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                ✉ Email Me
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="pt-4 pb-2 text-center text-sm text-stone-400 dark:text-stone-600">
        © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </div>
  );
}
