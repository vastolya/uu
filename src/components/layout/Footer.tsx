import React from "react";
import Image from "next/image";
import { PageSection } from "./PageSection";
import LogoUU from "@public/logoUU.png";
import LogoUUWhite from "@public/logoUUWhite.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  className?: string;
  variant?: "light" | "dark";
}

const navItems = [
  { text: "Портфолио", link: "/cases" },
  { text: "О нас", link: "/about" },
  { text: "Новости", link: "/news" },
  { text: "Галерея", link: "/gallery" },
  { text: "Контакты", link: "/map" },
];

const Footer: React.FC<FooterProps> = ({
  className = "",
  variant = "light",
}) => {
  const isDark = variant === "dark";
  const pathname = usePathname();

  return (
    <footer
      className={`
        border-t-2 py-6
        ${
          isDark
            ? "bg-[var(--color-black)] text-white border-[var(--color-black)]"
            : "border-[var(--color-border-gray)]"
        }
        ${className}
      `}
    >
      <PageSection>
        <div className="col-span-4 flex flex-col justify-between">
          <Link href="/" className="h-[2.5rem] w-[10.25rem]">
            <Image
              src={isDark ? LogoUUWhite : LogoUU}
              alt="LogoUU"
              sizes="auto"
              className="object-contain"
            />
          </Link>
          <div>
            <p className="subtitle pb-4">Правила использования сайта</p>
            <p
              className={`subtitle ${
                isDark ? "text-white" : "text-[var(--color-gray)]"
              }`}
            >
              © {new Date().getFullYear()} ООО Дабл-Ю. Все права защищены
            </p>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link key={item.link} href={item.link}>
                <button className="relative cursor-pointer py-1 px-2 text-left hover:text-[var(--color-primary)]">
                  {item.text}
                  <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] w-full transition-opacity duration-300 ${
                      isActive
                        ? isDark
                          ? "opacity-100 bg-[var(--color-primary)]"
                          : "opacity-100 bg-[var(--color-black)]"
                        : "opacity-0"
                    }`}
                  />
                </button>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <Link href="tel:+79697399966">
            <button className="cursor-pointer">+7 969 739-99-66</button>
          </Link>
          <Link href="mailto:w11group@ya.ru">
            <button className="cursor-pointer">w11group@ya.ru</button>
          </Link>
        </div>
      </PageSection>
    </footer>
  );
};

export default Footer;
