"use client";

import { PageSection } from "@/components/layout/PageSection";
import Corpus1 from "@public/corpus1.webp";
import Corpus2 from "@public/corpus2.webp";
import Corpus3 from "@public/corpus3.webp";
import Corpus4 from "@public/corpus4.webp";
import Corpus5 from "@public/corpus5.webp";
import Corpus6 from "@public/corpus6.webp";
import Corpus7 from "@public/corpus7.webp";
import Corpus8 from "@public/corpus8.webp";
import Corpus9 from "@public/corpus9.webp";
import Corpus10 from "@public/corpus10.webp";
import Corpus11 from "@public/corpus11.webp";
import Corpus12 from "@public/corpus12.webp";
import Corpus13 from "@public/corpus13.webp";
import Corpus14 from "@public/corpus14.webp";
import Corpus15 from "@public/corpus15.webp";
import Corpus16 from "@public/corpus16.webp";
import Corpus17 from "@public/corpus17.webp";
import Corpus18 from "@public/corpus18.webp";
import Corpus19 from "@public/corpus19.webp";
import Corpus20 from "@public/corpus20.webp";
import Corpus21 from "@public/corpus21.webp";
import Corpus22 from "@public/corpus22.webp";
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
        title="Ресторан «Corpus Societas» (Meat House)"
        description="Строительство"
        threshold={280}
      />
      <div className="h-20" />
      <PageSection className="">
        <p className="pt-10 pb-2 col-span-8 text-[var(--color-gray)] subtitle">
          (Санкт-Петербург)
        </p>

        <h1 className="pb-10 col-span-6">Corpus Societas</h1>

        <div className="col-span-2 flex flex-col justify-end h-full">
          <p className="pb-10 subtitle-bold">Ресторан (Meat House)</p>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Corpus1}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus2}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus3}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[119.5rem] mb-[12.5rem]">
            <section className="sticky top-20">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto">Локация</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Помещение бывших конюшен
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto">Тип услуги</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Строительство
                </p>
              </div>

              <p className="col-span-4 subtitle pt-[17.75rem]">
                Промышленно-историческая архитектура с характерными чертами
                (сводчатые потолки, массивные балки, кирпичные стены), что
                создает естественную «телесную» эстетику
              </p>

              <div className="pt-2 flex gap-2">
                {["Тяжесть", "Ритм", "Сила"].map((item, index) => (
                  <p
                    key={index}
                    className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit "
                  >
                    {item}
                  </p>
                ))}
              </div>

              <h3 className="col-span-2 pt-2">
                Пространство обладает выраженным атмосферным потенциалом для
                создания закрытого заведения
              </h3>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Corpus4}
            alt=""
            sizes="auto"
            className="h-[30.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus5}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus6}
            alt=""
            sizes="auto"
            className="h-[50rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[132.5rem] mb-[12.5rem]">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 ">Ограничения</h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Архитектурные</h3>
                <div className="col-span-2 ">
                  <p className="subtitle pb-2">
                    Сохранение исторического характера помещения (бывшие
                    конюшни) с его телесной, грубоватой эстетикой
                  </p>

                  <p className="subtitle ">
                    Интеграция современного оборудования (камеры сухого
                    вызревания, винные стеллажи) в аутентичный интерьер
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Концептуальные</h3>
                <div className="col-span-2 ">
                  <p className="subtitle pb-2">
                    Отказ от буквальных метафор (быки, гроздья винограда) в
                    пользу абстрактных, тонких отсылок к анатомии, алхимии и
                    хирургии
                  </p>

                  <p className="subtitle ">
                    Создание последовательного narrative-опыта для гостя — от
                    входа до VIP-зала
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <h3 className="col-span-2">Функциональные</h3>
                <div className="col-span-2">
                  <p className="subtitle pb-2">
                    Организация открытых экспозиционных зон (dry age, винная
                    комната) как части шоу-ритуала
                  </p>

                  <p className="subtitle ">
                    Обеспечение интимности и изоляции в VIP-зоне
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Corpus7}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus8}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus9}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus10}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus11}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus12}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus13}
            alt=""
            sizes="auto"
            className="h-[50rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus14}
            alt=""
            sizes="auto"
            className="h-[40.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus15}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[355.5rem] mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-4">«Общество тела»</h3>
                <p className="col-span-2 subtitle">
                  «Corpus Societas» — ресторан как ритуальное пространство, где
                  вкус становится культом, а ужин — церемонией
                </p>
              </div>

              <h3 className="col-span-2 pb-6">Ключевые решения</h3>

              <p className="subtitle-bold px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Зонирование по сценарию погружения
              </p>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto">«Порог» / вход</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Монументальная лестница, приглушенный свет, запахи дерева и
                  кожи — подготовка к ритуалу
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto">
                  «Материя» / бар, dry age, винная комната
                </p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Сердце алхимии вкуса — открытые камеры вызревания мяса и
                  винные стеллажи как музейные экспонаты
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto">
                  «Созерцание» / (основные залы) храмов
                </p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Два зала с разным настроением (дневной/вечерний), акцент на
                  тактильность и локальный свет
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto">«Посвящение» / VIP-зал</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Максимально закрытое пространство в духе алхимической
                  лаборатории или театра без сцены
                </p>
              </div>

              <p className="subtitle-bold pt-6 pb-4">
                Функциональная программа
              </p>

              <div className="flex gap-2">
                {[
                  "Ресторан",
                  "Винный клуб",
                  "Бар",
                  "Экспозиция производства",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Corpus16}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus17}
            alt=""
            sizes="auto"
            className="h-[42.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus18}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus19}
            alt=""
            sizes="auto"
            className="h-[53.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Corpus20}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[251.75rem] mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Материалы</h3>
                <div className="col-span-2 flex flex-col gap-2">
                  <p className=" subtitle-bold">C натуральной текстурой</p>
                  <p className=" subtitle">
                    Светлое и копченое дерево, камень с прожилками, латунь,
                    потемневший металл, кожа, обожженная древесина, микроцемент,
                    фактурная штукатурка
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 ">Свет</h3>
                <p className="col-span-2 subtitle">
                  Направленный, тактильный, минимальный. Светильники как
                  артефакты (алхимические, неочевидные). Подсветка ниш и камер
                  как в музее
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Визуальные метафоры</h3>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className=" flex flex-col gap-2">
                    <p className=" subtitle-bold">Волокна и разрезы мяса</p>
                    <p className=" subtitle">Фактуры материалов</p>
                  </div>
                  <div className=" flex flex-col gap-2">
                    <p className=" subtitle-bold">Сосуды и нервная система</p>
                    <p className=" subtitle">Линии, гравировка, паттерны</p>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <p className=" subtitle-bold">Алхимия и хирургия</p>
                    <p className=" subtitle">
                      Точность, лаконизм, индустриальные детали
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2">Архитектурные элементы</h3>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className=" flex flex-col gap-2">
                    <p className=" subtitle-bold">Акцент на балках</p>
                    <ul className=" subtitle list-disc">
                      <li>Сводах</li>
                      <li>Слоистых стенах —«анатомия здания»</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Corpus21}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4 mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6">
              <h2 className="col-span-2 ">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 ">
                <p className="subtitle pb-1">Зыль Артём</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Архитектор
                </p>
                <p className="subtitle pb-1">Черкасов Ростислав</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Нечаева Валерия</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Снежазов Ростислав</p>
                <p className="subtitle-sm text-[var(--color-gray)]">
                  Автор концепции
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-black)] p-10 col-span-4 rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-2 list-disc subtitle">
                <li>
                  Создание уникального ресторанного концепта — не просто
                  стейк-хаус, а философский и архитектурный проект
                </li>
                <li>
                  Гость проходит многоуровневый ритуал — от внешнего мира к
                  «посвящению»
                </li>
                <li>
                  Пространство работает на ощущение избранности, закрытости,
                  глубины
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Image
          src={Corpus22}
          alt=""
          sizes="auto"
          className="h-[48rem] w-full object-cover col-span-8 mb-6 rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/volzhskaya`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
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
