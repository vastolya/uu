"use client";

import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import LogoBigUU from "../../public/logoBigUU.png";
import ImageArrow from "../../public/imageArrow.png";
import ImageBlog1 from "../../public/imageBlog1.png";
import ImageBlog2 from "../../public/imageBlog2.png";
import ImageBlog3 from "../../public/imageBlog3.png";
import { Accordion } from "@/components/ui/Accordion";
import ImageCase1 from "../../public/imageCase1.png";
import ImageCase2 from "../../public/imageCase2.png";
import ImageCase3 from "../../public/imageCase3.png";

import { WorkStages } from "@/components/sections/WorkStages";
import LogoSlider from "@/components/sections/LogoSlider";
import IconArrowRight from "@/components/icons/IconArrowRight";
import Directions from "@/components/sections/Directions";
import Link from "next/link";
import HeroParallax from "@/components/sections/HeroParallax";

export default function Home() {
  return (
    <>
      <div className="h-20"></div>

      <PageSection className={`pt-20 pb-9`}>
        <h1 className="col-span-6">
          <span className="text-[var(--color-primary)]">Из замысла — </span>
          в архитектурную реальность
        </h1>
        <p className="subtitle col-span-2 flex flex-col justify-end">
          Архитектура, где каждая линия несёт эмоцию, а каждый проект становится
          историей
        </p>
      </PageSection>

      {/* Картинка */}
      <section className="w-full h-[29.75rem] relative">
        <Image
          src="/imageHero.png"
          alt="image hero"
          fill
          sizes="auto"
          className="object-cover"
        />
      </section>

      {/* О нас */}
      <PageSection className="px-5 py-20 ">
        <p className="subtitle text-[var(--color-gray)] pb-2 col-span-8">
          О нас
        </p>
        <h2 className="col-span-8 pb-10">
          Две страсти — архитектура и урбанистика
        </h2>
        <div className="col-span-4 relative h-[32rem]">
          <Image
            src="/imageTeam.jpg"
            alt="image team"
            fill
            sizes="auto"
            className="object-cover rounded-[var(--radius-sm)]"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-between ">
          <span>
            <p className="subtitle pb-2">
              Создаём пространства выражающие индивидуальность, вдохновляющие
              и выводящие из «тени» шаблонных решений. Превращаем ценности
              клиентов в осязаемую реальность, где каждая линия, свет и форма
              работают на эмоции
            </p>
            <p className="subtitle-bold">
              Работаем с частными домами, коммерческими объектами и городскими
              пространствами
            </p>
          </span>
          <Link href="/about" className="flex justify-end ">
            <Button text="Подробнее" variant="secondary" />
          </Link>
        </div>
        <div className="col-span-8 pt-20 flex">
          <span className="flex-1 flex-col">
            <h2 className="pb-2 flex items-center justify-center">8 ЛЕТ</h2>
            <p className="subtitle flex items-center justify-center">
              экспертизы в полном цикле
            </p>
          </span>
          <span className="flex-1">
            <h2 className="pb-2 flex items-center justify-center">
              ПАРТНЕРСТВО
            </h2>
            <p className="subtitle flex items-center justify-center">
              со строительной компанией
            </p>
          </span>
          <span className="flex-1">
            <h2 className="pb-2 flex items-center justify-center">50+</h2>
            <p className="subtitle flex items-center justify-center">
              успешных проектов
            </p>
          </span>
        </div>
      </PageSection>

      {/* Кейсы */}
      <PageSection className="px-5 py-20 gap-y-10">
        <div className="col-span-8 flex justify-between">
          <p className="subtitle text-[var(--color-gray)] pb-2">Кейсы</p>
          <button className="flex items-center gap-2 hover:text-[var(--color-primary)]">
            <IconArrowRight />
            <Link href="/cases">Все кейсы </Link>
          </button>
        </div>

        <div className="col-span-4 row-span-2 relative">
          <Image src={ImageCase1} alt="" height={920} sizes="auto" />
        </div>

        <div className="col-span-3 flex flex-col justify-between h-full">
          <h3>
            Не&nbsp;только&nbsp;проектирование,&nbsp;но&nbsp;и&nbsp;весь цикл —
            от чертежа до запуска объекта
          </h3>
          <p className="subtitle">
            Мы обеспечиваем и контролируем каждый этап, чтобы ваш проект стал
            идеальным от концепции до последнего гвоздя
          </p>
        </div>

        <div className="flex flex-col  items-end h-full gap-y-[324px]">
          <p className="subtitle text-[var(--color-gray)]">1/4</p>

          <Button text="Кейс" variant="secondary" />
        </div>

        <div className="col-span-2  h-full w-full relative">
          <Image src={ImageCase2} alt="" height={476} sizes="auto />" />
        </div>
        <div className="col-span-2 h-full w-full relative">
          <Image src={ImageCase3} alt="" sizes="auto" height={476} />
        </div>
      </PageSection>

      {/* Направления */}
      <Directions />

      {/* Форма */}
      <PageSection className="px-5 py-20">
        <div className="col-span-4 justify-between flex flex-col">
          <h2>
            Расскажите о вашем проекте —{" "}
            <span className="text-[var(--color-primary)]">
              мы любим сложные задачи!
            </span>
          </h2>
          <Image src={ImageArrow} alt="" width={154} height={154} />
        </div>
        <form
          className="col-span-4 flex flex-col gap-6 subtitle"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="name" className="sr-only" />
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="py-3  placeholder:text-[var(--color-gray)] border-b-2 border-[var(--color-border-gray)] w-full"
          />
          <label htmlFor="phone" className="sr-only" />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="py-3  placeholder:text-[var(--color-gray)] border-b-2 border-[var(--color-border-gray)] w-full"
          />
          <div className="flex flex-col">
            <label htmlFor="comment" className="text-[var(--color-gray)] pb-1">
              Краткое описание идеи
            </label>
            <textarea
              name="comment"
              id="comment"
              className="border-2 border-[var(--color-border-gray)] placeholder:text-[#D2D2D0] py-4 px-3 text-[var(--color-black)] rounded-[var(--radius-sm)] min-h-20"
              placeholder="Введите текст"
            />
          </div>
          <div className="flex-col flex gap-2">
            <label className="flex gap-2 cursor-pointer text-[var(--color-gray)]">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[var(--color-black)] rounded-[var(--radius-sm)]"
              />

              <span>
                Я принимаю условия{" "}
                <a href="/privacy-policy" target="_blank" className="underline">
                  политики конфиденциальности
                </a>
              </span>
            </label>

            <Button text="Начать проект" />
          </div>
        </form>
      </PageSection>

      <LogoSlider />

      {/* Этапы */}
      <PageSection>
        <WorkStages />
      </PageSection>

      {/* Блог */}
      <div className="bg-[var(--color-border-gray)]">
        <PageSection className="py-20">
          <p className="subtitle text-[var(--color-gray)] pb-2">
            Новости и статьи
          </p>
          <h2 className="col-span-8 pb-10">Идеи, которые меняют города</h2>
          <div className="col-span-4">
            <Image
              src={ImageBlog1}
              alt=""
              height={496}
              width={688}
              className="pb-2"
            />
            <p className="subtitle-bold">Архитектура без границ</p>
            <p className="subtitle text-[var(--color-gray)]">События</p>
          </div>
          <div className="col-span-2">
            <Image
              src={ImageBlog2}
              alt=""
              height={332}
              width={332}
              className="pb-2"
            />
            <p className="subtitle-bold">
              Как инклюзивный дизайн меняет общественные пространства?
            </p>
            <p className="subtitle text-[var(--color-gray)]">Иновации</p>
          </div>
          <div className="col-span-2">
            <Image
              src={ImageBlog3}
              alt=""
              height={476}
              width={332}
              className="pb-2"
            />
            <p className="subtitle-bold">Превращение промзоны в арт-кластер</p>
            <p className="subtitle text-[var(--color-gray)]">Иновации</p>
          </div>
        </PageSection>
      </div>

      {/* Форма 2 */}
      <PageSection className="px-5 pt-20">
        <h2 className="col-span-4">Давайте создадим нечто уникальное</h2>
        <form
          className="col-span-4 flex flex-col gap-6 subtitle"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="name" className="sr-only" />
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="py-3  placeholder:text-[var(--color-gray)] border-b-2 border-[var(--color-border-gray)] w-full"
          />
          <label htmlFor="phone" className="sr-only" />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="py-3  placeholder:text-[var(--color-gray)] border-b-2 border-[var(--color-border-gray)] w-full"
          />
          <div className="flex flex-col">
            <label htmlFor="comment" className="text-[var(--color-gray)] pb-1">
              Краткое описание идеи
            </label>
            <textarea
              name="comment"
              id="comment"
              className="border-2 border-[var(--color-border-gray)] placeholder:text-[#D2D2D0] py-4 px-3 text-[var(--color-black)] rounded-[var(--radius-sm)] min-h-20"
              placeholder="Введите текст"
            />
          </div>
          <div className="flex-col flex gap-2">
            <label className="flex gap-2 cursor-pointer text-[var(--color-gray)]">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[var(--color-black)] rounded-[var(--radius-sm)]"
              />

              <span>
                Я принимаю условия{" "}
                <a href="/privacy-policy" target="_blank" className="underline">
                  политики конфиденциальности
                </a>
              </span>
            </label>

            <Button text="Начать проект" />
          </div>
        </form>
      </PageSection>

      {/* ЭФ АЙ КЬЮ */}
      <PageSection>
        <div className="col-span-3 relative my-11 h-[368px] flex justify-start items-start">
          <Image
            src={LogoBigUU}
            alt=""
            fill
            sizes="auto"
            className="object-contain object-left"
          />
          <h2 className="z-[1] pt-9">FAQ</h2>
        </div>
        <div className="col-start-5 col-span-4 my-auto">
          <Accordion
            items={[
              {
                title: "Сколько стоит проект «под ключ»?",
                content:
                  "Итоговая сумма может варьироваться от нескольких сотен тысяч до <br/> нескольких миллионов рублей в зависимости от объема и уровня отделки",
              },
              {
                title: "Можно ли заказать только дизайн?",
                content:
                  "Да, мы предлагаем услугу только дизайна без реализации проекта.",
              },
              {
                title: "Как вы гарантируете сроки?",
                content:
                  "Мы подписываем договор с четким таймлайном, который фиксирует этапы и дедлайны.",
              },
            ]}
          />
        </div>
      </PageSection>
    </>
  );
}
