import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио ДАБЛ-Ю | Архитектура и дизайн интерьеров",
  description:
    "Реализованные проекты бюро ДАБЛ-Ю: архитектура, интерьеры, общественные пространства.",
  alternates: {
    canonical: "/cases",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Cases = () => {
  return (
    <>
      <div className="h-20"></div>
      <h1>Cases</h1>
    </>
  );
};

export default Cases;
