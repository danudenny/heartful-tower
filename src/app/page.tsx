import { Navbar } from "./components/Navbar";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { SocialFloat } from "@/app/components/SocialFloat";
import { Siteplan } from "@/app/components/Siteplan";
import { About } from "@/app/components/About";

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
    </main>
  );
}
