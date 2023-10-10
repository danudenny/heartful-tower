import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

export const SocialFloat = () => {
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
    <div className="fixed top-1/2 z-30">
      {socialMedia.map((media) => (
        <div
          key={media.name}
          className={`cursor-pointer social-media-floating ${media.name}`}
        >
          <h1 className="text-4xl p-4">{media.icon}</h1>
        </div>
      ))}
    </div>
  );
};
