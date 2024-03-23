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
          title: "1.8 Hardware Tools, Rope & Lifting Tackles",
          content: data,
          content2: data2,
          img: "/images/Phenumatic Tools Chittagong.jpg",
        }}
      />
    </div>
  );
}

export default page;
