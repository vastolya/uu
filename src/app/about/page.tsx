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
      <div className="h-20"></div>

      {/* Hero */}
      <section className="relative">
        <PageSection className="pb-20 pt-[38rem] text-white">
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
          className="object-cover  lg:object-[center_15%] -z-10"
        />
      </section>

      {/* About bureau */}
      <PageSection className="pt-20">
        <h2 className="col-span-8 pb-10">
          <span className="text-[var(--color-primary)]">Архитектура </span>как
          искусство среды
        </h2>
        <div className="relative h-[49rem] col-span-4 rounded-[var(--radius-sm)] overflow-hidden">
          <Image
            src={ImageAbout2}
            alt="image_about_2"
            fill
            sizes="auto"
            className="object-cover grayscale object-[70%_center]"
          />
        </div>
        <div className="flex flex-col justify-between col-span-4 pb-10">
          <div>
            <h3 className="pb-1">
              Мультидисциплинарное архитектурное бюро полного цикла
            </h3>
            <p className="subtitle">
              Мы создаём пространства, наполненные смыслом, характером
              и энергией — от жилых и коммерческих объектов до общественных
              территорий, брендинга и пространственной идеологии
            </p>
          </div>
          <div>
            <p className="subtitle pb-1">
              <strong>Базируемся в Санкт-Петербурге</strong> — городе, где
              история и архитектурная эстетика вписаны в саму ткань жизни.
              Мы черпаем вдохновение из величественных фасадов, разрабатывая
              проекты, обращённые в будущее
            </p>
            <ul className="list-disc pl-7">
              <li>Внимание к деталям</li>
              <li>Художественное чутьё</li>
              <li>Профессиональный надзор от замысла до реализации</li>
            </ul>
          </div>
        </div>
      </PageSection>

      <section id="direction">
        <Directions />
      </section>

      {/* About bureau 2*/}
      <PageSection className="py-20">
        <h2 className="col-span-8 pb-[9.5rem]">
          <span className="text-[var(--color-primary)] ">Архитектура </span>
          как интеллектуальное сотрудничество
        </h2>
        <p className="subtitle col-span-2 col-start-5 gap-2 flex flex-col">
          <strong>В основе — люди, способные мыслить вне рамок</strong> Это
          синергия опыта и интуиции, точности и воображения, технической
          культуры и художественного чутья
        </p>
        <p className="subtitle col-span-2 pb-10">
          Мы — команда, состоящая из архитекторов, дизайнеров, исследователей,
          инженеров. Каждый обладает своей экспертизой, но объединены единым
          культурным кодом: стремлением к выразительности и ответственности
          за детали
        </p>
        {[ImageAbout3, ImageAbout4, ImageAbout5, ImageAbout6].map(
          (item, index) => (
            <div
              className="col-span-2 h-[20.75rem] relative rounded-[var(--radius-sm)] overflow-hidden"
              key={index}
            >
              <Image
                src={item}
                alt="img_about"
                sizes="auto"
                fill
                className="object-cover"
              />
            </div>
          )
        )}
      </PageSection>

      {/* Кейсы */}
      <PageSection className="py-20">
        <h2 className="col-span-8 pb-10">
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
          <p className="subtitle">
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

      {/* Шикокая пикча */}
      <section className="relative">
        <PageSection className="flex flex-col gap-[536px] py-20">
          <h2 className="col-span-7">
            Верим, что архитектура — это не просто наука и искусство, это способ
            изменить мир к лучшему
          </h2>
          <h3 className="col-span-4 col-start-5 text-white">
            Каждый наш проект — это вклад в будущее городской среды, в создание
            комфортной и гармоничной жизни для людей
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
      <PageSection className="px-5 py-20" id="form">
        <div className="col-span-4 justify-between flex flex-col">
          <h2>
            Давайте начнем{" "}
            <span className="text-[var(--color-primary)]">
              новую историю вместе
            </span>
          </h2>
          <Image src={ImageArrow} alt="" width={154} height={154} />
        </div>
        <Form className="col-span-4" />
      </PageSection>
    </>
  );
};

export default About;
