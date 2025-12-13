import { useEffect, useState } from "react";

const empty = {
  ruleName: "",
  category: "",
  ruleDescription: "",
  status: "active",
  order: 0,
  importantStatus: false,
};

export default function RuleFormModal({
  open,
  onClose,
  onSave,
  data,
}: any) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (data) setForm(data);
    else setForm(empty);
  }, [data]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#0b0a12] p-6 rounded-xl w-[480px]">
        <h2 className="text-lg font-bold mb-4">
          {data ? "Edit Rule" : "Add Rule"}
        </h2>

        <input
          className="input"
          placeholder="Rule Name"
          value={form.ruleName}
          onChange={(e) =>
            setForm({ ...form, ruleName: e.target.value })
          }
        />

        <input
          className="input mt-3"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <textarea
          className="input mt-3"
          placeholder="Rule Description"
          value={form.ruleDescription}
          onChange={(e) =>
            setForm({
              ...form,
              ruleDescription: e.target.value,
            })
          }
        />

        <div className="flex gap-3 mt-3">
          <select
            className="input"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <input
            type="number"
            className="input"
            placeholder="Order"
            value={form.order}
            onChange={(e) =>
              setForm({ ...form, order: +e.target.value })
            }
          />
        </div>

        <label className="flex gap-2 mt-3">
          <input
            type="checkbox"
            checked={form.importantStatus}
            onChange={(e) =>
              setForm({
                ...form,
                importantStatus: e.target.checked,
              })
            }
          />
          Important Rule
        </label>

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
