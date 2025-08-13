"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageDirection1 from "@public/imageDirection1.webp";
import ImageDirection2 from "@public/imageDirection2.webp";
import ImageDirection3 from "@public/imageDirection3.webp";
import ImageDirection4 from "@public/imageDirection4.webp";
import ImageDirection5 from "@public/imageDirection5.webp";
import ImageDirection6 from "@public/imageDirection6.webp";
import ImageDirection7 from "@public/imageDirection7.webp";
import ImageDirection8 from "@public/imageDirection8.webp";
import ImageDirection9 from "@public/imageDirection9.webp";
import ImageDirection10 from "@public/imageDirection10.webp";
import ImageDirectionAbout01 from "@public/imageDirectionAbout01.webp";
import ImageDirectionAbout02 from "@public/imageDirectionAbout02.webp";
import ImageDirectionAbout03 from "@public/imageDirectionAbout03.webp";
import ImageDirectionAbout04 from "@public/imageDirectionAbout04.webp";
import ImageDirectionAbout05 from "@public/imageDirectionAbout05.webp";
import ImageDirectionAbout06 from "@public/imageDirectionAbout06.webp";
import ImageDirectionAbout07 from "@public/imageDirectionAbout07.webp";
import ImageDirectionAbout08 from "@public/imageDirectionAbout08.webp";
import ImageDirectionAbout09 from "@public/imageDirectionAbout09.webp";
import ImageDirectionAbout10 from "@public/imageDirectionAbout10.webp";
import ImageDirectionAbout11 from "@public/imageDirectionAbout11.webp";
import ImageDirectionAbout12 from "@public/imageDirectionAbout12.webp";
import { Button } from "../ui/Button";
import { useModalStore } from "@/stores/useModalStore";
import { Accordion } from "../ui/Accordion";

interface DirectionsProps {
  variant?: "home" | "about";
}

declare global {
  interface Window {
    __hoverTimeout?: ReturnType<typeof setTimeout>;
  }
}

const cards = [
  {
    title: "Коммерческая архитектура",
    topImage: ImageDirection1,
    bottomImage: ImageDirection2,
  },
  {
    title: "Дизайн жилых помещений",
    topImage: ImageDirection3,
    bottomImage: ImageDirection4,
  },
  {
    title: "Общественные пространства городского значения",
    topImage: ImageDirection5,
    bottomImage: ImageDirection6,
  },
  {
    title: "Инклюзивность: проекты для маломобильных групп",
    topImage: ImageDirection7,
    bottomImage: ImageDirection8,
  },
  {
    title: "Строим сами: авторский надзор и подряд",
    topImage: ImageDirection9,
    bottomImage: ImageDirection10,
  },
];

const cardsAbout = [
  {
    title: "Архитектурное проектирование",
    topImage: ImageDirectionAbout01,
    bottomImage: ImageDirectionAbout02,
  },
  {
    title: "Интерьерный дизайн",
    topImage: ImageDirectionAbout03,
    bottomImage: ImageDirectionAbout04,
  },
  {
    title: "Ландшафтное проектирование",
    topImage: ImageDirectionAbout05,
    bottomImage: ImageDirectionAbout06,
  },
  {
    title: "Брендинг и визуальная айдентика",
    topImage: ImageDirectionAbout07,
    bottomImage: ImageDirectionAbout08,
  },
  {
    title: "Разработка концепции и идеологии пространства",
    topImage: ImageDirectionAbout09,
    bottomImage: ImageDirectionAbout10,
  },
  {
    title: "Арт объекты",
    topImage: ImageDirectionAbout11,
    bottomImage: ImageDirectionAbout12,
  },
];

