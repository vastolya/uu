import React from "react";
import { PageSection } from "@components/layout/PageSection";
import IconWU from "@/components/icons/IconWU";
import IconTg from "@/components/icons/IconTg";
import IconIn from "@/components/icons/IconIn";
import Link from "next/link";

const Map = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:h-20 h-[56px]"></div>
      <PageSection className="px-4 pt-5 md:pt-10 md:py-10 z-50 flex flex-col md:flex-row">
        <div className="col-span-4 pb-[42px] md:pb-0">
          <h1 className="">Контакты</h1>
        </div>
        <div className="col-span-4 relative">
          <h3 className="pb-6 select-text">w11group@ya.ru</h3>
          <p className="subtitle select-text block md:hidden pb-5 ">
            +7 969 739-99-66
          </p>
          <div className="pb-5 md:pb-[6.75rem] flex  items-center gap-6">
            <div className="flex gap-2 w-full md:w-fit justify-between">
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]"
              >
                <IconWU />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]"
              >
                <IconTg />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]"
              >
                <IconIn />
              </Link>
            </div>
            <p className="subtitle select-text hidden md:block">
              +7 969 739-99-66
            </p>
          </div>
          <h3 className="pb-5 md:pb-0 select-text">
            Санкт-Петербург, Невский проспект, дом 72
          </h3>
        </div>
      </PageSection>
      <div className="flex-1 relative overflow-hidden">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab9ec88cde93dab7ff3a508ef26b999a92b83f372d656da022617c5572cd540a6&amp;source=constructor"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full min-h-[25rem] border-0 md:grayscale-100 md:hover:scale-125 md:hover:grayscale-0 transition-all duration-300"
          allowFullScreen
          title="Yandex Map"
        />
      </div>
    </div>
  );
};

export default Map;
