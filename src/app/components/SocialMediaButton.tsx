import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const SocialMediaButton: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={`fixed bottom-4 left-4 flex flex-col gap-4 ${
        isMobile ? "md:hidden" : "md:flex flex-wrap"
      }`}
    >
      <a
        href="https://whatsapp.com"
        className={`p-3 bg-green-500 text-white ${
          isMobile ? "rounded-full" : "rounded-lg"
        }`}
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://facebook.com"
        className={`p-3 bg-blue-600 text-white ${
          isMobile ? "rounded-full" : "rounded-lg"
        }`}
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://tiktok.com"
        className={`p-3 bg-pink-500 text-white ${
          isMobile ? "rounded-full" : "rounded-lg"
        }`}
      >
        <FaTiktok size={24} />
      </a>
      <a
        href="https://instagram.com"
        className={`p-3 bg-red-500 text-white ${
          isMobile ? "rounded-full" : "rounded-lg"
        }`}
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com"
        className={`p-3 bg-blue-800 text-white ${
          isMobile ? "rounded-full" : "rounded-lg"
        }`}
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialMediaButton;
