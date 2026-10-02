import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.136"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next.geoceconsultants.com",
        pathname: "/geoce-logo-2022.png",
      },
    ],
  },
};

export default nextConfig;
