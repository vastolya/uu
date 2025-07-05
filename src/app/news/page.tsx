// app/news/page.tsx (серверный компонент)
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import NewsContent from "./NewsContent";

export default async function NewsPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)`
  );

  if (!posts) return notFound();

  return <NewsContent posts={posts} />;
}
