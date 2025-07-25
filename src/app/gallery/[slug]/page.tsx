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
import IconIn from "@/components/icons/IconIn";

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

  if (!arts) {
    notFound();
    return null;
  }

  return (
    <div className="">
      <div className="h-14 md:h-20" />
      <PageSection className="px-5 pt-10 pb-20">
        <div className="h-[476px] w-ful relative col-span-4  ">
          <Image
            src={urlFor(arts.image).url()}
            alt=""
            fill
            sizes="auto"
            className="object-contain rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="col-span-4 col-start-5 ">
          <div>
            <div className="flex justify-between pb-4 ">
              <h3 className="">{arts.title}</h3>
              <p className="p-1 bg-[var(--color-border-gray)] text-[var(--color-gray)] flex items-center rounded-[var(--radius-sm)]">
                {arts.tag}
              </p>
            </div>
            <ul className="list-disc pl-7 text-[var(--color-gray)] pb-4 subtitle">
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
          <div className="pb-5 md:pb-[6.75rem] flex  items-center gap-6">
            <div className="flex gap-2 w-full md:w-fit justify-between">
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
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]"
              >
                <IconIn />
              </Link>
            </div>
            <p className="subtitle select-text hidden md:block">
              +7 969 739-99-66
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "art" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({ slug }));
}
