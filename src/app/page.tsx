import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Hero2 /> 
    <About />
    <Services />
    <Footer /> 
    </>
  );
}
