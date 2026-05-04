"use client";

import { use } from "react";
import courses from "@/data/courses.json";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function CourseDetailsPage({ params }) {
  const { id } = use(params);
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return notFound();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Course Image */}
        <div className="w-full h-72 md:h-96 overflow-hidden mb-10">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category + Rating */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#6B6B6B" }}
          >
            {course.category}
          </span>
          <span
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#F5F0E8" }}
          >
            <FaStar style={{ color: "#E8622A" }} />
            {course.rating.toFixed(2)}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#F5F0E8",
          }}
        >
          {course.title}
        </h1>

        {/* Instructor + Duration + Level */}
        <p className="text-sm mb-8" style={{ color: "#6B6B6B" }}>
          By {course.instructor} • {course.duration} • {course.level}
        </p>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1F1F1F" }} className="mb-8" />

        {/* Description */}
        <div className="mb-12">
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F5F0E8",
            }}
          >
            About this Course
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
            {course.description}
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1F1F1F" }} className="mb-8" />

        {/* Curriculum */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F5F0E8",
            }}
          >
            Course Curriculum
          </h2>
          <ol className="flex flex-col gap-4">
            {course.curriculum.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 px-5 py-4"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1F1F1F",
                }}
              >
                <span
                  className="text-sm font-bold shrink-0"
                  style={{ color: "#E8622A" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm" style={{ color: "#F5F0E8" }}>
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-block px-8 py-3 text-sm font-semibold uppercase tracking-widest"
          style={{
            border: "1px solid #E8622A",
            color: "#E8622A",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E8622A"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#E8622A"; }}
        >
          ← Back to Courses
        </Link>

      </div>
    </div>
  );
}
