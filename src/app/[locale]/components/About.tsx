import { Statistic } from "@/app/[locale]/components/Statistic";
import { useMediaQuery } from "@react-hook/media-query";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
import { Space_Grotesk } from "next/font/google";
import React, { useState } from "react";

interface AboutProps {
  reference: React.MutableRefObject<null>;
}

const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const About = ({ reference }: AboutProps) => {
  const t = useTranslations("About");
  const [showDesc, setShowDesc] = useState(false);

  const isMobile = useMediaQuery("only screen and (max-width: 500px)");

  return (
    <>
      <div className="bg-hero" ref={reference}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center sm:text-right text-left">
            <div className="lg:pr-10">
              <h5
                className="mb-4 text-3xl font-extrabold leading-none text-white"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                {t("title1")}
              </h5>
              <p
                className={`mb-6 text-white text-lg ${space_grotesk.className}`}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                {t("p1")}
                <br />
                <br />
                {t("p2")}
              </p>
            </div>
            <div>
              <CldImage
                src="v1703483644/v_be_landscape_up_dec23-min_xbukxw.jpg"
                alt="about image"
                width={600}
                height={600}
                priority={false}
                quality={80}
                data-aos="fade-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-hero">
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div
              className={`flex p-10 bg-gray-100 drop-shadow-2xl shadow-gray-700 rounded-lg items-center gap-6 ${
                isMobile ? "flex-col" : "flex-row"
              }`}
            >
              <CldImage
                src="v1697706731/chart1_ypz3ce.png"
                alt="chart 1"
                width={isMobile ? 200 : 300}
                height={isMobile ? 200 : 600}
                priority={true}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              <CldImage
                src="v1697711595/chart2_luiyii.png"
                alt="chart 2"
                width={isMobile ? 150 : 200}
                height={isMobile ? 150 : 200}
                priority={true}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
            </div>
            <div className="lg:pr-10">
              <h5 className="font-black text-white text-4xl mb-2">
                {t("title2")}
              </h5>
              <p
                className={`mb-6 text-white text-lg ${space_grotesk.className}`}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                {t("p3")}
              </p>
            </div>
          </div>
          <Statistic />
        </div>
      </div>
    </>
  );
};
