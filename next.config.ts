import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: configDir,
  },
  async redirects() {
    return [
      {
        // The case studies now live on the home page.
        source: "/case-studies",
        destination: "/#case-studies",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
