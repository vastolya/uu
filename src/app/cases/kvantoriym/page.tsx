"use client";

import { PageSection } from "@/components/layout/PageSection";
import Kvantoriym1 from "@public/kvantoriym1.webp";
import Kvantoriym2 from "@public/kvantoriym2.webp";
import Kvantoriym3 from "@public/kvantoriym3.webp";
import Kvantoriym4 from "@public/kvantoriym4.webp";
import Kvantoriym5 from "@public/kvantoriym5.webp";
import Kvantoriym6 from "@public/kvantoriym6.webp";
import Kvantoriym7 from "@public/kvantoriym7.webp";
import Kvantoriym8 from "@public/kvantoriym8.webp";
import Kvantoriym9 from "@public/kvantoriym9.webp";
import Kvantoriym10 from "@public/kvantoriym10.webp";
import Kvantoriym11 from "@public/kvantoriym11.webp";
import imageNews3 from "@public/imageNews3.webp";
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
        title="Кванториум-Сити (Санкт-Петербург)"
        description="Благоустройство: 1.4137 га"
        threshold={280}
      />
      <div className="h-20" />
      <PageSection className="">
        <p className="pt-10 pb-2 col-span-8 text-[var(--color-gray)] subtitle">
          (Санкт-Петербург)
        </p>

        <h1 className="pb-10 col-span-8">Кванториум-Сити</h1>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Kvantoriym1}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[37.5rem] pb-[12.5rem] h-full">
            <section className="sticky top-20 flex flex-col justify-between h-full">
              <div>
                <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                  <p className="col-span-2 my-auto">Локация</p>
                  <p className="col-span-2 text-[var(--color-gray)]">
                    (Санкт-Петербург) Территория Центра Брянцева
                  </p>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                  <p className="col-span-2 my-auto">Тип услуги</p>
                  <p className="col-span-2 text-[var(--color-gray)]">
                    Благоустройство
                  </p>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] ">
                  <p className="col-span-2 my-auto">Площадь</p>
                  <p className="col-span-2 text-[var(--color-gray)]">
                    1.4137 га
                  </p>
                </div>
              </div>
              <div>
                <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                  <h3 className="col-span-2">Исходное состояние</h3>
                  <div className="col-span-2 ">
                    <p className="subtitle ">
                      Заброшенная, пустынная, неорганизованная территория в
                      центре жилого района
                    </p>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-x-6">
                  <h3 className="col-span-2">Потенциал</h3>
                  <div className="col-span-2 ">
                    <p className="subtitle ">
                      Наличие образовательного учреждения (Центр Брянцева) и
                      потребность в современном пространстве для проектной
                      деятельности и отдыха учащихся, наставников и гостей
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Kvantoriym2}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym3}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym4}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[111.75rem] mb-[12.5rem]">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 ">Ограничения</h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <div className="col-span-2 flex flex-col gap-2">
                  <h3>Бюджетные</h3>
                  <p className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs w-fit ">
                    50 млн ₽
                  </p>
                </div>
                <div className="col-span-2 ">
                  <p className="subtitle ">
                    Ограниченный бюджет проекта, требующий эффективного
                    распределения средств.
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Процессуальные</h3>
                <div className="col-span-2 ">
                  <p className="subtitle ">
                    Необходимость строгого соблюдения нормативов
                    Санкт-Петербурга (Правила благоустройства, закон о
                    благоустройстве) и прохождения многоэтапных согласований с
                    городскими комитетами и службами
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 ">
                <h3 className="col-span-2">Управленческие</h3>
                <div className="col-span-2">
                  <p className="subtitle ">
                    Обязательность применения стандарта вовлечения граждан
                    (жителей района) в разработку концепции и проекта
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Kvantoriym5}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym6}
            alt=""
            sizes="auto"
            className="h-[37.5rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym7}
            alt=""
            sizes="auto"
            className="h-[50rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[139.75rem] mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-4">Цель</h3>

                <p className="col-span-2 subtitle">
                  Превратить заброшенный участок в современное инновационное
                  пространство для коммуникации, отдыха, творчества и проектной
                  деятельности учащихся центра, наставников и гостей, ставшее
                  центром притяжения для жителей города
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 pb-4">Ключевые решения</h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-2">Тематическое зонирование</p>
                  <p className="subtitle">
                    Создание функциональных зон, отражающих направления
                    деятельности центра (каждое направление получило свою
                    площадку)
                  </p>
                </div>
              </div>

              <p className="subtitle-bold px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Создание ключевых точек притяжения
              </p>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto">Главная площадь</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Сценическое интерактивное пространство с навесом
                  «Медиа-центр», амфитеатром, зоной отдыха — паблик-арт объектом
                  «НУКЛОН»
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border mb-4">
                <p className="col-span-2 my-auto">&quot;{"Тайный сад"}&quot;</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Зона уединения и познания с прогулочной тропой, декоративным
                  освещением, непрерывным цветником, арт-объектами «Застывшие
                  кванты» и навесом «Мастер Квант» (воркшоп-центр)
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <div className="col-span-2 col-start-3 pb-4">
                  <p className="subtitle-bold pb-2">Развитие инфраструктуры</p>
                  <p className="subtitle">
                    Устройство пешеходных дорожек, спортивных площадок
                    (памп-трек), навесов, павильонов культурно-досугового
                    назначения (оранжерея, арт-мастерская), площадок для отдыха
                  </p>
                </div>

                <div className="col-span-2 col-start-3">
                  <p className="subtitle-bold pb-2">Инклюзивность</p>
                  <p className="subtitle">
                    Реализация принципа безбарьерной среды для всех групп
                    населения
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-2 mb-[12.5rem]">
          <Image
            src={Kvantoriym8}
            alt=""
            sizes="auto"
            className="h-[50rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym9}
            alt=""
            sizes="auto"
            className="h-[29.75rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym10}
            alt=""
            sizes="auto"
            className="h-[51.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4">
          <div className="min-h-[132rem] mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-10 ">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">Архитектурно-планировочное</h3>
                <div className="col-span-2 flex flex-col gap-2">
                  <p className=" subtitle">
                    Решение основано на четком функциональном зонировании
                    территории, начиная с выделения входной группы со стороны
                    главного фасада здания
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2 ">Ландшафтный дизайн</h3>
                <p className="col-span-2 subtitle">
                  Ландшафтный дизайн реализует принцип непрерывного цветения,
                  обеспечивая декоративность клумб в течение всего сезона, и
                  формирует уединённые «зеленые комнаты» за счёт сочетания
                  плотных посадок и искусственного рельефа, что стало основой
                  атмосферы «Тайного сада»
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6">
                <h3 className="col-span-2">
                  Малые архитектурные формы (МАФ) и Арт-объекты
                </h3>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className=" flex flex-col gap-2">
                    <p className=" subtitle-bold">&quot;{"НУКЛОН"}&quot;</p>
                    <p className=" subtitle">
                      Ключевой паблик-арт объект из полированной нержавеющей
                      стали (символ нуклона/кварков), интерактивный,
                      калейдоскопический, привлекательный днём и ночью
                    </p>
                  </div>
                  <div className=" flex flex-col gap-2">
                    <p className=" subtitle-bold">
                      &quot;{"Застывшие кванты"}&quot;
                    </p>
                    <p className=" subtitle">
                      Художественные элементы в &quot;{"Тайном саду"}&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {[
                  "Навесы",
                  "Медиа-центр",
                  "Мастер Квант",
                  "Гамаки",
                  "Cкамейки",
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
            src={Kvantoriym11}
            alt=""
            sizes="auto"
            className="h-[58.25rem] w-full object-cover rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="col-span-4 mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6">
              <h2 className="col-span-2 pb-6">
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
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
              </div>

              <div className="col-span-2">
                <p className="subtitle text-[var(--color-gray)] pb-1">
                  Участники согласований
                </p>
                <ul className="list-disc subtitle-sm pl-5 flex flex-col gap-1">
                  <li>Комитет по градостроительству и архитектуре</li>
                  <li>Администрация Красногвардейского района</li>
                  <li>Комитет по природопользованию</li>
                  <li>ГУП «Водоканал»</li>
                  <li>Управление ГИБДД</li>
                  <li>ГУП «ТЭК»</li>
                  <li>ГУП «Ленсвет»</li>
                  <li>СПб ГУП «Мостотрест»</li>
                  <li>ООО «ПетербургГаз»</li>
                  <li>ОАО «Ростелеком»</li>
                  <li>ОАО «СПб Электрические сети»</li>
                  <li>СПб ГКУ «ЦКБ»</li>
                  <li>ГосНИОРХ</li>
                  <li>СПб ГАУ «Центр государственной экспертизы»</li>
                </ul>
              </div>

              <div className="col-span-2">
                <p className="subtitle pb-1">WE11</p>
                <p className="subtitle-sm text-[var(--color-gray)] pb-4">
                  Архитектурно-проектная команда (предпроект, вовлечение)
                </p>
                <p className="subtitle pb-1">ООО «СК «Версаль»</p>
                <p className="subtitle-sm text-[var(--color-gray)] pb-4">
                  Разработчик проектно-сметной документации
                </p>
                <p className="subtitle pb-1">
                  Администрация Калининского района Санкт-Петербурга
                </p>
                <p className="subtitle-sm text-[var(--color-gray)]">
                  Государственный заказчик
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-black)] p-10 col-span-4 rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-2 list-disc subtitle">
                <li>
                  Заброшенная территория трансформирована в современный,
                  многофункциональный и тематический парк - &quot;
                  {"Кванториум-Сити"}&quot;
                </li>
                <li>
                  Создан мощный центр притяжения для учащихся Центра Брянцева,
                  молодежи, жителей Калининского района и всего города.
                </li>
                <li>
                  Реализованы принципы инклюзивности (безбарьерная среда) и
                  интерактивности (арт-объекты, специализированные зоны).
                </li>
                <li>
                  Ликвидирована социальная разобщенность, вызванная прежним
                  состоянием участка.
                </li>
                <li>
                  Сформировано уникальное образовательно-рекреационное
                  пространство, гармонично сочетающее зоны для творчества,
                  отдыха, обучения и спорта.
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Image
          src={imageNews3}
          alt=""
          sizes="auto"
          className="h-[48rem] w-full object-cover col-span-8 mb-6 rounded-[var(--radius-sm)]"
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
