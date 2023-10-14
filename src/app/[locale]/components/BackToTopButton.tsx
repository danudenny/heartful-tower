import { BiArrowToTop } from "react-icons/bi";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isDisplayed && (
      <button
        className="fixed bottom-4 right-4 z-40 bg-dark text-white py-2 px-4 rounded-full shadow-md cursor-pointer flex items-center"
        onClick={handleScrollToTop}
      >
        {isMobile ? (
          <BiArrowToTop />
        ) : (
          <>
            Back to Top <BiArrowToTop className="ml-2" />
          </>
        )}
      </button>
    )
  );
};
