import React from "react";
import Image from "next/image";
import { PageSection } from "./PageSection";
import LogoUU from "../../../public/logoUU.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[var(--color-border-gray)] py-6">
      <PageSection>
        <div className="col-span-4 flex flex-col justify-between">
          <Link href="/" className="relative h-10 w-[20.75rem]">
            <Image src={LogoUU} alt="LogoUU" fill className="object-contain" />
          </Link>
          <div>
            <p className="subtitle pb-4">Правила использования сайта</p>
            <p className="subtitle text-[var(--color-gray)]">
              © {new Date().getFullYear()} ООО Дабл-Ю. Все права защищены
            </p>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          {[
            { text: "Портфолио", link: "/cases" },
            { text: "О нас", link: "/about" },
            { text: "Новости", link: "/news" },
            { text: "Галерея", link: "/gallery" },
            { text: "Контакты", link: "/map" },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <button className="cursor-pointer p-2 hover:text-[var(--color-primary)]">
                {item.text}
              </button>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Link href="tel:+79697399966">
            <button className="cursor-pointer">+7 969 739-99-66</button>
          </Link>
          <Link href="mailto:w11group@ya.ru">
            <button className="cursor-pointer">w11group@ya.ru</button>
          </Link>
        </div>
      </PageSection>
    </footer>
  );
};

export default Footer;
