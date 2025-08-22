import React from "react";
import Image from "next/image";
import { PageSection } from "./PageSection";
import LogoUU from "@public/logoUU.webp";
import LogoUUWhite from "@public/logoUUWhite.webp";
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
        border-t-2 py-6 -z-10
        ${
          isDark
            ? "bg-[var(--color-black)] text-white border-[var(--color-black)]"
            : "border-[var(--color-border-gray)]"
        }
        ${className}
      `}
    >
      <PageSection className="flex flex-col md:flex:row py-[52px] gap-8 md:gap-0">
        <div className="col-span-4 flex flex-col justify-between">
          <Link href="/" className="h-[2.5rem] w-[10.25rem] mx-auto md:mx-0">
            <Image
              src={isDark ? LogoUUWhite : LogoUU}
              alt="LogoUU"
              sizes="auto"
              className="object-contain"
            />
          </Link>
          <div className="hidden md:block">
            <Link href="/policy" className="subtitle pb-4">
              Правила использования сайта
            </Link>
            <p
              className={`subtitle ${
                isDark ? "text-white" : "text-[var(--color-gray)]"
              }`}
            >
              © {new Date().getFullYear()} ООО Дабл-Ю. Все права защищены
            </p>
          </div>
        </div>

        <div className="col-span-3 hidden md:flex flex-col  gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link key={item.link} href={item.link}>
                <button className="relative cursor-pointer py-1 px-2 text-left hover:text-[var(--color-primary)] ">
                  {item.text}
                  <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] w-full transition-opacity duration-300 ${
                      isActive
                        ? isDark
                          ? "opacity-100 bg-white"
                          : "opacity-100 bg-[var(--color-black)]"
                        : "opacity-0"
                    }`}
                  />
                </button>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-1 md:gap-4 mx-auto">
          <Link href="tel:+79697399966 " className="w-full flex justify-center">
            <button className="cursor-pointer py-2 md:py-0">
              +7 969 739-99-66
            </button>
          </Link>
          <Link href="mailto:w11group@ya.ru" className=" flex justify-center">
            <button className="cursor-pointer py-2 md:py-0 ">
              w11group@ya.ru
            </button>
          </Link>
        </div>
        <div className="md:hidden mx-auto ">
          <Link
            href="/policy"
            className="subtitle md:pb-4 pb-2 flex justify-center pointer-events-auto relative z-10"
          >
            Правила использования сайта
          </Link>
          <p
            className={`subtitle-sm ${
              isDark ? "text-white" : "text-[var(--color-gray)]"
            }`}
          >
            © {new Date().getFullYear()} ООО Дабл-Ю. Все права защищены
          </p>
        </div>
      </PageSection>
    </footer>
  );
};

export default Footer;
