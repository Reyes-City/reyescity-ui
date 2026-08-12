import { useState, useEffect } from "react";
import { PremiumTable } from "../../components/premium/PremiumTable";
import { getPremium, deletePremium } from "../../services/premium.api";

export default function ManagePremiumPage() {
  
  const [list, setList] = useState([]);

  const load = async () => {
    const res = await getPremium();
    setList(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6 text-yellow-200">
      <h1 className="text-3xl mb-4 font-bold">Manage Premium Plans</h1>
      <PremiumTable
        data={list}
        onEdit={(p: any) => console.log("edit", p)}
        onDelete={async (id: string) => {
          await deletePremium(id);
          load();
        }}
      />
    </div>
  );
}
