import { Navbar } from "./components/Navbar";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { SocialFloat } from "@/app/components/SocialFloat";
import { Siteplan } from "@/app/components/Siteplan";
import { About } from "@/app/components/About";
import { Facilities } from "@/app/components/Facilities";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { Units } from "@/app/components/Units";
import { Testimonial } from "@/app/components/Testimonial";
import { News } from "@/app/components/News";
import { ContactUs } from "@/app/components/ContactUs";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <SocialFloat />
      <Header>
        <Navbar />
      </Header>
      <Hero />
      <Siteplan />
      <About />
      <Facilities />
      <VideoPlayer />
      <Units />
      <Testimonial />
      <News />
      <ContactUs />
      <Footer />
    </main>
  );
}
