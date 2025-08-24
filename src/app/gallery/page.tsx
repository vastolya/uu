import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import GalleryContent from "./GalleryContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея ДАБЛ-Ю: картины, живопись и художественные коллекции",
  description:
    "Галерея картин ДАБЛ-Ю: живопись, современные художественные работы, уникальные произведения искусства и вдохновение для вашего интерьера.",
  alternates: {
    canonical: "/gallery",
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
