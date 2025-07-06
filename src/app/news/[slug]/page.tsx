import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PageSection } from "@/components/layout/PageSection";
import { PortableText } from "@portabletext/react";

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

  if (!post) {
    notFound();
    return null;
  }

  return (
    <section className="min-h-screen flex flex-col">
      <div className="h-20"></div>
      <div className="bg-[var(--color-black)]">
        <PageSection>
          <div className="text-white col-span-6 py-20">
            <div className="flex gap-6 text-[var(--color-gray)] subtitle pb-4">
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
              className="col-span-2 h-full w-full object-cover"
              width={800}
              height={400}
            />
          )}
        </PageSection>
      </div>
      {post.body && (
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-20 px-5">
          <PortableText
            value={post.body}
            components={{
              block: {
                h3: ({ children }) => <h3 className="pb-10">{children}</h3>,
                p: ({ children }) => <p className="pb-6">{children}</p>,
              },
            }}
          />
        </div>
      )}
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
