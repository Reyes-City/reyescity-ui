import { useState } from "react";
import { PremiumForm } from "../../components/premium/PremiumForm";
import { createPremium } from "../../services/premium.api";

export default function CreatePremiumPage() {
  
  const [form, setForm] = useState({
    tag: "",
    premiumTitle: "",
    shortDescription: "",
    rate: "",
    validity: "",
    description: "",
    mostPopular: false,
    exclusive: false
  });

  const save = async () => {
    await createPremium(form);
    alert("Created!");
  };

  return (
    <div className="p-6 text-yellow-200">
      <h1 className="text-3xl mb-4 font-bold">Create Premium</h1>
      <PremiumForm form={form} setForm={setForm} onSubmit={save} />
    </div>
  );
}
