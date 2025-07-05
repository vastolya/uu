"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PageSection } from "@/components/layout/PageSection";
import { news } from "@/lib/newsData";

const tabLabels = ["Все", "Новости", "Иновации", "События", "Загородные дома"];

const tabs = tabLabels.map((item) => ({
  label: item,
  value: item,
}));
interface Tab {
  label: string;
  value: string;
}
interface Props {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
}

const News = () => {
  const [activeTab, setActiveTab] = useState("Все");

  const filteredNews = Object.entries(news).filter(
    ([, item]) => activeTab === "Все" || item.tag === activeTab
  );

  return (
    <section className="min-h-[calc(100vh-80px-200px)]">
      <div className="h-20"></div>
      <PageSection className="px-5 py-10 ">
        <p className="subtitle text-[var(--color-gray)] col-span-8 pb-4">
          Идеи, которые меняют города
        </p>
        <h1 className="col-span-8 pb-20">Новости и статьи</h1>
        <UnderlineTabs
          tabs={tabs}
          active={activeTab}
          onChange={(value) => setActiveTab(value)}
        />

        {filteredNews.map(([key, value]) => (
          <Link
            href={`/news/${key}`}
            key={key}
            className="col-span-2 pb-10 flex flex-col gap-2"
          >
            <div className=" overflow-hidden rounded-[var(--radius-sm)] cursor-pointer">
              <Image
                src={value.image}
                sizes="auto"
                className={`object-cover w-full ${
                  value.type === "1" ? "h-[476px]" : "h-[332px]"
                } hover:scale-160 hover:grayscale transition-all duration-300`}
                alt=""
              />
            </div>

            <div>
              <p className="subtitle-bold pb-1">{value.title}</p>
              <p className="subtitle text-[var(--color-gray)]">{value.tag}</p>
            </div>
          </Link>
        ))}
      </PageSection>
    </section>
  );
};

export default News;

function UnderlineTabs({ tabs, active, onChange }: Props) {
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
