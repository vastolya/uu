import React, { forwardRef } from "react";

interface PageSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  ({ children, id, className = "" }, ref) => {
    return (
      <section id={id} ref={ref}>
        <div
          className={`md:max-w-[90rem] mx-auto md:px-4 flex justify-between md:grid md:grid-cols-8 md:gap-x-6 ${className}`}
        >
          {children}
        </div>
      </section>
    );
  }
);

PageSection.displayName = "PageSection"; // важно для devtools и hot reload
