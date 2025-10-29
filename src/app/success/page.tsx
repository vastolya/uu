"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import MainLogo from "@public/logoUUWhite.webp";
import UULogo from "@public/logoBigUU.webp";
import IconArrowRight from "@/components/icons/IconArrowRight";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 6500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [1, 0],
                scale: [1, 10],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0.5, 1],
              }}
            >
              <Image
                src={UULogo}
                alt="Main Logo"
                width={300}
                height={300}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className="bg-[var(--color-black)] min-h-screen py-20 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showPreloader ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={MainLogo}
            alt="MainLogo"
            className="w-[10.125rem] pb-[5rem]"
          />
        </motion.div>
        <motion.div
          initial={{ y: +100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-center pb-6 !text-white ">
            Спасибо! Мы получили ваш номер.
            <br />
            Скоро свяжемся с вами
          </h2>

          <div className="border-b-2 border-white w-screen mb-6"></div>
          <div className="text-white flex flex-col md:flex-row gap-4 items-center pb-[208px] md:pb-[19rem]">
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
        </motion.div>
      </motion.section>
    </div>
  );
}
