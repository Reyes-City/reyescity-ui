export const Switch = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="text-yellow-300">{label}</span>
  </label>
);
