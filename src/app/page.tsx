"use client";

import Image from "next/image";
import Link from "next/link";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { WorkStages } from "@/components/sections/WorkStages";
import LogoSlider from "@/components/sections/LogoSlider";
import IconArrowRight from "@/components/icons/IconArrowRight";
import Directions from "@/components/sections/Directions";
import LogoBigUU from "../../public/logoBigUU.png";
import ImageArrow from "../../public/imageArrow.png";
import ImageCase1 from "../../public/imageCase1.png";
import ImageCase2 from "../../public/imageCase2.png";
import ImageCase3 from "../../public/imageCase3.png";
import ParallaxSection from "@/components/sections/ParallaxSection";
import Form from "@/components/ui/Form";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { news } from "@/lib/newsData";

const blogData = Object.entries(news).slice(0, 3);

export default function Home() {
  useSectionScroll(
    ["top", "about", "cases", "direction", "form", "steps", "blog", "faq"],
    0
  );

  return (
    <>
      <div className="min-h-20" id="top"></div>

      <PageSection className={`pt-20 pb-9 `} id="hero">
        <h1 className="col-span-6">
          <span className="text-[var(--color-primary)]">Из замысла — </span>
          в архитектурную реальность
        </h1>
        <p className="subtitle col-span-2 flex flex-col justify-end">
          Архитектура, где каждая линия несёт эмоцию, а каждый проект становится
          историей
        </p>
      </PageSection>

      {/* Паралакс */}
      <ParallaxSection />

      {/* О нас */}
      <PageSection
        className="px-5 py-20 border-b-2 border-[var(--color-border-gray)]"
        id="about"
      >
        <p className="subtitle text-[var(--color-gray)] pb-2 col-span-8">
          О нас
        </p>
        <h2 className="col-span-8 pb-10">
          Две страсти — архитектура и урбанистика
        </h2>
        <div className="col-span-4 relative h-[32rem]">
          <Image
            src="/imageTeam.jpg"
            alt="image team"
            fill
            sizes="auto"
            className="object-cover rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-between ">
          <span>
            <p className="subtitle pb-2">
              Создаём пространства выражающие индивидуальность, вдохновляющие
              и выводящие из «тени» шаблонных решений. Превращаем ценности
              клиентов в осязаемую реальность, где каждая линия, свет и форма
              работают на эмоции
            </p>
            <p className="subtitle-bold">
              Работаем с частными домами, коммерческими объектами и городскими
              пространствами
            </p>
          </span>
          <Link href="/about" className="flex justify-end ">
            <Button text="Подробнее" variant="secondary" />
          </Link>
        </div>
        <div className="col-span-8 pt-20 flex">
          <span className="flex-1 flex-col">
            <h2 className="pb-2 flex items-center justify-center">8 ЛЕТ</h2>
            <p className="subtitle flex items-center justify-center">
              экспертизы в полном цикле
            </p>
          </span>
          <span className="flex-1">
            <h2 className="pb-2 flex items-center justify-center">
              ПАРТНЕРСТВО
            </h2>
            <p className="subtitle flex items-center justify-center">
              со строительной компанией
            </p>
          </span>
          <span className="flex-1">
            <h2 className="pb-2 flex items-center justify-center">50+</h2>
            <p className="subtitle flex items-center justify-center">
              успешных проектов
            </p>
          </span>
        </div>
      </PageSection>

      {/* Кейсы */}
      <PageSection className="px-5 py-20 gap-y-10" id="cases">
        <div className="col-span-8 flex justify-between">
          <p className="subtitle text-[var(--color-gray)] pb-2">Кейсы</p>
          <button className="flex items-center gap-2 hover:text-[var(--color-primary)]">
            <IconArrowRight />
            <Link href="/cases">Все кейсы </Link>
          </button>
        </div>

        <div className="col-span-4 row-span-2 relative min-h-[920px]">
          <Image src={ImageCase1} alt="" fill sizes="auto" />
        </div>

        <div className="col-span-3 flex flex-col justify-between h-full">
          <h3>
            Не&nbsp;только&nbsp;проектирование,&nbsp;но&nbsp;и&nbsp;весь цикл —
            от чертежа до запуска объекта
          </h3>
          <p className="subtitle">
            Мы обеспечиваем и контролируем каждый этап, чтобы ваш проект стал
            идеальным от концепции до последнего гвоздя
          </p>
        </div>

        <div className="flex flex-col  items-end h-full gap-y-[324px]">
          <p className="subtitle text-[var(--color-gray)]">1/4</p>

          <Button text="Кейс" variant="secondary" />
        </div>

        <div className="col-span-2  min-h-[447px] w-full relative">
          <Image src={ImageCase2} alt="" fill sizes="auto />" />
        </div>
        <div className="col-span-2 min-h-[447px] w-full relative">
          <Image src={ImageCase3} alt="" fill sizes="auto" />
        </div>
      </PageSection>

      {/* Направления */}
      <section id="direction">
        <Directions />
      </section>

      {/* Форма */}
      <PageSection className="px-5 py-20" id="form">
        <div className="col-span-4 justify-between flex flex-col">
          <h2>
            Расскажите о вашем проекте —{" "}
            <span className="text-[var(--color-primary)]">
              мы любим сложные задачи!
            </span>
          </h2>
          <Image src={ImageArrow} alt="" width={154} height={154} />
        </div>
        <Form className="col-span-4" />
      </PageSection>

      <LogoSlider />

      {/* Этапы */}
      <PageSection id="steps">
        <WorkStages />
      </PageSection>

      {/* Блог */}
      <div className="bg-[var(--color-border-gray)]" id="blog">
        <PageSection className="py-20">
          <p className="subtitle text-[var(--color-gray)] pb-2">
            Новости и статьи
          </p>
          <h2 className="col-span-8 pb-10">Идеи, которые меняют города</h2>

          {blogData.map(([key, item]) => (
            <Link
              key={key}
              href={`/news/${key}`}
              className={`flex flex-col gap-2 ${
                item.type === "1" ? "col-span-4" : "col-span-2"
              }`}
            >
              <div className="overflow-hidden rounded-[var(--radius-sm)]">
                <Image
                  src={item.Image}
                  alt=""
                  sizes="auto"
                  className={`
              object-cover w-full hover:scale-160 hover:grayscale transition-all duration-300
              ${item.type === "2" ? "h-[332px]" : "h-[476px]"}
            `}
                />
              </div>

              <p className="subtitle-bold">{item.title}</p>
              <p className="subtitle text-[var(--color-gray)]">{item.tag}</p>
            </Link>
          ))}
        </PageSection>
      </div>

      {/* Форма 2 */}
      <PageSection className="px-5 pt-20" id="form2">
        <h2 className="col-span-4">Давайте создадим нечто уникальное</h2>
        <Form className="col-span-4" />
      </PageSection>

      {/* ЭФ АЙ КЬЮ */}
      <PageSection id="faq">
        <div className="col-span-3 relative my-11 h-[368px] flex justify-start items-start">
          <Image
            src={LogoBigUU}
            alt=""
            fill
            sizes="auto"
            className="object-contain object-left"
          />
          <h2 className="z-[1] pt-9">FAQ</h2>
        </div>
        <div className="col-start-5 col-span-4 my-auto">
          <Accordion
            items={[
              {
                title: "Сколько стоит проект «под ключ»?",
                content:
                  "Итоговая сумма может варьироваться от нескольких сотен тысяч до <br/> нескольких миллионов рублей в зависимости от объема и уровня отделки",
              },
              {
                title: "Можно ли заказать только дизайн?",
                content:
                  "Да, мы предлагаем услугу только дизайна без реализации проекта.",
              },
              {
                title: "Как вы гарантируете сроки?",
                content:
                  "Мы подписываем договор с четким таймлайном, который фиксирует этапы и дедлайны.",
              },
            ]}
          />
        </div>
      </PageSection>
    </>
  );
}
