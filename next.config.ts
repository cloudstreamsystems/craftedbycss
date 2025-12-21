import type { NextConfig } from "next";
import { createSecureHeaders } from "next-secure-headers";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: "'self'",
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'", "data:", "blob:"],
              scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
              connectSrc: ["'self'"],
              frameSrc: [],
            },
          },
          forceHTTPSRedirect: [true, { maxAge: 63072000, includeSubDomains: true, preload: true }],
          frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "block-rendering",
          referrerPolicy: "strict-origin-when-cross-origin",
        }),
      },
    ];
  },
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
