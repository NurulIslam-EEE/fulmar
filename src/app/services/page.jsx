"use client";

import styles from "./services.module.css";

import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Headline from "@/components/Services/Headline";
import List from "@/components/Services/List";
import Link from "next/link";

function Services() {
  return (
    <>
      <Banner config={{ show: true, img: "/images/about-us-banner.jpg" }} />
      <div className={styles.services}>
        <div className="container">
          {/* <Breadcrumbs data={{ one: "Services" }} /> */}

          {/* <Headline data={{ subTitle: "1.1 PROVISION STORES" }} /> */}
          {/* 
          <div className="d-flex">
            <img src="/images/icon.png" alt="" height="50px" />
            <div>
              <h2>1. OUR SERVICES</h2>
              <h5>1.1 PROVISION STORES</h5>
            </div>
          </div> */}

          {/* <div className="d-flex align-items-center justify-content-between ms-2">
            <List
              data={[
                "Fresh Vegetables",
                "Fresh Meat & Meat Products",
                "Fish Fresh & Frozen",
                "Fresh Fruits",
                "Rice, Flour, Beans",
                "Fish Dry & Smoked",
                "Tinned Fish & Meat",
                "Bread/ Cake/ Pastry",
                "Eggs/ Milk/ Yogurt/ Ice-cream",
                "Tinned Fish, Fruits, Vegetables",
                "Jam & Marmalade",
                "Spices & Herbs",
              ]}
            />
            <div className={styles.service_img}>
              <img src="/images/service1.png" alt="" />
            </div>

            <div>
              <div className="d-flex align-items-center my-1">
                <div className={styles.circle_bullet}></div>
                <p> Fresh Vegetables </p>
              </div>
              <div className="d-flex align-items-center my-1">
                <div className={styles.circle_bullet}></div>
                <p>Fresh Meat & Meat Products</p>
              </div>
              <div className="d-flex align-items-center my-1">
                <div className={styles.circle_bullet}></div>
                <p>Fish Fresh & Frozen</p>
              </div>
              <div className="d-flex align-items-center my-1">
                <div className={styles.circle_bullet}></div>
                <p>Fresh Fruits</p>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Rice, Flour, Beans</p>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Fish Dry & Smoked</p>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Tinned Fish & Meat</p>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Bread/ Cake/ Pastry</p>
              </div>

              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Eggs/ Milk/ Yogurt/ Ice-cream</p>
              </div>

              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Tinned Fish, Fruits, Vegetables</p>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>
                <p>Jam & Marmalade</p>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.circle_bullet}></div>

                <p>Spices & Herbs</p>
              </div>
            </div>
          </div> */}

          {/* <div className="d-flex align-items-center justify-content-between ms-2 mt-2">
            <div className={styles.service_img}>
              <img src="/images/service1.png" alt="" />
            </div>
            <List
              data={[
                "Fresh Water, Mineral Water",
                "Coffee, Tea, Chocolate",
                "Pickles, Western & Orientals",
                "Biscuits, Crackers",
                "Pasta & Noddle",
                "Salt & Sugar",
                "Cooking Oil, Butter, Cheese",
                "Frozen Paratha & Chapati",
                "Sausage, Sea Food",
                "Juices, Soft Drinks",
                "Sauce, Gravy, Sauce Mix",
                "Seasoning & Flavors",
              ]}
            />
          </div> */}

          {/* <Headline data={{ subTitle: "1.2 DECK STORES & ENGINE STORES" }} /> */}
          {/* <div className="d-flex align-items-center justify-content-between ms-2 mt-2">
            <div className={styles.service_img}>
              <img src="/images/service1.png" alt="" />
            </div>
            <List
              data={[
                "Working Cloths, Gloves, Boots",
                "Packing & Jointing",
                "Rigging Equipment",
                "Shackles, Turnbuckles, Wire Clips",
                "Paint Roller, Cleaning Brushes",
                "Lavatory Equipment",
                "Welding & Cutting Gas Equipment",
                "Crew’s Protection Items",
                "Lashing Equipment",
                "Metal Sheet & Bars",
                "Hand Tools, Measuring Tools",
                "Cutting Tools",
                "Pilot’s Ladder, Gangway",
              ]}
            />
          </div> */}
          {/* <div className="d-flex align-items-center justify-content-between ms-2 mt-2">
            <List
              data={[
                "Pipes, Tubes & Fittings",
                "Valves & Cocks",
                "Governors, Hydraulics",
                "Separators",
                "Bearings, Nozzles",
                "Air & Oil Pumps, Motors",
                "Lubricants, Solvents, Chemicals",
                "Calipers, Pressure Gauges",
                "Thermometers",
                "Refrigerant Gas",
                "Mechanical Seal, V-belt",
                "Cylinder Head & Equipment",
                "Liner, Piston, Filter",
                "Gasket, O-ring",
              ]}
            />
            <div className={styles.service_img}>
              <img src="/images/service1.png" alt="" />
            </div>
          </div> */}
          {/* <Headline
            data={{ subTitle: "1.3 CABIN STORE & SAFETY EQUIPMENTS" }}
          /> */}

          <div className="d-flex align-items-center my-2">
            <div className={styles.circle}>
              <img src="/images/bullet.png" alt="" />
            </div>{" "}
            <h5 className={styles.title}>
              {" "}
              <Link href="/services/provision-stores">
                {" "}
                Provision Stores
              </Link>{" "}
            </h5>
          </div>

          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/deck-&-engine-stores">
                {" "}
                Deck & Engine Stores{" "}
              </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/cabin-store-&-safety-equipment">
                {" "}
                Cabin Store & Safety Equipment{" "}
              </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/hardware-tools-rope-&-lifting-tackles">
                {" "}
                Hardware Tools, Rope & Lifting Tackles{" "}
              </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/marine-paints-&-chemicals">
                Marine Paints & Chemicals{" "}
              </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>{" "}
            <h5>
              <Link href="/services/stationery-&-computer-equipment">
                {" "}
                Stationery & Computer Equipment{" "}
              </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/provision-stores">
                {" "}
                Medical Store & Hospital Equipment{" "}
              </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/pneumatic-tools">Pneumatic Tools </Link>
            </h5>
          </div>

          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/other-services">Other Services </Link>
            </h5>
          </div>

          {/* <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/medical-store-&-hospital-equipment">
                Hatch Cleaning{" "}
              </Link>
            </h5>
          </div>
          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/provision-stores">Hatch Cover Repair </Link>
            </h5>
          </div>
          <div className="d-flex align-items-center my-2">
            {" "}
            <div className={styles.circle}>
              {" "}
              <img src="/images/bullet.png" alt="" />
            </div>
            <h5>
              <Link href="/services/provision-stores">
                Chipping & Painting{" "}
              </Link>
            </h5>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Services;
