import HeroSlider from "@/components/HeroSlider";
import CourseCard from "@/components/CourseCard";
import InstructorCard from "@/components/InstructorCard";
import Link from "next/link";
import courses from "@/data/courses.json";

const instructors = [
  { name: "John Doe", specialty: "Full-Stack Engineer", learners: "18k+" },
  { name: "Amina Rahman", specialty: "Product Designer", learners: "11k+" },
  { name: "Nadia Khan", specialty: "Data Analyst", learners: "14k+" },
  { name: "Carlos Silva", specialty: "Growth Marketer", learners: "9k+" },
];

export default function Home() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const trendingCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <HeroSlider />

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div
          className="flex items-center justify-between pb-6 mb-10"
          style={{ borderBottom: "1px solid #1F1F1F" }}
        >
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
          >
            Popular Courses
          </h2>
          <Link
            href="/courses"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#E8622A", fontFamily: "'DM Sans', sans-serif" }}
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Learning Tips */}
      <section
        style={{ backgroundColor: "#111111", borderTop: "1px solid #1F1F1F", borderBottom: "1px solid #1F1F1F" }}
        className="w-full py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-3xl md:text-4xl leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontStyle: "italic" }}
            >
              "Build momentum with small, repeatable habits."
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {[
              { number: "01", label: "TIMEBOXING", text: "Study in sprints:", detail: "25–45 minutes focused, 5 minutes break." },
              { number: "02", label: "PROJECT CHECKPOINTS", text: "Ship mini-projects:", detail: "finish something small each week." },
              { number: "03", label: "SPACED REPETITION", text: "Review smart:", detail: "revisit notes 1 day, 3 days, and 7 days later." },
              { number: "04", label: "ACTIVE RECALL", text: "Protect your energy:", detail: "consistent sleep beats cramming." },
            ].map((tip) => (
              <div key={tip.number} className="flex gap-6 items-start">
                <span className="text-lg font-bold shrink-0" style={{ color: "#E8622A", fontFamily: "'DM Sans', sans-serif" }}>
                  {tip.number}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif" }}>
                    {tip.label}
                  </p>
                  <p className="text-sm" style={{ color: "#F5F0E8", fontFamily: "'DM Sans', sans-serif" }}>
                    <strong>{tip.text}</strong> {tip.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="pb-6 mb-10" style={{ borderBottom: "1px solid #1F1F1F" }}>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
          >
            Top Instructors
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} instructor={instructor} />
          ))}
        </div>
      </section>

      {/* Trending Courses */}
      <section
        style={{ backgroundColor: "#111111", borderTop: "1px solid #1F1F1F" }}
        className="w-full py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div
            className="flex items-center justify-between pb-6 mb-10"
            style={{ borderBottom: "1px solid #1F1F1F" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
            >
              Trending Courses
            </h2>
            <Link
              href="/courses"
              className="hidden md:inline-block px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#E8622A", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
            >
              Browse All Courses
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Mobile Browse Button */}
          <div className="mt-8 md:hidden">
            <Link
              href="/courses"
              className="block w-full text-center px-6 py-3 text-xs font-semibold uppercase tracking-widest"
              style={{ backgroundColor: "#E8622A", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
