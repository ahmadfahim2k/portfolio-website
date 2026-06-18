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
    <div className="max-w-2xl mx-auto px-6 py-14 lg:py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors mb-8"
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
        <h1 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white mb-3">
          {fm.title}
        </h1>
        <p className="text-stone-500 dark:text-stone-400">{fm.description}</p>

        {/* Links */}
        <div className="flex gap-3 mt-5 flex-wrap">
          {fm.github && (
            <a href={fm.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
              GitHub ↗
            </a>
          )}
          {fm.demo && (
            <a href={fm.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
              Live Demo ↗
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
      <article className="prose prose-stone dark:prose-invert prose-sm max-w-none
        prose-headings:font-black prose-headings:tracking-tight
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent2 prose-code:bg-stone-100 dark:prose-code:bg-stone-800 prose-code:px-1 prose-code:rounded
      ">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
