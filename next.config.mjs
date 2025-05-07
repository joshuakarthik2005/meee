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
    // Explicitly enable App Router and allow Pages Router
    experimental: {
      appDir: true, // Enable App Router for app/ directory
    },
  };
  
  export default nextConfig;