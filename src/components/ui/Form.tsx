"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { useModalStore } from "@/stores/useModalStore";
import { FormSchema, formSchema } from "./formSchema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import Link from "next/link";

interface FormProps {
  className?: string;
  buttonText?: string;
  variant?: "white" | "black";
}

const Form: React.FC<FormProps> = ({
  variant = "white",
  className,
  buttonText = "Отправить",
}) => {
  const router = useRouter();
  const { close } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      isAgreed: false,
    },
  });

  const onSubmit = async (data: FormSchema) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }

      router.push("/success");
      reset();
      close();
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  return (
    <form
      className={`flex flex-col gap-2 md:gap-6 subtitle ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="text"
          {...register("name")}
          name="name"
          className={`py-3 border-b-2 border-[var(--color-border-gray)] w-full focus:outline-none placeholder:text-[var(--color-gray)] ${variant == "black" ? "text-white" : "text-[var(--color-black)]"}`}
          placeholder="Имя"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          {...register("phone")}
          name="phone"
          className={`py-3 border-b-2 border-[var(--color-border-gray)] w-full focus:outline-none placeholder:text-[var(--color-gray)] ${variant == "black" ? "text-white" : "text-[var(--color-black)]"} `}
          placeholder="Телефон"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {variant !== "black" && (
        <div className="flex flex-col">
          <textarea
            {...register("message")}
            className="border-b-2 border-[var(--color-border-gray)] pt-3 mb-3 md:mb-10 text-[var(--color-black)]  h-15 focus:outline-none placeholder:text-[var(--color-gray)]"
            placeholder=" Краткое описание идеи"
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message?.message}
            </p>
          )}
        </div>
      )}

      <div className="flex-col flex gap-3 md:gap-2 pt-8 md:pt-0 ">
        <label className="flex gap-2 cursor-pointer text-[var(--color-gray)] items-center">
          <input
            type="checkbox"
            {...register("isAgreed")}
            className="h-4 w-4 accent-[var(--color-black)] rounded-[var(--radius-sm)]"
          />
          <span>
            Я согласен с{" "}
            <Link href="/policy" className="underline" onClick={() => close()}>
              условиями
            </Link>
          </span>
        </label>
        {errors.isAgreed && (
          <p className="text-sm text-red-500 mt-1">
            {errors.isAgreed?.message}
          </p>
        )}

        <Button text={buttonText} type="submit" />
      </div>
    </form>
  );
};

export default Form;
