import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <section className="bg-[#FFF5D3]">
        <Navbar />
      </section>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Faq />
      <Footer />
    </div>
  );
}
