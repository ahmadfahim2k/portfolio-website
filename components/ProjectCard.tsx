"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/mdx";

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, frontmatter: fm } = project;

  return (
    <Link href={`/projects/${slug}`} className="block group">
      <div className="card hover:border-accent/50 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
        {/* Image */}
        {fm.image && (
          <div className="relative h-40 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-4 -mx-1">
            <Image
              src={fm.image}
              alt={fm.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1">
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

          {/* External links */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-stone-100 dark:border-stone-800">
            {fm.github && (
              <a
                href={fm.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
              >
                GitHub ↗
              </a>
            )}
            {fm.demo && (
              <a
                href={fm.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
              >
                Demo ↗
              </a>
            )}
            {fm.paper && (
              <a
                href={fm.paper}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
              >
                Paper ↗
              </a>
            )}
            <span className="ml-auto text-xs font-semibold text-accent group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
