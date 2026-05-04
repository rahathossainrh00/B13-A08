"use client";

import { Suspense, useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await signIn.email({ email, password });
      
      if (error) {
        toast.error(error.message || "Invalid email or password.");
        return;
      }
      
      toast.success("Welcome back!");
      router.push(redirectTo);
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      const { data, error } = await signIn.social({ provider: "google", callbackURL: redirectTo });
      if (error) {
        toast.error(error.message || "Google sign in failed.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred with Google Sign In.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="w-full max-w-md p-10 rounded-lg"
        style={{ backgroundColor: "#111111", border: "1px solid #1F1F1F" }}
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
        >
          Login
        </h1>
        <p className="text-sm mb-8" style={{ color: "#6B6B6B" }}>
          Welcome back. Continue your learning journey.
        </p>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: "#6B6B6B" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 text-sm outline-none rounded"
              style={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #1F1F1F",
                color: "#F5F0E8",
              }}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: "#6B6B6B" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 text-sm outline-none rounded"
              style={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #1F1F1F",
                color: "#F5F0E8",
              }}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 text-sm font-semibold uppercase tracking-widest mt-2 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#E8622A", color: "#fff", transition: "opacity 0.2s ease" }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                Logging in...
              </>
            ) : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1" style={{ borderTop: "1px solid #1F1F1F" }} />
            <span className="text-xs" style={{ color: "#6B6B6B" }}>or</span>
            <div className="flex-1" style={{ borderTop: "1px solid #1F1F1F" }} />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogle}
            className="w-full py-3 text-sm font-semibold"
            style={{
              border: "1px solid #F5F0E8",
              color: "#F5F0E8",
              backgroundColor: "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F0E8"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#F5F0E8"; }}
          >
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-sm" style={{ color: "#6B6B6B" }}>
            Don&apos;t have an account?{" "}
            <Link href="/register" style={{ color: "#E8622A" }} className="hover:opacity-70 transition-opacity">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
