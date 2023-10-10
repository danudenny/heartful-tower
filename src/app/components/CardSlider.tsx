"use client";
import { useEffect, useRef, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Image from "next/image";

const CardSlider = () => {
  const data = [
    {
      imageUrl: "/facilities/kindergarten.jpg",
      link: "/",
      title: "Kindergarten",
      id: 1,
    },
    {
      imageUrl: "/facilities/fitness.jpg",
      link: "/",
      title: "Gym Club",
      id: 2,
    },
    {
      imageUrl: "/facilities/multifunction.jpg",
      link: "/",
      title: "Multifunction Room",
      id: 3,
    },
    {
      imageUrl: "/facilities/mushola.jpg",
      link: "/",
      title: "Mushalla",
      id: 4,
    },
    {
      imageUrl: "/facilities/zen-garden.jpg",
      link: "/",
      title: "Zen Garden",
      id: 5,
    },
    {
      imageUrl: "/facilities/pool.jpg",
      link: "/",
      title: "Pool Club",
      id: 6,
    },
    {
      imageUrl: "/facilities/pool-2.jpg",
      link: "/",
      title: "Pool Club",
      id: 7,
    },
    {
      imageUrl: "/facilities/zen-garden-2.jpg",
      link: "/",
      title: "Zen Garden",
      id: 8,
    },
  ];

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const autoplayInterval = useRef(null);
  const slideWidth = useRef(0);

  const startAutoplay = () => {
    if (!autoplayInterval.current) {
      // @ts-ignore
      const currentCarousel = carousel.current as HTMLElement; // Type assertion
      // @ts-ignore
      autoplayInterval.current = setInterval(() => {
        if (currentIndex === data.length - 1) {
          // When reaching the last slide, reset to the first slide without delay
          setCurrentIndex(0);
          if (currentCarousel) {
            currentCarousel.scrollLeft = 0;
          }
        } else {
          moveNext();
        }
      }, 4000); // Adjust the interval as needed (e.g., 2 seconds)
    }
  };

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      if (carousel.current) {
        const currentCarousel = carousel.current as HTMLElement; // Type assertion
        if (typeof currentCarousel.scrollLeft !== "undefined") {
          currentCarousel.scrollLeft -= slideWidth.current; // Move left by one slide width
        }
      }
    }
  };

  const moveNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      if (carousel.current) {
        const currentCarousel = carousel.current as HTMLElement; // Type assertion
        if (typeof currentCarousel.scrollLeft !== "undefined") {
          currentCarousel.scrollLeft += slideWidth.current; // Move right by one slide width
        }
      }
    } else {
      // When reaching the last slide, reset to the first slide immediately
      setCurrentIndex(0);
      if (carousel.current) {
        const currentCarousel = carousel.current as HTMLElement; // Type assertion
        if (typeof currentCarousel.scrollLeft !== "undefined") {
          currentCarousel.scrollLeft = 0;
        }
      }
    }
  };

  const handlePrevClick = () => {
    movePrev();
    stopAutoplay();
    startAutoplay();
  };

  const handleNextClick = () => {
    moveNext();
    stopAutoplay();
    startAutoplay();
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      const currentCarousel = carousel.current as HTMLElement; // Type assertion
      if (typeof currentCarousel.offsetWidth !== "undefined") {
        currentCarousel.scrollLeft = currentCarousel.offsetWidth * currentIndex;
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current) {
      const currentCarousel = carousel.current as HTMLElement; // Type assertion
      maxScrollWidth.current =
        currentCarousel.scrollWidth - (currentCarousel.offsetWidth || 0);
    } else {
      maxScrollWidth.current = 0;
    }
  }, []);
  useEffect(() => {
    if (carousel.current) {
      const currentCarousel = carousel.current as HTMLElement; // Type assertion
      if (typeof currentCarousel.offsetWidth !== "undefined") {
        slideWidth.current = currentCarousel.offsetWidth;
      }
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, []);

  return (
    <div className="carousel">
      <div className="relative overflow-hidden z-50">
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-80 h-96 snap-start bg-amber-500 rounded-3xl"
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                >
                  <Image
                    src={resource.imageUrl || ""}
                    quality={20}
                    alt={resource.title}
                    fill
                    objectFit="cover"
                    className="w-full h-full rounded-3xl aspect-square"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block rounded-3xl absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10 hover:rounded-3xl"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-5xl text-white flex items-center justify-center mt-10 gap-3">
        <AiFillLeftCircle
          className="cursor-pointer"
          onClick={handlePrevClick}
        />
        <AiFillRightCircle
          className="cursor-pointer"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default CardSlider;
