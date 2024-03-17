import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com", "placeimg.com", "images.pexels.com"],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
