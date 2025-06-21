import React from "react";
import Image from "next/image";
import { PageSection } from "./PageSection";
import LogoUU from "../../../public/logoUU.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b-2 border-[var(--color-border-gray)]">
      <PageSection>
        <div className="col-span-2 relative">
          <Image
            src={LogoUU}
            alt="LogoUU"
            fill
            sizes="auto"
            className="py-5 object-contain"
          />
        </div>
        <div className="col-span-4 flex justify-center items-center gap-6">
          {["Портфолио", "О нас", "Новости", "Галерея", "Контакты"].map(
            (item, index) => (
              <Link key={index} href={"/"}>
                <button className="cursor-pointer">{item}</button>
              </Link>
            )
          )}
        </div>
        <button className="col-span-2 py-7 w-full bg-[var(--color-primary)] ">
          Бесплатная консультация
        </button>
      </PageSection>
    </div>
  );
};

export default Header;
