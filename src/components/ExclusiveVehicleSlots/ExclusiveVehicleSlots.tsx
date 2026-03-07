import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./ExclusiveVehicleSlots.css";

type ClaimedCar = {
  user: string;
  car: string;
};

const TOTAL_SLOTS = 14;

const claimedCars: ClaimedCar[] = [
  { user: "K3X", car: "Dominator GTX" },
  { user: "Shadow_OP", car: "BMW M5" },
  { user: "RavenX", car: "Audi RS7" },
  { user: "Ghosty", car: "Lamborghini Huracan" },
];

export default function ExclusiveVehicleSlots() {
  const navigate = useNavigate();

  const claimedCount = claimedCars.length;
  const availableSlots = TOTAL_SLOTS - claimedCount;

  const fillPercent = useMemo(
    () => `${(claimedCount / TOTAL_SLOTS) * 100}%`,
    [claimedCount]
  );

  useEffect(() => {
    const rail = document.getElementById("railClaimed");
    if (rail) {
      rail.style.setProperty("--fill", fillPercent);
    }
  }, [fillPercent]);

  const handleApply = () => {
    navigate("/DiscordBoosterPlans");
  };

  return (
    <div className="evs-container">
      <div className="flex flex-col items-center text-center">
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
             Limited <b>Discord</b> Booster Gifts
          </p>
        </div>
     
      <p className="evs-subtitle">
        {claimedCount}/{TOTAL_SLOTS} claimed • {availableSlots} slots remaining
      </p>

      <div className="evs-card">
        <div className="timeline">
          <div className="rail-wrap">
            <div className="rail-claimed" id="railClaimed" />
          </div>

          <div className="slots">
            {Array.from({ length: TOTAL_SLOTS }).map((_, index) => {
              const claimed = index < claimedCount;
              const car = claimedCars[index];

              return (
                <div className="slot" key={index}>
                  <div className={`tick ${claimed ? "claimed" : ""}`}>
                    {claimed ? "✔" : "🔒"}
                  </div>

                  <div className="slot-number">{index + 1}</div>

                  <div className="slot-tooltip">
                    <div className="tooltip-title">Slot {index + 1}</div>
                    <div className="tooltip-divider" />
                    {claimed ? (
                      <>
                        <div className="tooltip-row">🚗 {car.car}</div>
                        <div className="tooltip-row">👤 {car.user}</div>
                      </>
                    ) : (
                      <div className="tooltip-row">🔒 Not Claimed</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ✅ APPLY BUTTON */}
          <div className="apply-wrap">
            <button
              className="apply-btn"
              disabled={availableSlots === 0}
              onClick={handleApply}
            >
              {availableSlots === 0
                ? "All Slots Filled"
                : "Apply for Exclusive Vehicle"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
