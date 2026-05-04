"use client";

import dynamic from "next/dynamic";

const UpdateClient = dynamic(() => import("./UpdateClient"), { ssr: false });

export default function UpdateProfilePage() {
  return <UpdateClient />;
}
