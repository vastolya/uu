import React from "react";
import Image from "next/image";
import ImageCases from "@public/imageCases.webp";
import { PageSection } from "@/components/layout/PageSection";
import CasesPage from "@/components/sections/CasesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио ДАБЛ-Ю | Архитектурное бюро в Санкт-Петербурге",
  description:
    "ДАБЛ-Ю — архитектурное бюро полного цикла в Санкт-Петербурге. Архитектурное проектирование, дизайн интерьеров, ландшафт, брендинг. Полный спектр услуг для вашего проекта — от идеи до реализации.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Cases() {
  return (
    <>
      <div className="h-14 md:h-20"></div>
      <div className="relative h-full md:h-[55rem] w-full">
        <Image
          src={ImageCases}
          alt="imageNews1"
          sizes="auto"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,27,0)_50%,#1D1D1B_90.14%)]" />
        <PageSection className="text-white md:items-end pt-8 md:pt-[40.75rem] pb-8 md:pb-0 flex flex-col px-4 md:!px-0">
          <h1 className=" col-span-4 z-10 pb-2 md:pb-0">Портфолио</h1>
          <div className="col-span-4 z-10">
            <p className="subtitle-bold pb-4 ">
              Добро пожаловать в коллекцию живых,
              <br className="hidden md:block" /> вдохновляющих пространств,
              созданных нами — и для вас
            </p>
            <p className="subtitle hidden md:block">
              Только высказывания, только идеи, только архитектура, в которой
              форма подчинена чувству, а стиль — смыслу. Мы проектируем не
              здания, а переживания. За каждым объектом — интеллектуальная
              глубина и эмоциональная выразительность. Это архитектура,
              рожденная из диалога
            </p>
          </div>
        </PageSection>
      </div>

      <CasesPage />
    </>
  );
}
