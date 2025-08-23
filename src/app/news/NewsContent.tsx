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
  count: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsContent({ posts }: { posts: any[] }) {
  const [activeTab, setActiveTab] = useState("Все");

  const filteredPosts = posts.filter(
    (post) => activeTab === "Все" || post.tag === activeTab
  );

  const tabsWithCount = tabLabels.map((label) => ({
    label,
    value: label,
    count:
      label === "Все"
        ? posts.length
        : posts.filter((post) => post.tag === label).length,
  }));

  return (
    <section className="min-h-[calc(100vh-80px-200px)]">
      <div className="md:h-20 h-[56px]"></div>
      <PageSection className="px-4 py-5 md:px-5 md:py-10 flex flex-col ">
        <p className="subtitle text-[var(--color-gray)] col-span-8 pb-2 md:pb-4">
          Идеи, которые меняют города
        </p>
        <h1 className="col-span-8 md:pb-20 pb-8">Новости и статьи</h1>

        <UnderlineTabs
          tabs={tabsWithCount}
          active={activeTab}
          onChange={setActiveTab}
        />

        <AnimatePresence mode="wait">
          {filteredPosts.map((post) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="col-span-2 pb-8 md:pb-10 flex flex-col gap-2"
            >
              <Link
                href={`/news/${post.slug.current}`}
                className="overflow-hidden rounded-[var(--radius-sm)] cursor-pointer"
              >
                {post.image && (
                  <Image
                    src={urlFor(post.image).url()}
                    sizes="auto"
                    className={`object-cover w-full ${
                      post.type === "1"
                        ? "h-[288px] md:h-[29.75rem]"
                        : "h-[288px] md:h-[20.75rem]"
                    } hover:scale-120 hover:grayscale transition-all duration-300`}
                    alt={post.title || ""}
                    width={800}
                    height={332}
                    quality={75}
                  />
                )}
              </Link>

              <div>
                <p className="subtitle-bold pb-1">
                  {post.title || "Без названия"}
                </p>
                <p className="subtitle text-[var(--color-gray)]">
                  {post.tag || "Без тега"}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
    <div className="col-span-8 mb-10 overflow-x-auto md:overflow-visible hide-scrollbar">
      <div
        ref={containerRef}
        className="subtitle box-border relative inline-flex md:flex gap-2 border-b-2 border-[var(--color-border-gray)] min-w-max"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            data-active={active === tab.value || undefined}
            className={`flex box-border text-[var(--color-gray)] px-2 py-1 cursor-pointer whitespace-nowrap ${
              active === tab.value ? "!text-[var(--color-black)]" : ""
            }`}
          >
            <div className="flex gap-2">
              {tab.label}
              <p className="subtitle-sm items-center flex">{tab.count}</p>
            </div>
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
    </div>
  );
}
