import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";

// Типизация данных из Sanity
type SanityDocument = {
  slug: string;
  _updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.uu-bereau.ru";

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/cases",
    "/gallery",
    "/news",
    "/policy",
    "/map",
    "/success",
  ].map((path) => ({
    url: `${host}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const [news, gallery] = await Promise.all([
    client.fetch<SanityDocument[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    ),
    client.fetch<SanityDocument[]>(
      `*[_type == "art" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    ),
  ]);

  const newsUrls: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${host}/news/${item.slug}`,
    lastModified: item._updatedAt ? new Date(item._updatedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const galleryUrls: MetadataRoute.Sitemap = gallery.map((item) => ({
    url: `${host}/gallery/${item.slug}`,
    lastModified: item._updatedAt ? new Date(item._updatedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...newsUrls, ...galleryUrls];
}
