import { useMemo } from "react";
import "./DiscordBoosterPlans.css";

type Vehicle = {
  discord: string;
  ingame: string;
  vehicle: string;
  status: "city" | "garage" | "offline" | "seized";
};

type BoosterData = {
  max: number;
  claimed: number;
  pending: number;
  vehicles: Vehicle[];
};

export default function DiscordBoosterPlans() {
  // 🔮 Future: replace with API data
  const data: BoosterData = {
    max: 14,
    claimed: 8,
    pending: 3,
    vehicles: [
      { discord: "K3X", ingame: "Leon Knox", vehicle: "Dominator GTX", status: "city" },
      { discord: "Shadow_OP", ingame: "Arjun Raj", vehicle: "BMW M5", status: "garage" },
      { discord: "RavenX", ingame: "Vikram Das", vehicle: "Audi RS7", status: "offline" },
      { discord: "Ghosty", ingame: "Adithya Menon", vehicle: "Lamborghini Huracan", status: "seized" },
    ],
  };

  const available = useMemo(
    () => data.max - data.claimed - data.pending,
    [data]
  );

  const percent = (v: number) => `${(v / data.max) * 100}%`;

  return (
       <section className="relative overflow-hidden bg-black text-white">
    <div className="container">
      <h1>🎖️ Discord Server Booster Plans</h1>
      <p className="subtitle">Exclusive perks for our Discord boosters</p>

      {/* ===== TIMELINE ===== */}
      <div className="timeline-card">
        <div className="timeline-title">
          🚗 Exclusive Vehicle Slot Progress ({data.max} Total)
        </div>

        <div className="progress">
          <div className="bar claimed" style={{ width: percent(data.claimed) }} />
          <div className="bar pending" style={{ width: percent(data.pending) }} />
          <div className="bar available" style={{ width: percent(available) }} />
        </div>

        <div className="timeline-labels">
          <div className="label">
            <span className="dot claimed" /> Claimed: <b>{data.claimed}</b>
          </div>
          <div className="label">
            <span className="dot pending" /> Pending: <b>{data.pending}</b>
          </div>
          <div className="label">
            <span className="dot available" /> Available: <b>{available}</b>
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="stats">
        <div className="stat">Vehicles Claimed<span>{data.claimed}</span></div>
        <div className="stat">Pending Claims<span>{data.pending}</span></div>
        <div className="stat">Slots Available<span>{available}</span></div>
      </div>

      {/* ===== PLANS ===== */}
      <div className="plans">
        <div className="card">
          <span className="badge">1× Boost</span>
          <h2>Booster Pack</h2>
          <ul>
            <li>Booster role</li>
            <li>One-time basic RP item pack</li>
          </ul>
          <button>Claim Boost</button>
        </div>

        <div className="card">
          <span className="badge">2× Boosts</span>
          <h2>Exclusive Vehicle</h2>
          <p className="warning">⚠️ Limited to 14 slots only</p>
          <ul>
            <li>Exclusive booster role</li>
            <li>1 Exclusive vehicle</li>
            <li>Vehicle removed if boost stops</li>
          </ul>
          <button disabled={available <= 0}>
            {available <= 0 ? "All Slots Filled" : "Claim Vehicle"}
          </button>
        </div>
      </div>

      {/* ===== TABLE ===== */}
      <div className="table-card">
        <h3>🚘 Claimed Exclusive Vehicles</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Discord User</th>
              <th>In-Game Name</th>
              <th>Vehicle</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.vehicles.map((v, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{v.discord}</td>
                <td>{v.ingame}</td>
                <td>{v.vehicle}</td>
                <td>
                  <span className={`status ${v.status}`}>
                    {v.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== NOTES ===== */}
      <div className="notes">
        <h3>📜 Important Notes</h3>
        <ul>
          <li>Vehicle exists only while boost is active</li>
          <li>No selling, trading, or transferring</li>
          <li>Perks valid only during boost</li>
        </ul>
      </div>
    </div>
    </section>
  );
}
