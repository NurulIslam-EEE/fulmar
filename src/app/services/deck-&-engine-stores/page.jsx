import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "Working Cloths, Gloves, Boots",
    "Packing & Jointing",
    "Rigging Equipment",
    "Shackles, Turnbuckles, Wire Clips",
    "Paint Roller, Cleaning Brushes",
    "Lavatory Equipment",
    "Welding & Cutting Gas Equipment",
    "Crew’s Protection Items",
    "Lashing Equipment",
    "Metal Sheet & Bars",
    "Hand Tools, Measuring Tools",
    "Cutting Tools",
    "Pilot’s Ladder, Gangway",
    "Pipes, Tubes & Fittings",

    "",
  ];

  const data2 = [
    "Valves & Cocks",
    "Governors, Hydraulics",
    "Separators",
    "Bearings, Nozzles",
    "Air & Oil Pumps, Motors",
    "Lubricants, Solvents, Chemicals",
    "Calipers, Pressure Gauges",
    "Thermometers",
    "Refrigerant Gas",
    "Mechanical Seal, V-belt",
    "Cylinder Head & Equipment",
    "Liner, Piston, Filter",
    "Gasket, O-ring",
  ];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "1.2 Deck & Engine Stores",
          content: data,
          content2: data2,
          img: "/images/DECK STORE AND ENGINE STORE CHITTAGONG.jpg",
        }}
      />
    </div>
  );
}

export default page;
