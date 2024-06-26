"use client";
import Navigation from "@/components/Navigation/Navigation";
import dynamic from "next/dynamic";
// import SingleService from "@/components/Services/SingleService";
const SingleService = dynamic(
  () => import("@/components/Services/SingleService"),
  {
    ssr: false,
  }
);

function page() {
  const data = [
    " Epoxy & Modified Epoxy",
    "Polyurethane & Thinners",
    " Alkyd & Modified Alkyd",
    "   Heat Resistance Coats",
    "   Underwater, Anti-fouling Coats",
    "Roller & Flat Brushes",
    "  Boiler Water Treatment",
  ];
  const data2 = [
    "    Chemicals",
    " Fuel Oil Treatment Chemicals",
    "Tank Cleaning Chemicals",
    "    Cooling Water Treatment",
    " Chemicals",
    " Oil Spill Dispersant",
    " Electric Cleaning Chemicals",
  ];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "Marine Paints & Chemicals",
          content: data,
          content2: data2,
          img: "/images/Marine Chemicals and Paints Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
