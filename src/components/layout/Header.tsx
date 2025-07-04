"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PageSection } from "./PageSection";
import { useModalStore } from "@/stores/useModalStore";
import LogoUU from "@public/logoUU.png";

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
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : "-100%" }}
      transition={{ duration: 0.175, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[var(--color-border-gray)]"
    >
      <PageSection>
        <Link href="/" className=" h-[2.5rem] w-[10.25rem]">
          <Image
            src={LogoUU}
            alt="LogoUU"
            sizes="auto"
            className="object-contain py-5"
          />
        </Link>
        <div className="col-span-5 flex justify-center items-center gap-4">
          <HeaderNav />
        </div>
        <button
          className="col-span-2 py-7 w-full bg-[var(--color-primary)] hover:bg-[var(--color-black)] hover:text-[var(--color-primary)] transition-all duration-200 cursor-pointer"
          onClick={() => open("form")}
        >
          Бесплатная консультация
        </button>
      </PageSection>
    </motion.header>
  );
};

export default Header;

const navItems = [
  { text: "Портфолио", link: "/cases" },
  { text: "О нас", link: "/about" },
  { text: "Новости", link: "/news" },
  { text: "Галерея", link: "/gallery" },
  { text: "Контакты", link: "/map" },
];

export function HeaderNav() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineProps, setUnderlineProps] = useState<null | {
    left: number;
    width: number;
  }>(null);

  useEffect(() => {
    const activeLink = containerRef.current?.querySelector(
      `[data-active="true"]`
    ) as HTMLButtonElement | null;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineProps({ left: offsetLeft, width: offsetWidth });
    } else {
      setUnderlineProps(null); // 🔥 скрываем underline
    }
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center gap-4"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link key={item.link} href={item.link}>
            <button
              data-active={isActive || undefined}
              className="relative cursor-pointer px-2 py-1 transition-colors hover:text-[var(--color-primary)]"
            >
              {item.text}
            </button>
          </Link>
        );
      })}

      <AnimatePresence>
        {underlineProps && (
          <motion.div
            key="underline"
            className="absolute bottom-0 h-[2px] bg-[var(--color-black)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              left: underlineProps.left,
              width: underlineProps.width,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
