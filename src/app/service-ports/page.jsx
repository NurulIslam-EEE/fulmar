"use client";
import dynamic from "next/dynamic";

// import Banner from "@/components/Banner/Banner";
import styles from "./service-ports.module.css";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const DynamicBanner = dynamic(() => import("@/components/Banner/Banner"), {
  ssr: false,
});

function ServicePorts() {
  return (
    <>
      <DynamicBanner
        config={{
          show: true,
          banner: true,
          img: "/images/service-port.webp",
        }}
      />
      <div className="container">
        <div className={styles.service_ports}>
          <Breadcrumbs data={{ one: "Service Ports" }} />
          <div className={styles.port_item_container}>
            {/* <div className={styles.icon}>
              {" "}
              <img src="/images/bullet.png" alt="" width="100%" />z
            </div> */}
            <div className="bullet-point"></div> Chattogram Port
          </div>
          <div className={styles.port_item_container}>
            {/* <div className={styles.icon}>
              {" "}
              <img src="/images/bullet.png" alt="" width="100%" />
            </div> */}
            <div className="bullet-point"></div>
            Mongla Port
          </div>
          <div className={styles.port_item_container}>
            {/* <div className={styles.icon}>
              {" "}
              <img src="/images/bullet.png" alt="" width="100%" />
            </div> */}
            <div className="bullet-point"></div>
            Payra Port including OPL
          </div>
          <div className={styles.port_item_container}>
            {/* <div className={styles.icon}>
              {" "}
              <img src="/images/bullet.png" alt="" width="100%" />
            </div> */}
            <div className="bullet-point"></div>
            Matarbari Port
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePorts;
