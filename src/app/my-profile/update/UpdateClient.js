"use client";

import { useState, useEffect } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const [mounted, setMounted] = useState(false);
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isPending && !session) {
      router.push("/login?redirect=/my-profile/update");
    }
    if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
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
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: "#E8622A", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  if (!session) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await authClient.updateUser({ name, image });
      
      if (error) {
        toast.error(error.message || "Failed to update profile.");
        return;
      }
      
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="w-full max-w-md p-10 rounded-lg flex flex-col gap-6"
        style={{ backgroundColor: "#111111", border: "1px solid #1F1F1F" }}
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
        >
          Update Information
        </h1>
        <p className="text-sm mb-8" style={{ color: "#6B6B6B" }}>
          Change your name or profile photo URL.
        </p>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-xs uppercase tracking-widest"
              style={{ color: "#6B6B6B" }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 text-sm outline-none rounded"
              style={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #1F1F1F",
                color: "#F5F0E8",
              }}
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-2">
            <label
              className="text-xs uppercase tracking-widest"
              style={{ color: "#6B6B6B" }}
            >
              Photo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="px-4 py-3 text-sm outline-none rounded"
              style={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #1F1F1F",
                color: "#F5F0E8",
              }}
            />
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="w-full py-3 text-sm font-semibold uppercase tracking-widest mt-2 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#E8622A", color: "#fff", transition: "opacity 0.2s ease" }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                Updating...
              </>
            ) : "Update Information"}
          </button>

          {/* Cancel */}
          <button
            onClick={() => router.push("/my-profile")}
            className="w-full py-3 text-sm font-semibold uppercase tracking-widest"
            style={{
              border: "1px solid #1F1F1F",
              color: "#6B6B6B",
              backgroundColor: "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1F1F1F"; e.currentTarget.style.color = "#F5F0E8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#6B6B6B"; }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
