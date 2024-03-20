"use client";

import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

function Certifications() {
  return (
    <>
      <Banner config={{ show: true, img: "/images/about-us-banner.jpg" }} />
      <div className="certifications">
        <div className="container">
          <Breadcrumbs data={{ one: "Certifications" }} />
        </div>
      </div>
    </>
  );
}

export default Certifications;
