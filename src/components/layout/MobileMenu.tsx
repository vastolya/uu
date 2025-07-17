"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../ui/Button";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          className="fixed top-0 left-0 right-0 z-40 bg-white py-3 px-4 flex flex-col shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="h-[44px]" />
          <nav className="flex flex-col gap-2 pt-5 pb-4">
            <Link href="/cases">
              <button className="w-full justify-end flex p-2">Портфолио</button>
            </Link>
            <Link href="/about">
              <button className="w-full justify-end flex p-2">О нас</button>
            </Link>
            <Link href="/news">
              <button className="w-full justify-end flex p-2">Новости</button>
            </Link>
            <Link href="/gallery">
              <button className="w-full justify-end flex p-2">Галерея</button>
            </Link>
            <Link href="/map">
              <button className="w-full justify-end flex p-2">Контакты</button>
            </Link>
          </nav>
          <Button text="Бесплатная консультация" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
