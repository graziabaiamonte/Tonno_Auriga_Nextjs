import withBundleAnalyzer from "@next/bundle-analyzer";
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "",
  trailingSlash: true,
  images: {
    minimumCacheTTL: 60,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tonnoauriga.it",
        pathname: "/wp/wp-content/uploads/**",
      },
    ],
  },
};

// Configurazione dell'analizzatore
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
