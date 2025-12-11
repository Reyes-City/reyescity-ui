import React, { useRef } from "react";
import PlanCard from "../PlanCard/PlanCard";
import { PremiumGroup } from "../../constants/types";
import "./PlanSection.css";

const PlanSection: React.FC<{ group: PremiumGroup }> = ({ group }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
  };

  return (
    <div className="plan-section">

      <div className="section-header">
        <h4 className="bento-title special-font"><b>{group.premiumTitle}</b></h4>
 
        <span className="scroll-hint">Scroll →</span>
      </div>

      {/* ARROWS */}
      <button className="arrow-btn left" onClick={scrollLeft}>←</button>
      <button className="arrow-btn right" onClick={scrollRight}>→</button>

      <div className="plan-row-scroll" ref={scrollRef}>
        {group.plans.map((plan, i) => (
          <PlanCard key={i} plan={plan} />
        ))}
      </div>

    </div>
  );
};

export default PlanSection;
