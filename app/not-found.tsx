import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-6xl font-black text-stone-200 dark:text-stone-800 mb-4">404</p>
      <h1 className="text-2xl font-black text-stone-900 dark:text-white mb-2">Page not found</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-8 text-sm">
        This page doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        ← Back home
      </Link>
    </div>
  );
}
