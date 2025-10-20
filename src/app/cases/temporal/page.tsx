import { PageSection } from "@/components/layout/PageSection";
import Temporal1 from "@public/temporal1.webp";
import Temporal2 from "@public/temporal2.webp";
import Temporal3 from "@public/temporal3.webp";
import Temporal4 from "@public/temporal4.webp";
import Temporal5 from "@public/temporal5.webp";
import Temporal6 from "@public/temporal6.webp";
import Temporal7 from "@public/temporal7.webp";
import Temporal8 from "@public/temporal8.webp";
import Temporal9 from "@public/temporal9.webp";
import Temporal10 from "@public/temporal10.webp";
import Temporal11 from "@public/temporal11.webp";
import Temporal12 from "@public/temporal12.webp";
import Temporal13 from "@public/temporal13.webp";
import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import CaseTitle from "@/components/layout/CaseTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Концепция отеля «Temporal» в Санкт-Петербурге",
  description:
    "ДАБЛ-Ю — архитектурное бюро полного цикла в Санкт-Петербурге. Архитектурное проектирование, дизайн интерьеров, ландшафт, брендинг. Полный спектр услуг для вашего проекта — от идеи до реализации.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <CaseTitle
        title="Отель «Temporal»"
        description="Концепция"
        threshold={280}
      />
      <div className="h-14 md:h-20" />
      <PageSection className="flex flex-col">
        <p className="hidden md:flex pt-10 pb-2 col-span-8 text-[var(--color-gray)] subtitle">
          (Санкт-Петербург)
        </p>

        <h1 className="pt-5 md:pt-5 pb-5 md:pb-10 px-4 md:px-0 col-span-8">
          Отель «Temporal»
        </h1>

        <div className="order-2 md:order-1 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Temporal1}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 col-span-4">
          <div className="md:min-h-[51.25rem] md:mb-[12.5rem] ">
            <section className="sticky top-20">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto  px-4 md:px-0 pb-1 md:pb-0">
                  Локация
                </p>
                <p className="col-span-2 text-[var(--color-gray)]  px-4 md:px-0">
                  Историческое здание
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto  px-4 md:px-0 pb-1 md:pb-0">
                  Тип услуги
                </p>
                <p className="col-span-2 text-[var(--color-gray)]  px-4 md:px-0">
                  Концепция
                </p>
              </div>

              <p className="subtitle pb-6 pt-8 md:pt-[21.5rem] px-4 md:px-0">
                Здание обладает богатой историей, интегрировано в культурный и
                архитектурный контекст города. Отель ориентирован на гостей,
                ценящих историю, искусство, роскошь и уникальный опыт
              </p>
              <h3 className="px-4 md:px-0 pb-8 md:pb-0">
                Любители истории и эклектики, гедонисты, творческие личности,
                деловые путешественники
              </h3>
            </section>
          </div>
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Temporal2}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal3}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4 px-4 md:px-0">
          <div className="md:min-h-[81.5rem] mb-8 md:mb-[12.5rem]">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] mb-8 md:pb-10">
                Ограничения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-2 md:pb-0">
                  Исторический статус здания
                </h3>
                <p className="col-span-2 subtitle">
                  Необходимость сохранения архитектурных элементов и интеграции
                  современных решений без нарушения исторической целостности
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-2 md:pb-0">Концептуальные</h3>
                <ul className="col-span-2 subtitle list-disc pl-5 md:pl-0">
                  <li>
                    Тема времени должна быть отражена на всех уровнях: от
                    дизайна до сервиса
                  </li>
                  <li>
                    Требование сочетания прошлого, настоящего и будущего в
                    едином пространстве
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 pb-2 md:pb-0">Функциональные</h3>
                <p className="col-span-2 subtitle">
                  Создание разнообразных зон (ресторан, спа, номера) с
                  уникальными предложениями (тематические капсулы)
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Temporal4}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal5}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal6}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal7}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal8}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[235.5rem] mb-8 md:mb-[12.5rem]">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-4 ">Концепция</h3>
                <p className="col-span-2 subtitle">
                  «Temporal» — отель, где время становится главным элементом
                  опыта. Пространство соединяет прошлое, настоящее и будущее
                  через дизайн, сервис и интерактивы
                </p>
              </div>

              <h3 className="pb-6 hidden md:flex">Ключевые решения</h3>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Зонирование по временным эпохам
              </p>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Прошлое
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Исторические элементы, архивные материалы, классическая
                  эстетика
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Настоящее
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Акцент на комфорте и персонализированном сервисе
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border mb-6">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Будущее
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Футуристичные детали, технологии, инновационные решения
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-4">Сервисные капсулы</h3>
                <p className="col-span-2 subtitle">
                  Романтическая, гастрономическая, релакс/спортивная,
                  бизнес-капсулы — уникальные пакеты услуг для гостей
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-4">Интерактивы</h3>
                <ul className="col-span-2 subtitle flex flex-col gap-2 list-disc pl-5 md:pl-0">
                  <li>
                    Создание реальных капсул времени с артефактами, вовлечение
                    гостей в наполнение капсул
                  </li>
                  <li>
                    Использование дополненной реальности для погружения в
                    историю и будущее
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Temporal9}
            alt=""
            sizes="auto"
            className="h-[372px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal10}
            alt=""
            sizes="auto"
            className="h-[372px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal11}
            alt=""
            sizes="auto"
            className="h-[372px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Temporal12}
            alt=""
            sizes="auto"
            className="h-[372px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[206.5rem] mb-8 md:mb-[12.5rem]">
            <section className="sticky top-20 px-4 md:px-0">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0">
                  Архитектурные элементы
                </h3>
                <ul className="col-span-2 subtitle flex flex-col gap-2 list-disc pl-5 md:pl-0">
                  <li>
                    Арки, порталы, тоннельные эффекты — как символы связи времен
                  </li>
                  <li>Капсульные формы в навигации и декоре</li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0">
                  Материалы и цветовая палитра
                </h3>
                <ul className="col-span-2 subtitle flex flex-col gap-2 list-disc pl-5 md:pl-0">
                  <li>
                    Сочетание классических (натуральное дерево, фрески) и
                    современных материалов (стекло, зеркала, световые
                    инсталляции)
                  </li>
                  <li>
                    Спокойная палитра: бежевый, терракотовый, синий — с
                    акцентами через свет и текстуры
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 pb-3 md:pb-0">Брендинг</h3>
                <ul className="col-span-2 subtitle flex flex-col gap-2 list-disc pl-5 md:pl-0">
                  <li>
                    Логотип с символикой времени (маятник, стилизованная буква
                    «T»)
                  </li>
                  <li>
                    Использование исторических и футуристических мотивов в
                    полиграфии и цифровых материалах
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="order-10 md:order-9 col-span-4 md:flex flex-col gap-2 mb-[12.5rem] hidden ">
          <Image
            src={Temporal13}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-9 md:order-10 col-span-4 md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0">
              <h2 className="col-span-2 pb-8 md:pb-6">
                Разработка{" "}
                <span className="text-[var(--color-primary)]">концепции:</span>
              </h2>
              <div className="col-span-2">
                <p className="subtitle pb-[52px] md:pb-0">
                  Студия: <span className="subtitle-bold">KUMORIZZ TEAM</span>
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-black)] md:py-10 md:px-10 py-[52px] px-4  col-span-4 md:rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-2 list-disc subtitle pl-5 md:pl-0">
                <li>
                  Создание уникального отельного концепта, где время становится
                  основным нарративом
                </li>
                <li>
                  Интеграция истории, современного сервиса и футуристичных
                  элементов в единое пространство
                </li>
                <li>
                  Предложены интерактивные форматы для вовлечения гостей
                  (капсулы времени, AR)
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Image
          src={Temporal13}
          alt=""
          sizes="auto"
          className="order-11 h-[320px] md:h-[48rem] w-full object-cover col-span-8 mb-6 md:rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/kvantoriym`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases/flat`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">Следующий проект</button>
          <IconChevron className="rotate-90 h-[1rem]" />
        </Link>
      </div>

      <PageSection
        className="px-4 py-[3.25rem] md:px-5 md:py-20 flex flex-col md:flex-row"
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
            width={9.625 * 16}
            height={9.625 * 16}
            className="hidden md:block"
          />
        </div>
        <Form className="col-span-4" />
      </PageSection>
    </>
  );
}
