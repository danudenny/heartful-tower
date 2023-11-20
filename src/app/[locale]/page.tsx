"use client";
import { About } from "@/app/[locale]/components/About";
import { BackToTopButton } from "@/app/[locale]/components/BackToTopButton";
import { ContactUs } from "@/app/[locale]/components/ContactUs";
import { Facilities } from "@/app/[locale]/components/Facilities";
import { Footer } from "@/app/[locale]/components/Footer";
import { Hero } from "@/app/[locale]/components/Hero";
import { Nav } from "@/app/[locale]/components/Nav";
import { Siteplan } from "@/app/[locale]/components/Siteplan";
import SocialMediaButton from "@/app/[locale]/components/SocialMediaButton";
import { Units } from "@/app/[locale]/components/Units";
import { VideoPlayer } from "@/app/[locale]/components/VideoPlayer";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import CookieConsent from "./components/CookiesConsent";
import FacebookPixel from "./components/FacebookPixel";
import Modal from "./components/Modal";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const faciltiesRef = useRef(null);
  // const newsRef = useRef(null);
  const unitRef = useRef(null);
  const contactUsRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1WDBSH37S7" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-1WDBSH37S7');
        `}
        </Script>
      </div>
      <FacebookPixel />
      <CookieConsent />
      <Modal />
      <Nav
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToFacilities={() => scrollToSection(faciltiesRef)}
        scrollToUnit={() => scrollToSection(unitRef)}
        scrollToContactUs={() => scrollToSection(contactUsRef)}
      />
      <Hero reference={heroRef} />
      <Siteplan />
      <About reference={aboutRef} />
      <Facilities reference={faciltiesRef} />
      {scrolled && <VideoPlayer />}
      <Units reference={unitRef} />
      <ContactUs reference={contactUsRef} />
      <Footer />
      <BackToTopButton />
      <SocialMediaButton />
    </main>
  );
}
