"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";

type Img = { src: StaticImageData; alt?: string; className?: string };

export default function OkhtaClient({
  images,
  right,
  activation = 0.4,
}: {
  images: Img[];
  right: React.ReactNode[];
  activation?: number;
}) {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // --- IntersectionObserver (как было) ---
  useEffect(() => {
    const root = leftRef.current;
    if (!root) return;

    const setup = () => {
      const H = root.getBoundingClientRect().height || window.innerHeight;
      const y = H * activation;

      const io = new IntersectionObserver(
        (entries) => {
          const e = entries
            .filter((x) => x.isIntersecting)
            .sort(
              (a, b) =>
                Math.abs(a.boundingClientRect.top) -
                Math.abs(b.boundingClientRect.top)
            )[0];
          if (e) setActive(Number((e.target as HTMLElement).dataset.idx));
        },
        { root, rootMargin: `${-y}px 0px ${-(H - y)}px 0px`, threshold: 0 }
      );

      itemRefs.current.forEach((el) => el && io.observe(el));
      return io;
    };

    let io = setup();
    const ro = new ResizeObserver(() => {
      io?.disconnect();
      io = setup();
    });
    ro.observe(root);

    return () => {
      io?.disconnect();
      ro.disconnect();
    };
  }, [activation]);

  // --- Глобальный проксирование скролла в левую колонку ---
  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!el) return;
      if (e.ctrlKey) return; // даём браузеру зум
      e.preventDefault();
      el.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" });
    };

    // поддержка кнопок клавиатуры
    const onKey = (e: KeyboardEvent) => {
      if (!el) return;
      const step = 60;
      const page = el.clientHeight * 0.9;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          el.scrollBy({ top: step });
          break;
        case "ArrowUp":
          e.preventDefault();
          el.scrollBy({ top: -step });
          break;
        case "PageDown":
          e.preventDefault();
          el.scrollBy({ top: page });
          break;
        case "PageUp":
          e.preventDefault();
          el.scrollBy({ top: -page });
          break;
        case "Home":
          e.preventDefault();
          el.scrollTo({ top: 0 });
          break;
        case "End":
          e.preventDefault();
          el.scrollTo({ top: el.scrollHeight });
          break;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel as any);
      window.removeEventListener("keydown", onKey as any);
    };
  }, []);

  const safeIndex = Math.min(active, right.length - 1);

  return (
    <>
      <div
        ref={leftRef}
        className="col-span-4 h-full overflow-y-auto overscroll-contain no-scrollbar"
      >
        <div className="flex flex-col gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              data-idx={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
            >
              <Image
                src={img.src}
                alt={img.alt ?? `image ${i + 1}`}
                sizes="(min-width:1024px) 66vw, 100vw"
                className={`w-full rounded-[var(--radius-sm)] object-cover ${img.className ?? ""}`}
                priority={i === 0}
              />
            </div>
          ))}
          <div className="h-[30vh]" />
        </div>
      </div>

      {/* правая колонка — липкая, меняем контент */}
      <aside className="col-span-4 sticky top-0 h-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ y: -16, opacity: 0 }} // старт чуть выше и прозрачный
            animate={{ y: 0, opacity: 1 }} // опускается на место и проявляется
            exit={{ y: -16, opacity: 0 }} // уходит вверх и гаснет
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full will-change-transform"
          >
            {right[safeIndex]}
          </motion.div>
        </AnimatePresence>
      </aside>
    </>
  );
}
