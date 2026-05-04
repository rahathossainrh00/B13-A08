"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return an invisible nav with the same background to prevent layout shift
    return (
      <nav
        style={{
          backgroundColor: "#111111",
          borderBottom: "1px solid #1F1F1F",
          height: "69px",
        }}
        className="w-full"
      />
    );
  }

  return <Navbar />;
}
