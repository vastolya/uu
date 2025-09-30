"use client";

import { PageSection } from "@/components/layout/PageSection";
import Samsonovskaya1 from "@public/samsonovskaya1.webp";
import Samsonovskaya2 from "@public/samsonovskaya2.webp";
import Samsonovskaya3 from "@public/samsonovskaya3.webp";
import Samsonovskaya4 from "@public/samsonovskaya4.webp";
import Samsonovskaya5 from "@public/samsonovskaya5.webp";
import Samsonovskaya6 from "@public/samsonovskaya6.webp";
import Samsonovskaya7 from "@public/samsonovskaya7.webp";
import Samsonovskaya8 from "@public/samsonovskaya8.webp";
import Samsonovskaya9 from "@public/samsonovskaya9.webp";
import Samsonovskaya10 from "@public/samsonovskaya10.webp";
import Samsonovskaya11 from "@public/samsonovskaya11.webp";
import Samsonovskaya12 from "@public/samsonovskaya12.webp";
import Samsonovskaya13 from "@public/samsonovskaya13.webp";
import Samsonovskaya14 from "@public/samsonovskaya14.webp";
import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";

export default function Page() {
  return (
    <>
      <div className="h-20" />
      <PageSection className="">
        <div className="py-10 col-span-8">
          <p className="pb-2 text-[var(--color-gray)]">(Петергоф)</p>
          <h1>Самсоновская площадь</h1>
        </div>

        <div className="col-span-4">
          <Image
            src={Samsonovskaya1}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover mb-[32.25rem] rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya2}
            alt=""
            sizes="auto"
            className="h-[52.5rem] mb-[12.5rem] w-full object-cover  rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya3}
            alt=""
            sizes="auto"
            className="h-[52.5rem] mb-2 w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya4}
            alt=""
            sizes="auto"
            className="h-[31.6875rem] mb-2  w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya5}
            alt=""
            sizes="auto"
            className="h-[29.75rem] mb-2 w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya6}
            alt=""
            sizes="auto"
            className="h-[51.25rem]  mb-2 w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya7}
            alt=""
            sizes="auto"
            className="h-[31.6875rem] mb-2 w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya8}
            alt=""
            sizes="auto"
            className="h-[51.25rem] mb-[12.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya9}
            alt=""
            sizes="auto"
            className="h-[51.25rem] mb-2  w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya10}
            alt=""
            sizes="auto"
            className="h-[52.5rem] mb-2  w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya11}
            alt=""
            sizes="auto"
            className="h-[47.5rem] mb-2 w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya12}
            alt=""
            sizes="auto"
            className="h-[52.5rem] w-full object-cover rounded-[var(--radius-sm)] mb-2"
          />
          <Image
            src={Samsonovskaya13}
            alt=""
            sizes="auto"
            className="h-[35rem] w-full object-cover rounded-[var(--radius-sm)] mb-[12.5rem]"
          />
          <Image
            src={Samsonovskaya14}
            alt=""
            sizes="auto"
            className="h-[52.5rem] w-full object-cover rounded-[var(--radius-sm)] "
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[49.5rem] mb-[12.5rem]">
            <section className="sticky top-20">
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto">Локация</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Примыкает к входной зоне Верхнего сада Петергофа — объекта
                  ЮНЕСКО
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] mb-40">
                <p className="col-span-2">Тип услуги</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Благоустройство
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-24">
                <h3 className="col-span-2">Локация</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2">
                  <li>
                    Ключевой узел на пути туристических потоков к
                    дворцово-парковому ансамблю (Нижний сад, Верхний сад,
                    Колонистский парк)
                  </li>
                  <li>
                    Окружена 30+ объектами культурного наследия (ОКН), включая
                    усадьбы Трувеллера, исторические ворота, мосты
                  </li>
                  <li>
                    Связывает зеленые каркасы парков («Сквер Знаменова», Верхний
                    сад)
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Проблемы</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2">
                  <li>
                    Территория занята стихийной парковкой, не соответствующей
                    историческому статусу места
                  </li>
                  <li>Отсутствие рекреационных зон для туристов и жителей</li>
                  <li>
                    Неудобная логистика: перегруженность транспортом при
                    близости остановок общественного транспорта
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="min-h-[52.5rem] mb-[12.5rem]">
            <section className="sticky  top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 ">Ограничения</h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Исторические</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2">
                  <li>
                    Расположение в буферной зоне ОКН запрещает капитальное
                    строительство и требует сохранения визуальной целостности
                    ансамбля
                  </li>
                  <li>
                    Необходимость интеграции в контекст регулярных садов Петра I
                    (осевые композиции, классические бюскеты)
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Технические</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2">
                  <li>
                    Плотное расположение подземных коммуникаций исключает
                    глубокое землеустройство
                  </li>
                  <li>
                    Требование мобильности решений (временный характер сада)
                  </li>
                </ul>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-2">
                <h3 className="col-span-2">Социальные</h3>
                <p className="col-span-2 subtitle ">
                  Туристы, жители, школьники, МГН, посетители фестивалей
                </p>
              </div>

              <p className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit">
                Многообразие целевых групп
              </p>
            </section>
          </div>

          <div className="min-h-[250.625rem] mb-[12.5rem]">
            <section className="sticky  top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-10">
                <h3 className="col-span-2">Концепция</h3>
                <p className="col-span-2 subtitle">
                  Трансформируемый «Зеленый сад» на месте парковки, воссоздающий
                  дух исторических огородов Петра I
                </p>
              </div>

              <h3 className="col-span-2 pb-6">Ключевые решения</h3>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <p className="subtitle-bold pb-1 col-span-2">Зонирование</p>
                <div className="col-span-2 ">
                  <p className="subtitle-bold pb-2">
                    Два тематических бюскета <br /> («зеленые комнаты»)
                  </p>
                  <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pb-6">
                    <li>
                      Сад ароматов с травами (тимьян, лаванда) и плодовыми
                      деревьями (ирга)
                    </li>
                    <li>
                      Лабиринт (отсылка к Восточному лабиринту Нижнего сада)
                    </li>
                  </ul>

                  <p className="subtitle-bold pb-2">Инфраструктура</p>
                  <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pb-6">
                    <li>
                      Центральная аллея по оси исторических ворот Верхнего сада
                    </li>
                    <li>Зоны тихого отдыха, фотозоны</li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <p className="subtitle-bold col-span-2">Технологии</p>
                <div className="col-span-2 ">
                  <p className="subtitle">
                    Контейнерное озеленение (возможность пересадки растений в
                    грунт, адаптация к коммуникациям)
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="min-h-[240.75rem] mb-[12.5rem]">
            <section className="sticky  top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Ландшафт</h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-1">Растения</p>
                  <p className="subtitle pb-2">
                    Историко-тематический ассортимент (декоративный лук, вереск,
                    рододендрон, клен «шар», туя «спираль»)
                  </p>
                  <p className="subtitle-bold pb-1">Планировка</p>
                  <p className="subtitle pb-6">
                    Регулярная геометрия с осевой симметрией (аллегория садов
                    Петра I)
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">МАФ и материалы</h3>
                <div className="col-span-2 ">
                  <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pb-6">
                    <li>Мобильные контейнеры для зелени</li>
                    <li>
                      Минималистичные скамьи из дерева и камня (в духе
                      классицизма)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Свет</h3>
                <div className="col-span-2">
                  <p className="subtitle pb-2">
                    Подсветка растений (акцент на вечернюю привлекательность)
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2">Отсылки к наследию</h3>
                <div className="col-span-2 ">
                  <ul className="col-span-2 subtitle list-disc flex flex-col gap-2">
                    <li>
                      Аптекарские посадки (аллюзия на огороды Нижнего сада)
                    </li>
                    <li>
                      Шахматный бюскет (отсылка к Шахматному каскаду Петергофа)
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section className="md:grid md:grid-cols-4 md:gap-x-6 mb-[12.5rem]">
            <h2 className="col-span-2">
              Проектная группа{" "}
              <span className="text-[var(--color-primary)]">Double U</span>
            </h2>
            <div className="col-span-2 pb-[22.5rem]">
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
              <p className="subtitle pb-1">Участие историков-консультантов</p>
              <p className="subtitle-sm text-[var(--color-gray)]">
                Для адаптации наследия Петра I
              </p>
            </div>

            <div className=" bg-[var(--color-black)] p-10 col-span-4 rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-2 list-disc subtitle">
                <li>
                  Превращение парковки в общественное пространство
                  <br /> с «исторической памятью»
                </li>
                <li>Создание точки притяжения для 5 целевых групп</li>
                <li>
                  Реализация инновационного подхода — съемный сад для территорий
                  с подземными коммуникациями
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Image
          src={Samsonovskaya10}
          alt=""
          sizes="auto"
          className="h-[43rem] w-full object-cover col-span-8 mb-6 rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущая</button>
        </Link>
        <Link
          href={`/cases`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">Следующая</button>
          <IconChevron className="rotate-90 h-[1rem]" />
        </Link>{" "}
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
            className="hidden md:block w-[9.625rem] h-auto"
          />
        </div>
        <Form className="col-span-4" />
      </PageSection>
    </>
  );
}
