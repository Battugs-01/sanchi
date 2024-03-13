/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en", "mn"],
    defaultLocale: "en",
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
