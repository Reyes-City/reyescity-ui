// import { About } from "@/components/about";
import { Contact } from "@/components/contact";
// import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
// import { Story } from "@/components/story";
import PremiumPlans from "./PremiumPlans/PremiumPlans";
import AboutUs from "@/components/about/AboutUs";
import Partnerships from "@/components/Partnerships/Partnerships";
import ExclusiveVehiclePage from "./ExclusiveVehiclePage";

const PARTNERS = [
  {
    id: "1",
    name: "Busmods ",
    title: "Official Partner",
    description:
      "A trusted organization officially partnered with Reyes City, supporting growth, infrastructure, and community initiatives.",
    logo: "/img/busmods.png",
  },
];
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
         <ExclusiveVehiclePage />
        <Partnerships partners={PARTNERS} />
      </main>

      <Footer />
    </div>
  );
};
