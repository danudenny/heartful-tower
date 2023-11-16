"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { JP } from "country-flag-icons/react/3x2";
import { AnimatePresence, motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

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
  
  return (
    <AnimatePresence>
      <div
        className="relative flex flex-col pt-10 lg:pt-16 lg:flex-col lg:pb-0 h-screen"
        ref={reference}
      >
        {isMobile ? (
          <CldImage
            alt="bg hero"
            src="v1698671047/IMG_5955_iftlae.jpg"
            width={1920}
            height={1024}
            priority={true}
            className="absolute inset-0 object-cover w-full h-full opacity-70"
          />
        ) : (
          <CldImage
            alt="bg hero"
            src="v1697788758/bird_eye_stand_landscape_1_2_ybacti.jpg"
            width={1920}
            height={1024}
            priority={true}
            className="absolute inset-0 object-cover w-full h-full"
          />
        )}

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
          <div className="mb-16 lg:my-40 lg:max-w-full lg:pr-5">
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

            {/*<div className="flex flex-col items-start mt-10 z-30 gap-3">*/}
            {/*  <p className="italic font-medium text-dark">Developed By : </p>*/}
            {/*  <img*/}
            {/*    src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167100/heartful/Japanese-No.1-Developer_fme4hi.png"*/}
            {/*    alt="logo-japanese-developer"*/}
            {/*    width="200"*/}
            {/*    height="100"*/}
            {/*  />*/}
            {/*</div>*/}
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
