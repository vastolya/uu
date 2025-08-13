"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import IconChevron from "../icons/IconChevron";
import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface AccordionItem {
  title: string;
  content?: string;
  topImage?: StaticImageData | undefined;
  bottomImage?: StaticImageData | undefined;
  variant?: "text" | "image";
}

interface AccordionProps {
  items: AccordionItem[];
  variant?: "text" | "image";
}

export function Accordion({ items, variant = "text" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <AccordionRow
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
          variant={variant}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  variant,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  variant: "text" | "image";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen, item.content]);

  return (
    <div
      className={`mb-5 md:mb-4 last:mb-0 box-border border-b-2  ${variant === "text" ? "border-[var(--color-border-gray)] last:border-b-0" : "border-[var(--color-gray)]"} p-4 md:p-0 md:py-6 flex flex-col`}
    >
      <button
        onClick={onToggle}
        className="flex w-full justify-between text-left cursor-pointer"
      >
        <h3 className={`${variant === "image" && "text-white"}`}>
          {item.title}
        </h3>
        <span className="flex justify-center items-center">
          <motion.span
            animate={{ rotate: isOpen ? 0 : -180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-6 text-[var(--color-gray)]"
          >
            <IconChevron />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {variant === "text" && (
              <div ref={ref} className="">
                <p className="subtitle pt-2">
                  {item.content?.split("<br/>").map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {item.content &&
                        i !== item.content.split("<br/>").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            )}

            {variant === "image" && (
              <div ref={ref} className="flex flex-col gap-4 pt-4">
                {item.topImage && (
                  <Image
                    src={item.topImage}
                    alt={`item.topImage`}
                    sizes="33vw"
                    className="object-cover w-full aspect-square rounded-[var(--radius-sm)]"
                  />
                )}
                {item.bottomImage && (
                  <Image
                    src={item.bottomImage}
                    alt={`item.topImage`}
                    sizes="33vw"
                    className="object-cover w-full aspect-square  rounded-[var(--radius-sm)]"
                  />
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
