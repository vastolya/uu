import { useEffect, useRef } from "react";

export function useSectionScroll(sectionIds: string[]) {
  const indexRef = useRef(0);
  const isScrolling = useRef(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const scrollTop = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: scrollTop - 72,
      behavior: "smooth",
    });

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  };

  useEffect(() => {
    const isCurrentSectionTopInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const headerOffset = 72;
      return rect.top >= 0 && rect.top <= headerOffset + 20;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const currentId = sectionIds[indexRef.current];
      const currentEl = document.getElementById(currentId);
      if (!currentEl) return;

      if (!isCurrentSectionTopInViewport(currentEl)) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = indexRef.current + direction;

      if (nextIndex >= 0 && nextIndex < sectionIds.length) {
        indexRef.current = nextIndex;
        scrollToId(sectionIds[nextIndex]);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [sectionIds]);

  return { scrollToId };
}
