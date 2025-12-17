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

const PARTNERS = [
  {
    id: "1",
    name: "Busmods ",
    title: "Official Partner",
    description:
      "A trusted organization officially partnered with Reyes City, supporting growth, infrastructure, and community initiatives.",
    logo:
      "https://cdn.discordapp.com/attachments/1449241530366693586/1449384138103590953/image.png?ex=694350ea&is=6941ff6a&hm=e302f9537ca9049e20871dc4f0eb5abc750fe07e4cee26dbbe25dc46c7c2b6ed&",
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
        <Partnerships partners={PARTNERS} />
      </main>

      <Footer />
    </div>
  );
};
