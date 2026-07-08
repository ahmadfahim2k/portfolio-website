import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

// ── Generic helpers ────────────────────────────────────────────────────────────

function getFiles(dir: string) {
  const full = path.join(contentDir, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

function readFile(dir: string, filename: string) {
  const full = path.join(contentDir, dir, filename);
  const raw = fs.readFileSync(full, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx?$/, "");
  return { slug, frontmatter: data, content };
}

// ── Projects ──────────────────────────────────────────────────────────────────

export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  github?: string;
  demo?: string;
  live?: string;
  paper?: string;
  image?: string;
  screenshots?: string[];
  featured?: boolean;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getAllProjects(): Project[] {
  return getFiles("projects")
    .map((f) => readFile("projects", f) as Project)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getFeaturedProjects(n = 4): Project[] {
  return getAllProjects()
    .filter((p) => p.frontmatter.featured)
    .slice(0, n);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const files = getFiles("projects");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  return readFile("projects", file) as Project;
}

// ── Certifications ────────────────────────────────────────────────────────────

export type CertificationFrontmatter = {
  title: string;
  org: string;
  date: string;
  image?: string;
  link?: string;
  featured?: boolean;
};

export type Certification = {
  slug: string;
  frontmatter: CertificationFrontmatter;
};

export function getAllCertifications(): Certification[] {
  return getFiles("certifications")
    .map((f) => readFile("certifications", f) as Certification)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export function getFeaturedCertifications(n = 3): Certification[] {
  return getAllCertifications()
    .filter((c) => c.frontmatter.featured)
    .slice(0, n);
}

export function getCertificationBySlug(slug: string): Certification | undefined {
  const files = getFiles("certifications");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  return readFile("certifications", file) as Certification;
}

// ── Experience ────────────────────────────────────────────────────────────────

export type ExperienceFrontmatter = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: "work" | "education";
  current?: boolean;
  grade?: string;
};

export type Experience = {
  slug: string;
  frontmatter: ExperienceFrontmatter;
  content: string;
};

export function getAllExperience(): Experience[] {
  return getFiles("background")
    .map((f) => readFile("background", f) as Experience)
    .sort((a, b) => {
      // current items first, then by filename (prefixed with order number)
      if (a.frontmatter.current) return -1;
      if (b.frontmatter.current) return 1;
      return a.slug.localeCompare(b.slug);
    });
}
