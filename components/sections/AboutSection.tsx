import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/config/site";

const skills = [
  "Python", "SQL", "Machine Learning", "Deep Learning",
  "NLP & LLMs", "Data Engineering", "Statistics", "Data Visualisation",
];

export default function AboutSection() {
  return (
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
  );
}
