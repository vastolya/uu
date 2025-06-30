"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PageSection } from "./PageSection";
import LogoUU from "../../../public/logoUU.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModalStore } from "@/stores/useModalStore";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { open } = useModalStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : "-100%" }}
      transition={{ duration: 0.175, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[var(--color-border-gray)]"
    >
      <PageSection>
        <Link href={"/"} className="col-span-2 relative">
          <Image
            src={LogoUU}
            alt="LogoUU"
            fill
            sizes="auto"
            className="py-5 object-contain"
          />
        </Link>
        <div className="col-span-4 flex justify-center items-center gap-6">
          {[
            { text: "Портфолио", link: "/cases" },
            { text: "О нас", link: "/about" },
            { text: "Новости", link: "/news" },
            { text: "Галерея", link: "/gallery" },
            { text: "Контакты", link: "/" },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <button className="cursor-pointer hover:text-[var(--color-primary)]">
                {item.text}
              </button>
            </Link>
          ))}
        </div>
        <button
          className="col-span-2 py-7 w-full bg-[var(--color-primary)] hover:bg-[var(--color-black)] hover:text-[var(--color-primary)] transition-all duration-200 cursor-pointer"
          onClick={() => open("form")}
        >
          Бесплатная консультация
        </button>
      </PageSection>
    </motion.div>
  );
};

export default Header;
