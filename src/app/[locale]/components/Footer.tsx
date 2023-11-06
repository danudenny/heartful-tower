import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { JP } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Hero");
  return (
    <div className="bg-hero">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697274718/HEARTFUL-TOWER-LOGO-White_1_gnev4v.png"
                  alt="logo"
                  width={300}
                  height={150}
                  priority={true}
                  className="w-auto h-10 sm:h-10"
                />
                <h3 className="text-bold uppercase tracking-tighter text-sm sm:text-lg font-semibold text-white sm:leading-none mt-1 mb-1 sm:mb-0 mr-2 sm:mr-0">
                  Heartful Tower <br /> Bekasi
                </h3>
              </div>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="pr-5 text-base drop-shadow-2xl shadow-gray-700">
                {t("welcome")} <br />
                {t("best_prices")}
              </p>
              <div className="flex mb-5 gap-2">
                <p className="text-base">{t("japan_developer")}</p>
                <JP width={30} height={30} />
              </div>

              <div>
                <span>Developed by:</span>
              </div>
              <div className="flex items-center mt-1 z-30 gap-2">
                <img
                  src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167101/heartful/Logo-IIDA_reok4x.png"
                  alt="logo-iida"
                  width="100"
                  height="20"
                />
                <img
                  src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167100/heartful/Japanese-No.1-Developer_fme4hi.png"
                  alt="logo-japanese-developer"
                  width="150"
                  height="50"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                (021) 3987 1188
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Whatsapp:</p>
              <a
                href="wa.me/6281119933099"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +6281119933099
              </a>
            </div>
            <div className="flex flex-col">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://maps.app.goo.gl/U3daX3YBPtUW8CMa7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <p className="mt-1">
                  Revo Mall
                  <br />
                  Ruko No. 55, Lt. UG Kios No 35 - 36
                </p>
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Follow Us
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://facebook.com"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/heartfultowerbekasi/"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@heartfultower"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/in/heartful-tower"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright {new Date().getFullYear()} Heartful Tower. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
