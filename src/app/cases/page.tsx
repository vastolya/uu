"use client";
import React from "react";
import Image from "next/image";
import ImageCases from "@public/imageCases.webp";
import { PageSection } from "@/components/layout/PageSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useModalStore } from "@/stores/useModalStore";
import { AnimatePresence, motion } from "motion/react";

const Cases = () => {
  const { open } = useModalStore();

  return (
    <>
      <div className="h-14 md:h-20"></div>
      <div className="relative h-full md:h-[55rem] w-screen ">
        <Image
          src={ImageCases}
          alt="imageNews1"
          sizes="auto"
          fill
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

      <PageSection className="pt-5 pb-5 md:pt-20 md:pb-10 gap-y-5 flex flex-col px-4 md:!px-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key="case-sheremeteva"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2"
          >
            <Link href={`/cases/sheremeteva`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/sheremeteva1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                  priority
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Парк Шереметева</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Юрино, Марий Эл
                </p>
                <p className="subtitle text-[var(--color-gray)]">38.92 га</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            key="case-kvantoriym"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
          >
            <Link href={`/cases/kvantoriym`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/kvantoriym1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Кванториум-Сити</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]">1.4137 га</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            key="case-temporal"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2"
          >
            <Link href={`/cases/temporal`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/temporal1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Отель «Temporal»</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]"></p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </PageSection>

      <div className="md:max-w-[90rem] mx-auto md:grid md:grid-cols-8 md:gap-x-6 col-span-8 py-8 md:py-10 items-center bg-[var(--color-border-gray)] md:bg-transparent px-4 md:px-0">
        <h3 className="col-span-6 pb-2 md:pb-0">
          Превращаем пространства в эмоциональные ландшафты
        </h3>
        <p className="col-span-2 subtitle ">
          Где эстетика встречает прагматику, <br /> а ваше «чувство прекрасного»
          <br /> становится инвестиционным активом
        </p>
      </div>

      <PageSection className="pt-5 pb-5 md:pt-10 md:pb-10 gap-y-5 flex flex-col px-4 md:!px-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key="case-flat"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
          >
            <Link href={`/cases/flat`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/flat1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Жилая квартира</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]">87 м²</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            key="case-okhta"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
          >
            <Link href={`/cases/okhta`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/okhta1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Набережная реки Охты</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]"> 47253 м²</p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </PageSection>

      <div className="md:max-w-[90rem] mx-auto md:grid md:grid-cols-8 md:gap-x-6 col-span-8 py-10 items-center bg-[var(--color-border-gray)] md:bg-transparent px-4 md:px-0">
        <h3 className="col-span-6 pb-2 md:pb-0">
          Проекты с интеллектуальной архитектурой
        </h3>
        <p className="col-span-2 subtitle ">
          Каждая линия, каждый объём — <br />
          результат глубокой идеи,
          <br /> а не случайности
        </p>
      </div>

      <PageSection className="pt-5 pb-5 md:pt-10 md:pb-20 gap-y-5 flex flex-col px-4 md:!px-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key="case-samsonovskaya"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2"
          >
            <Link href={`/cases/samsonovskaya`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/samsonovskaya1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Самсоновская площадь</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">Петергоф</p>
                <p className="subtitle text-[var(--color-gray)]"></p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            key="case-volzhskaya"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
          >
            <Link href={`/cases/volzhskaya`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/volzhskaya5.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Волжская набережная</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">Ярославль</p>
                <p className="subtitle text-[var(--color-gray)]">5.56 га</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            key="case-corpus"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.35 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2"
          >
            <Link href={`/cases/corpus`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/corpus1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">
                Ресторан «Corpus Societas»
              </p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]"></p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </PageSection>

      <section className="px-4 md:px-0 py-[52px] md:py-20 bg-[var(--color-border-gray)]">
        <h2 className="flex justify-center pb-6">
          Архитектурное бюро, где ваши смелые идеи <br /> не «упираются в
          реальность», а меняют ее
        </h2>

        <div className="flex justify-center">
          <div className="w-[210px] ">
            <Button text="Обсудить проект" onClick={() => open("form")} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cases;
