"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";

export const Units = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (linkName: SetStateAction<null>) => {
    setActiveLink(linkName);
  };
  return (
    <div className="unit-container bg-primary">
      <div className="units flex flex-col items-center bg-primary">
        <div className="flex container items-center justify-between mx-auto mt-10">
          <div className="flex items-center gap-5">
            <img
              src="/header-title.svg"
              alt="header-logo"
              width={70}
              height={122}
            />
            <div className="facilities-title">
              <h1>
                Our <br />
                <span>Units</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="z-40">
          <section>
            <div className="container px-6 mx-auto">
              <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                <div className="lg:mx-12">
                  <div className="mt-4 space-y-4 lg:mt-8 justify-center">
                    <button className="block text-[#A5805B] dark:text-[#A5805B] font-bold bg-white px-5 py-2 rounded-full">
                      STUDIO
                    </button>
                    <button className="block text-white dark:text-white hover:text-[#A5805B] hover:bg-white hover:px-5 hover:py-2 hover:rounded-full text-center">
                      1 Bed Room
                    </button>
                    <button className="block text-white dark:text-white hover:text-[#A5805B] hover:bg-white hover:px-5 hover:py-2 hover:rounded-full text-center">
                      2 Bed Room
                    </button>
                    <button className="block text-white dark:text-white hover:text-[#A5805B] hover:bg-white hover:px-5 hover:py-2 hover:rounded-full text-center">
                      3 Bed Room
                    </button>
                  </div>
                </div>

                <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                  <div className="">
                    <div>
                      <Image
                        src="/unit/studio.jpg"
                        alt=""
                        width={700}
                        height={0}
                        objectFit="cover"
                        quality="100"
                        placeholder="blur"
                        blurDataURL="/unit/studio.jpg"
                        loading="eager"
                        decoding="async"
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute -bottom-44 right-96 mb-4 ml-4">
                        <img
                          alt="circle-arrow"
                          src="/circle-arrow-top-left.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="unit-big-1">
          <h1>UNITS</h1>
        </div>
        <div className="unit-big-2">
          <h1>OUR</h1>
        </div>
      </div>
    </div>
  );
};
