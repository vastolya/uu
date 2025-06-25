"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageCase1 from "../../../public/imageCase1.png";
import ImageCase2 from "../../../public/imageCase2.png";
import ImageCase4 from "../../../public/imageCase2.png";
import ImageCase3 from "../../../public/imageCase3.png";
import ImageCase5 from "../../../public/imageCase1.png";

declare global {
  interface Window {
    __hoverTimeout?: ReturnType<typeof setTimeout>;
  }
}

const cards = [
  {
    title: "Коммерческая архитектура",
    image: ImageCase1,
  },
  {
    title: "Дизайн жилых помещений",
    image: ImageCase2,
  },
  {
    title: "Общественные пространства городского значения",
    image: ImageCase3,
  },
  {
    title: "Инклюзивность: проекты для маломобильных групп",
    image: ImageCase4,
  },
  {
    title: "Строим сами: авторский надзор и подряд",
    image: ImageCase5,
  },
];

export default function Directions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[var(--color-black)]">
      <section className="max-w-[1440px] mx-auto px-4 py-20 grid grid-cols-8 gap-x-6">
        <p className="subtitle text-[var(--color-gray)] col-span-8 pb-10">
          Направления
        </p>
        <div className="col-span-3 flex flex-col gap-6 items-end">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <>
                <motion.div
                  key={`image-left-${hoveredIndex}`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-[334px] w-[332px]"
                >
                  <Image
                    src={cards[hoveredIndex].image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  key={`image-right-${hoveredIndex}`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-[304px] w-[510px]"
                >
                  <Image
                    src={cards[hoveredIndex].image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="col-span-4 col-start-5 flex flex-col gap-10 overflow-hidden">
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
                x: 8,
              }}
              className="subtitle-bold text-white py-4 border-b-2 border-[var(--color-gray)] cursor-pointer"
              style={{ originX: 0 }}
              layout
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {card.title}
            </motion.p>
          ))}
          <p className="subtitle text-white pt-[150px]">
            Боремся с безликой архитектурой,
            <br />
            подавляющей индивидуальность
          </p>
        </div>
      </section>
    </div>
  );
}
