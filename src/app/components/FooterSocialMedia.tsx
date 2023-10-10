import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

export const FooterSocialMedia = () => {
  const socialMedia = [
    {
      name: "whatsapp",
      icon: <BsWhatsapp />,
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
    },
    {
      name: "facebook",
      icon: <FiFacebook />,
    },
    {
      name: "linkedin",
      icon: <IoLogoLinkedin />,
    },
  ];

  return (
    <div className="flex gap-1">
      {socialMedia.map((media) => (
        <div
          key={media.name}
          className="cursor-pointer p-1 rounded-md border-2 border-gray-900 hover:text-white hover:bg-success"
        >
          <h1>{media.icon}</h1>
        </div>
      ))}
    </div>
  );
};
