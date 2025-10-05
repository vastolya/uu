"use client";

import React from "react";
import Image from "next/image";
import ImageArrow from "@public/imageArrow.webp";
import ImageAbout1 from "@public/imageAbout1.webp";
import ImageAbout2 from "@public/imageAbout2.webp";
import ImageAbout3 from "@public/imageAbout3.webp";
import ImageAbout4 from "@public/imageAbout4.webp";
import ImageAbout5 from "@public/imageAbout5.webp";
import ImageAbout6 from "@public/imageAbout6.webp";
import ImageTeam from "@public/imageTeam.webp";
import { PageSection } from "@/components/layout/PageSection";
import Form from "@/components/ui/Form";
import Directions from "@/components/sections/Directions";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="h-[56px] md:h-20"></div>

      {/* Hero */}
      <section className="relative">
        <PageSection className="px-4 py-5 md:pb-20 md:pt-[38rem] md:text-white text-[var(--color-black)] flex flex-col md:flex-row gap-2 md:gap-0">
          <h1 className="col-span-6">Вдохновляем на создание</h1>
          <p className="col-span-2 subtitle items-end flex">
            Там, где эстетика встречается с функциональностью, а каждый проект
            становится историей, меняющей пространство и человека
          </p>
        </PageSection>
        <Image
          src={ImageTeam}
          alt=""
          fill
          sizes="auto"
          className="object-cover  lg:object-[center_15%] -z-10 hidden md:block"
        />
        <Image
          src={ImageTeam}
          alt=""
          sizes="auto"
          className="object-cover h-[300px] -z-1 flex md:hidden"
        />
      </section>

      {/* About bureau */}
      <>
        <PageSection className="pt-[52px] pb-5 px-4 md:pt-20 md:pb-6 flex flex-col md:flex-row">
          <h2 className="col-span-8 pb-8 md:pb-10">
            <span className="text-[var(--color-primary)]">Архитектура </span>
            <br className="hidden md:block" />
            как искусство среды
          </h2>
          <div className="col-start-5 col-span-4">
            <h3 className="pb-2">
              Мультидисциплинарное архитектурное бюро полного цикла
            </h3>
            <p className="subtitle">
              Мы создаём пространства, наполненные смыслом, характером
              и энергией — от жилых и коммерческих объектов до общественных
              территорий, брендинга и пространственной идеологии
            </p>
          </div>
        </PageSection>
        <div className="relative h-[332px] md:h-[17.25rem] col-span-4 ">
          <Image
            src={ImageAbout2}
            alt="image_about_2"
            fill
            sizes="auto"
            className="object-cover grayscale md:object-[70%_center]"
          />
        </div>
        <PageSection className="px-4 pt-5 pb-[52px] md:pt-6 md:pb-20">
          <div className="flex flex-col justify-between col-start-5 col-span-4 md:pb-10">
            <div>
              <h3 className="pb-2">Базируемся в Санкт-Петербурге</h3>
              <p className="subtitle pb-4">
                Городе, где история и архитектурная эстетика вписаны в саму
                ткань жизни. Мы черпаем вдохновение из величественных фасадов,
                разрабатывая проекты, обращённые в будущее
              </p>
              <ul className="subtitle list-disc flex flex-col gap-2 pl-7 md:pl-0">
                <li>Внимание к деталям</li>
                <li>Художественное чутьё</li>
                <li>Профессиональный надзор от замысла до реализации</li>
              </ul>
            </div>
          </div>
        </PageSection>
      </>

      <section id="direction">
        <Directions variant="about" />
      </section>

      {/* About bureau 2*/}
      <div className="bg-[var(--color-border-gray)]">
        <PageSection className="md:py-20 py-[52px] flex flex-col md:flex-row  ">
          <h2 className="col-span-8 md:pb-[9.5rem] py-8 px-4">
            <span className="text-[var(--color-primary)] ">Архитектура </span>
            как интеллектуальное сотрудничество
          </h2>
          <p className="px-4 md:px-0 subtitle col-span-2 col-start-5 gap-2 flex flex-col pb-2 mdLpb-0">
            <strong>В основе — люди, способные мыслить вне рамок</strong> Это
            синергия опыта и интуиции, точности и воображения, технической
            культуры и художественного чутья
          </p>
          <p className=" px-4 md:px-0 subtitle col-span-2 md:pb-10 pb-8">
            Мы — команда, состоящая из архитекторов, дизайнеров, исследователей,
            инженеров. Каждый обладает своей экспертизой, но объединены единым
            культурным кодом: стремлением к выразительности и ответственности
            за детали
          </p>

          {[ImageAbout3, ImageAbout4, ImageAbout5, ImageAbout6].map(
            (item, index) => (
              <div
                className={`col-span-2 h-[302px] md:h-[20.75rem] relative md:rounded-[var(--radius-sm)] overflow-hidden ${index % 2 === 0 ? "ml-4 md:ml-0 rounded-l-[var(--radius-sm)]" : "mr-4 md:mr-0 rounded-r-[var(--radius-sm)]"} ${index === 3 ? "mb-0" : "mb-5 "}`}
                key={index}
              >
                <Image
                  src={item}
                  alt="img_about"
                  sizes="auto"
                  fill
                  className={`object-cover`}
                />
              </div>
            )
          )}
        </PageSection>
      </div>

      {/* Кейсы */}
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
          Говорим на языке современной архитектуры, но понимаем и ценим
          традиции, создавая проекты, которые гармонично вписываются в городской
          контекст
        </p>
      </>

      {/* Шикокая пикча */}
      <section className="relative">
        <PageSection className="flex flex-col gap-[124px] md:gap-[33.5rem] py-[52px] px-4 md:py-20">
          <h2 className="col-span-7">
            Верим, что <br className="block md:hidden" /> архитектура — это
            <br className="block md:hidden" />
            не просто наука <br className="block md:hidden" /> и искусство, это
            <br className="block md:hidden" />
            способ изменить мир к лучшему
          </h2>
          <h3 className="col-span-4 col-start-5 text-white">
            Каждый наш проект — это вклад
            <br className="block md:hidden" /> в будущее городской среды,
            в создание комфортной и гармоничной жизни для людей
          </h3>
        </PageSection>
        <Image
          src={ImageAbout1}
          alt="image_about_1"
          sizes="auto"
          fill
          className="object-cover -z-10"
        />
      </section>

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
};

export default About;
