"use client";
import { useEffect, useRef } from "react";

export function useSectionScroll(sectionIds: string[], offset = 72) {
  const indexRef = useRef(0);
  const isScrolling = useRef(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const scrollTop = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: scrollTop - offset,
      behavior: "smooth",
    });

    isScrolling.current = true;

    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      let nextIndex = indexRef.current + direction;

      nextIndex = Math.max(0, Math.min(sectionIds.length - 1, nextIndex));

      if (nextIndex !== indexRef.current) {
        e.preventDefault();
        indexRef.current = nextIndex;
        scrollToId(sectionIds[nextIndex]);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    const getClosestVisibleSectionIndex = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      return closestIndex;
    };

    // Устанавливаем начальный индекс в зависимости от видимого блока
    indexRef.current = getClosestVisibleSectionIndex();

    return () => window.removeEventListener("wheel", handleWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds, offset]);

  return {
    scrollToId,
  };
}
