/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com", pathname: "/Hoyasumii.png" },
    ],
  },
};

export default nextConfig;
