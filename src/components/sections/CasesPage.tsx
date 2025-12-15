"use client";

import React from "react";
import { PageSection } from "../layout/PageSection";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { useModalStore } from "@/stores/useModalStore";

const CasesPage = () => {
  const { open } = useModalStore();

  return (
    <>
      <PageSection className="pt-5 pb-5 md:pt-20 md:pb-10 gap-y-5 flex flex-col px-4 md:!px-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key="case-sheremeteva"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
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
            className="flex flex-col col-span-2"
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
          Ваш объект станет точкой притяжения, а не фоном для будней
        </h3>
      </div>

      <PageSection className="pt-5 pb-5 md:pt-10 md:pb-10 gap-y-5 flex flex-col px-4 md:!px-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key="case-samsonovskaya"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
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
                  src={"/volzhskaya11.webp"}
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
          {/* <motion.div
            key="case-corpus"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.35 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
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
          </motion.div> */}

          <motion.div
            key="case-spa"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-4"
          >
            <Link href={`/cases/spa`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[412px] md:h-[29.75rem]">
                <Image
                  src={"/spa3.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Спа-центр</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]">180 м²</p>
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

export default CasesPage;
