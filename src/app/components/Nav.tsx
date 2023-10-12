"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    section: string | React.SetStateAction<null>,
  ) => {
    e.preventDefault();
    scrollToHero();
    // @ts-ignore
    setActiveLink(section);
  };

  const handleScrollToAbout = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<null>,
  ) => {
    e.preventDefault();
    scrollToAbout();
    // @ts-ignore
    setActiveLink(section);
  };

  const handleScrollToFacilities = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<null>,
  ) => {
    e.preventDefault();
    scrollToFacilities();
    // @ts-ignore
    setActiveLink(section);
  };

  const handleScrollToNews = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<null>,
  ) => {
    e.preventDefault();
    scrollToNews();
    // @ts-ignore
    setActiveLink(section);
  };

  const handleScrollToUnit = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | React.SetStateAction<null>,
  ) => {
    e.preventDefault();
    scrollToUnit();
    // @ts-ignore
    setActiveLink(section);
  };

  const sendToWhatsapp = `https://wa.me/+628975740504?text=${encodeURIComponent(
    "Terimakasih Telah Menghubungi Heartful Tower Bekasi. Tim Marketing Kami Akan Segera Menghubungi Anda.",
  )}`;

  return (
    <div
      className={`${
        isNavFixed ? "bg-opacity-90" : "bg-transparent"
      } fixed top-0 left-0 w-full transition-all duration-500 ease-in-out bg-white mx-auto z-50 lg:rounded-lg items-center`}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/heartful-logo.png"
              alt="logo"
              width={300}
              height={150}
              priority={true}
              className="w-auto h-8 sm:h-10"
            />
          </a>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="#"
                onClick={(e) => handleScrollToHero(e, "hero")}
                className={`font-bold tracking-wide ${
                  activeLink === "hero"
                    ? "text-white bg-primary rounded-full py-2 px-3"
                    : "text-gray-700"
                } transition-colors duration-200 hover:text-white`}
                aria-label="Home"
                title="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => handleScrollToAbout(e, "about")}
                className={`font-bold tracking-wide ${
                  activeLink === "about"
                    ? "text-white bg-primary rounded-full py-2 px-3"
                    : "text-gray-700"
                } transition-colors duration-200 hover:text-white`}
                href="/"
                aria-label="About Us"
                title="About Us"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Typical Floor"
                title="Typical Floor"
                onClick={(e) => handleScrollToUnit(e, "unit")}
                className={`font-bold tracking-wide ${
                  activeLink === "unit"
                    ? "text-white bg-primary rounded-full py-2 px-3"
                    : "text-gray-700"
                } transition-colors duration-200 hover:text-white`}
              >
                Typical Floor
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Facilities"
                title="Facilities"
                onClick={(e) => handleScrollToFacilities(e, "facilities")}
                className={`font-bold tracking-wide ${
                  activeLink === "facilities"
                    ? "text-white bg-primary rounded-full py-2 px-3"
                    : "text-gray-700"
                } transition-colors duration-200 hover:text-white`}
              >
                Facilities
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="News"
                title="News"
                onClick={(e) => handleScrollToNews(e, "news")}
                className={`font-bold tracking-wide ${
                  activeLink === "news"
                    ? "text-white bg-primary rounded-full py-2 px-3"
                    : "text-gray-700"
                } transition-colors duration-200 hover:text-white`}
              >
                News
              </a>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href={sendToWhatsapp}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-primary hover:bg-[#73B153] focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
                target="_blank"
              >
                Dapatkan Promo
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-primary focus:bg-primary"
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
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About Us"
                          title="About Us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Typical Floor"
                          title="Typical Floor"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          Typical Floor
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Facilities"
                          title="Facilities"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          Facilities
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="News"
                          title="News"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 border-b-2"
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href={sendToWhatsapp}
                          className="inline-flex mt-3 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-primary transition duration-200 rounded-full shadow-mtext-[#73B153] hover:bg-[#73B153] focus:shadow-outline focus:outline-none"
                          aria-label="Get Promo"
                          title="Get Promo"
                          target="_blank"
                        >
                          Dapatkan Promo
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