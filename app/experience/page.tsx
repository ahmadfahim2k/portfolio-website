import { getAllExperience } from "@/lib/mdx";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  const experience = getAllExperience();
  const work = experience.filter((e) => e.frontmatter.type === "work");
  const education = experience.filter((e) => e.frontmatter.type === "education");

  return (
    <div className="max-w-2xl mx-auto px-6 py-14 lg:py-16 space-y-14">
      {/* Work */}
      <section>
        <FadeIn>
          <p className="section-label">Career</p>
          <h1 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-8">
            Experience
          </h1>
        </FadeIn>
        <div className="relative pl-5 border-l-2 border-stone-200 dark:border-stone-800 space-y-8">
          {work.map((item, i) => (
            <FadeIn key={item.slug} delay={0.05 * i}>
              <div className="relative">
                <span className="absolute -left-[1.4rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-2 ring-white dark:ring-stone-950" />
                <p className="text-xs font-bold tracking-wide text-accent uppercase mb-0.5">
                  {item.frontmatter.period}
                </p>
                <h2 className="font-bold text-stone-900 dark:text-white">
                  {item.frontmatter.title}
                </h2>
                <p className="text-sm text-accent mb-2">{item.frontmatter.company}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {item.content.trim()}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Education */}
      {education.length > 0 && (
        <section>
          <FadeIn>
            <p className="section-label">Academic</p>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-8">
              Education
            </h2>
          </FadeIn>
          <div className="relative pl-5 border-l-2 border-stone-200 dark:border-stone-800 space-y-8">
            {education.map((item, i) => (
              <FadeIn key={item.slug} delay={0.05 * i}>
                <div className="relative">
                  <span className="absolute -left-[1.4rem] top-1.5 w-3 h-3 rounded-full bg-stone-400 dark:bg-stone-600 ring-2 ring-white dark:ring-stone-950" />
                  <p className="text-xs font-bold tracking-wide text-stone-400 uppercase mb-0.5">
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
      )}
    </div>
  );
}
