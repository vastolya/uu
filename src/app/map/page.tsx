import React from "react";
import { PageSection } from "@components/layout/PageSection";

const Map = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="h-20"></div>
      <PageSection className="py-10 ">
        <div className="col-span-4">
          <h1 className="">Контакты</h1>
        </div>
        <div className="col-span-4">
          <h3 className="pb-6">w11group@ya.ru</h3>
          <div className="pb-[6.75rem]">
            <div></div>
            <p className="subtitle">+7 969 739-99-66</p>
          </div>
          <h3>Санкт-Петербург, Невский проспект, дом 72</h3>
        </div>
      </PageSection>
      <div className="w-full min-h-screen bg-red-500 absolute z-50"></div>
    </div>
  );
};

export default Map;
