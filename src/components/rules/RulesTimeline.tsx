type Props = {
  rules: any[];
};

export default function RulesTimeline({ rules }: Props) {
  return (
    <div className="relative max-w-6xl mx-auto py-16">
      {/* Center vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/10" />

      <div className="space-y-24">
        {rules.map((rule, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={rule._id}
              className={`relative flex ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Connector dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />

              {/* Card */}
              <div
                className={`w-full md:w-[45%] ${
                  isLeft ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  className="
                    bg-gradient-to-br
                    from-[#15131d]
                    to-[#1e1b2e]
                    border border-white/10
                    rounded-2xl
                    p-6
                    shadow-2xl
                  "
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {rule.ruleName}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {rule.ruleDescription}
                  </p>

                  {rule.importantStatus && (
                    <span className="inline-block mt-4 text-yellow-400 text-sm font-medium">
                      ⭐ Important Rule
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
