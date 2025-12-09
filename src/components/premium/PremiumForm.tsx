import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Switch } from "../ui/Switch";

export const PremiumForm = ({ form, setForm, onSubmit }) => {
  
  const change = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  return (
    <div className="bg-black/40 p-6 rounded-xl border border-yellow-500/30">
      <Input label="Tag" value={form.tag} onChange={(e) => change("tag", e.target.value)} />
      <Input label="Title" value={form.premiumTitle} onChange={(e) => change("premiumTitle", e.target.value)} />
      <Input label="Short Description" value={form.shortDescription} onChange={(e) => change("shortDescription", e.target.value)} />
      <Input label="Rate" type="number" value={form.rate} onChange={(e) => change("rate", e.target.value)} />
      <Input label="Validity (Days)" type="number" value={form.validity} onChange={(e) => change("validity", e.target.value)} />
      
      <textarea
        className="w-full bg-black/40 border border-yellow-500/40 rounded-xl px-3 py-2 mt-3"
        rows={4}
        placeholder="Description"
        value={form.description}
        onChange={(e) => change("description", e.target.value)}
      />

      <div className="flex gap-4 mt-4">
        <Switch
          label="Most Popular"
          checked={form.mostPopular}
          onChange={(v) => change("mostPopular", v)}
        />
        <Switch
          label="Exclusive"
          checked={form.exclusive}
          onChange={(v) => change("exclusive", v)}
        />
      </div>

      <Button onClick={onSubmit} className="mt-5">Save</Button>
    </div>
  );
};
