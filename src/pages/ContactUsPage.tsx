import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ContactUs from "@/components/ContactUs/ContactUs";

export const ContactUsPage = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <div className="min-h-screen bg-black flex flex-col">
        <ContactUs />
        </div>
      </main>

      <Footer />
    </div>
  );
};
