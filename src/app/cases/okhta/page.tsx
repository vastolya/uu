import { PageSection } from "@/components/layout/PageSection";
import Okhta1 from "@public/okhta1.webp";
import Okhta2 from "@public/okhta2.webp";
import Okhta3 from "@public/okhta3.webp";
import Okhta4 from "@public/okhta4.webp";
import Okhta5 from "@public/okhta5.webp";
import Okhta6 from "@public/okhta6.webp";
import Okhta7 from "@public/okhta7.webp";
import Okhta8 from "@public/okhta8.webp";
import Okhta9 from "@public/okhta9.webp";
import Okhta10 from "@public/okhta10.webp";
import Okhta11 from "@public/okhta11.webp";
import Okhta12 from "@public/okhta12.webp";
import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import CaseTitle from "@/components/layout/CaseTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Благоустройство набережной реки Охты, Санкт-Петербург (2020)",
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
        title="Набережная реки Охты"
        description="Благоустройство"
        threshold={280}
      />

      <div className="h-14 md:h-20" />

      <PageSection className=" flex flex-col">
        <div className="px-4 md:px-0 py-5 md:py-10 col-span-8">
          <p className="pb-2 text-[var(--color-gray)] hidden md:flex">
            (Санкт-Петербург)
          </p>
          <h1>набережная реки Охты</h1>
        </div>

        <div className="order-2 md:order-1 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Okhta1}
            alt=""
            sizes="auto"
            className="h-[320px] md:h-[43rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta2}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 col-span-4">
          <div className="md:min-h-[73.25rem]">
            <section className="sticky top-20">
              <div className="block md:hidden py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 px-4 md:px-0 pb-1 md:pb-0">Локация</p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Территория Центра Брянцева
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 px-4 md:px-0 pb-1 md:pb-0">
                  Год сдачи
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  2020
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 px-4 md:px-0 pb-1 md:pb-0">
                  Тип услуги
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Благоустройство
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 px-4 md:px-0 pb-1 md:pb-0">Локация</p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Территория Центра Брянцева
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 px-4 md:px-0 pb-1 md:pb-0">
                  Площадь земельного участка
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  47253 кв. метров
                </p>
              </div>
              <p className="subtitle-bold pt-6 pb-4 px-4 md:px-0">
                Объекты капитального строительства
              </p>
              <div className="flex flex-nowrap gap-1 md:pr-[9.375rem]  md:flex-wrap overflow-x-auto md:overflow-visible px-4 md:px-0 hide-scrollbar pb-8 md:pb-[13.75rem]">
                {[
                  "Зона йоги и отдыха на газон",
                  "Площадки для отдыха",
                  "Места для игры в теннисные столы и шахматы",
                  "Столики у воды",
                  "Качели под навесами",
                  "Обустроенная зона отдыха у воды",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit whitespace-nowrap"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Okhta3}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta4}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[52.5rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4">
          <div className="md:min-h-[104.25rem] pb-8 md:pb-0">
            <section className="sticky  top-20 px-4 md:px-0">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Ограничения
              </h2>
              <h3 className="pb-3 md:pb-2">
                Строительство капитальных сооружений запрещено
              </h3>
              <p className="subtitle">
                На набережных реки Охты в Санкт-Петербурге разрешено возведение
                исключительно некапитальных (временных) объектов торговли и
                услуг при условии, что они не создают помех пешеходному движению
              </p>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Okhta5}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta6}
            alt=""
            sizes="auto"
            className="h-[320px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta7}
            alt=""
            sizes="auto"
            className="h-[320px] md:h-[52.5rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[158.5rem] px-4 md:px-0">
            <section className="sticky  top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Проектные предложения
              </h2>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-3 md:pb-6">
                <h3 className="col-span-2 pb-2 md:pb-0">Локация</h3>
                <p className="col-span-2 subtitle">
                  Комплексная реорганизация прибрежной территории для создания
                  современного, многофункционального общественного пространства,
                  гармонично интегрированного в городскую ткань Санкт-Петербурга
                  с бережным отношением к природному ландшафту
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <h3 className="col-span-2 hidden md:flex">Ключевые решения</h3>
                <div className="col-span-2 ">
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Функциональное зонирование
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Комплексная реорганизация прибрежной территории для создания
                    современного, многофункционального общественного
                    пространства, гармонично интегрированного в городскую ткань
                    Санкт-Петербурга с бережным отношением к природному
                    ландшафту
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Прогулочная инфраструктура
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Создание сети прогулочных маршрутов разной направленности
                  </p>

                  <p className="subtitle-bold pb-2 md:pb-1">
                    Общественные зоны
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Организация площадок для отдыха и коммуникации горожан
                  </p>

                  <p className="subtitle-bold pb-2 md:pb-1">Досуг и спорт</p>
                  <p className="subtitle pb-3 md:pb-2">
                    Включение детских игровых зон и специализированных
                    спортивных территорий
                  </p>

                  <p className="subtitle-bold pb-2 md:pb-1">
                    Речная интеграция
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Строительство причальных сооружений для связи с водным
                    транспортом
                  </p>

                  <p className="subtitle-bold pb-2 md:pb-1">
                    Транспортная доступность
                  </p>
                  <p className="subtitle pb-8 md:pb-0">
                    Обеспечение связности через пешеходные мосты, велодорожки,
                    парковки для велосипедов и остановку общественного
                    транспорта
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2 mb-2 md:mb-[12.5rem]">
          <Image
            src={Okhta8}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta9}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[50rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta10}
            alt=""
            sizes="auto"
            className="h-[270px] md:h-[28.75rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Okhta11}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[185.25rem] pb-[52px] md:pb-0">
            <section className="sticky  top-20 px-4 md:px-0">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 md:pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0 hidden md:flex">
                  Ландшафтный дизайн
                </h3>
                <h3 className="col-span-2 pb-3 md:pb-0 !text-xl flex md:hidden">
                  Ландшафтный дизайн
                </h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Вертикальное озеленение и террасирование
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Создание живописных видовых точек и защита от шума
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Системы озеленения
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Многоярусные клумбы, живые изгороди, прибрежные насаждения
                  </p>

                  <p className="subtitle-bold pb-2 md:pb-1">
                    Экологичный дренаж
                  </p>
                  <p className="subtitle pb-8 md:pb-2">
                    Внедрение системы дождевых садов
                  </p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 md:pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0 hidden md:flex">
                  Инженерные решения
                </h3>
                <h3 className="col-span-2 pb-3 md:pb-0 !text-xl flex md:hidden">
                  Инженерные решения
                </h3>
                <div className="col-span-2 ">
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Защита от наводнений
                  </p>
                  <p className="subtitle pb-8 md:pb-2">
                    Современное берегоукрепление с использованием габионных
                    конструкций, набережных из натурального камня и
                    волноотбойных стенок
                  </p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">Благоустройство</h3>
                <h3 className="col-span-2 pb-3 md:pb-0 !text-xl flex md:hidden">
                  Благоустройство
                </h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-2 md:pb-1">Материалы</p>
                  <p className="subtitle pb-3 md:pb-2">
                    Создание функциональных зон, отражающих направления
                    деятельности центра (каждое направление получило свою
                    площадку)
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Освещение и навигация
                  </p>
                  <p className="subtitle pb-3 md:pb-2">
                    Установка современного уличного освещения и системы
                    навигации
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">Малые формы</p>
                  <p className="subtitle pb-8 md:pb-2">
                    Использование малых архитектурных форм (МАФ) и теневых
                    навесов для комфорта
                  </p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <h3 className="col-span-2 hidden md:flex">Общая эстетика</h3>
                <h3 className="col-span-2 pb-3 md:pb-0 !text-xl flex md:hidden">
                  Благоустройство
                </h3>
                <div className="col-span-2">
                  <p className="subtitle ">
                    Сочетание современного дизайна с бережным отношением к
                    природному ландшафту, формирование пространства для отдыха и
                    общения
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-9 col-span-4 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Okhta12}
            alt=""
            sizes="auto"
            className="h-[600px] w-full object-cover rounded-[var(--radius-sm)] "
          />
        </div>

        <div className="order-10 col-span-4 md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0">
              <h2 className="col-span-2 flex flex-col pb-5 md:pb-0">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 pb-[52px] md:pb-0">
                <p className="subtitle pb-1">Валерия Нечаева</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Архитектор
                </p>
                <p className="subtitle pb-1">Анна Ефимова</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Александр Козлов</p>
                <p className="subtitle-sm  text-[var(--color-gray)]">
                  Дизайнер
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-black)] md:px-10 md:py-10 px-4 py-[52px]  col-span-4 md:rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-3 md:gap-2 list-disc subtitle pl-5 md:pl-0">
                <li>
                  Создано новое качество городской среды на набережной реки Охты
                </li>
                <li>
                  Реализовано современное, многофункциональное общественное
                  пространство, ставшее точкой притяжения для жителей и гостей
                  города
                </li>
                <li>
                  Достигнута гармоничная интеграция в существующую городскую
                  ткань Санкт-Петербурга
                </li>
                <li>
                  Обеспечена экологическая устойчивость и защита территории
                  через инженерные и ландшафтные решения
                </li>
                <li>
                  Повышена транспортная и пешеходная доступность береговой линии
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Image
          src={Okhta1}
          alt=""
          sizes="auto"
          className="order-11 h-[320px] md:h-[43rem] w-full object-cover col-span-8 md:mb-6 md:rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/flat`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases/samsonovskaya`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">Следующий проект</button>
          <IconChevron className="rotate-90 h-[1rem]" />
        </Link>{" "}
      </div>

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
}
