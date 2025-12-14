import { Navbar } from "@/components/navbar";
import PremiumPlans from "./PremiumPlans";

const Premium = () => {
  return (
   
     <div className="min-h-screen bg-black">
      <Navbar />

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-5xl px-4 py-14"></div>
      <Navbar />
      <PremiumPlans color="white" />
    </div>
  );
};

export default Premium;
