import PolicyContent from "@/components/sections/PolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Политика Конфиденциальности ДАБЛ-Ю | Архитектурное бюро в Санкт-Петербурге",
  description:
    "Свежие новости архитектурного бюро ДАБЛ-Ю: проекты, события, публикации и достижения команды. Архитектура, дизайн интерьеров, идеи и вдохновение.",
  alternates: {
    canonical: "/news",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolicyPage() {
  return (
    <>
      <PolicyContent />
    </>
  );
}
