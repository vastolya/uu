import { useEffect, useRef } from "react";

export function useSectionScroll(sectionIds: string[]) {
  const indexRef = useRef(0);
  const isScrolling = useRef(false);

  const isFullyInView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const scrollTop = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: scrollTop - 72, // учёт фиксированного хедера
      behavior: "smooth",
    });

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      const currentId = sectionIds[indexRef.current];
      const currentEl = document.getElementById(currentId);
      if (!currentEl) return;

      // ⚠️ Только если текущая секция целиком в экране — разрешаем скролл
      if (!isFullyInView(currentEl)) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = indexRef.current + direction;

      if (nextIndex >= 0 && nextIndex < sectionIds.length) {
        const nextEl = document.getElementById(sectionIds[nextIndex]);
        if (!nextEl) return;

        // ✅ Только если следующая секция влезает в экран — разрешаем переход
        const rect = nextEl.getBoundingClientRect();
        if (rect.height <= window.innerHeight) {
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
