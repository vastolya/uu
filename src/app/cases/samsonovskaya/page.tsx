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
import CaseTitle from "@/components/layout/CaseTitle";
import { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Благоустройство Самсоновской площади, Петергоф",
  description:
    "Проект благоустройства Самсоновской площади в Петергофе от архитектурного бюро ДАБЛ-Ю. Ландшафт, благоустройство, проектирование общественных пространств и архитектура среды.",
  alternates: {
    canonical: canonical("/cases/samsonovskaya"),
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
        title="Самсоновская площадь (Петергоф)"
        description="Благоустройство"
        threshold={280}
      />

      <div className="h-14 md:h-20" />
      <PageSection className="fle flex-col">
        <div className="py-5 md:py-10 col-span-8 px-4 md:px-0">
          <p className="pb-2 text-[var(--color-gray)] hidden md:flex">
            (Петергоф)
          </p>
          <h1>Самсоновская площадь</h1>
        </div>

        <div className="order-2 md:order-1 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-0">
          <Image
            src={Samsonovskaya1}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 col-span-4">
          <div className="md:min-h-[49.5rem] mb-8 md:mb-[12.5rem]">
            <section className="sticky top-20">
              <div className="md:hidden py-4 border-b-2 subtitle border-[var(--color-border-gray)] px-4 md:px-0">
                <p className="col-span-2 my-auto pb-1 md:pb-0">Город</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  (Петергоф)
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] px-4 md:px-0">
                <p className="col-span-2 my-auto pb-1 md:pb-0">Локация</p>
                <p className="col-span-2 text-[var(--color-gray)]  ">
                  Примыкает к входной зоне Верхнего сада Петергофа — объекта
                  ЮНЕСКО
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)] mb-8 md:mb-40  px-4 md:px-0">
                <p className="col-span-2 pb-1 md:pb-0">Тип услуги</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Благоустройство
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 md:pb-24 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-0">Локация</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
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

              <div className="md:grid md:grid-cols-4 md:gap-x-6 md:pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-0">Проблемы</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
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
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Samsonovskaya2}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4 ">
          <div className="md:min-h-[52.5rem] px-4 md:px-0">
            <section className="sticky top-20 mb-[52px] md:mb-0">
              <h2 className="!text-[var(--color-gray)] pb-10 ">Ограничения</h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-3 md:pb-0">Исторические</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
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
                <h3 className="col-span-2 pb-3 md:pb-0">Технические</h3>
                <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pl-5 md:pl-0">
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
                <h3 className="col-span-2 pb-3 md:pb-0">Социальные</h3>
                <p className="col-span-2 subtitle ">
                  Туристы, жители, школьники, МГН, посетители фестивалей
                </p>
              </div>

              <p className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit">
                Многообразие целевых групп
              </p>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Samsonovskaya3}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya4}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[31.6875rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya5}
            alt=""
            sizes="auto"
            className="h-[448px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya6}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya7}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[31.6875rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya8}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4 ">
          <div className="md:min-h-[250.625rem] pb-8 md:pb-0 px-4 md:px-0">
            <section className="sticky  top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 ">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-5 md:pb-10">
                <h3 className="col-span-2 hidden md:flex">Концепция</h3>
                <h3 className="col-span-2 !text-xl flex md:hidden pb-3">
                  Концепция
                </h3>
                <p className="col-span-2 subtitle">
                  Трансформируемый «Зеленый сад» на месте парковки, воссоздающий
                  дух исторических огородов Петра I
                </p>
              </div>

              <h3 className="col-span-2 pb-6 hidden md:flex">
                Ключевые решения
              </h3>
              <h3 className="col-span-2 !text-xl flex md:hiiden pb-3">
                Ключевые решения
              </h3>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <p className="subtitle-bold pb-3 md:pb-1 col-span-2">
                  Зонирование
                </p>
                <div className="col-span-2 ">
                  <p className="subtitle-bold pb-2 hidden md:flex">
                    Два тематических бюскета <br /> («зеленые комнаты»)
                  </p>
                  <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pb-5 md:pb-6 pl-5 md:pl-0">
                    <li>
                      Сад ароматов с травами (тимьян, лаванда) и плодовыми
                      деревьями (ирга)
                    </li>
                    <li>
                      Лабиринт (отсылка к Восточному лабиринту Нижнего сада)
                    </li>
                  </ul>

                  <p className="subtitle-bold pb-3 md:pb-2">Инфраструктура</p>
                  <ul className="col-span-2 subtitle list-disc flex flex-col gap-2 pb-5 md:pb-6 pl-5 md:pl-0">
                    <li>
                      Центральная аллея по оси исторических ворот Верхнего сада
                    </li>
                    <li>Зоны тихого отдыха, фотозоны</li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <p className="subtitle-bold col-span-2 pb-3 md:pb-0">
                  Технологии
                </p>
                <div className="col-span-2 ">
                  <p className="subtitle">
                    Контейнерное озеленение (возможность пересадки растений в
                    грунт, адаптация к коммуникациям)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2 mb-2 md:mb-[12.5rem]">
          <Image
            src={Samsonovskaya9}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[51.25rem]  w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya10}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya11}
            alt=""
            sizes="auto"
            className="h-[412px] md:h-[47.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya12}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Samsonovskaya13}
            alt=""
            sizes="auto"
            className="h-[302px] md:h-[35rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[240.75rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky  top-20 px-4 md:px-0">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">Ландшафт</h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">Ландшафт</h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-2 md:pb-1">Растения</p>
                  <p className="subtitle pb-3 md:pb-2">
                    Историко-тематический ассортимент (декоративный лук, вереск,
                    рододендрон, клен «шар», туя «спираль»)
                  </p>
                  <p className="subtitle-bold pb-2 md:pb-1">Планировка</p>
                  <p className="subtitle md:pb-6">
                    Регулярная геометрия с осевой симметрией (аллегория садов
                    Петра I)
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">МАФ и материалы</h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">
                  МАФ и материалы
                </h3>
                <div className="col-span-2 ">
                  <ul className="col-span-2 subtitle md:list-disc flex flex-col gap-2 md:pb-6 ">
                    <li>Мобильные контейнеры для зелени</li>
                    <li>
                      Минималистичные скамьи из дерева и камня (в духе
                      классицизма)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6">
                <h3 className="col-span-2 hidden md:flex">Свет</h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">Свет</h3>
                <div className="col-span-2">
                  <p className="subtitle md:pb-2">
                    Подсветка растений (акцент на вечернюю привлекательность)
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 hidden md:flex">
                  Отсылки к наследию
                </h3>
                <h3 className="col-span-2 !text-xl md:hidden pb-3">
                  Отсылки к наследию
                </h3>
                <div className="col-span-2 ">
                  <ul className="col-span-2 subtitle md:list-disc flex flex-col gap-2">
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
        </div>

        <div className="order-9 col-span-4 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Samsonovskaya14}
            alt=""
            sizes="auto"
            className="h-[480px] md:h-[52.5rem] w-full object-cover md:rounded-[var(--radius-sm)] "
          />
        </div>

        <div className="order-10 col-span-4 md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0">
              <h2 className="col-span-2 flex flex-col pb-8 md:pb-0">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 pb-[52px] md:pb-0">
                <p className="subtitle pb-1">Валерия Нечаева</p>
                <p className="subtitle-sm pb-3 md:pb-4 text-[var(--color-gray)]">
                  Архитектор
                </p>
                <p className="subtitle pb-1">Анна Ефимова</p>
                <p className="subtitle-sm pb-3 md:pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Александр Козлов</p>
                <p className="subtitle-sm pb-3 md:pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Участие историков-консультантов</p>
                <p className="subtitle-sm  text-[var(--color-gray)]">
                  Для адаптации наследия Петра I
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-black)] px-4 md:px-10 py-[52px] md:py10 col-span-4 md:rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-5 md:pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-3 md:gap-2 list-disc subtitle pl-5 md:pl-0">
                <li>
                  Превращение парковки в общественное пространство с
                  «исторической памятью»
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
          className="order-11 h-[480] md:h-[43rem] w-full object-cover col-span-8 mb-[52px] md:mb-6 md:rounded-[var(--radius-sm)]"
        />
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/okhta`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases/volzhskaya`}
          className="flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <button className="cursor-pointer">Следующий проект</button>
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
