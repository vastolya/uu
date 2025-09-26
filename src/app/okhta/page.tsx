import { PageSection } from "@/components/layout/PageSection";
import OkhtaClient from "@components/OkhtaClient";
import Okhta1 from "@public/okhta1.webp";
import Okhta2 from "@public/okhta2.webp";
import Okhta3 from "@public/okhta3.webp";

export default function Page() {
  return (
    <>
      <div className="h-20" />
      <PageSection>
        <div className="py-10 col-span-8">
          <p className="pb-2 text-[var(--color-gray)]">(Санкт-Петербург)</p>
          <h1>набережная реки Охты</h1>
        </div>

        {/* ВЕСЬ блок ниже — фиксированной высоты, страница НЕ скроллится */}
        <div className="col-span-8 h-[calc(100dvh-5rem-2.5rem)] overflow-hidden">
          <div className="grid grid-cols-8 gap-6 h-full">
            <OkhtaClient
              images={[
                { src: Okhta1, className: "h-[688px]" },
                { src: Okhta2, className: "h-[476px]" },
                { src: Okhta3, className: "h-[820px]" },
              ]}
              right={[
                <section key="r1">
                  <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                    <p className="col-span-2">Год сдачи</p>
                    <p className="col-span-2 text-[var(--color-gray)]">2020</p>
                  </div>
                  <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                    <p className="col-span-2">Тип услуги</p>
                    <p className="col-span-2 text-[var(--color-gray)]">
                      Благоустройство
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                    <p className="col-span-2">Локация</p>
                    <p className="col-span-2 text-[var(--color-gray)]">
                      Помещение бывших конюшен
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-4 md:gap-x-6 py-4 border-b-2 subtitle border-[var(--color-border-gray)]">
                    <p className="col-span-2">Площадь земельного участка</p>
                    <p className="col-span-2 text-[var(--color-gray)]">
                      47253 кв. метров
                    </p>
                  </div>
                </section>,
                <section
                  key="r2"
                  className="p-6 lg:p-10 bg-white/80 backdrop-blur rounded-2xl shadow"
                >
                  <h3 className="text-2xl font-bold mb-4">222222222</h3>
                  <p>Пока во «вью» вторая.</p>
                </section>,
                <section
                  key="r3"
                  className="p-6 lg:p-10 bg-white/80 backdrop-blur rounded-2xl shadow"
                >
                  <h3 className="text-2xl font-bold mb-4">333333333</h3>
                  <p>И для третьей.</p>
                </section>,
              ]}
              activation={0.4} // линия активации внутри левого скролла
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}
