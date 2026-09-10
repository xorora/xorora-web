import type { NextConfig } from "next";
import { legacyRedirectsForNextConfig } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
    // Prefer modern formats; keep high qualities allowed for text-heavy blog graphics.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      ...legacyRedirectsForNextConfig(),
      {
        source: "/data-ai",
        destination: "/ai",
        permanent: true,
      },
      {
        source: "/engagement-models",
        destination: "/",
        permanent: true,
      },
      {
        source: "/engagement-models/staff-augmentation-services",
        destination: "/consulting/staff-augmentation-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
