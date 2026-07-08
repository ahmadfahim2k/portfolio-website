"use client";

import Image from "next/image";
import Link from "next/link";
import type { Certification } from "@/lib/mdx";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export default function CertificationCard({ cert }: { cert: Certification }) {
  const { slug, frontmatter: fm } = cert;

  return (
    <div className="card h-full flex flex-col hover:border-accent/50 hover:-translate-y-1 transition-all duration-200 group p-0 overflow-hidden">

      {/* Clickable upper area */}
      <Link href={`/certifications/${slug}`} className="flex flex-col gap-4 p-6 pb-4 flex-1">
        {fm.image && (
          <div className="relative h-36 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800">
            <Image src={fm.image} alt={fm.title} fill className="object-cover" />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold tracking-wide text-stone-400 uppercase">
            {formatDate(fm.date)}
          </p>
          <h3 className="font-bold text-stone-900 dark:text-white text-base leading-snug group-hover:text-accent transition-colors">
            {fm.title}
          </h3>
          <p className="text-sm text-accent">{fm.org}</p>
        </div>
      </Link>

      {/* Bottom strip */}
      <div className="flex gap-3 px-6 py-3 border-t border-stone-100 dark:border-stone-800">
        <Link href={`/certifications/${slug}`} className="text-xs font-semibold text-accent hover:underline">
          View →
        </Link>
        {fm.link && (
          <a
            href={fm.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 hover:text-emerald-600 transition-colors ml-auto"
          >
            Credential
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
