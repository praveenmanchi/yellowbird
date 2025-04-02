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
          ogImage: "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
          ogUrl: "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
        },
      },
    }),
    sitemap({
      hostname: "https://www.praveenmanchi.art/",
      generateRobotsTxt: true, // Explicitly enable robots.txt generation
    }),
  ],
});
