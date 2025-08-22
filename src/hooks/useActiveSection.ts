import { useEffect, useState } from "react";

type Opts = {
  ids: string[];
  root?: Element | null; // ← делаем опциональным
  rootMargin?: string;
};

export function useActiveSection({
  ids,
  root,
  rootMargin = "-120px 0px -60% 0px",
}: Opts) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof document === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
          history.replaceState(null, "", `#${visible.target.id}`);
        }
      },
      {
        root: root ?? null, // ← если не передан, наблюдаем окно
        rootMargin,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, root, rootMargin]);

  return { activeId };
}
