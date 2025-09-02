import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Be more lenient with builds in CI environments
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: process.env.NODE_ENV === "production",
  },
  compiler: {
    // Remove console logs in production and staging
    removeConsole: ["production", "staging"].includes(
      process.env.NODE_ENV || ""
    ),
  },
  images: {
    domains: [
      "www.shutterstock.com",
      "images.unsplash.com",
      "unsplash.com",

      // S3 Buckets
      "kroolo-qastage.s3.amazonaws.com",
      "kroolo-public-images.s3.ap-south-1.amazonaws.com",
      "dev-enterprisesearch.s3.us-east-2.amazonaws.com",
      "qa-enterprisesearch.s3.us-east-2.amazonaws.com",
      "enterprise-search-dev.s3.us-east-2.amazonaws.com",
      "enterprise-search-qa.s3.us-east-2.amazonaws.com",
      "enterprise-search-prod.s3.us-east-2.amazonaws.com",
      "kroolo-enterprise-search.s3.us-east-2.amazonaws.com",
      "kroolo-enterprise-search-dev.s3.us-east-2.amazonaws.com",
      "kroolo-enterprise-search-qa.s3.us-east-2.amazonaws.com",
      "kroolo-enterprise-search-prod.s3.us-east-2.amazonaws.com",

      // Other
      "lh3.googleusercontent.com", // Google avatars
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [{ name: "removeViewBox", active: false }],
            },
            titleProp: true,
            ref: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
