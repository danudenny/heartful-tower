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
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-dark font-black uppercase tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Heartful Tower Siteplan
          </h1>
          <p className="max-w-2xl mb-6 font-light text-dark lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400">
            Discover the thoughtfully designed site plan of Heartful Tower in
            Bekasi, <br />
            offering a harmonious living environment with convenient amenities,{" "}
            <br />
            green spaces, and strategic building arrangements. <br />
            Your guide to a vibrant community in the heart of Bekasi.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <CldImage
            width="600"
            height="600"
            src="v1697167105/heartful/siteplan_ioyqjo.png"
            alt=""
          />
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
