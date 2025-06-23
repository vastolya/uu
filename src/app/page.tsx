"use client";

import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import LogoBigUU from "../../public/logoBigUU.png";
import { Accordion } from "@/components/ui/Accordion";

import { WorkStages } from "@/components/sections/WorkStages";
import LogoSlider from "@/components/sections/LogoSlider";

export default function Home() {
  return (
    <>
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

      <section className="w-full h-[29.75rem] relative">
        <Image
          src="/imageHero.png"
          alt="image hero"
          fill
          sizes="auto"
          priority
          className="object-cover"
        />
      </section>

      <PageSection className="px-5 py-20">
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
          <span className="flex justify-end ">
            <Button text="Подробнее" variant="secondary" />
          </span>
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

      <LogoSlider />

      <PageSection>
        <WorkStages />
      </PageSection>

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

      {/* <h1>H1 — NeutralFace / 100px / 400 / 96% / 0%</h1>
      <h2>H2 — NeutralFace / 49px / 400 / 115% / 0%</h2>
      <h3>H3 — Inter / 28px / 700 / 116% / -2%</h3>
      <p className="subtitle">Subtitle — Inter / 16px / 500 / 128% / 0%</p>
      <p className="subtitle-bold">
        Subtitle Bold — Inter / 16px / 700 / 128% / 0%
      </p>
      <p className="subtitle-sm">
        Subtitle Small — Inter / 12px / 400 / 133% / 0%
      </p>
      <button className="cursor-pointer">
        Button — Inter / 16px / 500 / 150% / 0%
      </button> */}
    </>
  );
}
