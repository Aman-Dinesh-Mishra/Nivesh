import React, { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState(null);

  const holdings = [
    { id: 21, name: "Asset A", value: "₹60,000", change: "+3%" },
    { id: 22, name: "Asset B", value: "₹35,500", change: "-1%" },
    { id: 23, name: "Asset C", value: "₹1,20,000", change: "+5%" },
    { id: 24, name: "Asset D", value: "₹45,000", change: "-2%" },
  ];

  return (
    <section>
      <h1 className="page-title">Your Portfolio</h1>

      <h2 className="section-title">📊 Holdings</h2>
      <div className="row">
        {holdings.map((p) => (
          <article
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`card ${active === p.id ? "active-green" : ""}`}
          >
            <div className="card-head">
              <h3>{p.name}</h3>
              <div className={`change ${p.change.includes("+") ? "up" : "down"}`}>{p.change}</div>
            </div>
            <div className="card-value">{p.value}</div>
            <button className="btn card-btn">View Details</button>
          </article>
        ))}
      </div>
    </section>
  );
}
