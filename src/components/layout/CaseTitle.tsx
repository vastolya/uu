"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PageSection } from "./PageSection";

type CaseScrollBarProps = {
  title: string;
  description?: string;
  threshold?: number;
};

export default function CaseTitle({
  title,
  description,
  threshold = 120,
}: CaseScrollBarProps) {
  const [visible, setVisible] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const lastY = lastYRef.current;
          const scrollingDown = y > lastY;

          if (scrollingDown && y > threshold) {
            setVisible(true);
          } else {
            setVisible(false);
          }

          lastYRef.current = y;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    lastYRef.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-40 bg-white border-b-2 border-[var(--color-border-gray)]",
      ].join(" ")}
      aria-hidden={!visible}
    >
      <PageSection className="min-h-14 md:h-20 px-4 items-center">
        <p className="col-span-2 subtitle-bold text-[var(--color-gray)]">
          {title}
        </p>
        <p className="col-span-2 subtitle-bold text-[var(--color-gray)]">
          {description}
        </p>
      </PageSection>
    </motion.div>
  );
}
