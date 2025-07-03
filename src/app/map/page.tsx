import React from "react";
import { PageSection } from "@components/layout/PageSection";
import ImageMap from "@public/imageMap.jpg";
import Image from "next/image";
import IconWU from "@/components/icons/IconWU";
import IconTg from "@/components/icons/IconTg";
import IconIn from "@/components/icons/IconIn";
import Link from "next/link";

const Map = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-20"></div>
      <PageSection className="py-10 z-50">
        <div className="col-span-4">
          <h1 className="">Контакты</h1>
        </div>
        <div className="col-span-4 relative">
          <h3 className="pb-6">w11group@ya.ru</h3>
          <div className="pb-[6.75rem] flex  items-center gap-6">
            <div className="flex gap-2">
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-border-gray)] rounded-[var(--radius-sm)]"
              >
                <IconWU />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-border-gray)] rounded-[var(--radius-sm)]"
              >
                <IconTg />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-border-gray)] rounded-[var(--radius-sm)]"
              >
                <IconIn />
              </Link>
            </div>
            <p className="subtitle">+7 969 739-99-66</p>
          </div>
          <h3>Санкт-Петербург, Невский проспект, дом 72</h3>
        </div>
      </PageSection>
      <div className="flex-1 relative overflow-hidden">
        <Image
          src={ImageMap}
          alt=""
          fill
          priority
          sizes="auto"
          className="grayscale-100 object-cover hover:scale-125 hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Map;
