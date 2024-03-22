import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "Cloth & Linen Products",
    "Tableware & Galley Utensils",
    "Locks & Latches",
    "Brushes & Mats",
    "Cleaning Materials & Chemicals",
    "Garbage Disposers, Buckets",
    "Washing Machine & Accessories",
    "Frying Pans & Cooking Pots",
    "Knives & Peelers",
    "Soaps & Detergents",
    "Coffee Maker, Blender, Toaster",
    "Life Rafts, Lifejackets, Lifebuoys",
  ];

  const data2 = [
    "Fire & Immersion Suits",
    "Pyrotechnics",
    "Fire Extinguishers & Foams",
    "Survival Craft & Accessories",
    "Navigational Lights & Shapes",
    "Fire Hose & Couplings",
    "Breathing Apparatus",
    "Protection Suits",
    "Fire Fighting Equipment",
    "Imo Symbols, Safety Signs",
    "Gas & Smoke Detectors",
    "Safety Lights, Tapes, Belts",
  ];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "1.3 CABIN STORE & SAFETY EQUIPMETS",
          content: data,
          content2: data2,
          img: "/images/Cabin Store and Safety Equipment Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
