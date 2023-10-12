"use client";
import { Hero } from "@/app/components/Hero";
import { Siteplan } from "@/app/components/Siteplan";
import { About } from "@/app/components/About";
import { Facilities } from "@/app/components/Facilities";
import { Testimonial } from "@/app/components/Testimonial";
import { News } from "@/app/components/News";
import { ContactUs } from "@/app/components/ContactUs";
import { Footer } from "@/app/components/Footer";
import { Units } from "@/app/components/Units";
import { Nav } from "@/app/components/Nav";
import { useRef } from "react";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import SocialMediaButton from "@/app/components/SocialMediaButton";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const faciltiesRef = useRef(null);
  const newsRef = useRef(null);
  const unitRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Nav
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToFacilities={() => scrollToSection(faciltiesRef)}
        scrollToNews={() => scrollToSection(newsRef)}
        scrollToUnit={() => scrollToSection(unitRef)}
      />
      <Hero reference={heroRef} />
      <Siteplan />
      <About reference={aboutRef} />
      <Facilities reference={faciltiesRef} />
      <VideoPlayer />
      <Units reference={unitRef} />
      <Testimonial />
      <News reference={newsRef} />
      <ContactUs />
      <Footer />
      <BackToTopButton />
      <SocialMediaButton />
    </main>
  );
}
