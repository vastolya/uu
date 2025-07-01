import { useEffect, useRef } from "react";

export function useSectionScroll(sectionIds: string[]) {
  const indexRef = useRef(0);
  const isScrolling = useRef(false);

  const isMostlyInView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const threshold = 100;
    return (
      rect.top >= -threshold && rect.bottom <= window.innerHeight + threshold
    );
  };

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

  console.log("scroll triggered", {
    index: indexRef.current,
    delta: e.deltaY,
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const currentId = sectionIds[indexRef.current];
      const currentEl = document.getElementById(currentId);
      if (!currentEl) return;

      if (!isMostlyInView(currentEl)) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = indexRef.current + direction;

      if (nextIndex >= 0 && nextIndex < sectionIds.length) {
        const nextEl = document.getElementById(sectionIds[nextIndex]);
        if (!nextEl) return;

        if (nextEl.getBoundingClientRect().height <= window.innerHeight + 20) {
          indexRef.current = nextIndex;
          scrollToId(sectionIds[nextIndex]);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [sectionIds]);

  return { scrollToId };
}
