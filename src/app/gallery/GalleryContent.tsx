import { PageSection } from "@/components/layout/PageSection";
import IconTg from "@/components/icons/IconTg";
import IconWU from "@/components/icons/IconWU";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/image";

interface GalleryContentProps {
  arts: {
    _id: string;
    title: string;
    material: string;
    size: string;
    image?: object;
    type: string;
  }[];
}

const GalleryContent = ({ arts }: GalleryContentProps) => {
  return (
    <>
      <div className="h-14 md:h-20"></div>
      <PageSection className="px-4 md:px-5 pt-5 md:pt-10 pb-[52px] md:pb-20 md:gap-y-10 flex flex-col md:flex-row">
        <h1 className="col-span-4 pb-2 md:pb-0">Галерея авторской живописи</h1>
        <div className="col-span-2 col-start-7 flex flex-col justify-between ">
          <div className="hidden md:flex gap-4 items-center">
            <div className="flex gap-2 w-full md:w-fit ">
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)] cursor-pointer"
              >
                <IconWU />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-3 bg-[var(--color-primary)] rounded-[var(--radius-sm)]  cursor-pointer"
              >
                <IconTg />
              </Link>
            </div>
            <p className="subtitle select-text">+7 969 739-99-66</p>
          </div>

          <p className="subtitle pb-8 mdLpb-0">
            Картины, созданные архитектором бюро — вне чертежей и планов.
            <strong> Можно не только рассмотреть, но и приобрести</strong>
          </p>
        </div>
        {arts.map((item, index) => (
          <div
            className={`col-span-2 ${index == arts.length - 1 ? "pb-0" : "pb-5 md:pb-0"} `}
            key={item._id}
          >
            <div className=" md:h-[20.75rem] h-[288px] md:w-[20.75rem] rounded-[var(--radius-sm)] mb-2 overflow-hidden relative">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  fill
                  className="hover:scale-120 hover:grayscale transition-all duration-300 object-cover"
                  priority
                />
              )}
            </div>
            <p className="subtitle-bold pb-1">{item.title}</p>
            <div className="flex justify-between subtitle text-[var(--color-gray)]">
              <p>
                {item.material} / {item.type}
              </p>
              <p>{item.size}</p>
            </div>
          </div>
        ))}
      </PageSection>
    </>
  );
};

export default GalleryContent;
