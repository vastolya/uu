"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";

type Img = { src: StaticImageData; alt?: string; className?: string };

export default function OkhtaClient({
  images,
  right,
  activation = 0.4,
  getRightIndex,
}: {
  images: Img[];
  right: React.ReactNode[];
  activation?: number;
  getRightIndex?: (imageIndex: number) => number;
}) {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // 1) Подсветка активной картинки (как у тебя было)
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

  // 2) Точный «делитель» дельты: страница ↔ внутр. скролл (без snap/threshold)
  useEffect(() => {
    const scroller = leftRef.current;
    if (!scroller) return;

    // «Сторож» — ближайший контейнер с data-scroll-capture
    const host = scroller.closest(
      "[data-scroll-capture]"
    ) as HTMLElement | null;
    if (!host) return;

    const pageScroll = (dy: number) => {
      if (dy !== 0) window.scrollBy({ top: dy, left: 0, behavior: "auto" });
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // не ломаем зум/масштаб
      e.preventDefault(); // всё распределяем сами

      let dy = e.deltaY;
      if (dy === 0) return;

      const vh = window.innerHeight;

      // Текущая геометрия компонента относительно вьюпорта
      const rect = host.getBoundingClientRect();

      // Функции проверки «режима компонента»
      const coversViewport = (r: DOMRect) => r.top <= 0 && r.bottom >= vh;

      // ===== Скролл ВНИЗ =====
      if (dy > 0) {
        // 1) Если верх компонента ещё не у верхней границы — часть дельты отдать странице
        if (rect.top > 0) {
          const toTop = Math.min(dy, rect.top); // столько нужно, чтобы прижать top к 0
          pageScroll(toTop);
          dy -= toTop;
          if (dy <= 0) return;
        }

        // 2) Обновим геометрию после возможного сдвига страницы
        const rect2 = host.getBoundingClientRect();

        // 3) Если компонент перекрывает весь экран — сначала внутренняя колонка
        if (coversViewport(rect2)) {
          const spaceDown =
            scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;
          const take = Math.min(dy, spaceDown);
          if (take > 0) {
            scroller.scrollTop += take;
            dy -= take;
            if (dy <= 0) return;
          }
        }

        // 4) Остаток — странице (выйти ниже компонента)
        pageScroll(dy);
        return;
      }

      // ===== Скролл ВВЕРХ ===== (dy < 0)
      {
        // 0) Текущая геометрия
        let r = host.getBoundingClientRect();

        // 1) Если верх блока уже "завис" над экраном — дотащим top до 0
        if (r.top < 0) {
          // сколько нужно, чтобы top стал 0
          const needTop = Math.min(-dy, -r.top);
          pageScroll(-needTop); // вверх (отрицательный сдвиг)
          dy += needTop;
          if (dy >= 0) return;
          r = host.getBoundingClientRect(); // обновим геометрию
        }

        // 2) Если блок перекрывает весь экран — сначала крутим ВНУТРИ вверх
        if (r.top <= 0 && r.bottom >= vh) {
          const spaceUp = scroller.scrollTop; // сколько есть наверх
          const take = Math.min(-dy, spaceUp);
          if (take > 0) {
            scroller.scrollTop -= take;
            dy += take;
            if (dy >= 0) return;
          }
          // геометрию можно не обновлять — не трогали страницу
        } else {
          // 2a) Если блок просто "не дотягивает" снизу — дотащим bottom до vh
          if (r.bottom < vh) {
            const needBottom = Math.min(-dy, vh - r.bottom);
            pageScroll(-needBottom); // вверх
            dy += needBottom;
            if (dy >= 0) return;
            r = host.getBoundingClientRect();
          }
        }

        // 3) Остаток — странице (уходим выше блока)
        pageScroll(dy); // dy отрицательный => вверх
        return;
      }
    };

    // Слушаем глобально, чтобы поведение не зависело от ховера
    window.addEventListener("wheel", onWheel, {
      passive: false,
      capture: true,
    });
    return () =>
      window.removeEventListener("wheel", onWheel, { capture: true });
  }, []);

  const mappedIndex = getRightIndex ? getRightIndex(active) : 0;
  const safeIndex = Math.min(Math.max(mappedIndex, 0), right.length - 1);

  return (
    <>
      <div
        ref={leftRef}
        className="col-span-4 h-full overflow-y-auto no-scrollbar"
        // Важно: НЕ ставим overscroll-contain/none — даём «протекать» наружу
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
          {/* небольшой «хвост», если нужно плавнее добиваться дна */}
          <div className="h-[20vh]" />
        </div>
      </div>

      <aside className="col-span-4 sticky top-0 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full will-change-transform"
          >
            {right[safeIndex]}
          </motion.div>
        </AnimatePresence>
      </aside>
    </>
  );
}
