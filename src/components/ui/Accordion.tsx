"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import IconChevron from "../icons/IconChevron";
import React from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
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
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen, item.content]);

  return (
    <div className="box-border border-b-2 border-[var(--color-border-gray)] py-6 flex flex-col ">
      <button
        onClick={onToggle}
        className="flex w-full justify-between text-left cursor-pointer"
      >
        <h3>{item.title}</h3>
        <span className="flex justify-center items-center">
          <motion.span
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3 }}
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
            <div ref={ref} className="">
              <p className="subtitle pt-2">
                {item.content.split("<br/>").map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i !== item.content.split("<br/>").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
