import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="text-center flex flex-col items-center gap-6">
        <h1
          className="text-8xl md:text-9xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: "#E8622A" }}
        >
          404
        </h1>
        <p
          className="text-xl md:text-2xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
        >
          Page not found
        </p>
        <p className="text-sm" style={{ color: "#6B6B6B" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-3 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80 mt-4"
          style={{ backgroundColor: "#E8622A", color: "#fff" }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
