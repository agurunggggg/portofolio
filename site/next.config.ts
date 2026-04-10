import type { NextConfig } from "next";
import { resolve } from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Portfolio" : "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: resolve(import.meta.dirname),
  },
};

export default nextConfig;