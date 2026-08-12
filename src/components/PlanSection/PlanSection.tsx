import { useEffect, useRef, useState } from "react";
import PlanCard from "../PlanCard/PlanCard";
import { PremiumGroup } from "../../constants/types";
import "./PlanSection.css";

const PlanSection: React.FC<{ group: PremiumGroup, color: string }> = ({ group, color }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrows(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, [group]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85,
      behavior: "smooth",
    });
  };
  const titleClass =
    color === "black"
      ? "!text-black text-center"
      : "!text-white text-center";

  return (
    <div className="plan-section">

      <div className="section-header">
        <h4 className={`bento-title ${titleClass}`}><b>{group.premiumTitle}</b></h4>
      </div>

      {showArrows && (
        <>
          <button className="arrow-btn left" onClick={() => scroll("left")}>
            ‹
          </button>
          <button className="arrow-btn right" onClick={() => scroll("right")}>
            ›
          </button>
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
