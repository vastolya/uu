"use client";

import React from "react";
import { PageSection } from "../layout/PageSection";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const AboutCases = () => {
  return (
    <>
      <h2 className="block md:hidden pt-[52px] px-4 pb-8">
        Истинное <br /> удовольствие — в <br /> наблюдении за тем, <br /> как
        концепт обретает <br /> форму, ритм и <br /> материю
      </h2>

      <PageSection className="md:py-20 overflow-x-auto md:overflow-visible hide-scrollbar flex md:gap-5">
        <h2 className="col-span-8 pb-10 hidden md:block">
          Истинное удовольствие — в наблюдении за тем, как концепт обретает
          форму,
          <br /> ритм и материю
        </h2>

        <AnimatePresence mode="popLayout">
          <motion.div
            key="case-okhta"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2 px-4 md:px-0 "
          >
            <Link href={`/cases/okhta`} className="flex flex-col ">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[288px] md:h-[29.75rem] w-[320px] md:w-full">
                <Image
                  src={"/sheremeteva1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300 "
                  priority
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Набережная реки Охты</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санк-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]">47253 м²</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            key="case-samsonovskaya"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2 px-4 md:px-0"
          >
            <Link href={`/cases/samsonovskaya`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[288px] md:h-[29.75rem] w-[320px] md:w-full">
                <Image
                  src={"/samsonovskaya1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                  priority
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">Самсоновская площадь</p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">Петергоф</p>
                <p className="subtitle text-[var(--color-gray)]"></p>
              </div>
            </Link>
          </motion.div>

          <div className=" hidden md:flex md:col-span-2">
            <p className="subtitle hidden md:block">
              Говорим на языке современной архитектуры, но понимаем и ценим
              традиции, создавая проекты, которые гармонично вписываются в
              городской контекст
            </p>
          </div>

          <motion.div
            key="case-corpus"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col col-span-2 px-4 md:px-0"
          >
            <Link href={`/cases/corpus`} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] h-[288px] md:h-[29.75rem] w-[320px] md:w-full">
                <Image
                  src={"/corpus1.webp"}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover hover:scale-120 hover:grayscale transition-all duration-300"
                  priority
                />
              </div>
              <p className="subtitle-bold pt-2 pb-1">
                Ресторан «Corpus Societas»
              </p>
              <div className="flex justify-between">
                <p className="subtitle text-[var(--color-gray)]">
                  Санкт-Петербург
                </p>
                <p className="subtitle text-[var(--color-gray)]">38.92 га</p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </PageSection>

      <p className="subtitle flex md:hidden pt-8 pb-[84px] px-4">
        Говорим на языке современной архитектуры, но понимаем и ценим традиции,
        создавая проекты, которые гармонично вписываются в городской контекст
      </p>
    </>
  );
};

export default AboutCases;
