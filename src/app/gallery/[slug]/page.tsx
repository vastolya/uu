import { PageSection } from "@/components/layout/PageSection";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import IconWU from "@/components/icons/IconWU";
import IconTg from "@/components/icons/IconTg";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const revalidate = 60;

export default async function ArtsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const arts = await client.fetch(
    `*[_type == "art" && slug.current == $slug][0]`,
    { slug }
  );

  let previous = null;
  let next = null;

  if (arts && arts._createdAt) {
    [previous, next] = await Promise.all([
      client.fetch(
        `*[_type == "art" && _createdAt > $date] | order(_createdAt asc)[0]`,
        { date: arts._createdAt }
      ),
      client.fetch(
        `*[_type == "art" && _createdAt < $date] | order(_createdAt desc)[0]`,
        { date: arts._createdAt }
      ),
    ]);
  }

  if (!arts) {
    notFound();
    return null;
  }

  return (
    <div className="">
      <div className="h-14 md:h-20" />
      <PageSection className="md:px-5 pt-[18px] md:pt-10 pb-[60px] md:pb-20 flex flex-col md:flex-row">
        <div className="h-[220px] md:h-[29.75rem] w-ful relative col-span-4  mb-[18px] md:mb-0">
          <Image
            src={urlFor(arts.image).url()}
            alt=""
            fill
            sizes="auto"
            className="object-contain rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="col-span-4 col-start-5 flex flex-col justify-between px-4">
          <div>
            <div className="flex justify-between md:pb-4 pb-[18px]">
              <h3 className="">{arts.title}</h3>
              <p className="p-1 bg-[var(--color-border-gray)] text-[var(--color-gray)] flex items-center rounded-[var(--radius-sm)]">
                {arts.tag}
              </p>
            </div>
            <ul className="list-disc pl-7 text-[var(--color-gray)] pb-4 subtitle flex flex-col gap-2 md:gap-0">
              <li className="">{arts.type}</li>
              <li>{arts.material}</li>
              <li>{arts.size}</li>
            </ul>
            <PortableText
              value={arts.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="subtitle pb-6">{children}</p>
                  ),
                },
              }}
            />
          </div>
          <div className="md:pb-5 flex justify-end items-center gap-6">
            <p className="subtitle select-text w-full flex justify-end">
              +7 969 739-99-66
            </p>
            <div className="gap-2 w-fit flex justify-end">
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]"
              >
                <IconWU />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]"
              >
                <IconTg />
              </Link>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="w-full pb-2 md:pb-20 px-4 md:px-0">
        {previous ? (
          <Link
            href={`/gallery/${previous.slug.current}`}
            className="flex items-center gap-2 cursor-pointer col-span-2 hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <IconChevron className="rotate-270 h-[1rem] " />
            <button className="cursor-pointer">Предыдущая</button>
          </Link>
        ) : (
          <Link
            href={`/gallery`}
            className="flex items-center gap-2 cursor-pointer col-span-2 hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <IconChevron className="rotate-270 h-[1rem]" />
            <button className="cursor-pointer">К галерее</button>
          </Link>
        )}

        {next ? (
          <Link
            href={`/gallery/${next.slug.current}`}
            className="flex items-center gap-2 cursor-pointer col-span-2 justify-end hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <button className="cursor-pointer">Следующая</button>
            <IconChevron className="rotate-90 h-[1rem]" />
          </Link>
        ) : (
          <Link
            href={`/gallery`}
            className="flex items-center gap-2 cursor-pointer col-span-2 justify-end hover:text-[var(--color-primary)] transition-all duration-200"
          >
            <button className="cursor-pointer">К галерее</button>
            <IconChevron className="rotate-90 h-[1rem]" />
          </Link>
        )}
      </PageSection>

      <div className="bg-[var(--color-black)] border-b-2 border-[var(--color-gray)]">
        <PageSection className="px-4 py-[52px] md:py-20 flex flex-col md:flex-row">
          <h2 className="col-span-4 !text-white ">
            Хотите эту картину? <br className="flex md:hidden" />
            <span className="text-[var(--color-primary)]">Оставьте заявку</span>
          </h2>
          <div className="col-span-4 ">
            <Form variant="black" />
          </div>
        </PageSection>
      </div>
    </div>
  );
}

/* ===== Динамическая мета для галереи ===== */

type RouteParams = { slug: string };
type DynamicProps = { params: Promise<RouteParams> };

type ArtForMeta = {
  _id: string;
  title?: string;
  slug: { current: string };
  _createdAt?: string;
  body?: unknown;
};

async function getArt(slug: string): Promise<ArtForMeta | null> {
  return client.fetch(
    `*[_type=="art" && slug.current==$slug][0]{ _id, title, slug, _createdAt, body }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

function extractPlainText(body: unknown): string {
  try {
    if (!Array.isArray(body)) return "";
    return body
      .map((block) =>
        block?._type === "block" && Array.isArray(block.children)
          ? block.children.map((c: { text: string }) => c?.text ?? "").join("")
          : ""
      )
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  } catch {
    return "";
  }
}

export async function generateMetadata({
  params,
}: DynamicProps): Promise<Metadata> {
  const { slug } = await params;
  const art = await getArt(slug);

  if (!art) {
    return {
      title: "Галерея — ДАБЛ-Ю",
      description: "Картины и арт-проекты бюро ДАБЛ-Ю.",
      robots: { index: false, follow: false },
      alternates: { canonical: canonical(`/gallery/${slug}`) },
    };
  }

  const title = art.title?.trim() || "Работа из галереи — ДАБЛ-Ю";
  const bodyText = extractPlainText(art.body);
  const description =
    (bodyText && bodyText.slice(0, 160)) ||
    "Картины и арт-проекты бюро ДАБЛ-Ю.";
  const isFuture = art._createdAt
    ? new Date(art._createdAt) > new Date()
    : false;

  return {
    title,
    description,
    alternates: { canonical: canonical(`/gallery/${art.slug.current}`) },
    robots: { index: !isFuture, follow: !isFuture },
  };
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "art" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({ slug }));
}
