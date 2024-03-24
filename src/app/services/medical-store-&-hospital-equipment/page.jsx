import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "First Aid Kit",
    "Medical Tablets & Capsules",
    "Emergency Eye Wash",
    "Surgical & Operational Tools",
    "Oxygen Tanks",
    "Hospital Beds",
    "Injections, Ointments",
    "Surgical Items",
    "Masks, Sprays",
    "BP Machines, Test Kits",
    "Glucose Measuring Device",
  ];
  const data2 = [
    "Gaming Devices",
    " Gym Equipment",
    " DVD Player",
    "Movies, Games",
    " Table Tennis Set",
    " Playing Balls",
    "  Basketball, Carrom Board",
    " Projector",
    "Audio Player",
  ];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "1.7 MEDICAL STORE & WELFARE ITEMS",
          content: data,
          content2: data2,
          img: "/images/Medical Store and Welfare Items Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
