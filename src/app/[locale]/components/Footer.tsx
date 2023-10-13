import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export const Footer = () => {
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
              <Image
                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167099/heartful/heartful-logo_kewplr.png"
                alt="logo"
                width={300}
                height={150}
                priority={true}
                className="w-auto h-8 sm:h-10"
              />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
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
                123-456-7890
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                example@email.com
              </a>
            </div>
            <div className="flex flex-col">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://maps.app.goo.gl/neyPDMt1unn4JQwm9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Jl. Pesona Metropolitan RT.004/RW.042, Bojong Rawalumbu, Kec.
                Rawalumbu, Kota Bks, Jawa Barat 17116
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Follow Us
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTiktok />
              </a>
              <a
                href="/"
                className="text-[#333] transition-colors duration-300 hover:text-deep-purple-accent-400"
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
