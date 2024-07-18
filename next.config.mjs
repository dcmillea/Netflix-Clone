/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "rb.gy"], // Allow Next.js to optimize images from this domain
  },
};

export default nextConfig;
