import Navigation from "@/components/Navigation/Navigation";
import SingleService from "@/components/Services/SingleService";
import React from "react";

function page() {
  const data = [];
  const data2 = [];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "1.4 Marine Paints & Chemicals",
          content: data,
          content2: data2,
          img: "/images/Marine Chemicals and Paints Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
