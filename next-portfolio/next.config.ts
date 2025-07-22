import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static site for easier deployment on platforms like Netlify
  output: 'export',
};

export default nextConfig;
