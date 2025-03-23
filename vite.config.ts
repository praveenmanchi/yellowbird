import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  publicDir: "public", // Ensure public/ is copied to dist/
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Praveen Manchi - UX/UI Designer",
          description: "Explore my portfolio showcasing innovative UX/UI design solutions in AI, IoT, and emerging technologies.",
          keywords: "UX Design, UI Design, Product Design, Web Development, AI, IoT, UX Engineer, Portfolio",
          favicon: "/favicon.ico",
          ogImage: "https://praveen-manchi.com/og-image.jpg",
          ogUrl: "https://praveen-manchi.com",
        },
      },
    }),
    sitemap({
      hostname: "https://praveen-manchi.com",
      generateRobotsTxt: true, // Explicitly enable robots.txt generation
    }),
  ],
});
