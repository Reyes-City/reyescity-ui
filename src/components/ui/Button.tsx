export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="px-5 py-2 bg-yellow-500 rounded-xl text-black font-bold hover:bg-yellow-600"
  >
    {children}
  </button>
);
