import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FeaturedWork } from "@/components/FeaturedWork";
import { WhyUs } from "@/components/WhyUs";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <FeaturedWork />
      <WhyUs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
