import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const SocialMediaButton: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px");
  const [showIcons, setShowIcons] = useState(false);
  const socialMediaButtonRef = useRef<HTMLDivElement | null>(null);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const handleClickOutside = (event: React.MouseEvent | MouseEvent) => {
    if (
      socialMediaButtonRef.current &&
      event.target instanceof Node &&
      !socialMediaButtonRef.current.contains(event.target)
    ) {
      setShowIcons(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 flex-col gap-2 ${
        isMobile ? "md:hidden" : "md:flex"
      }`}
      ref={socialMediaButtonRef}
    >
      <a
        href="https://whatsapp.com"
        className={`p-3 bg-green-500 text-white flex mb-3 gap-3 items-center ${
          isMobile ? "rounded-full" : "rounded-lg"
        }`}
      >
        <FaWhatsapp size={24} />
        Chat Us
      </a>
      {showIcons && (
        <div className={`flex flex-col gap-4`}>
          <a
            href="https://facebook.com"
            className={`p-3 bg-[#4267B2]   text-white flex gap-3 items-center ${
              isMobile ? "rounded-full" : "rounded-lg"
            }`}
          >
            <FaFacebook size={24} />
            Facebook
          </a>
          <a
            href="https://tiktok.com"
            className={`p-3 bg-dark text-white flex gap-3 items-center ${
              isMobile ? "rounded-full" : "rounded-lg"
            }`}
          >
            <FaTiktok size={24} />
            Tiktok
          </a>
          <a
            href="https://instagram.com"
            className={`p-3 bg-[#833AB4] text-white flex gap-3 items-center ${
              isMobile ? "rounded-full" : "rounded-lg"
            }`}
          >
            <FaInstagram size={24} />
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            className={`p-3 bg-blue-800 text-white flex gap-3 items-center ${
              isMobile ? "rounded-full" : "rounded-lg"
            }`}
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </div>
      )}

      {!showIcons && (
        <button
          onClick={toggleIcons}
          className={`py-2 px-4 bg-warning text-white flex ${
            isMobile ? "text-hidden" : ""
          }`}
        >
          {isMobile ? (
            <AiOutlinePlus size={16} className="ml-1" />
          ) : (
            <>
              Follow Us <AiOutlinePlus size={24} className="ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default SocialMediaButton;
