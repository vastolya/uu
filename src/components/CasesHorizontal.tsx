"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

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
        title: "Интерьеры коммерческих пространств",
        text: "Функциональные сценарии, читаемые маршруты, визуальная идентичность и контроль реализации.",
        href: "/cases/kvantoriym",
      },
      {
        big: "/temporal1.webp",
        small1: "/temporal2.webp",
        small2: "/temporal4.webp",
        title: "Городские общественные пространства",
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

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [headerH, setHeaderH] = useState(0);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeaderH(el.offsetHeight));
    ro.observe(el);
    setHeaderH(el.offsetHeight);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(slides.length - 1) * 100}vw`]
  );

  const animatingRef = useRef(false);
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const root = sectionRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const start = window.scrollY + rect.top;

      const vh = window.visualViewport?.height ?? window.innerHeight;

      const path = slides.length * vh - vh;
      if (path <= 0) return;

      const end = start + path;
      const y = window.scrollY;

      if (y < start || y > end) return;

      const dir = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      if (dir === 0) return;

      const raw = (y - start) / path;
      const idx = Math.round(raw * (slides.length - 1));

      if (idx <= 0 && dir < 0) return;
      if (idx >= slides.length - 1 && dir > 0) return;

      e.preventDefault();
      if (animatingRef.current) return;

      const next = Math.min(slides.length - 1, Math.max(0, idx + dir));
      const step = path / (slides.length - 1);
      const target = Math.round(start + next * step);

      animatingRef.current = true;
      window.scrollTo({ top: target, behavior: "smooth" });

      const onCheck = () => {
        if (Math.abs(window.scrollY - target) < 1) {
          animatingRef.current = false;
          window.removeEventListener("scroll", onCheck, true);
        }
      };
      window.addEventListener("scroll", onCheck, true);
      setTimeout(() => {
        animatingRef.current = false;
        window.removeEventListener("scroll", onCheck, true);
      }, 600);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [slides.length]);

  const fadeUp = { opacity: 0, y: 10 };
  const fadeUpIn = { opacity: 1, y: 0 };
  const tr = { duration: 0.3, ease: "easeInOut" as const };

  return (
    <section id="cases" ref={sectionRef} className="relative">
      <div style={{ height: `calc(${slides.length} * 100dvh)` }}>
        <div className="sticky top-0 h-[100dvh] overflow-hidden bg-[var(--color-app-bg,transparent)]">
          <motion.div
            ref={headerRef}
            initial={fadeUp}
            animate={fadeUpIn}
            transition={tr}
            className="z-[2] px-4 md:px-5 pt-20 pb-10 md:max-w-[90rem] mx-auto"
          >
            <div className="mx-auto grid grid-cols-8 gap-6">
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
          </motion.div>

          <motion.div
            style={{ x, height: `calc(100dvh - ${headerH}px)` }}
            className="flex will-change-transform"
          >
            <AnimatePresence>
              {slides.map((s, i) => (
                <motion.div
                  key={i}
                  className="w-screen h-full shrink-0"
                  initial={fadeUp}
                  whileInView={fadeUpIn}
                  viewport={{ amount: 0.4, once: true }}
                  transition={{ ...tr, delay: 0.04 }}
                >
                  <PageSection className="px-4 md:px-5 md:gap-y-10 flex flex-col h-full">
                    <motion.div
                      className="col-span-4 row-span-2 relative h-[60dvh] md:min-h-[57.5rem] overflow-hidden rounded-[var(--radius-sm)]"
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ amount: 0.4, once: true }}
                      transition={{ ...tr, delay: 0.08 }}
                    >
                      <Image
                        src={s.big}
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover -z-10"
                        priority={i === 0}
                      />
                    </motion.div>

                    <motion.div
                      className="col-span-3 flex flex-col justify-between h-full mt-3 md:mt-0"
                      initial={fadeUp}
                      whileInView={fadeUpIn}
                      viewport={{ amount: 0.4, once: true }}
                      transition={{ ...tr, delay: 0.12 }}
                    >
                      <h3 className="pb-1 md:pb-0">{s.title}</h3>
                      <p className="subtitle pb-3 md:pb-0">{s.text}</p>
                    </motion.div>

                    <motion.div
                      className="flex md:flex-col items-center md:items-end h-full gap-y-[324px] justify-between"
                      initial={fadeUp}
                      whileInView={fadeUpIn}
                      viewport={{ amount: 0.4, once: true }}
                      transition={{ ...tr, delay: 0.16 }}
                    >
                      <p className="subtitle text-[var(--color-gray)]">
                        {i + 1}/{slides.length}
                      </p>
                      <Link href={s.href} className="w-fit md:w-full">
                        <Button text="Кейс" variant="secondary" />
                      </Link>
                    </motion.div>

                    <motion.div
                      className="hidden md:block col-span-2 min-h-[447px] w-full relative"
                      initial={fadeUp}
                      whileInView={fadeUpIn}
                      viewport={{ amount: 0.4, once: true }}
                      transition={{ ...tr, delay: 0.2 }}
                    >
                      <Image src={s.small1} alt="" fill sizes="50vw" />
                    </motion.div>

                    <motion.div
                      className="hidden md:block col-span-2 min-h-[447px] w-full relative"
                      initial={fadeUp}
                      whileInView={fadeUpIn}
                      viewport={{ amount: 0.4, once: true }}
                      transition={{ ...tr, delay: 0.24 }}
                    >
                      <Image src={s.small2} alt="" fill sizes="50vw" />
                    </motion.div>
                  </PageSection>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
