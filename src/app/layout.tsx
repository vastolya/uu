import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";

export const metadata: Metadata = {
  title: "Дабл-Ю",
  description: "Архитектурное Агенство",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
