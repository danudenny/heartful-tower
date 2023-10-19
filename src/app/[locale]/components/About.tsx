import { Statistic } from "@/app/[locale]/components/Statistic";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { CldImage } from "next-cloudinary";
import { BiPlusCircle } from "react-icons/bi";
import { useMediaQuery } from "@react-hook/media-query";

interface AboutProps {
  reference: React.MutableRefObject<null>;
}

export const About = ({ reference }: AboutProps) => {
  const t = useTranslations("About");
  const [showDesc, setShowDesc] = useState(false);

  const isMobile = useMediaQuery("only screen and (max-width: 500px)");

  return (
    <>
      <div className="bg-hero" ref={reference}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center text-right">
            <div className="lg:pr-10">
              <h5
                className="mb-4 text-4xl font-extrabold leading-none text-white"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Perumnas IIDA Group
              </h5>
              <p
                className="mb-6 text-white text-lg"
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
                src="v1697712378/Group_1171274735_xzx2ux.png"
                alt="about image"
                width={600}
                height={600}
                priority={true}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              />
              {!isMobile && (
                <div className="absolute -mt-96 ml-96">
                  <BiPlusCircle
                    className="text-white cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
                    size={32}
                    onClick={() => setShowDesc(!showDesc)}
                  />
                  <p
                    className={`text-dark bg-tower px-2 py-1 font-bold rounded-md mt-2 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out ${
                      showDesc ? "" : "hidden"
                    }`}
                  >
                    Next Project
                  </p>
                </div>
              )}
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
              <h5
                className="mb-4 text-4xl font-extrabold leading-none text-white underline-with-svg"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-center"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                No.1 Share
              </h5>
              <p
                className="mb-6 text-white text-lg"
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
