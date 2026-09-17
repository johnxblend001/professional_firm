import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fincia-demo.themetechmount.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/home-1",
    "/home-2",
    "/home-3",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/our-experts",
    "/pricing-plan",
    "/faq-support",
    "/testimonial",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" || route === "/home-1" ? 1.0 : 0.8,
  }));
}
