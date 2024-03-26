import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "Bolts & Nuts",
    "Screws & Washers",
    "Chipping Materials",
    " Hooks, Hinges, Latches",
    "Drills, Grinders, Blowers",
    " Drill Bits, Blades, Electrodes",
    "Spanners, Wrenches, Hammers",
    " Elbows, Tees, Plugs, Nipples",
    "Measuring Tools & Compasses",
    "Lathe Machine Attachments",
    "Reamers, Taps/Dies",
    "Thread Restorers, Hole Saws",
  ];
  const data2 = [
    "Mooring Ropes & Tails",
    " Manila & Nylon Ropes",
    " Crane Wires",
    " Gangway Lifting Wires",
    " Wire, Belt & Net Slings",
    " Links, Turnbuckles & Shackles",
    " Lifting Hooks, Chains & Rods",
    "Fairlead, Wire Lock",
  ];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "Hardware Tools, Rope & Lifting Tackles",
          content: data,
          content2: data2,
          img: "/images/Hardware tools rope and lifing tackles chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
