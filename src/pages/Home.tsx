// import { About } from "@/components/about";
import { Contact } from "@/components/contact";
// import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
// import { Story } from "@/components/story";
import PremiumPlans from "./PremiumPlans/PremiumPlans";
import AboutUs from "@/components/about/AboutUs";


export const Home = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        {/* <About /> */}
         <AboutUs page="home" />
       <PremiumPlans color="black" />

        {/* <Features /> */}
        {/* <Story /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
