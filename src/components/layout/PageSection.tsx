import React from "react";

interface PageSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function PageSection({
  children,
  id,
  className = "",
}: PageSectionProps) {
  return (
    <section id={id}>
      <div
        className={`md:max-w-[90rem] mx-auto md:px-4 flex justify-between md:grid md:grid-cols-8 md:gap-x-6 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
