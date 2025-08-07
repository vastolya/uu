import Image from "next/image";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { urlFor } from "../sanity/image";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { WorkStages } from "@/components/sections/WorkStages";
import LogoSlider from "@/components/sections/LogoSlider";
import IconArrowRight from "@/components/icons/IconArrowRight";
import Directions from "@/components/sections/Directions";
import Form from "@/components/ui/Form";
import ParallaxSection from "@/components/sections/ParallaxSection";
import HomeClient from "@/components/HomeClient";
import LogoBigUU from "@public/logoBigUU.webp";
import ImageArrow from "@public/imageArrow.webp";
import ImageCase1 from "@public/imageCase1.webp";
import ImageCase2 from "@public/imageCase2.webp";
import ImageCase3 from "@public/imageCase3.webp";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, image, slug, publishedAt, type, tag}`;

const options = { next: { revalidate: 60 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <HomeClient>
      <div className="h-[56px] md:h-20" id="top"></div>

      <PageSection
        className={`md:pt-20 md:pb-9 py-5 px-4 flex flex-col`}
        id="hero"
      >
        <h1 className="col-span-6 pb-2 md:pb-0">
          <span className="text-[var(--color-primary)]">Из замысла —</span>
          <br />в архитектурную реальность
        </h1>
        <p className="subtitle col-span-2 flex flex-col justify-end">
          Архитектура, где каждая линия несёт эмоцию, а каждый проект становится
          историей
        </p>
      </PageSection>

      {/* Паралакс */}
      <ParallaxSection />

      {/* О нас */}
      <PageSection
        className="py-14 md:px-5 md:py-20 border-b-2 border-[var(--color-border-gray)] flex flex-col"
        id="about"
      >
        <p className="subtitle text-[var(--color-gray)] pb-2 col-span-8 px-4 md:px-0">
          О нас
        </p>
        <h2 className="col-span-8 pb-8 md:pb-10 px-4 md:px-0">
          Две страсти — архитектура и урбанистика
        </h2>
        <div className="col-span-4 relative h-[240px] md:h-[32rem] ">
          <Image
            src="/imageTeam.webp"
            alt="image team"
            fill
            sizes="auto"
            className="object-cover md:rounded-[var(--radius-sm)] -z-10 "
          />
        </div>
        <div className="col-span-4 flex flex-col justify-between pt-3 md:pt-0 px-4 md:px-0">
          <span>
            <p className="subtitle pb-2">
              Создаём пространства выражающие индивидуальность, вдохновляющие и
              выводящие из «тени» шаблонных решений. Превращаем ценности
              клиентов в осязаемую реальность, где каждая линия, свет и форма
              работают на эмоции
            </p>
            <p className="subtitle-bold pb-8 md:pb-0">
              Работаем с частными домами, коммерческими объектами и городскими
              пространствами
            </p>
          </span>
          <div className="flex md:justify-end ">
            <Link href="/about" className="w-full md:w-[9.125rem] ">
              <Button text="Подробнее" variant="secondary" />
            </Link>
          </div>
        </div>
        <div className="col-span-8 pt-[52px] md:pt-20 flex flex-col md:flex-row px-4 md:px-0 gap-8 md:gap-0">
          <span className="flex-1 flex-col">
            <h2 className="pb-2 flex items-center md:justify-center">8 ЛЕТ</h2>
            <p className="subtitle flex items-center md:justify-center !font-bold md:!font-normal">
              экспертизы в полном цикле
            </p>
          </span>
          <span className="flex-1">
            <h2 className="pb-2 flex items-center md:justify-center">
              ПАРТНЕРСТВО
            </h2>
            <p className="subtitle flex items-center md:justify-center !font-bold md:!font-normal">
              со строительной компанией
            </p>
          </span>
          <span className="flex-1">
            <h2 className="pb-2 flex items-center md:justify-center">50+</h2>
            <p className="subtitle flex items-center md:justify-center !font-bold md:!font-normal">
              успешных проектов
            </p>
          </span>
        </div>
      </PageSection>

      {/* Кейсы */}
      <PageSection
        className="px-4 md:px-5 py-[52px] md:py-20 md:gap-y-10 flex flex-col"
        id="cases"
      >
        <div className="col-span-8 flex justify-between pb-12 md:pb-0">
          <p className="subtitle flex items-center text-[var(--color-gray)] md:pb-2 ">
            Кейсы
          </p>
          <button className="flex items-center gap-2 hover:text-[var(--color-primary)]">
            <IconArrowRight />
            <Link href="/cases">Все кейсы </Link>
          </button>
        </div>

        <div className="col-span-4 row-span-2 relative h-[216px] md:min-h-[57.5rem] overflow-hidden rounded-[var(--radius-sm)]">
          <Image
            src={ImageCase1}
            alt=""
            fill
            sizes="auto"
            className="object-cover -z-10"
          />
        </div>

        <div className="col-span-3 flex flex-col justify-between h-full mt-3 md:mt-0">
          <h3 className="pb-1 md:pb-0">
            Не&nbsp;только&nbsp;проектирование,&nbsp;но&nbsp;и&nbsp;весь цикл —
            от чертежа до запуска объекта
          </h3>
          <p className="subtitle pb-3 md:pb-0">
            Мы обеспечиваем и контролируем каждый этап, чтобы ваш проект стал
            идеальным от концепции до последнего гвоздя
          </p>
        </div>

        <div className="flex md:flex-col items-center md:items-end h-full gap-y-[324px]">
          <p className="subtitle text-[var(--color-gray)]">1/4</p>

          <Button text="Кейс" variant="secondary" />
        </div>

        <div className="hidden md:block col-span-2  min-h-[447px] w-full relative">
          <Image src={ImageCase2} alt="" fill sizes="auto />" />
        </div>
        <div className="hidden md:block col-span-2 min-h-[447px] w-full relative">
          <Image src={ImageCase3} alt="" fill sizes="auto" />
        </div>
      </PageSection>

      {/* Направления */}
      <section id="direction">
        <Directions />
      </section>

      {/* Форма */}
      <PageSection
        className="px-4 md:px-5 py-[52px] md:py-20 flex flex-col"
        id="form"
      >
        <div className="col-span-4 justify-between flex flex-col">
          <h2 className="pb-8 md:pb-0">
            Расскажите о вашем проекте —{" "}
            <span className="text-[var(--color-primary)]">
              мы любим сложные задачи!
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

      <LogoSlider />

      {/* Этапы */}
      <PageSection className="flex flex-col" id="steps">
        <WorkStages />
      </PageSection>

      {/* Блог */}
      <div className="bg-[var(--color-border-gray)]" id="blog">
        <PageSection className="md:py-20 py-[52px] px-4 flex flex-col">
          <p className="subtitle text-[var(--color-gray)] pb-2">
            Новости и статьи
          </p>
          <h2 className="col-span-8 pb-8 md:pb-10">
            Идеи, которые меняют города
          </h2>

          {posts.slice(0, 3).map((item) => (
            <Link
              key={item._id}
              href={`/news/${item.slug.current}`}
              className={`flex flex-col ${item.type === "1" ? "col-span-4" : "col-span-2"} pb-5 md:pb-0`}
            >
              <div
                className={`relative overflow-hidden rounded-[var(--radius-sm)]  ${item.type === "2" ? "h-[412px] md:h-[332px]" : "h-[412px] md:h-[476px]"}`}
              >
                <Image
                  src={
                    item.image ? urlFor(item.image).url() : "/placeholder.webp"
                  }
                  alt={item.title || ""}
                  fill
                  sizes="auto"
                  className={`
              object-cover hover:scale-120 hover:grayscale transition-all duration-300
             
              `}
                />
              </div>

              <p className="subtitle-bold pt-2 pb-1">{item.title}</p>
              <p className="subtitle text-[var(--color-gray)]">{item.tag}</p>
            </Link>
          ))}
        </PageSection>
      </div>

      {/* Форма 2 */}
      <PageSection
        className="px-4 md:pt-20 md:py-0 py-[52px] flex flex-col"
        id="form2"
      >
        <h2 className="col-span-4">Давайте создадим нечто уникальное</h2>
        <Form className="col-span-4" />
      </PageSection>

      {/* ЭФ АЙ КЬЮ */}
      <PageSection id="faq" className="flex flex-col pb-[52px] md:pb-0">
        <div className="col-span-3 relative mb-8 md:my-[2.75rem] md:h-[23rem] flex md:justify-start items-start">
          <Image
            src={LogoBigUU}
            alt=""
            fill
            sizes="auto"
            className="object-contain object-left hidden md:block"
          />
          <h2 className="md:z-[1] md:pt-9 px-4 md:px-0 ">FAQ</h2>
        </div>
        <div className="col-start-5 col-span-4 my-auto ">
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
    </HomeClient>
  );
}
