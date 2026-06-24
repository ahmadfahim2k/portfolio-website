import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: project.frontmatter.title, description: project.frontmatter.description };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { frontmatter: fm, content } = project;

  return (
    <div className="px-10 lg:px-16 py-14 lg:py-12">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-base text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors mb-8"
      >
        ← All projects
      </Link>

      {/* Hero image */}
      {fm.image && (
        <div className="relative h-56 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-8">
          <Image src={fm.image} alt={fm.title} fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {fm.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white mb-1">
          {fm.title}
        </h1>
        <p className="text-lg text-stone-500 dark:text-stone-400">{fm.description}</p>

        {/* Links */}
        <div className="flex gap-3 mt-5 flex-wrap">
          {fm.live && (
            <a href={fm.live} target="_blank" rel="noopener noreferrer"
              className="btn-ghost text-xs inline-flex items-center gap-1 text-emerald-500 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 hover:text-emerald-600">
              Live
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          {fm.github && (
            <a href={fm.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
              GitHub ↗
            </a>
          )}
          {fm.demo && (
            <a href={fm.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
              Demo ↗
            </a>
          )}
          {fm.paper && (
            <a href={fm.paper} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
              Paper ↗
            </a>
          )}
        </div>
      </header>

      <hr className="border-stone-200 dark:border-stone-800 mb-8" />

      {/* MDX body */}
      <article className="prose prose-stone dark:prose-invert prose-lg max-w-none
        prose-headings:font-black prose-headings:tracking-tight prose-headings:mb-2
        prose-p:mt-2
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent2 prose-code:bg-stone-100 dark:prose-code:bg-stone-800 prose-code:px-1 prose-code:rounded
      ">
        <MDXRemote source={content} />
      </article>

      {/* Screenshots */}
      {fm.screenshots && fm.screenshots.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-black tracking-tight text-stone-900 dark:text-white mb-6">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fm.screenshots.map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
                <Image
                  src={src}
                  alt={`${fm.title} screenshot ${i + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
