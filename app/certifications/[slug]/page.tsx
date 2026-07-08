import { getAllCertifications, getCertificationBySlug } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllCertifications().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cert = getCertificationBySlug(params.slug);
  if (!cert) return {};
  return { title: cert.frontmatter.title };
}

function formatDate(date: string) {
  const [year, month] = date.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export default function CertificationPage({ params }: Props) {
  const cert = getCertificationBySlug(params.slug);
  if (!cert) notFound();

  const { frontmatter: fm } = cert;

  return (
    <div className="px-10 lg:px-16 py-14 lg:py-12">
      {/* Back */}
      <Link
        href="/certifications"
        className="inline-flex items-center gap-1.5 text-base text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors mb-8"
      >
        ← All certifications
      </Link>

      {/* Header */}
      <header className="mb-8">
        <p className="text-xs font-bold tracking-wide text-stone-400 uppercase mb-2">
          {formatDate(fm.date)}
        </p>
        <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white mb-1">
          {fm.title}
        </h1>
        <p className="text-lg text-accent">{fm.org}</p>

        {fm.link && (
          <a
            href={fm.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 btn-ghost text-xs text-emerald-500 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 hover:text-emerald-600"
          >
            View credential
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </header>

      <hr className="border-stone-200 dark:border-stone-800 mb-8" />

      {/* Full-size certificate image */}
      {fm.image && (
        <div className="relative w-full rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800">
          <Image
            src={fm.image}
            alt={fm.title}
            width={1200}
            height={850}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
