"use client";

import Head from "next/head";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import { useModalStore } from "@/stores/useModalStore";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { type, close } = useModalStore();

  return (
    <html lang="ru">
      <Head>
        <title>Дабл-Ю</title>
        <meta name="description" content="Архитектурное Агенство" />
      </Head>
      <body>
        <Modal onClose={close} isOpen={type !== "none"}>
          <Form />
        </Modal>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
