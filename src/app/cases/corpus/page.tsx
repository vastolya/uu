"use client";

import { PageSection } from "@/components/layout/PageSection";
import Volzhskaya1 from "@public/volzhskaya1.webp";

import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";

export default function Page() {
  return (
    <>
      <div className="h-20" />
      <PageSection className="">
        <div className="py-10 col-span-8">
          <p className="pb-2 text-[var(--color-gray)]">(Ярославль)</p>
          <h1>Волжская набережная</h1>
        </div>

        <div className="col-span-4">
          <Image
            src={Volzhskaya1}
            alt=""
            sizes="auto"
            className="h-[476px] w-full object-cover mb-2 rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[2172px] mb-[12.5rem]">
            <section className="sticky top-20">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto">Локация</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Центральная набережная р. Волги
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto">Тип услуги</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Благоустройство
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] mb-[376px]">
                <p className="col-span-2">Площадь</p>
                <p className="col-span-2 text-[var(--color-gray)]">5.56 га</p>
              </div>

              <h3 className="col-span-2">
                Центральная набережная в историческом центре Ярославля (объект
                ЮНЕСКО)
              </h3>
            </section>
          </div>
        </div>

        <Image
          src={Volzhskaya1}
          alt=""
          sizes="auto"
          className="h-[43rem] w-full object-cover col-span-8 mb-6 rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущая</button>
        </Link>
        <Link
          href={`/cases`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">Следующая</button>
          <IconChevron className="rotate-90 h-[1rem]" />
        </Link>
      </div>

      {/* Форма */}
      <PageSection
        className="px-4 py-[52px] md:px-5 md:py-20 flex flex-col md:flex-row"
        id="form"
      >
        <div className="col-span-4 justify-between flex flex-col pb-8 md:pb-0">
          <h2>
            Давайте начнем{" "}
            <span className="text-[var(--color-primary)]">
              новую историю вместе
            </span>
          </h2>
          <Image
            src={ImageArrow}
            alt=""
            width={154}
            height={154}
            className="hidden md:block"
          />
        </div>
        <Form className="col-span-4" />
      </PageSection>
    </>
  );
}
