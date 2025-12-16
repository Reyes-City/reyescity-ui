type Props = {
  rules: any[];
};

export default function RulesList({ rules }: Props) {
  if (!rules.length) {
    return (
      <p className="text-white/60">
        No rules available for this category.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {rules.map((rule) => (
        <div
          key={rule._id}
          className="
            bg-black/50
            border border-white/10
            rounded-xl
            p-4
          "
        >
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold text-white">
              {rule.ruleName}
            </h4>

            {rule.importantStatus && (
              <span className="text-yellow-400 text-sm">
                ⭐ Important
              </span>
            )}
          </div>

          <p className="text-white/70 mt-1">
            {rule.ruleDescription}
          </p>
        </div>
      ))}
    </div>
  );
}
