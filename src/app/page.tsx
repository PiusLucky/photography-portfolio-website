import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LargeTextSection from "@/components/sections/LargeTextSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <HeroSection />
        <div className="px-4 md:px-[6rem] flex flex-col gap-[5rem] md:gap-[12.5rem] mt-[5rem] md:mt-[12.5rem]">
          <AboutSection />
          <ServiceSection />
          <PortfolioSection />
          <FaqSection />
          <TestimonialSection />
        </div>

        <LargeTextSection />
        <FooterSection />
      </div>
    </main>
  );
}
