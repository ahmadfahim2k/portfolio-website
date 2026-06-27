import FadeIn from "@/components/FadeIn";
import { getAllExperience } from "@/lib/mdx";
import type { ExperienceFrontmatter } from "@/lib/mdx";

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

export default function EducationSection() {
  const education = getAllExperience().filter((e) => e.frontmatter.type === "education");

  if (education.length === 0) return null;

  return (
    <section id="education" className="!mt-8">
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
  );
}
