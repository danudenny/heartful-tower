"use client";
import { Hero } from "@/app/[locale]/components/Hero";
import { Siteplan } from "@/app/[locale]/components/Siteplan";
import { About } from "@/app/[locale]/components/About";
import { Facilities } from "@/app/[locale]/components/Facilities";
import { ContactUs } from "@/app/[locale]/components/ContactUs";
import { Footer } from "@/app/[locale]/components/Footer";
import { Units } from "@/app/[locale]/components/Units";
import { Nav } from "@/app/[locale]/components/Nav";
import { useEffect, useRef, useState } from "react";
import { VideoPlayer } from "@/app/[locale]/components/VideoPlayer";
import { BackToTopButton } from "@/app/[locale]/components/BackToTopButton";
import SocialMediaButton from "@/app/[locale]/components/SocialMediaButton";
import Modal from "@/app/[locale]/components/Modal";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const faciltiesRef = useRef(null);
  const contactUsRef = useRef(null);
  // const newsRef = useRef(null);
  const unitRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 2000);
    });
  });

  return (
    <main>
      <Modal />
      <Nav
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToFacilities={() => scrollToSection(faciltiesRef)}
        // scrollToNews={() => scrollToSection(newsRef)}
        scrollToUnit={() => scrollToSection(unitRef)}
        scrollToContactUs={() => scrollToSection(contactUsRef)}
      />
      <Hero reference={heroRef} />
      <Siteplan />
      <About reference={aboutRef} />
      <Facilities reference={faciltiesRef} />
      {scrolled && <VideoPlayer />}
      <Units reference={unitRef} />
      {/*<Testimonial />*/}
      {/*<News reference={newsRef} />*/}
      {/*<OtherProject />*/}
      <ContactUs reference={contactUsRef} />
      <Footer />
      <BackToTopButton />
      <SocialMediaButton />
    </main>
  );
}
