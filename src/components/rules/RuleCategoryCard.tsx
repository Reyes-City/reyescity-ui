import { useNavigate } from "react-router-dom";

type Props = {
  category: string;
};

export default function RuleCategoryCard({ category }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative group
        bg-black/60
        border border-white/10
        rounded-2xl
        h-40
        flex items-center justify-center
        cursor-pointer
        transition
        hover:border-yellow-400/40
      "
    >
      {/* Category name */}
      <h3 className="text-xl font-semibold text-white">
        {category}
      </h3>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0
          bg-black/80
          opacity-0
          group-hover:opacity-100
          flex items-center justify-center
          rounded-2xl
          transition
        "
      >
        <button
          onClick={() =>
            navigate(`/rules/${encodeURIComponent(category)}`)
          }
          className="
            px-6 py-2
            bg-yellow-500
            text-black
            font-semibold
            rounded-lg
            hover:bg-yellow-400
          "
        >
          View Rules
        </button>
      </div>
    </div>
  );
}
