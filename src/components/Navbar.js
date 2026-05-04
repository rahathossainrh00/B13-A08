"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    setMenuOpen(false);
    await signOut();
    toast.success("Logged out successfully");
    router.push("/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      style={{
        backgroundColor: "#111111",
        borderBottom: "1px solid #1F1F1F",
        fontFamily: "'DM Sans', sans-serif",
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight" onClick={closeMenu}>
          <span style={{ color: "#E8622A" }}>Skill</span>
          <span style={{ color: "#F5F0E8" }}>Sphere</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            style={{ color: "#F5F0E8", transition: "color 0.2s ease" }}
            className="text-sm"
            onMouseEnter={(e) => { e.currentTarget.style.color = "#E8622A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#F5F0E8"; }}
          >
            Home
          </Link>
          <Link
            href="/courses"
            style={{ color: "#F5F0E8", transition: "color 0.2s ease" }}
            className="text-sm"
            onMouseEnter={(e) => { e.currentTarget.style.color = "#E8622A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#F5F0E8"; }}
          >
            Courses
          </Link>
          <Link
            href="/my-profile"
            style={{ color: "#F5F0E8", transition: "color 0.2s ease" }}
            className="text-sm"
            onMouseEnter={(e) => { e.currentTarget.style.color = "#E8622A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#F5F0E8"; }}
          >
            My Profile
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <>
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-500">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    style={{ backgroundColor: "#E8622A" }}
                    className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                  >
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              {/* Logout */}
              <button
                onClick={handleLogout}
                style={{ color: "#F5F0E8" }}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                style={{ color: "#F5F0E8" }}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Login
              </Link>
              <Link
                href="/register"
                style={{
                  backgroundColor: "#E8622A",
                  color: "#fff",
                  padding: "8px 20px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
                className="hover:opacity-90 transition-opacity"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-xl"
          style={{ color: "#F5F0E8" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-6 py-4 gap-4"
          style={{
            backgroundColor: "#111111",
            borderTop: "1px solid #1F1F1F",
          }}
        >
          {/* Nav Links */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-sm py-2"
            style={{ color: "#F5F0E8", borderBottom: "1px solid #1F1F1F" }}
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={closeMenu}
            className="text-sm py-2"
            style={{ color: "#F5F0E8", borderBottom: "1px solid #1F1F1F" }}
          >
            Courses
          </Link>
          <Link
            href="/my-profile"
            onClick={closeMenu}
            className="text-sm py-2"
            style={{ color: "#F5F0E8", borderBottom: "1px solid #1F1F1F" }}
          >
            My Profile
          </Link>

          {/* Auth Section */}
          {session ? (
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-500 shrink-0">
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      style={{ backgroundColor: "#E8622A" }}
                      className="w-full h-full flex items-center justify-center text-white font-bold text-xs"
                    >
                      {session.user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <span className="text-sm" style={{ color: "#F5F0E8" }}>
                  {session.user.name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm"
                style={{ color: "#E8622A" }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/login"
                onClick={closeMenu}
                className="w-full text-center py-2 text-sm"
                style={{ border: "1px solid #F5F0E8", color: "#F5F0E8" }}
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={closeMenu}
                className="w-full text-center py-2 text-sm font-semibold"
                style={{ backgroundColor: "#E8622A", color: "#fff" }}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
