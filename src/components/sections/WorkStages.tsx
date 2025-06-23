"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconChevron from "@/components/icons/IconChevron";
import ImageStep from "../../../public/imageStep.png";
import Image from "next/image";

const steps = [
  {
    number: "1.",
    title: "Первичная консультация",
    subtitle: "Преобразуем данные в стратегический замысел",
    text: "С продуманной планировкой и детализированными визуализациями. Это не просто эскиз, а ДНК объекта: здесь воплощаются ключевые идеи, стиль и ценности, закладывая фундамент для поэтапной реализации",
  },
  {
    number: "2.",
    title: "Концепт",
    subtitle: "Преобразуем данные в стратегический замысел",
    text: "С продуманной планировкой и детализированными визуализациями. Это не просто эскиз, а ДНК объекта: здесь воплощаются ключевые идеи, стиль и ценности, закладывая фундамент для поэтапной реализации",
  },
  {
    number: "3.",
    title: "Утверждение концепции и детализация",
    subtitle: "Преобразуем данные в стратегический замысел",
    text: "С продуманной планировкой и детализированными визуализациями. Это не просто эскиз, а ДНК объекта: здесь воплощаются ключевые идеи, стиль и ценности, закладывая фундамент для поэтапной реализации",
  },
  {
    number: "4.",
    title: "Строительство",
    subtitle: "Преобразуем данные в стратегический замысел",
    text: "С продуманной планировкой и детализированными визуализациями. Это не просто эскиз, а ДНК объекта: здесь воплощаются ключевые идеи, стиль и ценности, закладывая фундамент для поэтапной реализации",
  },
  {
    number: "5.",
    title: "Контроль",
    subtitle: "Преобразуем данные в стратегический замысел",
    text: "С продуманной планировкой и детализированными визуализациями. Это не просто эскиз, а ДНК объекта: здесь воплощаются ключевые идеи, стиль и ценности, закладывая фундамент для поэтапной реализации",
  },
];

export function WorkStages() {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const newHeights = steps.map(
        (_, i) => refs.current[i]?.scrollHeight || 0
      );
      setHeights(newHeights);
    });
  }, [open]);

  return (
    <>
      <div className="col-span-2 relative h-[49.75rem] w-[16.8125rem] my-10">
        <Image src={ImageStep} alt="" fill sizes="auto" className="-z-1" />
        <p className="subtitle text-[var(--color-gray)] pb-2 pt-10">
          Этапы&nbsp;работ
        </p>
        <h2 className="col-span-8 pb-10">Как&nbsp;мы&nbsp;работаем?</h2>
      </div>

      <div className=" col-start-3 col-span-6 flex flex-col h-full">
        {steps.map((step, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className={`grid grid-cols-6 gap-x-6 ${
                index === steps.length - 1 ? "grow" : ""
              }`}
            >
              <div className="box-border col-span-2 border-r-2 border-[var(--color-border-gray)] pb-10">
                <h2
                  className={`box-border border-b-2 border-[var(--color-border-gray)] text-[var(--color-border-gray)] ${
                    index === 0 && "pt-[12.75rem]"
                  } `}
                >
                  {step.number}
                </h2>
              </div>

              <div className="col-span-4 flex flex-col w-full py-6">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className={`flex justify-between items-center w-full text-left text-[var(--color-black)] ${
                    index === 0 && "pt-[12.75rem]"
                  } ${index === steps.length - 1 && ""} cursor-pointer`}
                >
                  <h3 className={`text-[var(--color-black)] `}>{step.title}</h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 0 : -180 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-6 h-6 text-[var(--color-gray)]"
                  >
                    <IconChevron />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${index}`}
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: heights[index], opacity: 1 }}
                      exit={{ maxHeight: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} // easeOutCubic
                      className="overflow-hidden will-change-[max-height,opacity]"
                    >
                      <div
                        ref={(el) => {
                          if (el) refs.current[index] = el;
                          else delete refs.current[index];
                        }}
                        className="pt-2"
                      >
                        <p className="subtitle-bold pb-2">{step.subtitle}</p>
                        <p className="subtitle">{step.text}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
