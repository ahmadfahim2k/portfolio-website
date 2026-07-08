import { getAllCertifications } from "@/lib/mdx";
import CertificationCard from "@/components/CertificationCard";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Certifications" };

export default function CertificationsPage() {
  const certs = getAllCertifications();

  return (
    <div className="px-10 lg:px-16 py-14 lg:py-12">
      <FadeIn>
        <p className="section-label">Credentials</p>
        <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white mt-1 mb-10">
          Certifications
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <FadeIn key={cert.slug} delay={0.05 * i} className="h-full">
            <CertificationCard cert={cert} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
