import { PageSection } from "@/components/layout/PageSection";
import Spa1 from "@public/spa1.webp";
import Spa2 from "@public/spa2.webp";
import Spa3 from "@public/spa3.webp";
import Spa4 from "@public/spa4.webp";
import Spa5 from "@public/spa5.webp";
import Spa6 from "@public/spa6.webp";
import Spa7 from "@public/spa7.webp";
import Spa8 from "@public/spa8.webp";
import Spa9 from "@public/spa9.webp";
import Spa10 from "@public/spa10.webp";
import Spa11 from "@public/spa11.webp";
import Spa12 from "@public/spa12.webp";
import Spa13 from "@public/spa13.webp";
import Spa14 from "@public/spa14.webp";
import Spa15 from "@public/spa15.webp";
import Spa16 from "@public/spa16.webp";
import Spa17 from "@public/spa17.webp";
import Spa18 from "@public/spa18.webp";

import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import CaseTitle from "@/components/layout/CaseTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Концепция спа-центра на тему времени и моря",
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
        title="СПА-ЦЕНТР"
        description="Концепция: 180 м²"
        threshold={280}
      />

      <div className="h-14 md:h-20" />
      <PageSection className="flex flex-col">
        <div className="py-5 md:py-10 col-span-8 px-4 md:px-0">
          <p className="pb-2 text-[var(--color-gray)] hidden md:flex">
            (Санкт-Петербург)
          </p>
          <div className="flex justify-between">
            <h1>спа-центр</h1>
            <div className="flex flex-col justify-end">
              <p className="subtitle-bold">На тему (времени и моря)</p>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1 col-span-4 flex flex-col gap-2 mb-8 md:mb-[12.5rem]">
          <Image
            src={Spa1}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa2}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[53.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 col-span-4">
          <div className="md:min-h-[105.5rem] ">
            <section className="sticky top-20">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto pb-1 md:pb-0 px-4 md:px-0">
                  Город
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  (Санкт-Петербург)
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto pb-1 md:pb-0 px-4 md:px-0">
                  Объект
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Спа-центр
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto pb-1 md:pb-0 px-4 md:px-0">
                  Тип услуги
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Концепция
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 pb-1 md:pb-0 px-4 md:px-0">Площадь</p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  180 м²
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Spa3}
            alt=""
            sizes="auto"
            className="h-[256px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa4}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[53.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa5}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa6}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[53.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa7}
            alt=""
            sizes="auto"
            className="h-[256px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa8}
            alt=""
            sizes="auto"
            className="h-[256px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa9}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4">
          <div className="md:min-h-[305.75rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 px-4 md:px-0">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-4 md:pb-10">
                <h3 className="col-span-2 pb-3 md:pb-4">Концепция</h3>

                <p className="col-span-2 subtitle">
                  Спа-центр, основанный на легенде о «вечно текущих водах»,
                  символизирующих связь времени и морской стихии
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-4 md:pb-10">
                <h3 className="col-span-2 pb-4 hidden md:flex">
                  Ключевые решения
                </h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-3 md:pb-2">Ритуалы времени</p>
                  <p className="subtitle pb-4">
                    Процедуры с использованием водорослей, морской соли и
                    жемчуга, вдохновленные древними морскими традициями
                  </p>
                  <p className="subtitle-bold pb-3 md:pb-2">Гидротерапия</p>
                  <p className="subtitle pb-4">
                    Бассейны с разными температурными режимами и составами воды
                    для «путешествия сквозь времена и моря»
                  </p>
                  <p className="subtitle-bold pb-3 md:pb-2">Зоны медитации</p>
                  <p className="subtitle">
                    Пространства для йоги и релаксации с видом на водные
                    поверхности
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <h3 className="col-span-2">Уникальное позиционирование</h3>

                <p className="col-span-2 subtitle">
                  Акцент на замедлении времени и достижении гармонии
                  через морскую тематику
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-2 md:mb-[12.5rem]">
          <Image
            src={Spa10}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa11}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[53.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa12}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[53.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa13}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa14}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[53.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa15}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[37.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Spa16}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[359.25rem] pb-8 md:pb-0 px-[0.25rem] md:px-0">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 md:flex px-4 md:px-0">
                  Архитектурные элементы
                </h3>

                <div className="col-span-2">
                  <p className="subtitle pb-4 px-4 md:px-0">
                    Плавные линии волн и рифов в интерьере
                  </p>
                  <p className="subtitle-bold pb-2 px-4 md:px-0">
                    Сочетание природных и современных материалов
                  </p>
                  <div className="flex gap-1  px-4 md:px-0 flex-nowrap md:pr-[4rem] md:flex-wrap overflow-x-auto md:overflow-visible hide-scrollbar">
                    {["Камень", "Дерево", "Ракушечник", "Стекло", "Металл"].map(
                      (item, index) => (
                        <p
                          key={index}
                          className="subtitle text-[var(--color-gray)] md:py-2 md:px-2 py-5 px-4 bg-[var(--color-border-gray)] rounded-xs w-fit whitespace-nowrap"
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6 px-4 md:px-0">
                <h3 className="col-span-2 hidden md:flex">Освещение</h3>
                <h3 className="col-span-2 !text-xl pb-3 md:hidden">
                  Освещение
                </h3>
                <div className="col-span-2">
                  <p className="subtitle">
                    Динамическая подсветка, имитирующая водную рябь и игру света
                    на воде
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6 px-4 md:px-0">
                <h3 className="col-span-2 hidden md:flex">Брендинг</h3>
                <h3 className="col-span-2 !text-xl pb-3 md:hidden">Брендинг</h3>

                <div className="col-span-2">
                  <p className="subtitle-bold pb-2 md:pb-2">
                    Варианты нейминга
                  </p>
                  <ul className="md:list-disc subtitle">
                    <li>ELYSIUM</li>
                    <li>INFINITUM</li>
                    <li>LUMOR</li>
                    <li>EON и др., отсылающие к вечности, свету и гармонии</li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2  md:flex px-4 md:px-0">
                  Цветовая палитра
                </h3>

                <div className="col-span-2">
                  <p className="subtitle-bold pb-2 px-4 md:px-0">
                    Натуральные оттенки моря
                  </p>
                  <div className="flex gap-1  px-4 md:px-0 flex-nowrap md:pr-[4rem] md:flex-wrap overflow-x-auto md:overflow-visible hide-scrollbar">
                    {["Голубой", "Бирюзовый", "Глубокий синий", "Песочный"].map(
                      (item, index) => (
                        <p
                          key={index}
                          className="subtitle text-[var(--color-gray)] md:py-2 md:px-2 py-5 px-4 bg-[var(--color-border-gray)] rounded-xs w-fit whitespace-nowrap"
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-10 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Spa17}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-11 col-span-4 md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full ">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0 pb-[52px] md:pb-0">
              <h2 className="col-span-2 pb-8 md:pb-0">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 ">
                <p className="subtitle pb-1">Валерия Нечаева</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Архитектор
                </p>
                <p className="subtitle pb-1">Татьяна Ефимова</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="relative w-full overflow-hidden order-17 col-span-8 mb-6 md:rounded-[var(--radius-sm)]">
          <Image
            src={Spa18}
            alt=""
            sizes="auto"
            className="w-full h-[480px] md:h-[804px] object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/corpus`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">К портфолио</button>
          <IconChevron className="rotate-90 h-[1rem]" />
        </Link>
      </div>

      {/* Форма */}
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
            width={154}
            height={154}
            className="hidden md:block"
          />
        </div>
        <Form className="col-span-4" />
      </PageSection>
    </>
  );
}
