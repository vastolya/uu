import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

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

      <h1>H1 — NeutralFace / 100px / 400 / 96% / 0%</h1>
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
      </button>
    </>
  );
}
