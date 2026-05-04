"use client";

export default function InstructorCard({ instructor }) {
  return (
    <div
      className="flex flex-col p-6 transition-all duration-300"
      style={{ backgroundColor: "#111111", border: "1px solid #1F1F1F" }}
      onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid #E8622A"; }}
      onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid #1F1F1F"; }}
    >
      <div
        className="w-full aspect-square flex items-center justify-center mb-6"
        style={{ backgroundColor: "#1a0f0a" }}
      >
        <span
          className="text-6xl font-bold"
          style={{ color: "#E8622A", fontFamily: "'Playfair Display', serif" }}
        >
          {instructor.name.charAt(0)}
        </span>
      </div>
      <h3
        className="text-lg font-bold mb-1"
        style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}
      >
        {instructor.name}
      </h3>
      <p
        className="text-xs uppercase tracking-widest mb-4"
        style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif" }}
      >
        {instructor.specialty}
      </p>
      <p
        className="text-sm font-semibold uppercase tracking-widest mt-auto"
        style={{ color: "#E8622A", fontFamily: "'DM Sans', sans-serif" }}
      >
        {instructor.learners} Learners
      </p>
    </div>
  );
}
