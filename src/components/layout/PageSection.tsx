import React from "react";

interface PageSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string; // добавили сюда
}

export function PageSection({
  children,
  id,
  className = "",
}: PageSectionProps) {
  return (
    <section id={id}>
      <div
        className={`max-w-[1440px] mx-auto px-4 grid grid-cols-8 gap-x-6 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
