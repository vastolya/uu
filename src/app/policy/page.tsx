import PolicyContent from "@/components/sections/PolicyContent";
import { canonical } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Политика Конфиденциальности ДАБЛ-Ю | Архитектурное бюро в Санкт-Петербурге",
  description:
    "Политика обработки персональных данных архитектурного бюро ДАБЛ-Ю.",
  alternates: { canonical: canonical("/policy") },
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
