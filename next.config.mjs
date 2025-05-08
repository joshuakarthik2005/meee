/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          pathname: "**",
        },
      ],
    },
    // Explicitly enable App Router (optional, default in Next.js 13.4+)
    experimental: {
      appDir: true,
    },
  };
  
  export default nextConfig;