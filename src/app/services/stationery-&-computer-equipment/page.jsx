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
          title: "1.6 Hardware Tools, Rope & Lifting Tackles",
          content: data,
          content2: data2,
          img: "/images/Stationnery and computer equipment chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
