import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import vitePluginSitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/aboutme",
  "/casestudies",
  "/blog",
  "/contact",
  "/photography",
  "/designprocess",
];

export default defineConfig({
  publicDir: "public",
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Praveen Manchi - UX/UI Designer",
          description:
            "Explore my portfolio showcasing innovative UX/UI design solutions in AI, IoT, and emerging technologies.",
          keywords:
            "UX Design, UI Design, Product Design, Web Development, AI, IoT, UX Engineer, Portfolio",
          favicon: "/favicon.ico",
          ogImage:
            "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
          ogUrl:
            "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
        },
      },
    }),
    vitePluginSitemap({
      hostname: "https://www.praveenmanchi.art",
      generateRobotsTxt: true,
      routes,
      transform: async (_, route) => {
        console.log("Adding to sitemap:", route);
        return {
          url: route,
          priority: route === "/" ? 1.0 : 0.8,
          changefreq: "monthly",
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
});
