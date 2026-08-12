import { useEffect, useState } from "react";
import { RuleService } from "@/services/rule.service";
import RulesTable from "@/components/rules/RulesTable";

export default function ManageRules() {
  const [rules, setRules] = useState<any[]>([]);

  const load = async () => {
    const res = await RuleService.getAll();

    // IMPORTANT FIX 👇
    setRules(Array.isArray(res.data) ? res.data : []);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: string) => {
    if (confirm("Delete this rule?")) {
      await RuleService.delete(id);
      load();
    }
  };

  const edit = () => {
    alert("You can route to edit page later");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Manage Rules
      </h1>

      <RulesTable
        data={rules}
        onEdit={edit}
        onDelete={remove}
      />
    </div>
  );
}
