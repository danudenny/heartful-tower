import { Navbar } from "./components/Navbar";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { SocialFloat } from "@/app/components/SocialFloat";

export default function Home() {
  return (
    <main>
      <SocialFloat />
      <Header>
        <Navbar />
      </Header>
      <Hero />
      <div className="h-screen bg-success">
        <h1>About</h1>
      </div>
    </main>
  );
}
