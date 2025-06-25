"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import IconChevron from "@/components/icons/IconChevron";
import ImageStep from "../../../public/imageStep.png";
import Image from "next/image";

const steps = [
  {
    number: "1.",
    title: "Первичная консультация",
    subtitle: "Погружаемся в ваши эмоции и цели.",
    text: "Начинаем с детального изучения целей проекта, требований и норм — от оценки объекта до анализа запросов",
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
    subtitle: "Презентуем клиенту концепцию",
    text: "Синхронизируем видение и финализируем детали в режиме совместной работы. После согласования переводим идеи в этап технического воплощения: создаем детализированную документацию",
  },
  {
    number: "4.",
    title: "Строительство",
    subtitle: "Наша команда или ваш подрядчик.",
    text: "После финального согласования запускаем этап воплощения замысла в реальность. Наши эксперты проводят контроль на всех стадиях, гарантируя точное соответствие проекту, соблюдение нормативов",
  },
  {
    number: "5.",
    title: "Контроль",
    subtitle: "Финальный этап",
    text: "Детальная экспертиза объекта: выявляем и корректируем нюансы, готовим объект к вводу в эксплуатацию. Вы принимаете идеальный результат",
  },
];

export function WorkStages() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="col-span-2 relative h-[49.75rem] w-[16.8125rem] my-10">
        <Image src={ImageStep} alt="" fill sizes="auto" className="-z-1" />
        <p className="subtitle text-[var(--color-gray)] pb-2 pt-10">
          Этапы работ
        </p>
        <h2 className="col-span-8 pb-10">Как&nbsp;мы&nbsp;работаем?</h2>
      </div>

      <motion.div
        layout
        className=" col-start-3 col-span-6 flex flex-col h-full"
      >
        {steps.map((step, index) => {
          const isOpen = open === index;

          return (
            <motion.div
              key={index}
              layout
              className={`grid grid-cols-6 gap-x-6 ${
                index === steps.length - 1 ? "grow" : ""
              }`}
            >
              <div className="box-border col-span-2 border-r-2 border-[var(--color-border-gray)]">
                <h2
                  className={`box-border border-b-2 border-[var(--color-border-gray)] text-[var(--color-border-gray)] ${
                    index === 0 && "pt-[12.75rem]"
                  } `}
                >
                  {step.number}
                </h2>
              </div>

              <motion.div
                layout
                className="col-span-4 flex flex-col w-full py-6 pb-10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className={`flex justify-between items-center w-full text-left text-[var(--color-black)]  ${
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

                <motion.div
                  layout
                  initial="collapsed"
                  animate={isOpen ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-2">
                    <p className="subtitle-bold pb-2">{step.subtitle}</p>
                    <p className="subtitle">{step.text}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
