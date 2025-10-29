"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import { useModalStore } from "@/stores/useModalStore";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import IconClose from "@/components/icons/IconClose";
import MobileMenu from "@/components/layout/MobileMenu";
import { useMobileMenuStore } from "@/stores/useMobileMenuStore";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideFooter = pathname === "/map";
  const isSuccessPage = pathname === "/success";
  const darkFooter =
    pathname.includes("/news") ||
    pathname.includes("/about") ||
    pathname.includes("/gallery") ||
    pathname.includes("/cases");
  const { type, close } = useModalStore();
  const { isOpen: isMenuOpen, close: closeMenu } = useMobileMenuStore();

  return (
    <html lang="ru">
      <head>
        <title>Дабл-Ю</title>
        <meta name="description" content="Архитектурное агентство" />

        {/* ✅ Yandex.Metrika */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                      if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104955317', 'ym');

              ym(104955317, 'init', {
                  ssr:true,
                  webvisor:true,
                  clickmap:true,
                  ecommerce:"dataLayer",
                  accurateTrackBounce:true,
                  trackLinks:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/104955317"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>

      <body>
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        <Modal onClose={close} isOpen={type !== "none"}>
          <div className="flex justify-end pb-2 cursor-pointer" onClick={close}>
            <IconClose />
          </div>
          <div className="bg-white p-10 max-w-[43rem] my-auto rounded-[var(--radius-sm)]">
            <h2 className="pb-6">Давайте создадим нечто уникальное</h2>
            <Form />
          </div>
        </Modal>
        <Preloader />
        {!isSuccessPage && <Header />}
        {children}
        {!hideFooter && !isSuccessPage && (
          <Footer variant={darkFooter ? "dark" : undefined} />
        )}
      </body>
    </html>
  );
}
