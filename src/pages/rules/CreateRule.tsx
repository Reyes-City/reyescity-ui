import { useState } from "react";
import { RuleService } from "@/services/rule.service";
import { useNavigate } from "react-router-dom";

export default function CreateRule() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ruleName: "",
    category: "",
    ruleDescription: "",
    status: "active",
    order: 0,
    importantStatus: false,
  });

  const submit = async () => {
    await RuleService.create(form);
    navigate("/admin/rules/manage");
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create Rule</h1>
        <p className="text-white/60 mt-1">
          Add a new server rule and manage visibility
        </p>
      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        
        {/* Rule Name */}
        <div className="mb-4">
          <label className="block text-sm text-white/70 mb-1">
            Rule Name
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            placeholder="No Random Deathmatch"
            value={form.ruleName}
            onChange={(e) =>
              setForm({ ...form, ruleName: e.target.value })
            }
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm text-white/70 mb-1">
            Category
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            placeholder="General Rules"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-sm text-white/70 mb-1">
            Rule Description
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            placeholder="Describe the rule in detail..."
            value={form.ruleDescription}
            onChange={(e) =>
              setForm({
                ...form,
                ruleDescription: e.target.value,
              })
            }
          />
        </div>

        {/* Status & Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm text-white/70 mb-1">
              Status
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">
              Display Order
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
              value={form.order}
              onChange={(e) =>
                setForm({ ...form, order: +e.target.value })
              }
            />
          </div>
        </div>

        {/* Important Toggle */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            checked={form.importantStatus}
            onChange={(e) =>
              setForm({
                ...form,
                importantStatus: e.target.checked,
              })
            }
            className="w-5 h-5 accent-yellow-400"
          />
          <div>
            <p className="font-medium">Mark as Important</p>
            <p className="text-sm text-white/50">
              Highlight this rule for players
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="px-6 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            Save Rule
          </button>
        </div>
      </div>
    </div>
  );
}
