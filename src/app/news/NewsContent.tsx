// components/news/NewsContent.tsx (клиентский компонент)
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PageSection } from "@/components/layout/PageSection";
import { urlFor } from "@/sanity/image";

const tabLabels = ["Все", "Новости", "Инновации", "События", "Загородные дома"];

interface Tab {
  label: string;
  value: string;
}

const tabs = tabLabels.map((item) => ({
  label: item,
  value: item,
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsContent({ posts }: { posts: any[] }) {
  const [activeTab, setActiveTab] = useState("Все");

  const filteredPosts = posts.filter(
    (post) => activeTab === "Все" || post.tag === activeTab
  );

  return (
    <section className="min-h-[calc(100vh-80px-200px)]">
      <div className="h-20"></div>
      <PageSection className="px-5 py-10 ">
        <p className="subtitle text-[var(--color-gray)] col-span-8 pb-4">
          Идеи, которые меняют города
        </p>
        <h1 className="col-span-8 pb-20">Новости и статьи</h1>

        <UnderlineTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

        {filteredPosts.map((post) => (
          <Link
            href={`/news/${post.slug.current}`}
            key={post._id}
            className="col-span-2 pb-10 flex flex-col gap-2"
          >
            <div className="overflow-hidden rounded-[var(--radius-sm)] cursor-pointer">
              {post.image && (
                <Image
                  src={urlFor(post.image).url()}
                  sizes="auto"
                  className={`object-cover w-full ${
                    post.type === "1" ? "h-[476px]" : "h-[332px]"
                  } hover:scale-120 hover:grayscale transition-all duration-300`}
                  alt={post.title || ""}
                  width={800}
                  height={332}
                />
              )}
            </div>

            <div>
              <p className="subtitle-bold pb-1">
                {post.title || "Без названия"}
              </p>
              <p className="subtitle text-[var(--color-gray)]">
                {post.tag || "Без тега"}
              </p>
            </div>
          </Link>
        ))}
      </PageSection>
    </section>
  );
}

function UnderlineTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState<{
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(
      `[data-active="true"]`
    ) as HTMLButtonElement | null;
    if (activeEl) {
      setUnderline({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    } else {
      setUnderline(null);
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="subtitle mb-10 box-border col-span-8 flex gap-2 relative border-b-2 border-[var(--color-border-gray)]"
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          data-active={active === tab.value || undefined}
          className={`box-border text-[var(--color-gray)] px-2 py-1 cursor-pointer ${
            active === tab.value ? "!text-[var(--color-black)]" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}

      <AnimatePresence>
        {underline && (
          <motion.div
            key="underline"
            className="absolute left-0 -bottom-[2px] h-[2px] bg-[var(--color-black)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              left: underline.left,
              width: underline.width,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
