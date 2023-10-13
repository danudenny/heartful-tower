"use client";
import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

interface UnitsProps {
  reference: React.MutableRefObject<null>;
}

export const Units = ({ reference }: UnitsProps) => {
  const [selectedTab, setSelectedTab] = useState("Studio");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [toggler, setToggler] = useState(false);

  const tabs = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openLightbox = (imageSrc: React.SetStateAction<string>) => {
    setSelectedImage(imageSrc);
    setToggler(!toggler);
  };

  return (
    <div
      className="justify-center items-center flex flex-col space-y-4 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 h-2/3 bg-contour"
      ref={reference}
    >
      {selectedImage && selectedTab === "Studio" && (
        <FsLightbox toggler={toggler} sources={[selectedImage]} />
      )}
      {selectedImage && selectedTab === "1 Bedroom" && (
        <FsLightbox toggler={toggler} sources={[selectedImage]} />
      )}
      {selectedImage && selectedTab === "2 Bedroom" && (
        <FsLightbox toggler={toggler} sources={[selectedImage]} />
      )}
      {selectedImage && selectedTab === "3 Bedroom" && (
        <FsLightbox toggler={toggler} sources={[selectedImage]} />
      )}
      <div className="bg-tower dark:bg-gray-900 rounded-lg drop-shadow-2xl shadow-gray-700">
        <div className="px-6 pb-12 mx-auto">
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                Select Unit
              </h1>

              <div className="mt-4 space-y-4 lg:mt-8 flex flex-col items-start">
                {isMobile ? (
                  <select
                    value={selectedTab}
                    onChange={(e) => handleTabClick(e.target.value)}
                    className="w-full py-2 px-3 bg-white text-[#333] rounded-full"
                  >
                    {tabs.map((tab) => (
                      <option key={tab} value={tab}>
                        {tab}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="flex flex-col items-start gap-4">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`cursor-pointer ${
                          selectedTab === tab
                            ? "text-[#73B153] font-bold"
                            : "text-[#333]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div>
                {selectedTab === "Studio" && (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                    <div>
                      <img
                        className="object-cover w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167094/heartful/unit/studio_j5ksb6.jpg"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167094/heartful/unit/studio_j5ksb6.jpg",
                          )
                        }
                      />
                    </div>

                    <div>
                      <img
                        className="object-contain w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697216861/Unit-Studio-A-21_qrolie.png"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697216861/Unit-Studio-A-21_qrolie.png",
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                {selectedTab === "1 Bedroom" && (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                    <div>
                      <img
                        className="object-cover w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/1br_jjf5mx.jpg"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/1br_jjf5mx.jpg",
                          )
                        }
                      />
                    </div>

                    <div>
                      <img
                        className="object-contain w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/v1697216861/Unit-1-BR-A_nectvc.png"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/v1697216861/Unit-1-BR-A_nectvc.png",
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                {selectedTab === "2 Bedroom" && (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                    <div>
                      <img
                        className="object-cover w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/2br_bdqnbv.jpg"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/2br_bdqnbv.jpg",
                          )
                        }
                      />
                    </div>

                    <div>
                      <img
                        className="object-contain w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/v1697216861/Unit-2-BR-A-Nett37_ivezfr.png"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/v1697216861/Unit-2-BR-A-Nett37_ivezfr.png",
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                {selectedTab === "3 Bedroom" && (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                    <div>
                      <img
                        className="object-cover w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/3br_wts5o6.jpg"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/3br_wts5o6.jpg",
                          )
                        }
                      />
                    </div>

                    <div>
                      <img
                        className="object-contain w-full rounded-lg h-52 sm:h-96"
                        src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697216862/Unit-3-BR_fjrz75.png"
                        alt=""
                        onClick={() =>
                          openLightbox(
                            "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697216862/Unit-3-BR_fjrz75.png",
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
