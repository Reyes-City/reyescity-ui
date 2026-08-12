import { Footer } from "@/components/footer";
import AboutUs from "@/components/about/AboutUs";
import { Navbar } from "@/components/navbar";

export const AboutUsPage = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <AboutUs page="page" />
      </main>

      <Footer />
    </div>
  );
};
