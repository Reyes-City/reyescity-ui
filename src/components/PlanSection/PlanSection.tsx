import React, { useRef, useState, useEffect } from "react";
import PlanCard from "../PlanCard/PlanCard";
import { PremiumGroup } from "../../constants/types";
import "./PlanSection.css";

const PlanSection: React.FC<{ group: PremiumGroup }> = ({ group }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  // Detect overflow
  const checkOverflow = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrows(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkOverflow();
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [group]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="plan-section">

      <div className="section-header">
        
        <h4 className="bento-title special-fonts">{group.premiumTitle}</h4>
        <span className="scroll-hint">Scroll →</span>
      </div>

      {/* Show arrows only when needed */}
      {showArrows && (
        <>
          <button className="arrow-btn left" onClick={scrollLeft}>←</button>
          <button className="arrow-btn right" onClick={scrollRight}>→</button>
        </>
      )}

      <div className="plan-row-scroll" ref={scrollRef}>
        {group.plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>

    </div>
  );
};

export default PlanSection;
