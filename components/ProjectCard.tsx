"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/mdx";

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, frontmatter: fm } = project;

  return (
    <div className="card hover:border-accent/50 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col group p-0 overflow-hidden">

      {/* ── Clickable upper area ── */}
      <Link href={`/projects/${slug}`} className="flex flex-col flex-1 p-6 pb-4">
        {/* Image */}
        {fm.image && (
          <div className="relative h-40 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-4">
            <Image src={fm.image} alt={fm.title} fill className="object-cover" />
          </div>
        )}

        <h3 className="font-bold text-stone-900 dark:text-white text-base mb-1.5 group-hover:text-accent transition-colors">
          {fm.title}
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed flex-1">
          {fm.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {fm.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </Link>

      {/* ── External links (separate, not clickable as card) ── */}
      <div className="flex gap-3 px-6 py-3 border-t border-stone-100 dark:border-stone-800 flex-wrap">
        {fm.github && (
          <a href={fm.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
            GitHub ↗
          </a>
        )}
        {fm.live && (
          <a href={fm.live} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-emerald-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1">
            Live
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
        {fm.demo && (
          <a href={fm.demo} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
            Demo ↗
          </a>
        )}
        {fm.paper && (
          <a href={fm.paper} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
            Paper ↗
          </a>
        )}
        <Link href={`/projects/${slug}`}
          className="ml-auto text-xs font-semibold text-accent hover:underline">
          Read more →
        </Link>
      </div>
    </div>
  );
}
