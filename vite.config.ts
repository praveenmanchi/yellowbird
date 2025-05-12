import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import vitePluginSitemap from "vite-plugin-sitemap"; // Correct import from your package.json

const myRoutes = [ // Renamed for clarity
  "/",
  "/aboutme",
  "/casestudies",
  "/blog",
  "/contact",
  "/photography",
  "/designprocess",
];

// Prepare per-route options for priority, changefreq, lastmod
const sitemapOptionsByRoute = {};
const currentDate = new Date().toISOString();

myRoutes.forEach(route => {
  sitemapOptionsByRoute[route] = {
    priority: route === "/" ? 1.0 : 0.8,
    changefreq: "monthly",
    lastmod: currentDate,
  };
});

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
          // It's generally better for ogUrl to be the canonical URL of the page
          ogUrl: "https://www.praveenmanchi.art/",
        },
      },
    }),
    vitePluginSitemap({
      hostname: "https://www.praveenmanchi.art",
      generateRobotsTxt: true,
      dynamicRoutes: myRoutes, // Use dynamicRoutes for your array of paths (Source 1.1)

      // Configure priority, changefreq, lastmod using an object map (Source 1.1)
      // The plugin docs mention RoutesOptionMap<Type>: { [route: string]: Type }
      // This means you create an object where keys are routes and values are the settings.

      priority: myRoutes.reduce((acc, route) => {
        acc[route] = route === "/" ? 1.0 : 0.8;
        return acc;
      }, {}),

      changefreq: myRoutes.reduce((acc, route) => {
        acc[route] = "monthly";
        return acc;
      }, {}),

      lastmod: myRoutes.reduce((acc, route) => {
        acc[route] = currentDate; // Use the same date for all for this example
        return acc;
      }, {}),

      // If the plugin logs anything internally for route processing, it should appear now.
      // There isn't a specific 'transform' callback like you had for this plugin.
      // The console.log you had in transform won't work as that option isn't standard here.
    }),
  ],
});