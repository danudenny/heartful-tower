import Image from "next/image";
import React from "react";

interface HeroProps {
  reference: React.MutableRefObject<null>;
}

export const Hero = ({ reference }: HeroProps) => {
  return (
    <div
      className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen bg-hero"
      ref={reference}
    >
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-2/5 lg:max-w-full lg:absolute xl:px-0">
        <Image
          src="/bird-eye-stand-3.png"
          alt="Hero Image"
          width={800}
          height={300}
          priority={true}
          quality={80}
          className="object-cover w-full object-bottom h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-full lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-warning">
            Brand new
          </p>
          <h2 className="mb-5 font-black text-4xl tracking-wider text-white sm:text-8xl sm:leading-none">
            The Desire
            <br />
            To<span className="text-[#73B153] italic">Thrive</span>
          </h2>
          <p className="pr-5 text-white md:text-lg lg:text-2xl">
            Selamat datang di Heartful Tower Bekasi. <br />
            Apartement dengan harga terbaik.
          </p>
          <div className="flex mb-5">
            <p className="text-white md:text-lg lg:text-2xl">
              Oleh Developer Jepang.
            </p>
            <img src="/Japanese-Flag.png" alt="japan-flag" width="45" />
          </div>

          <div className="flex items-center mt-10 z-30 gap-3">
            <img src="/Logo-IIDA.png" alt="logo-iida" width="100" />
            <img
              src="/Japanese-No.1-Developer.png"
              alt="logo-japanese-developer"
              width="200"
            />
          </div>
          <div className="flex items-center mt-10 lg:text-2xl">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-success hover:bg-success-alt focus:shadow-outline focus:outline-none"
            >
              Dapatkan Informasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
