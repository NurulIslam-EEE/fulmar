import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "Pneumatic & Air Winches",
    "Deck Scalers, Hand Scalers",
    "Bulbs & Lamps",
    "Navigation & Search Lights",
    "Cables, Switches & Boards",
    "Plugs, Sockets, Alarm & Horns",
  ];
  const data2 = [
    "Electrical Contractor & Contacts",
    "Lead Acid Batteries & Chargers",
    "Explosion & Waterproof Fittings",
    "Refrigerator, Cooking Machine",
    "Ventilators, Ejectors & Distributors",
  ];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "1.8 PNEUMATIC & ELECTRICAL TOOLS",
          content: data,
          content2: data2,
          img: "/images/Phenumatic Tools Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
