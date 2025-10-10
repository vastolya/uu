"use client";

import { PageSection } from "@/components/layout/PageSection";
import Sheremeteva1 from "@public/sheremeteva1.webp";
import Sheremeteva2 from "@public/sheremeteva2.webp";
import Sheremeteva3 from "@public/sheremeteva3.webp";
import Sheremeteva4 from "@public/sheremeteva4.webp";
import Sheremeteva5 from "@public/sheremeteva5.webp";
import Sheremeteva6 from "@public/sheremeteva6.webp";
import Sheremeteva7 from "@public/sheremeteva7.webp";
import Sheremeteva8 from "@public/sheremeteva8.webp";
import Sheremeteva9 from "@public/sheremeteva9.webp";
import Sheremeteva10 from "@public/sheremeteva10.webp";
import Sheremeteva11 from "@public/sheremeteva11.webp";
import Sheremeteva12 from "@public/sheremeteva12.webp";
import Sheremeteva13 from "@public/sheremeteva13.webp";
import Sheremeteva14 from "@public/sheremeteva14.webp";
import Sheremeteva15 from "@public/sheremeteva15.webp";
import Sheremeteva16 from "@public/sheremeteva16.webp";
import Sheremeteva17 from "@public/sheremeteva17.webp";
import Sheremeteva18 from "@public/sheremeteva18.webp";
import Sheremeteva19 from "@public/sheremeteva19.webp";
import Sheremeteva20 from "@public/sheremeteva20.webp";
import Sheremeteva21 from "@public/sheremeteva21.webp";
import Sheremeteva22 from "@public/sheremeteva22.webp";
import Sheremeteva23 from "@public/sheremeteva23.webp";
import Sheremeteva24 from "@public/sheremeteva24.webp";
import Sheremeteva25 from "@public/sheremeteva25.webp";
import Sheremeteva26 from "@public/sheremeteva26.webp";
import Sheremeteva27 from "@public/sheremeteva27.webp";
import Sheremeteva28 from "@public/sheremeteva28.webp";

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
        title="Парка Шереметева (Юрино, Марий Эл)"
        description="Реконструкция: 38.92 га"
        threshold={280}
      />
      <div className="h-14 md:h-20" />
      <PageSection className="flex flex-col">
        <p className="pt-10 pb-2 col-span-8 text-[var(--color-gray)] subtitle hidden md:flex">
          (Юрино, Марий Эл)
        </p>

        <h1 className=" col-span-8 px-4 md:px-0 md:pb-10 py-5 md:py-0">
          парк Шереметева
        </h1>

        <div className="order-2 md:order-1 md:col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva1}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva2}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva3}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva4}
            alt=""
            sizes="auto"
            className="h-56 md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-1 md:order-2 md:col-span-4 flex flex-col ">
          <div className="md:min-h-[142rem] mb-8 md:mb-[12.5rem]">
            <section className="md:sticky md:top-20">
              <div className="hidden md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto">Объект</p>
                <p className="col-span-2 text-[var(--color-gray)]">
                  Парка Шереметева
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-0">
                  Локация
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Юрино, Марий Эл
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto  pb-2 md:pb-0 px-4 md:px-0">
                  Тип услуги
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Реконструкция
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto  pb-2 md:pb-0 px-4 md:px-0">
                  Кадастровые данные
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Участок 38.92 га
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)]">
                <p className="col-span-2 my-auto  pb-2 md:pb-0 px-4 md:px-0">
                  Разрешенное использование
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Раазмещение комплекса «Юринский замок и усадьба Шереметевых»
                </p>
              </div>

              <p className="subtitle-bold  pt-4 md:pt-6 pb-3 md:pb-4 px-4 md:px-0">
                Объекты капитального строительства
              </p>

              <div className="flex flex-nowrap md:flex-wrap gap-1 overflow-x-auto md:overflow-visible px-4 md:px-0 hide-scrollbar pb-5 md:pb-[13.75rem]">
                {[
                  "Замок Шереметева (1870 г., 4 438.9 м²)",
                  "Фрагменты крепостной стены",
                  "Здание электростанции",
                  "Ледник",
                  "Инженерные сети (теплотрассы, водопровод)",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs shrink-0"
                  >
                    {item}
                  </p>
                ))}
              </div>

              <p className="subtitle pb-3 md:pb-4 px-4 md:px-0">
                Юрино – первый электрифицированный поселок Имперской России (XIX
                в.). Здесь Шереметевы создали художественную иллюминацию замка,
                что стало ключом к нашему решению
              </p>
              <h3 className="px-4 md:px-0">
                «Мы не реставрируем прошлое – мы возрождаем дух новаторства. Где
                в 1880 г. горели диковинные фонари, в 2024 г. зажгутся
                нейросетевые светлячки»
              </h3>
            </section>
          </div>
        </div>

        <div className="order-4 md:order-3 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva5}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva6}
            alt=""
            sizes="auto"
            className="h-56 md:h-[36rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva7}
            alt=""
            sizes="auto"
            className="h-56 md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva8}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva9}
            alt=""
            sizes="auto"
            className="h-56 md:h-[27.5rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-3 md:order-4 col-span-4">
          <div className="md:min-h-[174.25rem] md:mb-[12.5rem]">
            <section className="md:sticky md:top-20">
              <h2 className="flex md:hidden !text-[var(--color-gray)] pb-8 md:pb-10 px-4">
                Контекст
              </h2>
              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Градостроительный контекст
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Зоны охраны ОКН
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Подзоны 03-1, 03-2; запрет на новое строительство (кроме
                  реставрации)
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-4">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Планировочные зоны
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  П33 (рекреация), B0 (водные объекты), O-1 (коммерция)
                </p>
              </div>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Историко-культурный потенциал
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Статус
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  ОКН регионального значения (парк разделен на регулярную и
                  пейзажную части)
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border md:mb-4">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Утраченные элементы
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Скульптуры, цветники, фонтан, историческая сцена
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-4">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Сохранилось
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Липовые аллеи, партер у южного фасада (частично затоплен
                  Волгой)
                </p>
              </div>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Инфраструктура
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Транспорт
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Причал маломерных судов (планируется расширение), остановка
                  общественного транспорта
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border md:mb-4">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Гостеприимство
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  3 гостиницы (50+ мест), 5 кафе (20-30 мест) – недостаточно для
                  турпотока
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 subtitle mb-4 md:mb-0">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Окружение
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  97 памятников, сосновый бор, берег Волги
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-6 md:order-5 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva10}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva11}
            alt=""
            sizes="auto"
            className="h-56 md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-5 md:order-6 col-span-4">
          <div className="md:min-h-[81.5rem] md:mb-[12.5rem]">
            <section className="md:sticky md:top-20">
              <h2 className="!text-[var(--color-gray)] pb-10 px-4 md:px-0">
                Ограничения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6">
                <h3 className="col-span-2 px-4 md:px-0 pb-3 md:pb-0">
                  Парк Шереметева — жемчужина Поволжья, но сегодня соседствует с
                  запустением
                </h3>
                <div className="col-span-2">
                  <p className="subtitle pb-4 px-4 md:px-0">
                    Местные жители используют его лишь как транзитный путь к
                    пляжу, а инфраструктура устарела. Заброшенные аллеи стали
                    «проходными дворами», а фонтан-сердце сада молчит
                  </p>
                  <p className="subtitle-bold px-4 md:px-0 pb-3 md:pb-2">
                    Эти проблемы — скрытый потенциал:
                  </p>
                  <p className="subtitle px-4 md:px-0 pb-8 md:pb-0">
                    Превратим «дорогу к воде» в место силы, где гостей встретят
                    световые инсталляции и AR-гиды
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-8 md:order-7 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva12}
            alt=""
            sizes="auto"
            className="h-56 md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva13}
            alt=""
            sizes="auto"
            className="h-56 md:h-[51.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-7 md:order-8 col-span-4">
          <div className="md:min-h-[103rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Проектные предложения
              </h2>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-8 md:pb-10 px-4 md:px-0">
                <div className="col-span-2 ">
                  <h3 className="pb-3 md:pb-0">Три цели — одно будущее</h3>
                </div>

                <p className="col-span-2 subtitle">
                  Интеграция в круизный маршрут «Волжская жемчужина» превратит
                  парк в магнит для водного туризма — с причалом для лайнеров,
                  едиными билетами и ночной иллюминацией замка, видимой с Волги,
                  как при Шереметевых в XIX веке.
                </p>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-x-6 md:pb-10 px-4 md:px-0">
                <div className="col-span-2 ">
                  <h3 className="pb-3 md:pb-2">Итог</h3>
                  <p className="subtitle text-[var(--color-gray)] p-2 bg-[var(--color-border-gray)] rounded-xs hidden md:flex">
                    Место притяжения регионального значения
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="subtitle ">
                    Культурный хаб Марий Эл, где туристы слушают стихи
                    AR-Пушкина, босыми ногами идут по тактильной тропе через
                    сосновый бор, а местные жители получают 70+ новых рабочих
                    мест
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="order-10 md:order-9 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva14}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva15}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva16}
            alt=""
            sizes="auto"
            className="h-[372px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva17}
            alt=""
            sizes="auto"
            className="h-56 md:h-[29.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-9 md:order-10 col-span-4">
          <div className="md:min-h-[140.75rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Дизайн-решения
              </h2>

              <p className="subtitle-bold px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Как обошли ограничения
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border ">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Запрет на фундаменты
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Цифровые двойники в AR (виртуальные статуи при наведении
                  камеры)
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-4">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Утраченные скульптуры
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  Вазы, картины — акценты индивидуальности без перегруза
                </p>
              </div>

              <p className="subtitle-bold px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Ключевые объекты
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Детская площадка «Фауна»
                </p>
                <p className="col-span-2 text-[var(--color-gray) px-4 md:px-0">
                  Полигональные олени/куницы – дань зверинцу Шереметевых
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 pt-4 subtitle ">
                <p className="col-span-2 my-auto px-4 md:px-2 pb-2 md:pb-0">
                  Ярмарка ремесел
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:px-0">
                  В зоне «Добрососедства» (марийская вышивка, мед)
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-12 md:order-11 col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva18}
            alt=""
            sizes="auto"
            className="h-[372px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva19}
            alt=""
            sizes="auto"
            className="h-[440px] md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva20}
            alt=""
            sizes="auto"
            className="h-56 md:h-[24.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva21}
            alt=""
            sizes="auto"
            className="h-56 md:h-[24.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva22}
            alt=""
            sizes="auto"
            className="h-[302px] md:h-[40.75rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva23}
            alt=""
            sizes="auto"
            className="h-56 md:h-[24.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva24}
            alt=""
            sizes="auto"
            className="h-[314px] md:h-[42.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-11 md:order-12 col-span-4">
          <div className="md:min-h-[258.75rem] mb-8 md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Инновационные технологии
              </h2>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Световой маршрут – наследник иллюминации XIX в.
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  «Светлячки»
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:pb-0">
                  500 сфер с swarm intelligence. Синхронизируют свет с пением
                  птиц. «Кричите – свет гаснет. Шепчите – ведет к соловьиной
                  горке»
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-4">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  «Дрейфующее дерево»
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:pb-0">
                  Тактильные инсталляции с вибрациями
                </p>
              </div>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                AR-маршрут «Лабиринты истории»
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  Как при Петре Шереметеве
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:pb-0">
                  Реконструкция иллюминации замка
                </p>
              </div>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4  subtitle mb-4">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  ИИ-гид «Пушкин»
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:pb-0">
                  Генерирует стихи о парке в реальном времени
                </p>
              </div>

              <p className="subtitle-bold px-4 md:px-2 py-4 bg-[var(--color-border-gray)] rounded-xs">
                Устойчивые решения
              </p>
              <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-[0.125rem] subtitle border-[var(--color-border-gray)] box-border">
                <p className="col-span-2 my-auto pb-2 md:pb-0 px-4 md:px-2">
                  «Динамо-карусель»
                </p>
                <p className="col-span-2 text-[var(--color-gray)] px-4 md:pb-0">
                  Дети вырабатывают энергию для подсветки (отсылка к
                  динамо-машине 1885 г.)
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-14 md:order-13  col-span-4 flex flex-col gap-2 mb-2 md:mb-[12.5rem]">
          <Image
            src={Sheremeteva25}
            alt=""
            sizes="auto"
            className="h-full md:h-[24.25rem] w-full object-contain md:object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva26}
            alt=""
            sizes="auto"
            className="h-56 md:h-[24.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
          <Image
            src={Sheremeteva27}
            alt=""
            sizes="auto"
            className="h-56 md:h-[24.25rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-13 md:order-14 col-span-4">
          <div className="md:min-h-[73.75rem] mb-[52px] md:mb-[12.5rem] ">
            <section className="sticky top-20 ">
              <h2 className="!text-[var(--color-gray)] pb-8 md:pb-10 px-4 md:px-0">
                Брендинг и айдентика
              </h2>

              <div className="p-4 md:p-6 bg-[#C55D44] text-white mb-5 md:mb-10">
                <h3 className="pb-3 md:pb-4">
                  «Здесь электричество придумали для красоты»
                </h3>
                <p className="subtitle">
                  «Парк Шереметева: новая страница в истории региона»
                </p>
              </div>

              <h3 className="px-4 md:px-0">
                «В XIX веке Шереметевы зажигали фонари, чтобы удивлять. В XXI
                веке мы дарим нейросети, чтобы вернуть чудо. Это машина времени,
                где прошлое финансирует будущее»
              </h3>
            </section>
          </div>
        </div>

        <div className="order-15  col-span-4 flex flex-col gap-2 mb-[52px] md:mb-[12.5rem]">
          <Image
            src={Sheremeteva28}
            alt=""
            sizes="auto"
            className="h-56 md:h-[50rem] w-full object-cover md:rounded-[var(--radius-sm)]"
          />
        </div>

        <div className="order-16  col-span-4 mb-[52px] md:mb-[12.5rem]">
          <section className="flex flex-col justify-between h-full">
            <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-[52px] md:pb-0">
              <h2 className="col-span-2 flex flex-col px-4 md:px-0">
                Проектная группа{" "}
                <span className="text-[var(--color-primary)]">Double U</span>
              </h2>
              <div className="col-span-2 pt-8 md:pt-2 px-4 md:px-0">
                <p className="subtitle pb-1">Лера Нечаева</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Стратегия сохранения «гения места»
                </p>
                <p className="subtitle pb-1">Анна Ефимова</p>
                <p className="subtitle-sm pb-4 text-[var(--color-gray)]">
                  Историческая адаптация МАФ
                </p>
                <p className="subtitle pb-1">Александр Козлов</p>
                <p className="subtitle-sm  text-[var(--color-gray)]">
                  Нейросетевые инсталляции
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--color-black)] px-4 md:px-10 py-[52px] md:py-10  col-span-4 md:rounded-[var(--radius-sm)] mb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 md:pb-0">
                  <h2 className="!text-white pb-4">Итог</h2>
                  <div className="text-[var(--color-gray)] bg-[var(--color-border-gray)] h-fit px-4 md:px-2 py-5 md:py-2 rounded-[var(--radius-sm)] subtitle">
                    Проект – эталон работы с ОКН
                  </div>
                </div>

                <ul className="!text-white flex flex-col gap-2 list-disc subtitle pb-4 px-4 md:px-0">
                  <li>
                    Юридическая виртуозность (все МАФ согласованы с Минкультом)
                  </li>
                  <li>
                    «Мы не сохраняем камни – мы возвращаем эмоции. Где
                    ИИ-соловей поет: &quot;Завтра будет прекраснее&quot;»
                  </li>
                </ul>

                <p className="text-white subtitle-bold ">
                  Цель к 2030 году вернуть парку статус «русского Версаля на
                  Волге»
                </p>
              </div>
              <h3 className="pb-2 px-4 md:px-0 text-center md:text-start">
                Архитекторы, которые слышат шепот истории
              </h3>
              <p className="px-4 md:px-0 text-center md:text-start text-[var(--color-gray)]">
                Проект реализуется с Правительством Марий Эл и программой
                «Культура России»
              </p>
            </div>
          </section>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl pb-[56.25%] order-17 col-span-8 mb-6 md:rounded-[var(--radius-sm)]">
          <iframe
            src="https://www.youtube.com/embed/yPdnkprv6yQ?autoplay=1&mute=1&loop=1&playlist=yPdnkprv6yQ&controls=0&modestbranding=1&rel=0"
            title="YouTube video"
            allow="autoplay; fullscreen"
            className="absolute left-0 top-0 h-full w-full"
          ></iframe>
        </div>
      </PageSection>

      <div className="flex justify-between md:max-w-[90rem] mx-auto px-5">
        <Link
          href={`/cases`}
          className=" flex items-center gap-2 cursor-pointer hover:text-[var(--color-primary)] transition-all duration-200 py-5"
        >
          <IconChevron className="rotate-270 h-[1rem]" />
          <button className="cursor-pointer">К портфолио</button>
        </Link>
        <Link
          href={`/cases/kvantoriym`}
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
