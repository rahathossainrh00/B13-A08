import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111111",
        borderTop: "1px solid #1F1F1F",
        fontFamily: "'DM Sans', sans-serif",
      }}
      className="w-full mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Col 1 - Brand */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold">
            <span style={{ color: "#E8622A" }}>Skill</span>
            <span style={{ color: "#F5F0E8" }}>Sphere</span>
          </span>
          <p style={{ color: "#6B6B6B" }} className="text-sm leading-relaxed">
            Learn skill-based programs with bite-sized lessons, real projects, and expert guidance.
          </p>
          <p style={{ color: "#6B6B6B" }} className="text-sm">
            Contact: support@skillsphere.local
          </p>
        </div>

        {/* Col 2 - Links */}
        <div className="flex flex-col gap-3">
          <h4 style={{ color: "#F5F0E8" }} className="text-sm font-semibold uppercase tracking-widest">
            Links
          </h4>
          <Link href="/" style={{ color: "#6B6B6B" }} className="text-sm hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" style={{ color: "#6B6B6B" }} className="text-sm hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="/my-profile" style={{ color: "#6B6B6B" }} className="text-sm hover:text-white transition-colors">
            My Profile
          </Link>
        </div>

        {/* Col 3 - Legal & Social */}
        <div className="flex flex-col gap-3">
          <h4 style={{ color: "#F5F0E8" }} className="text-sm font-semibold uppercase tracking-widest">
            Legal & Social
          </h4>
          <Link href="/terms" style={{ color: "#6B6B6B" }} className="text-sm hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy" style={{ color: "#6B6B6B" }} className="text-sm hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6B6B6B" }}
              className="hover:text-white transition-colors text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6B6B6B" }}
              className="hover:text-white transition-colors text-lg"
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid #1F1F1F", color: "#6B6B6B" }}
        className="text-center text-xs py-4"
      >
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}
