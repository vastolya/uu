import { PageSection } from "@/components/layout/PageSection";
import Volzhskaya1 from "@public/volzhskaya1.webp";
import Volzhskaya2 from "@public/volzhskaya2.webp";
import Volzhskaya3 from "@public/volzhskaya3.webp";
import Volzhskaya4 from "@public/volzhskaya4.webp";
import Volzhskaya5 from "@public/volzhskaya5.webp";
import Volzhskaya6 from "@public/volzhskaya6.webp";
import Volzhskaya7 from "@public/volzhskaya7.webp";
import Volzhskaya8 from "@public/volzhskaya8.webp";
import Volzhskaya9 from "@public/volzhskaya9.webp";
import Volzhskaya10 from "@public/volzhskaya10.webp";
import Volzhskaya11 from "@public/volzhskaya11.webp";
import Volzhskaya12 from "@public/volzhskaya12.webp";
import Volzhskaya13 from "@public/volzhskaya13.webp";
import Volzhskaya14 from "@public/volzhskaya14.webp";
import Volzhskaya15 from "@public/volzhskaya15.webp";
import Volzhskaya16 from "@public/volzhskaya16.webp";
import Volzhskaya17 from "@public/volzhskaya17.webp";
import Volzhskaya18 from "@public/volzhskaya18.webp";
import Volzhskaya19 from "@public/volzhskaya19.webp";
import Volzhskaya20 from "@public/volzhskaya20.webp";
import Volzhskaya21 from "@public/volzhskaya21.webp";
import Volzhskaya22 from "@public/volzhskaya22.webp";
import Volzhskaya23 from "@public/volzhskaya23.webp";
import Volzhskaya24 from "@public/volzhskaya24.webp";
import Volzhskaya25 from "@public/volzhskaya25.webp";
import Volzhskaya26 from "@public/volzhskaya26.webp";
import Volzhskaya27 from "@public/volzhskaya27.webp";
import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import CaseTitle from "@/components/layout/CaseTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Благоустройство Волжской набережной, Ярославль",
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
        title="Волжская набережная (Ярославль)"
        description="Благоустройство: 5.56 га"
        threshold={280}
      />

      <div className="h-14 md:h-20" />
      <PageSection className="flex flex-col">
        <div className="py-5 md:py-10 col-span-8 px-4 md:px-0">
          <p className="pb-2 text-[var(--color-gray)] hidden md:flex">
            (Ярославль)
          </p>
          <h1>Волжская набережная</h1>
        </div>

        <div className="order-2 md:order-1 col-span-4 flex flex-col gap-2 mb-8 md:mb-[12.5rem]">
          <Image
            src={Volzhskaya1}
            alt=""
            sizes="auto"
            className="h-[260px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya2}
            alt=""
            sizes="auto"
            className="h-[260px] md:h-[30rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 col-span-4">
          <div className="md:min-h-[60.25rem] ">
            <section className="sticky top-20">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto pb-1 md:pb-0 px-4 md:px-0">
                  Локация
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Центральная набережная р. Волги
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto pb-1 md:pb-0 px-4 md:px-0">
                  Тип услуги
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Благоустройство
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] md:mb-[23.5rem]">
                <p className="col-span-2 pb-1 md:pb-0 px-4 md:px-0">Площадь</p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  5.56 га
                </p>
              </div>

              <h3 className="col-span-2 py-[52px] md:py-0 px-4 md:px-0">
                Центральная набережная в историческом центре Ярославля (объект
                ЮНЕСКО)
              </h3>
            </section>
          </div>
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Volzhskaya3}
            alt=""
            sizes="auto"
            className="h-[460px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya4}
            alt=""
            sizes="auto"
            className="h-[240px] md:h-[27.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4">
          <div className="md:min-h-[80.5rem] pb-8 md:pb-0">
            <section className="sticky top-20 px-4 md:px-0">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">Контекст</h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">Контекст</h3>
                <ul className="col-span-2 subtitle md:list-disc flex flex-col gap-2">
                  <li>
                    Примыкает к 14 объектам культурного наследия (ОКН), включая
                    храмы, музеи, Митрополичьи палаты
                  </li>
                  <li>
                    Соединяет городские бульвары (Подзеленье, Мира) с
                    рекреационными зонами (парки «Стрелка», «Даманский остров»)
                  </li>
                  <li>
                    Высокая туристическая привлекательность («музейная
                    набережная»)
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 hidden md:flex">Нюансы</h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">Нюансы</h3>
                <ul className="col-span-2 subtitle md:list-disc flex flex-col gap-2">
                  <li>Подтопляемость нижнего яруса</li>
                  <li>{"Однообразное благоустройство на участке >1 км"}</li>
                  <li>
                    Аварийные лестницы, контейнеры ТБО в прогулочных зонах
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-8 md:mb-[12.5rem]">
          <Image
            src={Volzhskaya5}
            alt=""
            sizes="auto"
            className="h-[424px] md:h-[26.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya6}
            alt=""
            sizes="auto"
            className="h-[252px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya7}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[26.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya8}
            alt=""
            sizes="auto"
            className="h-[228px] md:h-[28.875rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya9}
            alt=""
            sizes="auto"
            className="h-[252px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya10}
            alt=""
            sizes="auto"
            className="h-[446px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[216.125rem] pb-8 md:pb-0 px-4 md:px-0">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Ограничения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">
                  Историко-культурные
                </h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">
                  Историко-культурные
                </h3>
                <ul className="col-span-2 subtitle md:list-disc flex flex-col gap-2">
                  <li>
                    Территория в охранной зоне ЮНЕСКО с запретом на новое
                    строительство, вырубку зеленых насаждений, изменение
                    ландшафта
                  </li>

                  <li>
                    Необходимость интеграции в архитектурный контекст «каменного
                    кружева» (белокаменная резьба храмов)
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <h3 className="col-span-2  hidden md:flex">Инфраструктурные</h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">
                  Историко-культурные
                </h3>
                <p className="col-span-2 subtitle">
                  Необходимость реорганизации парковок и транспортных потоков
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Volzhskaya11}
            alt=""
            sizes="auto"
            className="h-[260px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya12}
            alt=""
            sizes="auto"
            className="h-[252px] md:h-[28.875rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya13}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya14}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya15}
            alt=""
            sizes="auto"
            className="h-[252px] md:h-[28.875rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya16}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya17}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya18}
            alt=""
            sizes="auto"
            className="h-[252px] md:h-[28.875rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya19}
            alt=""
            sizes="auto"
            className="h-[488px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[356.25rem] pb-8 md:pb-0">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Проектные предложения
              </h2>

              <h3 className="col-span-2 pb-4 hidden md:flex ">
                Зеленое ожерелье Ярославля» – создание сада ощущений» с акцентом
                на сенсорный опыт
              </h3>

              <h3 className="col-span-2 !text-xl md:hidden pb-3 px-4 md:px-0">
                Зеленое ожерелье Ярославля» – создание сада ощущений» с акцентом
                на сенсорный опыт
              </h3>

              <div className="flex gap-2 pb-8 md:pb-10 px-4 md:px-0 flex-nowrap md:pr-[9.375rem]  md:flex-wrap overflow-x-auto md:overflow-visible hide-scrollbar">
                {["Звуки колоколов", "Пение птиц", "Тактильные элементы"].map(
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

              <h3 className="col-span-2 pb-6 hidden md:flex">
                Ключевые решения
              </h3>
              <h3 className="col-span-2 !text-xl md:hidden pb-3 px-4 md:px-0">
                Ключевые решения
              </h3>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Функциональное зонирование по темам
              </p>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 px-4 md:px-0 pb-2 md:pb-0">
                  Каменное кружево
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Музыкальные площадки, амфитеатр
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Липовый цвет
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Тихий отдых, «беседки для птиц», игровые зоны
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 px-4 md:px-0 pb-2 md:pb-0">
                  Изумруды храмов
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Арт-объекты, сухие фонтаны, маркеты
                </p>
              </div>

              <p className="subtitle-bold pt-5 md:pt-6 pb-3 md:pb-4 px-4 md:px-0">
                Инклюзивность
              </p>
              <div className="flex gap-2  px-4 md:px-0 flex-nowrap md:pr-[9.375rem]  md:flex-wrap overflow-x-auto md:overflow-visible hide-scrollbar">
                {["Пандусы", "Оборудование для МГН", "Ладкое мощение"].map(
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
              <p className="subtitle-bold pt-5 md:pt-6 pb-3 md:pb-4 px-4 md:px-0">
                Умные технологии
              </p>
              <div className="flex gap-2   px-4 md:px-0 flex-nowrap md:pr-[9.375rem]  md:flex-wrap overflow-x-auto md:overflow-visible hide-scrollbar">
                {[
                  "Системы видеонаблюдения",
                  "Говорящий город",
                  "Интерактивные гиды",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="subtitle text-[var(--color-gray)] md:py-2 md:px-2 py-5 px-4 bg-[var(--color-border-gray)] rounded-xs w-fit whitespace-nowrap"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className="subtitle-bold pt-5 md:pt-6 pb-3 md:pb-4 px-4 md:px-0">
                Экология
              </p>
              <div className="flex gap-2 px-4 md:px-0 flex-nowrap md:pr-[9.375rem]  md:flex-wrap overflow-x-auto md:overflow-visible hide-scrollbar">
                {[
                  "Бизиборды",
                  "«Беседки для птиц» с поилками",
                  "Плодовые растения",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="subtitle text-[var(--color-gray)] md:py-2 md:px-2 py-5 px-4 bg-[var(--color-border-gray)] rounded-xs w-fit whitespace-nowrap"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="order-10 md:order-9 col-span-4 flex flex-col gap-2 mb-2 md:mb-[12.5rem]">
          <Image
            src={Volzhskaya20}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya21}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya22}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya23}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya24}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya25}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya26}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[30.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Volzhskaya27}
            alt=""
            sizes="auto"
            className="h-[252px] md:h-[28.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-9 md:order-10 col-span-4">
          <div className="md:min-h-[287.25rem] pb-8 md:pb-0 px-[0.25rem] md:px-0">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">Ландшафт</h3>
                <h3 className="col-span-2 !text-xl pb-3 md:hidden">Ландшафт</h3>
                <div className="col-span-2 ">
                  <ul className="col-span-2 subtitle md:list-disc flex flex-col gap-2">
                    <li>
                      Геопластика для организации террас и смотровых площадок
                    </li>
                    <li>Липовые аллеи (исторический элемент)</li>
                    <li>
                      Ассортимент растений по цветовым зонам (рябины,
                      декоративные яблони, можжевельник)
                    </li>
                    <li>Принцип непрерывного цветения</li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">Материалы и МАФ</h3>
                <h3 className="col-span-2 !text-xl pb-3 md:hidden">
                  Материалы и МАФ
                </h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-2 md:pb-1">Покрытия</p>
                  <p className="subtitle pb-3 md:pb-2">
                    Гранитная брусчатка, плитка с узорами (отсылка к храмовой
                    архитектуре), деревянный декинг
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">Дизайн-код</p>
                  <p className="subtitle pb-3 md:pb-2">
                    Паттерны «каменного кружева» в перфорации скамеек, качелей;
                    формы храмовых куполов в беседках
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">Арт-объекты</p>
                  <p className="subtitle pb-3 md:pb-2">
                    «Нуклон»-подобные инсталляции, музыкальные МАФ (ксилофоны,
                    литофоны), световые арки
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">
                    Инклюзивное оборудование
                  </p>
                  <p className="subtitle">
                    Качели для колясочников, уличные тренажеры для МГН,
                    тактильные бизиборды
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 hidden md:flex">Свет</h3>
                <h3 className="col-span-2 !text-xl pb-3 md:hidden">Свет</h3>
                <div className="col-span-2">
                  <p className="subtitle">
                    Акцентная подсветка МАФ, встроенное освещение в мощение,
                    проекции
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-11 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Volzhskaya20}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-12 col-span-4 md:mb-[12.5rem]">
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
                <p className="subtitle pb-1">Анна Ефимова</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Александр Козлов</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Участники согласований</p>
                <p className="subtitle-sm  text-[var(--color-gray)]">
                  Комитет по градостроительству, администрация Ярославля,
                  ЮНЕСКО, эксплуатирующие службы
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-black)] md:px-10 md:py-10 py-[52px] px-4 col-span-4 md:rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-5 md:pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-2 list-disc subtitle pl-5 md:pl-0">
                <li>
                  Создание многофункционального пространства, сочетающего
                  историческую идентичность с современными технологиями
                </li>
                <li>
                  Ликвидация социальной разобщенности, повышение туристической
                  привлекательности
                </li>
                <li>
                  Внедрение инклюзивной среды и экологических решений
                  (биоразнообразие)
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="relative w-full overflow-hidden pb-[56.25%] order-17 col-span-8 mb-6 md:rounded-[var(--radius-sm)]">
          <iframe
            src="https://dzen.ru/embed/oEUZlaWcKAAA?from_block=partner&from=zen&mute=1&autoplay=1&tv=0"
            title="Волжская набережная — (Ярославль)"
            allow="autoplay; fullscreen"
            className="absolute left-0 top-0 h-full w-full"
          ></iframe>
        </div>
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/samsonovskaya`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases/corpus`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">Следующий проект</button>
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
