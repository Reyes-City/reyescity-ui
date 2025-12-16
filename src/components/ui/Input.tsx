export const Input = ({ label, ...props }:any) => {
  return (
    <div className="mb-3">
      {label && <label className="text-yellow-300 text-sm">{label}</label>}
      <input
        {...props}
        className="w-full bg-black/40 border border-yellow-500/40 px-3 py-2 rounded-xl focus:border-yellow-400 outline-none"
      />
    </div>
  );
};
