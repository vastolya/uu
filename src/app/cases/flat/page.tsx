"use client";

import { PageSection } from "@/components/layout/PageSection";
import Flat1 from "@public/flat1.webp";
import Flat2 from "@public/flat2.webp";
import Flat3 from "@public/flat3.webp";
import Flat4 from "@public/flat4.webp";
import Flat5 from "@public/flat5.webp";
import Flat6 from "@public/flat6.webp";
import Flat7 from "@public/flat7.webp";
import Flat8 from "@public/flat8.webp";
import Flat9 from "@public/flat9.webp";
import Flat10 from "@public/flat10.webp";
import Flat11 from "@public/flat11.webp";
import Flat12 from "@public/flat12.webp";
import Flat13 from "@public/flat13.webp";
import Flat14 from "@public/flat14.webp";
import Flat15 from "@public/flat15.webp";
import Flat16 from "@public/flat16.webp";
import Flat17 from "@public/flat17.webp";
import Flat18 from "@public/flat18.webp";
import Flat19 from "@public/flat19.webp";
import Flat20 from "@public/flat20.webp";
import Flat22 from "@public/flat22.webp";

import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import CaseTitle from "@/components/layout/CaseTitle";

export default function Page() {
  return (
    <>
      <CaseTitle
        title="Жилая квартира "
        description="Интерьерный дизайн: 87 м²"
        threshold={280}
      />

      <div className="h-14 md:h-20" />
      <PageSection className="flex flex-col">
        <p className="pt-10 pb-2 col-span-8 text-[var(--color-gray)] subtitle hidden md:flex">
          (Санкт-Петербург)
        </p>

        <h1 className="pt-5 md:pt-0 pb-5 md:pb-10 col-span-8 px-4 md:px-0">
          Жилая квартира{" "}
        </h1>

        <div className="order-2 md:order-1 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Flat1}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat2}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat3}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat4}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat5}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 col-span-4">
          <div className="md:min-h-[215.25rem] mb-[52px] md:mb-[12.5rem]">
            <section className="sticky top-20">
              <div className="flex flex-col md:hidden  py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Локация
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Санкт-Петербург
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Тип услуги
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Интерьерный дизайн
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-2 md:pb-0">
                  Площадь
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  87 м²
                </p>
              </div>

              <p className="subtitle-bold pb-2 md:pb-4 pt-4 md:pt-6 px-4 md:px-0">
                Стандартная планировка
              </p>

              <div className="pb-[52px] md:pb-[19.75rem] flex flex-nowrap md:flex-wrap gap-1 overflow-x-auto md:overflow-visible px-4 md:px-0 hide-scrollbar">
                {["Гостиная", "Спальня", "Кухня", "Ванная комната"].map(
                  (item, index) => (
                    <p
                      key={index}
                      className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit whitespace-nowrap"
                    >
                      {item}
                    </p>
                  )
                )}
              </div>

              <p className="subtitle pb-2 px-4 md:px-0">
                Акцент на создание комфортного, функционального и эстетически
                гармоничного пространства для проживания
              </p>
              <h3 className="px-4 md:px-0">
                Городская квартира в многоквартирном доме
              </h3>
            </section>
          </div>
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Flat2}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat3}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat4}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat5}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat6}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat7}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat8}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat9}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat10}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4">
          <div className="md:min-h-[421rem] mb-8 md:mb-[12.5rem] px-4 md:px-0">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 ">Ограничения</h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0">Архитектурные</h3>

                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
                  <li>
                    Стандартная форма помещения без сложных архитектурных
                    элементов
                  </li>
                  <li>Необходимость зонирования без перепланировки</li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0">Стилевые</h3>

                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
                  <li>
                    Требование соблюдения современного стиля с элементами
                    минимализма
                  </li>
                  <li>
                    Использование нейтральной цветовой палитры с акцентами
                  </li>
                </ul>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 pb-3 md:pb-0">Функциональные</h3>

                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
                  <li>
                    Обеспечение удобства и практичности для повседневной жизни
                  </li>
                  <li>Оптимизация пространства под хранение (шкафы-колонны)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Flat11}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat12}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat13}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[40.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[144.25rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 px-4 md:px-0">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-4 md:pb-6">
                <h3 className="col-span-2 pb-3 md:pb-4">Концепция</h3>

                <p className="col-span-2 subtitle">
                  Современный минимализм с акцентом на функциональность,
                  лаконичность и гармонию
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 pb-4 hidden md:flex">
                  Ключевые решения
                </h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-3 md:pb-2">Зонирование</p>
                  <p className="subtitle pb-4">
                    Четкое разделение на функциональные зоны (спальня, гостиная,
                    кухня, ванная) без перегородок
                  </p>
                  <p className="subtitle-bold pb-3 md:pb-2">Цветовая схема</p>
                  <p className="subtitle pb-4">
                    Нейтральная база (оттенки серого, бежевого) + яркие акценты
                  </p>
                  <p className="subtitle-bold pb-3 md:pb-2">Освещение</p>
                  <p className="subtitle">
                    Многоуровневая система (центральный подвесной светильник,
                    настольные лампы, встроенная подсветка)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2 mb-2 md:mb-[12.5rem]">
          <Image
            src={Flat14}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat15}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat16}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat17}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat18}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Flat19}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[310rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] px-4 md:px-0 pb-8 md:pb-10 ">
                Дизайн-решения
              </h2>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Материалы и отделка
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Стены
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Текстурированная отделка с эффектом «бетон»
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border mb-0 md:mb-4">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Пол
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Светлое дерево
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-0 md:mb-4">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Ванная
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Керамогранитная матовая плитка
                </p>
              </div>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Мебель и декор
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Минималистичная мебель
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Кровать лаконичного дизайна, шкафы-колонны
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-0 md:mb-4">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Декор
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Вазы, картины — акценты индивидуальности без перегруза
                </p>
              </div>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Свет
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Центральный элемент
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Красный подвесной светильник в зоне кровати
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 pt-4 subtitle ">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Дополнительные источники
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Настольные лампы, встроенные светильники
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-9 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Flat20}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-10 col-span-4  md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0 pb-[52px] md:pb-0">
              <h2 className="col-span-2 pb-8 md:pb-0">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 ">
                <p className="subtitle pb-1">Лера Нечаева</p>
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
            <div className="bg-[var(--color-black)] md:px-10 md:py-10 px-4 py-8 col-span-4 md:rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-5 md:pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-3 md:gap-2 list-disc subtitle pl-5 md:pl-0">
                <li>
                  Создание современного, функционального и эстетически
                  проработанного пространства
                </li>
                <li>
                  Визуальное расширение квартиры за счёт светлых тонов и
                  минималистичных решений
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Image
          src={Flat22}
          alt=""
          sizes="auto"
          className="order-11 h-[280px] md:h-[48rem] w-full object-cover col-span-8 mb-6 md:rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/temporal`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases/okhta`}
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
