import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CertificationCard from "@/components/CertificationCard";
import { getFeaturedCertifications } from "@/lib/mdx";

export default function CertificationsSection() {
  const certs = getFeaturedCertifications(3);

  if (certs.length === 0) return null;

  return (
    <section id="certifications">
      <FadeIn>
        <p className="section-label">Credentials</p>
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl font-black tracking-tight text-stone-900 dark:text-white">
            Certifications
          </h2>
          <Link
            href="/certifications"
            className="text-sm font-semibold text-accent hover:underline"
          >
            View all →
          </Link>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <FadeIn key={cert.slug} delay={0.05 * i} className="h-full">
            <CertificationCard cert={cert} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
