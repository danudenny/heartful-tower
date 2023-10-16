import Image from "next/image";
import { useTranslations } from "next-intl";

export const Siteplan = () => {
  const t = useTranslations("Siteplan");

  return (
    <div className="bg-tower">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative font-black tracking-wider text-6xl hidden md:block sm:block uppercase">
                    {t("siteplan")}
                  </span>
                </span>
              </h2>
            </div>
            <div className="flex">
              <Image
                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167105/heartful/siteplan_ioyqjo.png"
                width={400}
                height={300}
                quality={100}
                alt="siteplan"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
