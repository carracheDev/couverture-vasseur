import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.couverture-vasseur.fr";

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/refection-toiture-ardoise-angers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/angers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