export default function Directions({ variant = "home" }: DirectionsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { open } = useModalStore();

  return (
    <section className="bg-[var(--color-black)]">
      <section className="max-w-[90rem] mx-auto md:px-4 py-[52px] md:py-20 md:grid md:grid-cols-8 gap-x-6">
        <p className="subtitle text-[var(--color-gray)] col-span-8 pb-8 md:pb-10 px-4 md:px-0">
          {variant === "home" ? "Направления" : "Философия"}
        </p>
        <div
          className={`hidden md:flex ${variant === "home" ? "col-span-3" : "col-span-4"}`}
        >
          {variant === "home" && (
            <div
              className={`flex flex-col gap-6 items-end min-h-[calc(20.75rem+22rem+1.5rem)]`}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && (
                  <>
                    <motion.div
                      key={`image-left-${hoveredIndex}`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-[20.75rem] "
                    >
                      <Image
                        src={cards[hoveredIndex].topImage}
                        alt=""
                        loading="lazy"
                        className="h-[20.75rem] w-[20.75rem] object-cover rounded-[var(--radius-sm)]"
                      />
                    </motion.div>

                    <motion.div
                      key={`image-right-${hoveredIndex}`}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-[22rem] min-w-[31.875rem] "
                    >
                      <Image
                        src={cards[hoveredIndex].bottomImage}
                        alt=""
                        className="h-[22rem] w-full object-cover items-end rounded-[var(--radius-sm)]"
                      />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}

          {variant === "about" && (
            <div className={`flex flex-row gap-6 min-h-[720px]`}>
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && cardsAbout?.[hoveredIndex] && (
                  <>
                    <motion.div
                      key={`image-left-${hoveredIndex}`}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: +100, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-[332px] w-[332px]"
                    >
                      <Image
                        src={cardsAbout[hoveredIndex].topImage}
                        alt=""
                        loading="lazy"
                        className="h-[20.75rem] w-[20.75rem] object-cover rounded-[var(--radius-sm)]"
                      />
                    </motion.div>

                    <motion.div
                      key={`image-right-${hoveredIndex}`}
                      initial={{ y: +100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-[720px] w-[332px]"
                    >
                      <Image
                        src={cardsAbout[hoveredIndex].bottomImage}
                        alt=""
                        className="h-[45rem] w-[20.75rem] object-cover items-end rounded-[var(--radius-sm)]"
                      />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="hidden md:flex  col-span-4 col-start-5 flex-col justify-end gap-2.5 overflow-hidden">
          {variant === "home" && (
            <>
              {cards.map((card, index) => (
                <motion.p
                  key={index}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transformOrigin = "left";

                    clearTimeout(window.__hoverTimeout);
                    window.__hoverTimeout = setTimeout(() => {
                      setHoveredIndex(index);
                    }, 40);
                  }}
                  onMouseLeave={() => {
                    clearTimeout(window.__hoverTimeout);

                    window.__hoverTimeout = setTimeout(() => {
                      setHoveredIndex(null);
                    }, 200);
                  }}
                  whileHover={{
                    scale: 1.15,
                    color: "var(--color-primary)",
                  }}
                  className="subtitle-bold text-white py-4 border-b-2 border-[var(--color-gray)] cursor-pointer"
                  style={{ originX: 0 }}
                  layout
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {card.title}
                </motion.p>
              ))}
            </>
          )}

          {variant === "about" && (
            <>
              {cardsAbout.map((card, index) => (
                <motion.p
                  key={index}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transformOrigin = "left";

                    clearTimeout(window.__hoverTimeout);
                    window.__hoverTimeout = setTimeout(() => {
                      setHoveredIndex(index);
                    }, 40);
                  }}
                  onMouseLeave={() => {
                    clearTimeout(window.__hoverTimeout);

                    window.__hoverTimeout = setTimeout(() => {
                      setHoveredIndex(null);
                    }, 200);
                  }}
                  whileHover={{
                    scale: 1.15,
                    color: "var(--color-primary)",
                  }}
                  className="subtitle-bold text-white py-4 border-b-2 border-[var(--color-gray)] cursor-pointer"
                  style={{ originX: 0 }}
                  layout
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {card.title}
                </motion.p>
              ))}
            </>
          )}

          {variant === "home" ? (
            <p className="subtitle text-white pt-[9.375rem]">
              Боремся с безликой архитектурой,
              <br />
              подавляющей индивидуальность
            </p>
          ) : (
            <>
              <p className="subtitle text-white pt-[104px]">
                Наша философия строится на принципах целостности и
                взаимосвязанности всех элементов проекта. От концепции до
                реализации, каждый этап проходит под нашим пристальным вниманием
                и контролем
              </p>
              <Button
                text="Начать проект"
                onClick={() => open("form")}
              ></Button>
            </>
          )}
        </div>

        <div className="flex md:hidden">
          {variant === "home" ? (
            <div className="flex flex-col">
              <Accordion items={cards} variant="image" />
              <p className="subtitle text-white pt-[52px] px-4">
                Боремся с безликой архитектурой,
                <br />
                подавляющей индивидуальность
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <Accordion items={cardsAbout} variant="image" />
              <div className="px-4 ">
                <p className="subtitle text-white pt-[52px]">
                  Наша философия строится на принципах целостности и
                  взаимосвязанности всех элементов проекта. От концепции до
                  реализации, каждый этап проходит под нашим пристальным
                  вниманием и контролем
                </p>
                <Button
                  text="Начать проект"
                  onClick={() => open("form")}
                  className="mt-3 "
                ></Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
