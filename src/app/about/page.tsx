import React from "react";
import Image from "next/image";
import ImageArrow from "@public/imageArrow.png";
import ImageAbout1 from "@public/imageAbout1.jpg";
import ImageAbout2 from "@public/imageAbout2.jpg";
import ImageAbout3 from "@public/imageAbout3.jpg";
import ImageAbout4 from "@public/imageAbout4.jpg";
import ImageAbout5 from "@public/imageAbout5.jpg";
import ImageAbout6 from "@public/imageAbout6.jpg";
import ImageTeam from "@public/imageTeam.jpg";
import { PageSection } from "@/components/layout/PageSection";
import Form from "@/components/ui/Form";
import Directions from "@/components/sections/Directions";

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
            <span className="text-[var(--color-primary)]">
              Архитектура <br className="block md:hidden" />
            </span>
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
        <Directions />
      </section>

      {/* About bureau 2*/}
      <PageSection className="md:py-20 py-[52px] flex flex-col md:flex-row ">
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

      {/* Кейсы */}
      <>
        <h2 className="block md:hidden pt-[52px] px-4 pb-8">
          Истинное <br /> удовольствие — в <br /> наблюдении за тем, <br /> как
          концепт обретает <br /> форму, ритм и <br /> материю
        </h2>

        <PageSection className="md:py-20 overflow-x-auto md:overflow-visible hide-scrollbar">
          <h2 className="col-span-8 pb-10 hidden md:block">
            Истинное удовольствие — в наблюдении за тем, как концепт обретает
            форму,
            <br /> ритм и материю
          </h2>

          <div className="col-span-2 ">
            <div className="bg-[var(--color-gray)] h-[476px] relative rounded-[var(--radius-sm)]" />
            <p className="subtitle-bold pt-2">
              Набережная Реки ОХТА Набережная Реки ОХТА
            </p>
            <div className="flex justify-between mt-1 subtitle text-[var(--color-gray)]">
              <p>Москва</p>
              <p>972m2</p>
            </div>
          </div>

          <div className="col-span-2 ">
            <div className="bg-[var(--color-gray)] h-[476px] relative rounded-[var(--radius-sm)]" />
            <p className="subtitle-bold pt-2">
              Набережная Реки ОХТА Набережная Реки ОХТА
            </p>
            <div className="flex justify-between mt-1 subtitle text-[var(--color-gray)]">
              <p>Москва</p>
              <p>972m2</p>
            </div>
          </div>

          <div className="col-span-2 ">
            <p className="subtitle hidden md:block">
              Говорим на языке современной архитектуры, но понимаем и ценим
              традиции, создавая проекты, которые гармонично вписываются в
              городской контекст
            </p>
          </div>

          <div className="col-span-2 ">
            <div className="bg-[var(--color-gray)] h-[476px] relative rounded-[var(--radius-sm)]" />
            <p className="subtitle-bold pt-2">
              Набережная Реки ОХТА Набережная Реки ОХТА
            </p>
            <div className="flex justify-between mt-1 subtitle text-[var(--color-gray)]">
              <p>Москва</p>
              <p>972m2</p>
            </div>
          </div>
        </PageSection>
        <p className="subtitle block  md:hidden py-8 px-4">
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
