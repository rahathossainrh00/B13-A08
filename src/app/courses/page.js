"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses.json";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1
            className="text-5xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
          >
            All Courses
          </h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Search by title, then view details to enroll.
          </p>
        </div>

        {/* Search + Count Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Search Input */}
          <div
            className="flex items-center gap-3 px-4 py-3 w-full sm:w-96"
            style={{ backgroundColor: "#111111", border: "1px solid #1F1F1F" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="w-4 h-4 shrink-0"
              style={{ color: "#6B6B6B" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search courses by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-full"
              style={{ color: "#F5F0E8" }}
            />
          </div>

          {/* Count */}
          <p className="text-sm shrink-0" style={{ color: "#6B6B6B" }}>
            Showing {filtered.length} of {courses.length}
          </p>
        </div>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
            >
              No courses found
            </p>
            <p className="text-sm" style={{ color: "#6B6B6B" }}>
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
