import type { NextConfig } from "next";
import { legacyRedirectsForNextConfig } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirectsForNextConfig();
  },
};

export default nextConfig;
