"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LanguageSelector } from "@/app/[locale]/components/LanguageSelector";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavProps {
  scrollToHero: () => any;
  scrollToAbout: () => any;
  scrollToFacilities: () => any;
  scrollToNews: () => any;
  scrollToUnit: () => any;
}

export const Nav = ({
  scrollToHero,
  scrollToAbout,
  scrollToFacilities,
  scrollToNews,
  scrollToUnit,
}: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const t = useTranslations("Nav");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToHero = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<string>,
  ) => {
    e.preventDefault();
    scrollToHero();
    setActiveLink(section);
  };

  const handleScrollToAbout = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<string>,
  ) => {
    e.preventDefault();
    scrollToAbout();
    setActiveLink(section);
  };

  const handleScrollToFacilities = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<string>,
  ) => {
    e.preventDefault();
    scrollToFacilities();
    setActiveLink(section);
  };

  const handleScrollToNews = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<string>,
  ) => {
    e.preventDefault();
    scrollToNews();
    setActiveLink(section);
  };

  const handleScrollToUnit = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<string>,
  ) => {
    e.preventDefault();
    scrollToUnit();
    setActiveLink(section);
  };

  const sendToWhatsapp = `https://wa.me/+6281119933099?text=${encodeURIComponent(
    "Terimakasih Telah Menghubungi Heartful Tower Bekasi. Tim Marketing Kami Akan Segera Menghubungi Anda.",
  )}`;

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out mx-auto z-40 lg:rounded-lg items-center ${
        isNavFixed ? "bg-opacity-90 bg-white" : "bg-transparent"
      }`}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            {isNavFixed ? (
              <div className="flex items-center gap-3">
                <Image
                  src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697274785/heartful-logo_kewplr_1_uzfx0i.png"
                  alt="logo"
                  width={400}
                  height={150}
                  priority={true}
                  className="w-auto h-10 sm:h-10"
                />
                <h3 className="text-bold uppercase tracking-tighter text-sm sm:text-sm font-semibold text-dark sm:leading-none mt-1 mb-1 sm:mb-0 mr-2 sm:mr-0">
                  Heartful Tower <br /> Bekasi
                </h3>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Image
                  src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697274718/HEARTFUL-TOWER-LOGO-White_1_gnev4v.png"
                  alt="logo"
                  width={400}
                  height={150}
                  priority={true}
                  className="w-auto h-10 sm:h-10"
                />
                <h3 className="text-bold uppercase tracking-tighter text-sm sm:text-sm font-semibold text-white sm:leading-none mt-1 mb-1 sm:mb-0 mr-2 sm:mr-0">
                  Heartful Tower <br /> Bekasi
                </h3>
              </div>
            )}
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="#"
                onClick={(e) => handleScrollToHero(e, "hero")}
                className={`font-bold tracking-wide ${
                  activeLink === "hero"
                    ? "text-white bg-dark rounded-full py-2 px-3"
                    : "text-dark"
                } transition-colors duration-200 hover:text-white`}
                aria-label="Home"
                title="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => handleScrollToAbout(e, "about")}
                className={`font-bold tracking-wide ${
                  activeLink === "about"
                    ? "text-white bg-dark rounded-full py-2 px-3"
                    : "text-dark"
                } transition-colors duration-200 hover:text-white`}
                href="/"
                aria-label="About Us"
                title="About Us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Facilities"
                title="Facilities"
                onClick={(e) => handleScrollToFacilities(e, "facilities")}
                className={`font-bold tracking-wide ${
                  activeLink === "facilities"
                    ? "text-white bg-dark rounded-full py-2 px-3"
                    : "text-dark"
                } transition-colors duration-200 hover:text-white`}
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Typical Floor"
                title="Typical Floor"
                onClick={(e) => handleScrollToUnit(e, "unit")}
                className={`font-bold tracking-wide ${
                  activeLink === "unit"
                    ? "text-white bg-dark rounded-full py-2 px-3"
                    : "text-dark"
                } transition-colors duration-200 hover:text-white`}
              >
                Units
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="News"
                title="News"
                onClick={(e) => handleScrollToNews(e, "news")}
                className={`font-bold tracking-wide ${
                  activeLink === "news"
                    ? "text-white bg-dark rounded-full py-2 px-3"
                    : "text-dark"
                } transition-colors duration-200 hover:text-white`}
              >
                News
              </Link>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <LanguageSelector />
            </li>
            <li>
              <Link
                href={sendToWhatsapp}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-dark hover:bg-[#73B153] focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
                target="_blank"
              >
                {t("get_promo")}
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-dark focus:bg-dark"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-blue-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-dark transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About Us"
                          title="About Us"
                          className="font-medium tracking-wide text-dark transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Facilities"
                          title="Facilities"
                          className="font-medium tracking-wide text-dark transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          Facilities
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Typical Floor"
                          title="Typical Floor"
                          className="font-medium tracking-wide text-dark transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          Units
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="News"
                          title="News"
                          className="font-medium tracking-wide text-dark transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href={sendToWhatsapp}
                          className="inline-flex mt-3 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-dark transition duration-200 rounded-full shadow-mtext-[#73B153] hover:bg-[#73B153] focus:shadow-outline focus:outline-none"
                          aria-label="Get Promo"
                          title="Get Promo"
                          target="_blank"
                        >
                          {t("get_promo")}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
