"use client";
import Navigation from "@/components/Navigation/Navigation";
import dynamic from "next/dynamic";

import styles from "../services.module.css";
// import SingleService from "@/components/Services/SingleService";
const SingleService = dynamic(
  () => import("@/components/Services/SingleService"),
  {
    ssr: false,
  }
);

function page() {
  const data = [
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
  ];

  const data2 = [
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
  ];
  return (
    <div className="container">
      <Navigation />

      <SingleService
        data={{
          title: "PROVISION STORES",
          content: data,
          content2: data2,
          img: "/images/PROVISION SUPPLY CHITTAGONG.jpg",
        }}
      />
    </div>
  );
}

export default page;
