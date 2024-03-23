import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [
    "Sludge & Slop Removal",
    " Garbage Disposal",
    "Tank Cleaning",
    "Hatch Cleaning",
    " Chipping",
    "Painting",
  ];
  const data2 = [];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "1.9 OTHER ITEMS",
          content: data,
          content2: data2,
          img: "/images/OTHER SERVICES SHIP CHANDLER.jpg",
        }}
      />
    </div>
  );
}

export default page;
