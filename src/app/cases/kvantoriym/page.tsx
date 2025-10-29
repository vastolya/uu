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
import ImageArrow from "@public/imageArrow.webp";
import Image from "next/image";
import Link from "next/link";
import IconChevron from "@/components/icons/IconChevron";
import Form from "@/components/ui/Form";
import CaseTitle from "@/components/layout/CaseTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Благоустройство территории «Кванториум-Сити» Центра",
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
        title="Кванториум-Сити (Санкт-Петербург)"
        description="Благоустройство: 1.4137 га"
        threshold={280}
      />
      <div className="h-14 md:h-20" />
      <PageSection className="flex flex-col">
        <p className="order-2 md:order-1 pt-10 pb-2 col-span-8 text-[var(--color-gray)] subtitle hidden md:flex">
          (Санкт-Петербург)
        </p>
        <h1 className="order-1 md:order-2 md:pb-10 py-5 md:py-0 px-4 md:px-0 col-span-8 *:">
          Кванториум-Сити
        </h1>
        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Kvantoriym1}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[37.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="order-3 md:order-4 col-span-4">
          <div className="md:min-h-[37.5rem] md:pb-[12.5rem] h-full">
            <section className="sticky top-20 flex flex-col justify-between h-full">
              <div>
                <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                  <p className="col-span-2 my-auto px-4 md:px-0">Локация</p>
                  <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                    (Санкт-Петербург) Территория Центра Брянцева
                  </p>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                  <p className="col-span-2 my-auto px-4 md:px-0">Тип услуги</p>
                  <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                    Благоустройство
                  </p>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] ">
                  <p className="col-span-2 my-auto px-4 md:px-0">Площадь</p>
                  <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                    1.4137 га
                  </p>
                </div>
              </div>
              <div className="py-6 md:py-0">
                <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                  <h3 className="col-span-2">Исходное состояние</h3>
                  <div className="col-span-2 ">
                    <p className="subtitle ">
                      Заброшенная, пустынная, неорганизованная территория в
                      центре жилого района
                    </p>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0">
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
        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2  mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Kvantoriym2}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym3}
            alt=""
            sizes="auto"
            className="h-[220px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym4}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[111.75rem] md:mb-[12.5rem]">
            <section className="sticky top-20">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Ограничения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6 px-4 md:px-0">
                <div className="col-span-2 flex flex-row  justify-between md:flex-col gap-2 items-center md:items-start pb-3 md:pb-0">
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

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-0">Процессуальные</h3>
                <div className="col-span-2 ">
                  <p className="subtitle ">
                    Необходимость строгого соблюдения нормативов
                    Санкт-Петербурга (Правила благоустройства, закон о
                    благоустройстве) и прохождения многоэтапных согласований с
                    городскими комитетами и службами
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-0 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-0">Управленческие</h3>
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
        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2  mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Kvantoriym5}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym6}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[37.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym7}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[139.75rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-4">Цель</h3>

                <p className="col-span-2 subtitle">
                  Превратить заброшенный участок в современное инновационное
                  пространство для коммуникации, отдыха, творчества и проектной
                  деятельности учащихся центра, наставников и гостей, ставшее
                  центром притяжения для жителей города
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-4 hidden md:flex">
                  Ключевые решения
                </h3>
                <div className="col-span-2">
                  <p className="subtitle-bold pb-3 md:pb-2">
                    Тематическое зонирование
                  </p>
                  <p className="subtitle">
                    Создание функциональных зон, отражающих направления
                    деятельности центра (каждое направление получило свою
                    площадку)
                  </p>
                </div>
              </div>

              <p className="subtitle-bold  px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Создание ключевых точек притяжения
              </p>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-3 md:pb-0">
                  Главная площадь
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Сценическое интерактивное пространство с навесом
                  «Медиа-центр», амфитеатром, зоной отдыха — паблик-арт объектом
                  «НУКЛОН»
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border mb-6 md:mb-4">
                <p className="col-span-2 my-auto px-4 md:px-0 pb-3 md:pb-0">
                  &quot;{"Тайный сад"}&quot;
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Зона уединения и познания с прогулочной тропой, декоративным
                  освещением, непрерывным цветником, арт-объектами «Застывшие
                  кванты» и навесом «Мастер Квант» (воркшоп-центр)
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <div className="col-span-2 col-start-3 pb-5 md:pb-4">
                  <p className="subtitle-bold pb-3 md:pb-2 px-4 md:px-0">
                    Развитие инфраструктуры
                  </p>
                  <p className="subtitle px-4 md:px-0">
                    Устройство пешеходных дорожек, спортивных площадок
                    (памп-трек), навесов, павильонов культурно-досугового
                    назначения (оранжерея, арт-мастерская), площадок для отдыха
                  </p>
                </div>

                <div className="col-span-2 col-start-3">
                  <p className="subtitle-bold pb-3 md:pb-2 px-4 md:px-0">
                    Инклюзивность
                  </p>
                  <p className="subtitle px-4 md:px-0">
                    Реализация принципа безбарьерной среды для всех групп
                    населения
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="order-10 md:order-9 col-span-4 flex flex-col gap-2  mb-2 md:mb-[12.5rem]">
          <Image
            src={Kvantoriym8}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym9}
            alt=""
            sizes="auto"
            className="h-[268px] md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Kvantoriym10}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="order-9 md:order-10 col-span-4">
          <div className="md:min-h-[132rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Дизайн-решения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-0">
                  Архитектурно-планировочное
                </h3>
                <div className="col-span-2 flex flex-col gap-2">
                  <p className=" subtitle">
                    Решение основано на четком функциональном зонировании
                    территории, начиная с выделения входной группы со стороны
                    главного фасада здания
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2 pb-3 md:pb-0 ">Ландшафтный дизайн</h3>
                <p className="col-span-2 subtitle">
                  Ландшафтный дизайн реализует принцип непрерывного цветения,
                  обеспечивая декоративность клумб в течение всего сезона, и
                  формирует уединённые «зеленые комнаты» за счёт сочетания
                  плотных посадок и искусственного рельефа, что стало основой
                  атмосферы «Тайного сада»
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-6 px-4 md:px-0">
                <h3 className="col-span-2">
                  Малые архитектурные формы (МАФ) и Арт-объекты
                </h3>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className=" flex flex-col gap-3 md:gap-2">
                    <p className=" subtitle-bold">&quot;{"НУКЛОН"}&quot;</p>
                    <p className=" subtitle">
                      Ключевой паблик-арт объект из полированной нержавеющей
                      стали (символ нуклона/кварков), интерактивный,
                      калейдоскопический, привлекательный днём и ночью
                    </p>
                  </div>
                  <div className=" flex flex-col gap-3 md:gap-2">
                    <p className=" subtitle-bold">
                      &quot;{"Застывшие кванты"}&quot;
                    </p>
                    <p className=" subtitle">
                      Художественные элементы в &quot;{"Тайном саду"}&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-nowrap md:flex-wrap gap-1 overflow-x-auto md:overflow-visible px-4 md:px-0 hide-scrollbar">
                {[
                  "Навесы",
                  "Медиа-центр",
                  "Мастер Квант",
                  "Гамаки",
                  "Cкамейки",
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
        <div className="order-11 col-span-4 flex flex-col gap-2  mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Kvantoriym11}
            alt=""
            sizes="auto"
            className="h-[380px] md:h-[58.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="order-12 col-span-4 md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 px-4 md:px-0">
              <h2 className="col-span-2 pb-8 md:pb-6 flex flex-col">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 ">
                <p className="subtitle pb-1">Лера Нечаева</p>
                <p className="subtitle-sm pb-3 md:pb-4 text-[var(--color-gray)]">
                  Архитектор
                </p>
                <p className="subtitle pb-1">Анна Ефимова</p>
                <p className="subtitle-sm pb-3 md:pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
                <p className="subtitle pb-1">Александр Козлов</p>
                <p className="subtitle-sm pb-8 md:pb-4 text-[var(--color-gray)]">
                  Дизайнер
                </p>
              </div>

              <div className="col-span-2 pb-8 md:pb-0">
                <p className="subtitle text-[var(--color-gray)] pb-3 md:pb-1">
                  Участники согласований
                </p>
                <ul className="list-disc subtitle-sm pl-5 flex flex-col gap-2 md:gap-1">
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
                <p className="subtitle-sm text-[var(--color-gray)] pb-3 md:pb-4">
                  Архитектурно-проектная команда (предпроект, вовлечение)
                </p>
                <p className="subtitle pb-1">ООО «СК «Версаль»</p>
                <p className="subtitle-sm text-[var(--color-gray)] pb-3 md:pb-4">
                  Разработчик проектно-сметной документации
                </p>
                <p className="subtitle pb-1">
                  Администрация Калининского района Санкт-Петербурга
                </p>
                <p className="subtitle-sm text-[var(--color-gray)] pb-8 md:pb-0">
                  Государственный заказчик
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-black)] px-4 md:px-10 py-[52px] md:py-10 col-span-4 md:rounded-[var(--radius-sm)]">
              <h2 className="!text-white pb-4">Итог</h2>
              <ul className="!text-white flex flex-col gap-3 md:gap-2 list-disc subtitle pl-5 md:pl-0">
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
        <div className="relative w-full overflow-hidden pb-[56.25%] order-17 col-span-8 mb-6 md:rounded-[var(--radius-sm)]">
          <iframe
            src="https://dzen.ru/embed/oEUbhaGcKAAA?from_block=partner&from=zen&mute=1&autoplay=1&tv=0"
            title="Yandex Zen video"
            allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
            className="absolute left-0 top-0 h-full w-full"
            allowFullScreen
          ></iframe>
        </div>
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases/sheremeteva`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">Предыдущий проект</button>
        </Link>
        <Link
          href={`/cases/temporal`}
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
