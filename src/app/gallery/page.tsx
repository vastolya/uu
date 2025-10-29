import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import GalleryContent from "./GalleryContent";
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Галерея ДАБЛ-Ю: картины, живопись и художественные коллекции",
  description:
    "Галерея архитектурного бюро ДАБЛ-Ю: живопись, авторские художественные работы, современные картины и коллекции для интерьеров и общественных пространств.",
  alternates: {
    canonical: canonical("/gallery"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60;

export default async function GalleryPage() {
  const arts = await client.fetch(`
    *[_type == "art"] | order(_createdAt desc){
      _id,
      title,
      material,
      type,
      size,
      slug,
      image, 
      body
    }
  `);

  if (!arts || arts.length === 0) return notFound();

  return <GalleryContent arts={arts} />;
}
