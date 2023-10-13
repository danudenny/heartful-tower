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

  const cloudinaryUrl = `https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167085/heartful/facilities/`;

  const images = [
    `${cloudinaryUrl}fitness_k5yjea.jpg`,
    `${cloudinaryUrl}kindergarten_qvrzqh.jpg`,
    `${cloudinaryUrl}multifunction_hrthy4.jpg`,
    `${cloudinaryUrl}zen-garden_jugqc9.jpg`,
    `${cloudinaryUrl}pool_fpobpi.jpg`,
    `${cloudinaryUrl}mushola_hu1fjg.jpg`,
    `${cloudinaryUrl}pool-2_tq04wf.jpg`,
    `${cloudinaryUrl}zen-garden-2_ug09s6.jpg`,
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
                src={`${cloudinaryUrl}fitness_k5yjea.jpg`}
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
                src={`${cloudinaryUrl}kindergarten_qvrzqh.jpg`}
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
                src={`${cloudinaryUrl}multifunction_hrthy4.jpg`}
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
                src={`${cloudinaryUrl}zen-garden_jugqc9.jpg`}
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
                src={`${cloudinaryUrl}pool_fpobpi.jpg`}
                quality={70}
                width={600}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => setToggler(!toggler)}
                alt="gallery"
                src={`${cloudinaryUrl}mushola_hu1fjg.jpg`}
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
