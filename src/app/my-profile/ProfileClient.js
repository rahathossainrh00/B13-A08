"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyProfilePage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (mounted && !isPending && !session) {
      router.push("/login?redirect=/my-profile");
    }
  }, [session, isPending, mounted]);

  if (!mounted) return null;

  if (isPending) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: "#E8622A", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="w-full max-w-md p-10 rounded-lg flex flex-col items-center gap-6"
        style={{ backgroundColor: "#111111", border: "1px solid #1F1F1F" }}
      >
        {/* Avatar */}
        <div
          className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
          style={{ border: "2px solid #E8622A" }}
        >
          {user.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-3xl font-bold"
              style={{ backgroundColor: "#1a0f0a", color: "#E8622A", fontFamily: "'Playfair Display', serif" }}
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Name */}
        <div className="text-center">
          <h1
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
          >
            {user.name}
          </h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            {user.email}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full" style={{ borderTop: "1px solid #1F1F1F" }} />

        {/* Update Button */}
        <Link
          href="/my-profile/update"
          className="w-full text-center py-3 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#E8622A", color: "#fff" }}
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}
