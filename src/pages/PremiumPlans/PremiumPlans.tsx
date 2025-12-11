import React, { useEffect, useState } from "react";
import { PremiumGroup } from "../../constants/types";
import { getPremiumPlans } from "../../services/premium.api";
import PlanSection from "../../components/PlanSection/PlanSection";
import { AnimatedTitle } from "../../components/animated-title";

const PremiumPlans = () => {
  const [groups, setGroups] = useState<PremiumGroup[]>([]);

  useEffect(() => {
    getPremiumPlans().then(setGroups);
  }, []);

  return (
    <div className="premium-container">
       <AnimatedTitle containerClass="mt-5 !text-black text-center">
  {"<b>Premium Plans ✦</b>"}
</AnimatedTitle>


      {groups.map((g, i) => (
        <PlanSection key={i} group={g} />
      ))}
    </div>
  );
};

export default PremiumPlans;
