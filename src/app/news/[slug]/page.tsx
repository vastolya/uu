import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PageSection } from "@/components/layout/PageSection";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";

export const revalidate = 60;

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) return notFound();

  const [previous, next] = await Promise.all([
    client.fetch(
      `*[_type == "post" && publishedAt > $date] | order(publishedAt asc)[0]`,
      { date: post.publishedAt }
    ),
    client.fetch(
      `*[_type == "post" && publishedAt < $date] | order(publishedAt desc)[0]`,
      { date: post.publishedAt }
    ),
  ]);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <section className="min-h-screen flex flex-col">
      <div className="h-14 md:h-20"></div>
      <div className="bg-[var(--color-black)]">
        <PageSection>
          <div className="text-white w-full col-span-6 px-4 md:px-0 py-8 md:py-20">
            <div className="flex justify-between md:justify-start md:gap-6 text-[var(--color-gray)] subtitle pb-4">
              <p>{post.tag}</p>
              <p>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("ru-RU")
                  : ""}
              </p>
            </div>
            <h1>{post.title || "Заголовок"}</h1>
          </div>
          {post.image && (
            <Image
              src={urlFor(post.image).url()}
              alt={post.title || "Изображение"}
              sizes="auto"
              className="col-span-2 h-full w-full object-cover hidden md:block"
              width={800}
              height={400}
            />
          )}
        </PageSection>
      </div>
      {post.body && (
        <div className="prose prose-lg dark:prose-invert max-w-[43rem] mx-auto pt-8 md:pt-20 pb-10 px-4 md:px-0">
          <PortableText
            value={post.body}
            components={{
              block: {
                h2: ({ children }) => (
                  <h2 className="h3 pb-5 md:pb-10">{children}</h2>
                ),
                normal: ({ children }) => (
                  <p className="subtitle ">{children}</p>
                ),
              },
            }}
          />
        </div>
      )}
      <div className="flex justify-between max-w-[43rem] w-full mx-auto pb-[52px] md:pb-20 px-4 md:px-0">
        {previous ? (
          <Link
            href={`/news/${previous.slug.current}`}
            className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <IconChevron className="rotate-270 h-[1rem]" />
            <button className="cursor-pointer">Предыдущая</button>
          </Link>
        ) : (
          <Link
            href={`/news`}
            className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <IconChevron className="rotate-270 h-[1rem] " />
            <button className="cursor-pointer">К новостям</button>
          </Link>
        )}

        {next ? (
          <Link
            href={`/news/${next.slug.current}`}
            className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <button className="cursor-pointer">Следующая</button>
            <IconChevron className="rotate-90 h-[1rem]" />
          </Link>
        ) : (
          <Link
            href={`/news`}
            className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <button className="cursor-pointer">К новостям</button>
            <IconChevron className="rotate-90 h-[1rem] " />
          </Link>
        )}
      </div>
      {post.image && (
        <div>
          <Image
            src={urlFor(post.image).url()}
            alt={post.title || "Изображение"}
            sizes="auto"
            className="w-full h-[29.75rem] object-cover"
            width={1200}
            height={476}
          />
        </div>
      )}
    </section>
  );
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({ slug }));
}
