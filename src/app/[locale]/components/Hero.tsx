"use client";
import Image from "next/image";
import React from "react";
import { JP } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

interface HeroProps {
  reference: React.MutableRefObject<null>;
}

export const Hero = ({ reference }: HeroProps) => {
  const t = useTranslations("Hero");
  const sendToWhatsapp = `https://wa.me/+6281119933099?text=${encodeURIComponent(
    "Terimakasih Telah Menghubungi Heartful Tower Bekasi. Tim Marketing Kami Akan Segera Menghubungi Anda.",
  )}`;

  return (
    <AnimatePresence>
      <div
        className="relative flex flex-col-reverse pt-16 lg:pt-16 lg:flex-col lg:pb-0 h-screen bg-hero"
        ref={reference}
      >
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-2/5 lg:max-w-full lg:absolute xl:px-0"
        >
          <Image
            src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167096/heartful/bird-eye-stand-3_ap8pzl.png"
            alt="Hero Image"
            width={800}
            height={300}
            priority={true}
            quality={80}
            className="object-cover w-full object-bottom h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          />
        </div>
        <motion.div
          className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
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
            <h2 className="mb-5 font-black text-4xl tracking-tight text-white sm:text-8xl sm:leading-none">
              The Desire
              <br />
              To<span className="text-dark italic">Thrive</span>
            </h2>
            <p className="pr-5 text-white md:text-lg lg:text-2xl drop-shadow-2xl shadow-gray-700">
              {t("welcome")} <br />
              {t("best_prices")}
            </p>
            <div className="flex mb-5 gap-2">
              <p className="text-white md:text-lg lg:text-2xl">
                {t("japan_developer")}
              </p>
              <JP width={30} height={30} />
            </div>

            <div className="flex flex-col items-start mt-10 z-30 gap-3">
              <p className="italic font-medium text-dark">Developed By : </p>
              <img
                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167100/heartful/Japanese-No.1-Developer_fme4hi.png"
                alt="logo-japanese-developer"
                width="200"
                height="100"
              />
            </div>
            <div className="flex items-center mt-10 lg:text-2xl">
              <a
                href={sendToWhatsapp}
                target="_blank"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-dark hover:bg-success-alt focus:shadow-outline focus:outline-none"
              >
                {t("get_information")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
