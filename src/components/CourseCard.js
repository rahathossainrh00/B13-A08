"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <div
      className="flex flex-col transition-all duration-300"
      style={{
        backgroundColor: "#111111",
        border: "1px solid #1F1F1F",
        fontFamily: "'DM Sans', sans-serif",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid #E8622A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid #1F1F1F";
      }}
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Category + Rating */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#6B6B6B" }}
          >
            {course.category}
          </span>
          <span
            className="flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#F5F0E8" }}
          >
            <FaStar style={{ color: "#E8622A" }} />
            {course.rating.toFixed(2)}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold leading-snug"
          style={{
            color: "#F5F0E8",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {course.title}
        </h3>

        {/* Instructor + Duration + Level */}
        <p className="text-xs" style={{ color: "#6B6B6B" }}>
          By {course.instructor} • {course.duration} • {course.level}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
          {course.description}
        </p>

        {/* View Details Button */}
        <div className="mt-auto pt-3">
          <Link
            href={`/courses/${course.id}`}
            className="block w-full text-center py-3 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#E8622A",
              color: "#fff",
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
