import { Statistic } from "@/app/components/Statistic";
import Image from "next/image";
import React from "react";

interface AboutProps {
  reference: React.MutableRefObject<null>;
}

export const About = ({ reference }: AboutProps) => {
  return (
    <div className="bg-hero" ref={reference}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-white">
              Perumnas IIDA Group
            </h5>
            <p className="mb-6 text-white">
              Perumnas IIDA Group didirikan di Indonesia sejak October 2017 yang
              merupakan anak usaha dari IIDA SANGYO Co., Ltd. dan PT Propernas
              Griya Utama (anak perusahaan dari PERUM PERUMNAS). <br />
              <br />
              IIDA SANGYO Co., Ltd. merupakan pengembang property ternama di
              bawah naungan IIDA Group Holdings yang merupakan Perusahaan Tbk di
              Jepang. IIDA Group telah menyediakan lebih dari 46.000 tempat
              tinggal pertahunnya, yang mana sekitar 30% penduduk Jepang
              memiilih tempat tinggal yang diproduksi oleh IIDA Group.
            </p>
            <hr className="mb-5 border-gray-300" />
            <Image
              src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167103/heartful/stat_rnwdxc.png"
              width={500}
              height={500}
              alt="stat"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167095/heartful/about-image_agh8st.png"
              alt=""
              className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-[500px]"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Statistic />
      </div>
    </div>
  );
};
