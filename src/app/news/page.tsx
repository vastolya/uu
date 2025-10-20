// app/news/page.tsx (серверный компонент)
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import NewsContent from "@components/sections/NewsContent";

export const metadata: Metadata = {
  title: "Новости ДАБЛ-Ю | Архитектурное бюро в Санкт-Петербурге",
  description:
    "Свежие новости архитектурного бюро ДАБЛ-Ю: проекты, события, публикации и достижения команды. Архитектура, дизайн интерьеров, идеи и вдохновение.",
  alternates: {
    canonical: "/news",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60;

export default async function NewsPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)`
  );

  if (!posts) return notFound();

  return <NewsContent posts={posts} />;
}
