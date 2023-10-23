"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { CldImage } from "next-cloudinary";

export const Siteplan = () => {
  const t = useTranslations("Siteplan");
  const [open, setOpen] = useState(false);

  const siteplanImage = [
    {
      src: "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167105/heartful/siteplan_ioyqjo.png",
    },
  ];

  return (
    <section className="bg-tower dark:bg-gray-900">
      <div className="sm:flex-row flex-col flex items-center px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:container">
        <div
          className="lg:mt-0 lg:w-2/3 w-full lg:col-span-5 lg:flex cursor-pointer"
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="absolute text-success font-black uppercase jusify-center bottom-10 left-20">
            <p className="text-2xl">Greenery Area</p>
            <p className="text-5xl">30%</p>
          </div>
          <CldImage
            width="900"
            height="600"
            src="v1697167105/heartful/siteplan_ioyqjo.png"
            alt=""
            onClick={() => setOpen(true)}
          />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7 bg-gray-200 rounded-lg p-12 drop-shadow-2xl shadow-gray-700">
          <h1
            className="max-w-2xl mb-4 text-4xl text-dark font-black uppercase tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Heartful Tower Siteplan
          </h1>
          <p
            className="max-w-2xl mb-6 font-light text-dark lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            {t("p1")}
          </p>
        </div>
      </div>
      <Lightbox
        open={open}
        slides={siteplanImage}
        close={() => setOpen(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />
    </section>
  );
};
