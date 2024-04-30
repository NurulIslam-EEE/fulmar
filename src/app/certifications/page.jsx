"use client";

import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import dynamic from "next/dynamic";
const DynamicBanner = dynamic(() => import("@/components/Banner/Banner"));

function Certifications() {
  return (
    <>
      <DynamicBanner
        config={{ show: true, img: "/images/about-us-banner.jpg" }}
      />
      <div className="certifications">
        <div className="container">
          <Breadcrumbs data={{ one: "Certifications" }} />
        </div>
      </div>
    </>
  );
}

export default Certifications;
