"use client";

import Image from "next/image";
import React from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import MainLogo from "@public/logoUUWhite.png";
import IconArrowRight from "@/components/icons/IconArrowRight";
import Link from "next/link";

const Success = () => {
  // const router = useRouter();

  // Автоматический редирект через 5 секунд
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/");
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <section className="bg-[var(--color-black)]  min-h-screen py-20 flex flex-col items-center ">
      <Image
        src={MainLogo}
        alt="MainLogo"
        sizes="auto"
        className="w-[10.125rem] pb-[15.5rem]"
      />
      <h2 className="text-center pb-6 !text-white ">
        Спасибо! Мы получили ваш номер.
        <br />
        Скоро свяжемся с вами
      </h2>
      <div className="border-b-2 border-white w-screen mb-6"></div>
      <div className="text-white flex gap-4 items-center pb-[304px]">
        <button>Если не можете ждать, позвоните нам сами</button>
        <p className="subtitle-bold">+7 969 739-99-66</p>
      </div>
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <IconArrowRight className="text-white" />
        <button className="text-white cursor-pointer">
          {" "}
          Вернуться на главную
        </button>
      </Link>
    </section>
  );
};

export default Success;
