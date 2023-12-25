"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import "hero-slider/dist/index.css";
import { JP } from "country-flag-icons/react/3x2";
import { FaCircleInfo } from "react-icons/fa6";
import { CldImage } from "next-cloudinary";

interface HeroProps {
  reference: React.MutableRefObject<null>;
}

export const Hero = ({ reference }: HeroProps) => {
  const t = useTranslations("Hero");
  const sendToWhatsapp = `https://wa.me/+6281119933099?text=${encodeURIComponent(
    "Terimakasih Telah Menghubungi Heartful Tower Bekasi. Tim Marketing Kami Akan Segera Menghubungi Anda.",
  )}`;

  // get parameters
  const params = useParams();
  const { locale } = params;
  const isJp = locale === "jp";

  const isMobile = useMediaQuery("only screen and (max-width: 500px)");

  // @ts-ignore
  return (
    <AnimatePresence>
      <div
        className="relative flex flex-col pt-10 lg:pt-16 lg:flex-col lg:pb-0 h-screen"
        ref={reference}
      >
        {isMobile ? (
          <HeroSlider
            className="h-full w-full absolute inset-0 object-cover"
            autoplay
            controller={{
              initialSlide: 1,
              slidingDuration: 500,
              slidingDelay: 100,
            }}
          >
            <Slide
              background={{
                backgroundImageSrc:
                  "https://res.cloudinary.com/killtdj/image/upload/q_auto/o_80/v1703485212/v_be_landscape_up_dec23-min_itcfh4.jpg",
              }}
            >
              <motion.div
                className="relative flex flex-col w-full max-w-xl px-4 pt-64 sm:pt-0 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl text-white"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                <div className="flex flex-row-reverse">
                  <div className="lg:mr-[1000px] lg:mt-[250px] absolute -mt-36">
                    <CldImage
                      alt="bg hero"
                      src="v1700476094/badge_hero-removebg-preview_rfxmui.png"
                      width={200}
                      height={200}
                      priority={true}
                    />
                  </div>
                  <div className="mb-16 mt-20 lg:my-40 lg:max-w-full lg:pr-5 text-right">
                    <h2 className="mb-5 font-black text-4xl tracking-tight text-dark sm:text-8xl sm:leading-none shadow-black drop-shadow-xl">
                      The Desire
                      <br />
                      To
                      <span className="text-danger-dark italic">Thrive</span>
                    </h2>
                    <p className="pr-5 text-dark md:text-lg lg:text-2xl drop-shadow-2xl shadow-gray-700">
                      {t("japan_style")} <br />
                      {t("first_price")} <br />
                      {t("nup")}
                    </p>

                    <div className="flex items-center mt-10 lg:text-2xl justify-end">
                      <a
                        href={sendToWhatsapp}
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-dark hover:bg-success-alt focus:shadow-outline focus:outline-none"
                      >
                        {t("get_information")}{" "}
                        <FaCircleInfo className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Slide>
            <Slide
              background={{
                backgroundImageSrc:
                  "https://res.cloudinary.com/killtdj/image/upload/w_1000/q_auto/o_80/v1698671047/IMG_5955_iftlae.jpg",
              }}
            >
              <motion.div
                className="relative flex flex-col w-full max-w-xl px-4 pt-64 sm:pt-0 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl text-white"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                <div className="flex">
                  <div className="mb-16 mt-20 lg:my-40 lg:max-w-full lg:pr-5">
                    <h2 className="mb-5 font-black text-4xl tracking-tight text-dark sm:text-8xl sm:leading-none shadow-white drop-shadow-xl">
                      The Desire
                      <br />
                      To<span className="text-danger-dark italic">Thrive</span>
                    </h2>
                    <p className="pr-5 text-dark md:text-lg lg:text-2xl drop-shadow-2xl shadow-gray-700">
                      {t("welcome")} <br />
                      {t("best_prices")}
                    </p>
                    <div className="flex mb-5 gap-2">
                      <p className="text-dark md:text-lg lg:text-2xl">
                        {t("japan_developer")}
                      </p>
                      {!isJp && <JP width={30} height={30} />}
                    </div>

                    <div className="flex items-center mt-10 lg:text-2xl">
                      <a
                        href={sendToWhatsapp}
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-dark hover:bg-success-alt focus:shadow-outline focus:outline-none"
                      >
                        {t("get_information")}{" "}
                        <FaCircleInfo className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="lg:ml-[1000px] lg:mt-[250px] absolute -mt-36">
                    <CldImage
                      alt="bg hero"
                      src="v1700476094/badge_hero-removebg-preview_rfxmui.png"
                      width={200}
                      height={200}
                      priority={true}
                    />
                  </div>
                </div>
              </motion.div>
            </Slide>
          </HeroSlider>
        ) : (
          <HeroSlider
            className="h-full w-full absolute inset-0 object-cover"
            autoplay
            controller={{
              initialSlide: 1,
              slidingDuration: 500,
              slidingDelay: 100,
            }}
          >
            <Slide
              background={{
                backgroundImageSrc:
                  "https://res.cloudinary.com/killtdj/image/upload/w_2500/q_auto/o_70/v1703483644/v_be_landscape_up_dec23-min_xbukxw.jpg",
              }}
            >
              <motion.div
                className="relative flex flex-col w-full max-w-xl px-4 pt-64 sm:pt-0 mx-auto md:px-0 mt-20 lg:px-8 lg:max-w-screen-xl text-white"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                <div className="flex flex-row-reverse">
                  <div className="lg:mr-[1000px] lg:mt-[250px] absolute -mt-36">
                    <CldImage
                      alt="bg hero"
                      src="v1700476094/badge_hero-removebg-preview_rfxmui.png"
                      width={200}
                      height={200}
                      priority={true}
                    />
                  </div>
                  <div className="mb-16 mt-20 lg:my-40 lg:max-w-full lg:pr-5 text-right">
                    <h2 className="mb-5 font-black text-4xl tracking-tight text-white sm:text-8xl sm:leading-none shadow-black drop-shadow-xl">
                      The Desire
                      <br />
                      To
                      <span className="text-dark italic">Thrive</span>
                    </h2>
                    <p className="pr-5 text-white md:text-lg lg:text-2xl drop-shadow-2xl shadow-gray-700">
                      {t("japan_style")} <br />
                      {t("first_price")} <br />
                      {t("nup")}
                    </p>

                    <div className="flex items-center mt-10 lg:text-2xl justify-end">
                      <a
                        href={sendToWhatsapp}
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-dark hover:bg-success-alt focus:shadow-outline focus:outline-none"
                      >
                        {t("get_information")}{" "}
                        <FaCircleInfo className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Slide>
            <Slide
              background={{
                backgroundImageSrc:
                  "https://res.cloudinary.com/killtdj/image/upload/w_2500/q_auto/o_70/v1697788758/bird_eye_stand_landscape_1_2_ybacti.jpg",
              }}
            >
              <motion.div
                className="relative mt-20 flex flex-col w-full max-w-xl px-4 pt-64 sm:pt-0 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl text-white"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                <div className="flex">
                  <div className="mb-16 mt-20 lg:my-40 lg:max-w-full lg:pr-5">
                    <h2 className="mb-5 font-black text-4xl tracking-tight text-dark sm:text-8xl sm:leading-none shadow-white drop-shadow-xl">
                      The Desire
                      <br />
                      To<span className="text-danger-dark italic">Thrive</span>
                    </h2>
                    <p className="pr-5 text-dark md:text-lg lg:text-2xl drop-shadow-2xl shadow-gray-700">
                      {t("welcome")} <br />
                      {t("best_prices")}
                    </p>
                    <div className="flex mb-5 gap-2">
                      <p className="text-dark md:text-lg lg:text-2xl">
                        {t("japan_developer")}
                      </p>
                      {!isJp && <JP width={30} height={30} />}
                    </div>

                    <div className="flex items-center mt-10 lg:text-2xl">
                      <a
                        href={sendToWhatsapp}
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-dark hover:bg-success-alt focus:shadow-outline focus:outline-none"
                      >
                        {t("get_information")}{" "}
                        <FaCircleInfo className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="lg:ml-[1000px] lg:mt-[250px] absolute -mt-36">
                    <CldImage
                      alt="bg hero"
                      src="v1700476094/badge_hero-removebg-preview_rfxmui.png"
                      width={200}
                      height={200}
                      priority={true}
                    />
                  </div>
                </div>
              </motion.div>
            </Slide>
          </HeroSlider>
        )}
      </div>
    </AnimatePresence>
  );
};
