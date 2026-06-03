import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rootsofgrace.com",
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
