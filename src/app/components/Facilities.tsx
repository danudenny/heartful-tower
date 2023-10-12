import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

interface FacilitiesProps {
  reference: React.MutableRefObject<null>;
}

export const Facilities = ({ reference }: FacilitiesProps) => {
  const [toggler, setToggler] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const images = [
    "/facilities/fitness.jpg",
    "/facilities/kindergarten.jpg",
    "/facilities/multifunction.jpg",
    "/facilities/zen-garden.jpg",
    "/facilities/pool.jpg",
    "/facilities/mushola.jpg",
    "/facilities/pool-2.jpg",
    "/facilities/zen-garden-2.jpg",
  ];

  return (
    <section className="text-gray-600 body-font" ref={reference}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap items-center">
          <h1 className="sm:text-3xl text-2xl font-black title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Balance In Your Life
          </h1>
          <p className="lg:w-1/3 mx-auto leading-relaxed text-base mr-0 text-end">
            Nikmati keseimbangan hidup anda dengan fasilitas yang telah tersedia
            untuk para penguhni apartemen Heartful Tower Bekasi.
          </p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                className="w-full object-cover h-full object-center block cursor-pointer"
                src="/facilities/fitness.jpg"
                width={600}
                height={300}
                quality={70}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                className="w-full object-cover h-full object-center block cursor-pointer"
                src="/facilities/kindergarten.jpg"
                width={600}
                height={300}
                quality={70}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                className="w-full object-cover h-full object-center block cursor-pointer"
                src="/facilities/multifunction.jpg"
                width={600}
                height={300}
                quality={70}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                className="w-full object-cover h-full object-center block cursor-pointer"
                src="/facilities/zen-garden.jpg"
                width={600}
                height={300}
                quality={70}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                className="w-full object-cover h-full object-center block cursor-pointer"
                src="/facilities/pool.jpg"
                quality={70}
                width={600}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                src="/facilities/mushola.jpg"
                width={600}
                height={300}
                quality={70}
                className="w-full object-cover h-full object-center block cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={images} />
    </section>
  );
};
