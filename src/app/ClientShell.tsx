"use client";

import { usePathname } from "next/navigation";
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

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <>
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
    </>
  );
}
