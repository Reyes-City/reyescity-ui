import "./PlanCard.css";

const PlanCard = ({ plan }: any) => {
  return (
    <div className="card-wrapper">

      {plan.mostPopular && <div className="badge popular">Most Popular</div>}
      {plan.exclusive && <div className="badge exclusive">Exclusive</div>}

      <div className="card">

        {/* FRONT */}
        <div className="front">
          <div className="green-orb"></div>
          <div className="orbit"></div>

          <div className="plan-label">{plan.premiumTitle}</div>

          <div className="price-box">
            ₹{plan.rate} / {plan.validity} Days
          </div>

          <div className={`short-desc ${plan.shortDescription === "NA" ? "na" : ""}`}>
            {plan.shortDescription === "NA" ? "NA" : plan.shortDescription}
          </div>

          <p className="note">
            Renewal: ₹{plan.renuvalamount || "Not Available"}
          </p>
        </div>

        {/* BACK */}
        <div className="back">
          <h2>{plan.premiumTitle}</h2>
          <p>{plan.description}</p>
        </div>

      </div>
    </div>
  );
};

export default PlanCard;
