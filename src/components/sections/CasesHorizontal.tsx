"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useKeenSlider, type KeenSliderInstance } from "keen-slider/react";

import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import IconArrowRight from "@/components/icons/IconArrowRight";

type Slide = {
  big: string;
  small1: string;
  small2: string;
  title: string;
  text: string;
  href: string;
};

export default function CasesHorizontal() {
  const slides: Slide[] = useMemo(
    () => [
      {
        big: "/sheremeteva1.webp",
        small1: "/sheremeteva2.webp",
        small2: "/sheremeteva4.webp",
        title:
          "Не\u00A0только проектирование,\u00A0но\u00A0и\u00A0весь цикл — от чертежа до запуска объекта",
        text: "Мы обеспечиваем и контролируем каждый этап, чтобы ваш проект стал идеальным от концепции до последнего гвоздя",
        href: "/cases/sheremeteva",
      },
      {
        big: "/kvantoriym1.webp",
        small1: "/kvantoriym2.webp",
        small2: "/kvantoriym4.webp",
        title: "Городские общественные пространства",
        text: "Функциональные сценарии, читаемые маршруты, визуальная идентичность и контроль реализации.",
        href: "/cases/kvantoriym",
      },
      {
        big: "/temporal1.webp",
        small1: "/temporal2.webp",
        small2: "/temporal4.webp",
        title: "Интерьеры коммерческих пространств",
        text: "Пешеходные связи, освещение, озеленение, посадочные места и навигация, согласованные в единую систему.",
        href: "/cases/temporal",
      },
      {
        big: "/flat1.webp",
        small1: "/flat2.webp",
        small2: "/flat4.webp",
        title: "Частные дома и резиденции",
        text: "Архитектура и интерьеры, отражающие индивидуальность владельца, с контролем стройки до ввода.",
        href: "/cases/flat",
      },
    ],
    []
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const slideInnerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const setSlideInnerRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      slideInnerRefs.current[i] = el;
    },
    []
  );

  const [containerH, setContainerH] = useState<number | undefined>(undefined);
  const heightObserverRef = useRef<ResizeObserver | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 0 },
    mode: "snap",
    rubberband: false,
    renderMode: "precision",
    defaultAnimation: {
      duration: 450,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    },
    created() {
      observeCurrentSlide();
    },
    slideChanged() {
      observeCurrentSlide();
    },
  });

  const observeCurrentSlide = useCallback(() => {
    const inst = slider.current;
    const idx = inst ? inst.track.details.rel : 0;
    const el = slideInnerRefs.current[idx];
    if (!el) return;

    if (heightObserverRef.current) {
      heightObserverRef.current.disconnect();
      heightObserverRef.current = null;
    }

    const ro = new ResizeObserver(() => {
      const h = el.scrollHeight;
      if (h > 0) setContainerH(h);
    });
    ro.observe(el);
    heightObserverRef.current = ro;

    const h = el.scrollHeight;
    if (h > 0) setContainerH(h);
  }, [slider]);

  useEffect(() => {
    const onResize = () => observeCurrentSlide();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [observeCurrentSlide]);

  useEffect(() => {
    let wheelLock = false;
    let wheelTimer: number | undefined;

    const unlockLater = () => {
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        wheelLock = false;
      }, 120);
    };

    const onWheel = (e: WheelEvent) => {
      const sec = sectionRef.current;
      const inst: KeenSliderInstance | null = slider.current ?? null;
      if (!sec || !inst) return;

      const r = sec.getBoundingClientRect();
      const vpH = window.innerHeight;
      const fullyInside = r.top >= -1 && r.bottom <= vpH + 1;
      const intersects = r.top < vpH && r.bottom > 0;

      const horizIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const dir = horizIntent
        ? e.deltaX > 0
          ? 1
          : e.deltaX < 0
            ? -1
            : 0
        : e.deltaY > 0
          ? 1
          : e.deltaY < 0
            ? -1
            : 0;
      if (!dir) return;

      if (intersects && !fullyInside) {
        const enteringDown = dir > 0 && r.top > 0;
        const enteringUp = dir < 0 && r.bottom < vpH;
        if (enteringDown || enteringUp) {
          e.preventDefault();
          const targetTop = window.scrollY + r.top + r.height / 2 - vpH / 2;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
        }
        return;
      }

      if (fullyInside) {
        const { rel, slides: s } = inst.track.details;
        const last = s.length - 1;
        const canHoriz = (dir > 0 && rel < last) || (dir < 0 && rel > 0);

        if (canHoriz) {
          e.preventDefault();
          if (!wheelLock && !inst.animator.active) {
            wheelLock = true;
            if (dir > 0) {
              inst.next();
            } else {
              inst.prev();
            }
            unlockLater();
          }
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [slider]);

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="relative [touch-action:pan-y]"
    >
      <div
        ref={headerRef}
        className="z-[2] px-4 md:px-5 pt-[52px] md:pt-20 pb-[52px] md:pb-10 md:max-w-[90rem] mx-auto"
      >
        <div className="mx-auto flex flex-col md:grid md:grid-cols-8 gap-6">
          <div className="col-span-8 flex justify-between pb-0">
            <p className="subtitle flex items-center text-[var(--color-gray)]">
              Кейсы
            </p>
            <Link
              href="/cases"
              className="flex items-center gap-2 hover:text-[var(--color-primary)]"
            >
              <IconArrowRight />
              Все кейсы
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="keen-slider overflow-hidden mb-20"
        style={containerH ? { height: `${containerH}px` } : undefined}
        role="region"
        aria-label="Слайдер кейсов"
      >
        {slides.map((s, i) => (
          <div key={i} className="keen-slider__slide">
            <div ref={(el) => setSlideInnerRef(el, i)} className="w-screen">
              <PageSection className="px-4 md:px-5 md:gap-y-6 flex flex-col md:grid md:grid-cols-8 gap-6">
                <div className="col-span-4 relative overflow-hidden rounded-[var(--radius-sm)] min-h-[256px] md:min-h-[37.5rem]">
                  <Image
                    src={s.big}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover -z-10"
                    priority={i === 0}
                  />
                </div>

                <div className="col-span-4 grid grid-rows-[auto_auto] md:gap-y-6">
                  <div className="md:grid md:grid-cols-4 md:gap-6 h-[180px] md:h-[17.5rem] flex flex-col justify-between">
                    <div className="col-span-3 flex flex-col justify-between md:h-full">
                      <h3 className="pb-1 md:pb-0">{s.title}</h3>
                      <p className="subtitle pb-3 md:pb-0">{s.text}</p>
                    </div>
                    <div className="col-span-1 flex md:flex-col justify-between items-center md:items-end">
                      <p
                        className="subtitle text-[var(--color-gray)]"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        {i + 1}/{slides.length}
                      </p>
                      <Link href={s.href} className="w-fit md:w-full">
                        <Button text="Кейс" variant="secondary" />
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:grid grid-cols-2 gap-6">
                    <div className="relative w-full h-[23.5rem] overflow-hidden rounded-[var(--radius-sm)]">
                      <Image
                        src={s.small1}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-full h-[23.5rem] overflow-hidden rounded-[var(--radius-sm)]">
                      <Image
                        src={s.small2}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </PageSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
