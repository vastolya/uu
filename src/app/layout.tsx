"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import { useModalStore } from "@/stores/useModalStore";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import IconClose from "@/components/icons/IconClose";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideFooter = pathname === "/map";
  const darkFooter = pathname === "/news";
  const { type, close } = useModalStore();

  return (
    <html lang="ru">
      <Head>
        <title>Дабл-Ю</title>
        <meta name="description" content="Архитектурное Агенство" />
      </Head>
      <body>
        <Modal onClose={close} isOpen={type !== "none"}>
          <div className="flex justify-end pb-2 cursor-pointer" onClick={close}>
            <IconClose />
          </div>
          <div className="bg-white p-10 max-w-[43rem] my-auto rounded-[var(--radius-sm)]">
            <div></div>
            <h2 className="pb-6">Давайте создадим нечто уникальное</h2>
            <Form />
          </div>
        </Modal>
        <Preloader />
        {<Header />}
        {children}
        {hideFooter ? (
          <></>
        ) : darkFooter ? (
          <Footer className="" variant="dark" />
        ) : (
          <Footer />
        )}
      </body>
    </html>
  );
}
