import { useEffect, useState } from "react";
import RuleCategoryCard from "./RuleCategoryCard";
import { RuleService } from "@/services/rule.service";

type Props = {
  title?: string;
  description?: string;
};

export default function RulesSection({
  title = "Server Rules",
  description = "Select a category to view rules",
}: Props) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    RuleService.getCategories().then((res) => {
      setCategories(Array.isArray(res.data) ? res.data : []);
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-600 opacity-90 -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat) => (
            <RuleCategoryCard key={cat} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
