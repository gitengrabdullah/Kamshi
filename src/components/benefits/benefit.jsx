
import React from "react";
import {
  Truck,
  ShieldCheck,
  Gift,
  Headphones,
} from "lucide-react";

import "./benefit.css";

const benefits = [
  {
    id: 1,
    icon: Truck,
    title: "Fast Delivery",
    description: "Across Nigeria",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Authentic Quality",
    description: "Carefully selected products",
  },
  {
    id: 3,
    icon: Gift,
    title: "Elegant Packaging",
    description: "Beautifully presented",
  },
  {
    id: 4,
    icon: Headphones,
    title: "Customer Support",
    description: "We're here to help",
  },
];

export default function Benefits() {
  return (
    <section
      className="kamshi-benefits"
      aria-label="Why shop with Kamshi"
    >
      <div className="kamshi-benefits-container">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              className="kamshi-benefit-item"
              key={benefit.id}
            >
              <div className="kamshi-benefit-icon">
                <Icon size={31} strokeWidth={1.4} />
              </div>

              <div className="kamshi-benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
