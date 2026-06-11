import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import About from "@/components/sections/About";
import Groups from "@/components/sections/Groups";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import Sponsors from "@/components/sections/Sponsors";
import Donate from "@/components/sections/Donate";
import JoinCTA from "@/components/sections/JoinCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Groups />
        <Events />
        <Testimonials />
        <Sponsors />
        <Donate />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
