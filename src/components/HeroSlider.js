"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { motion } from "motion/react";

const slides = [
  {
    headline: ["Master the craft of", "building", "in the real world"],
    subtitle: "Learn from practitioners. Hone your skills. Become undeniable.",
    cta: "Explore Courses",
    href: "/courses",
  },
  {
    headline: ["Learn by", "doing", "not by watching"],
    subtitle: "Hands-on projects, real feedback, real results.",
    cta: "Browse Courses",
    href: "/courses",
  },
  {
    headline: ["Your next", "skill", "is one click away"],
    subtitle: "Join thousands of learners building their future today.",
    cta: "Get Started",
    href: "/courses",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full" style={{ backgroundColor: "#0a0a0a" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full flex flex-col items-center justify-center text-center px-6"
              style={{
                minHeight: "90vh",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 39px, #1a1a1a 39px, #1a1a1a 40px)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                {/* Headline */}
                <h1
                  className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F5F0E8",
                  }}
                >
                  {slide.headline[0]}{" "}
                  <em style={{ color: "#E8622A", fontStyle: "italic" }}>
                    {slide.headline[1]}
                  </em>{" "}
                  {slide.headline[2]}
                </h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-base md:text-lg mb-10"
                  style={{
                    color: "#6B6B6B",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Link
                    href={slide.href}
                    className="inline-block px-10 py-4 text-sm font-semibold uppercase tracking-widest"
                    style={{
                      border: "1px solid #E8622A",
                      color: "#E8622A",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E8622A"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#E8622A"; }}
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
