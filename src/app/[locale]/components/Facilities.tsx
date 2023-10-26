import React from "react";
import { useTranslations } from "next-intl";
import Carousel from "@/app/[locale]/components/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";

interface IFacilitiesProps {
  reference: React.MutableRefObject<null>;
}

export const Facilities = ({ reference }: IFacilitiesProps) => {
  const t = useTranslations("Facilities");

  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
  const SLIDE_COUNT = 7;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="text-gray-600 body-font bg-tower" ref={reference}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap items-center">
          <h1 className="sm:text-3xl text-2xl font-black title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            {t("title")}
          </h1>
          <p className="lg:w-1/3 mx-auto leading-relaxed text-base mr-0 text-end">
            {t("desc")}
          </p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="relative flex items-center justify-center w-full dark:text-gray-50">
            <Carousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};
