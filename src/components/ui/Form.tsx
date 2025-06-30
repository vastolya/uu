"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import {
  object,
  string,
  boolean,
  minLength,
  maxLength,
  pipe,
  parse,
  ValiError,
} from "valibot";

const formSchema = object({
  name: pipe(string(), minLength(2, "Имя слишком короткое")),
  phone: pipe(string(), minLength(10, "Введите корректный телефон")),
  comment: pipe(string(), maxLength(500, "Комментарий слишком длинный")),
  accepted: boolean(),
});

type FormData = {
  name: string;
  phone: string;
  comment: string;
  accepted: boolean;
};

interface FormProps {
  className?: string;
}

const Form: React.FC<FormProps> = ({ className }) => {
  const [formValues, setFormValues] = useState<FormData>({
    name: "",
    phone: "",
    comment: "",
    accepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const parsed = parse(formSchema, formValues);
      setErrors({});
      console.log("Форма успешно отправлена!", parsed);
    } catch (err) {
      if (err instanceof ValiError) {
        const errorMap: Record<string, string> = {};

        err.issues.forEach((issue) => {
          if (issue.message.includes("Имя")) errorMap.name = issue.message;
          if (issue.message.includes("телефон")) errorMap.phone = issue.message;
          if (issue.message.includes("Комментарий"))
            errorMap.comment = issue.message;
          if (issue.message.includes("прин")) errorMap.accepted = issue.message;
        });

        setErrors(errorMap);
      }
    }
  };

  return (
    <form
      className={`rounded-sm max-w-[43rem] flex flex-col gap-6 subtitle bg-white p-10 ${className}`}
      onSubmit={handleSubmit}
    >
      <h2>Давайте создадим нечто уникальное</h2>

      <div>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, name: e.target.value }))
          }
          className="py-3 border-b-2 border-[var(--color-border-gray)] w-full focus:outline-none placeholder:text-[var(--color-gray)]"
          placeholder="Имя"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, phone: e.target.value }))
          }
          className="py-3 border-b-2 border-[var(--color-border-gray)] w-full focus:outline-none placeholder:text-[var(--color-gray)]"
          placeholder="Телефон"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="comment" className="text-[var(--color-gray)] pb-1">
          Краткое описание идеи
        </label>
        <textarea
          name="comment"
          value={formValues.comment}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, comment: e.target.value }))
          }
          className="border-2 border-[var(--color-border-gray)] placeholder:text-[#D2D2D0] py-4 px-3 text-[var(--color-black)] rounded-[var(--radius-sm)] min-h-20"
          placeholder="Введите текст"
        />
        {errors.comment && (
          <p className="text-sm text-red-500 mt-1">{errors.comment}</p>
        )}
      </div>

      <div className="flex-col flex gap-2">
        <label className="flex gap-2 cursor-pointer text-[var(--color-gray)]">
          <input
            type="checkbox"
            name="accepted"
            checked={formValues.accepted}
            onChange={(e) =>
              setFormValues((prev) => ({
                ...prev,
                accepted: e.target.checked,
              }))
            }
            className="h-4 w-4 accent-[var(--color-black)] rounded-[var(--radius-sm)]"
          />
          <span>
            Я принимаю условия{" "}
            <a href="/privacy-policy" target="_blank" className="underline">
              политики конфиденциальности
            </a>
          </span>
        </label>
        {errors.accepted && (
          <p className="text-sm text-red-500 mt-1">{errors.accepted}</p>
        )}

        <Button text="Начать проект" type="submit" />
      </div>
    </form>
  );
};

export default Form;
