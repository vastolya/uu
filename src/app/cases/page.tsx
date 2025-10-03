import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ImageCases from "@public/imageCases.webp";
import { PageSection } from "@/components/layout/PageSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Портфолио ДАБЛ-Ю | Архитектура и дизайн интерьеров",
  description:
    "Реализованные проекты бюро ДАБЛ-Ю: архитектура, интерьеры, общественные пространства.",
  alternates: {
    canonical: "/cases",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Cases = () => {
  return (
    <>
      <div className="h-20"></div>
      <div className="relative h-[55rem] w-screen ">
        <Image
          src={ImageCases}
          alt="imageNews1"
          sizes="auto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,27,0)_50%,#1D1D1B_90.14%)]" />
        <PageSection className="text-white items-end pt-[40.75rem]">
          <h1 className=" col-span-4  z-10">Портфолио</h1>
          <div className="col-span-4  z-10">
            <p className="subtitle-bold pb-4 ">
              Добро пожаловать в коллекцию живых,
              <br /> вдохновляющих пространств, созданных нами — и для вас
            </p>
            <p className="subtitle">
              Только высказывания, только идеи, только архитектура, в которой
              форма подчинена чувству, а стиль — смыслу. Мы проектируем не
              здания, а переживания. За каждым объектом — интеллектуальная
              глубина и эмоциональная выразительность. Это архитектура,
              рожденная из диалога
            </p>
          </div>
        </PageSection>
      </div>
      <PageSection>
        <section className="flex flex-col gap-2">
          <Link href={"/cases/okhta"}>okhta</Link>
          <Link href={"/cases/samsonovskaya"}>samsonovskaya</Link>
          <Link href={"/cases/volzhskaya"}>volzhskaya</Link>
          <Link href={"/cases/corpus"}>corpus</Link>
          <Link href={"/cases/kvantoriym"}>kvantoriym</Link>
          <Link href={"/cases/temporal"}>temporal</Link>
          <Link href={"/cases/flat"}>flat</Link>
          <Link href={"/cases/sheremeteva"}>sheremeteva</Link>
        </section>
      </PageSection>
    </>
  );
};

export default Cases;
