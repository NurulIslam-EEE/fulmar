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
          title: "PNEUMATIC & ELECTRICAL TOOLS",
          content: data,
          content2: data2,
          img: "/images/Phenumatic Tools Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
