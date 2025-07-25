import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import GalleryContent from "./GalleryContent";

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
