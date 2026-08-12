import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RuleService } from "@/services/rule.service";
// import RulesList from "@/components/rules/RulesList";
import { Navbar } from "@/components/navbar";
import RulesTimeline from "@/components/rules/RulesTimeline";
import { AnimatedTitle } from "@/components/animated-title";

export default function RulesPage() {
  const { category } = useParams<{ category?: string }>();

  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [rules, setRules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD CATEGORIES FIRST ================= */
  useEffect(() => {
    RuleService.getCategories().then((res) => {
      const cats = Array.isArray(res.data) ? res.data : [];
      setCategories(cats);

      // Priority:
      // 1. URL category
      // 2. First category in list
      if (category) {
        setActiveCategory(decodeURIComponent(category));
      } else if (cats.length > 0) {
        setActiveCategory(cats[0]);
      }
    });
  }, [category]);

  /* ================= LOAD RULES AFTER CATEGORY ================= */
  useEffect(() => {
    if (!activeCategory) return;

    setLoading(true);

    RuleService.getByCategory(activeCategory)
      .then((res) => {
        setRules(Array.isArray(res.data) ? res.data : []);
      })
      .finally(() => setLoading(false));
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-5xl px-4 py-14">
      
        <div className="mb-10 text-center">
           {/* Header */} <AnimatedTitle containerClass="mt-5 !text-white text-center">
            {"<b>Server Rules</b>"}
          </AnimatedTitle>
          <p className="mt-2 text-white/60">Select a category to view rules</p>
        </div>

        {/* Category Selector */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 transition ${
                activeCategory === cat
                  ? "bg-yellow-500 font-semibold text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rules */}
        {loading ? (
          <p className="text-center text-white/60">Loading rules...</p>
        ) : (
          <RulesTimeline rules={rules} />
        )}
      </div>
    </div>
  );
}
