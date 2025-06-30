"use client";

import { useEffect, useRef } from "react";

export default function ScrollBetweenSections({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const indexRef = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sectionsRef.current.length) return;
      isScrolling.current = true;
      indexRef.current = index;
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });

      // блокируем scroll на 1200мс чтобы юзер не проскроллил ещё
      setTimeout(() => {
        isScrolling.current = false;
      }, 1200);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const delta = e.deltaY;

      if (delta > 50) {
        scrollToSection(indexRef.current + 1);
      } else if (delta < -50) {
        scrollToSection(indexRef.current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return <div>{children}</div>;
}
