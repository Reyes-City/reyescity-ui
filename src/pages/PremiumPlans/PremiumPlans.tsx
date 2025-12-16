import { useEffect, useState } from "react";
import { PremiumGroup } from "../../constants/types";
import { getPremiumPlans } from "../../services/premium.api";
import PlanSection from "../../components/PlanSection/PlanSection";
import { AnimatedTitle } from "../../components/animated-title";

type PremiumPlansProps = {
  color?: "black" | "white";
};

const PremiumPlans = ({ color = "white" }: PremiumPlansProps) => {
  const [groups, setGroups] = useState<PremiumGroup[]>([]);

  useEffect(() => {
    getPremiumPlans().then(setGroups);
  }, []);

  const titleClass =
    color === "black"
      ? "mt-5 !text-black text-center"
      : "mt-5 !text-white text-center";

  return (
    <div className="premium-container">
      <AnimatedTitle containerClass={titleClass}>Premium Plans ✦</AnimatedTitle>

      {groups.map((group, index) => (
        <PlanSection key={index} group={group} />
      ))}
    </div>
  );
};

export default PremiumPlans;
