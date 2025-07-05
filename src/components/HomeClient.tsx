"use client";

import { useSectionScroll } from "@/hooks/useSectionScroll";

interface HomeClientProps {
  children: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
  useSectionScroll(
    ["top", "about", "cases", "direction", "form", "steps", "blog", "faq"],
    0
  );

  return <>{children}</>;
}
