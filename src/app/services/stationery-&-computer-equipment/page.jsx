import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "Pen & Pencil",
    "Notebooks, Memo Pads",
    " Files, Paper Holder, Trays",
    "Paper Bags, Envelopes",
    "Stapler, Eraser, Sharpener",
    "Glue, Scissor, Tapes",
    "Printing Papers, Paper Bags",
    " Highlighter, Punch Machine",
    " Batteries, Chargers",
    " Filling Cabinets",
    "Stamps, Inks, Cartridges",
  ];
  const data2 = [
    "Desktop & Laptop Computers",
    "Printers",
    "Scanners",
    " Copy Machines",
    "Mouse, Keyboard",
    "Cameras, Type Writers",
    " Usb Cables, Hdmi Cables",
    "Pen Drive, Hard Drive",
    " Operational Softwares",
    "Antivirus",
  ];
  return (
    <div className="container">
      <Navigation />

      <SingleService
        data={{
          title: "STATIONARY & COMPUTER EQUIPMENT",
          content: data,
          content2: data2,
          img: "/images/Stationnery and computer equipment chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
