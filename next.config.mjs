/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["mongodb", "better-auth", "better-sqlite3"],
};

export default nextConfig;
