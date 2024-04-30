"use client";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
// import Banner from "@/components/Banner/Banner";
const DynamicBanner = dynamic(() => import("@/components/Banner/Banner"), {
  ssr: false,
});
// import HomeContent from "@/components/Home/HomeContent";

const HomeContent = dynamic(() => import("@/components/Home/HomeContent"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <DynamicBanner config={{ banner: true }} />
      <HomeContent />
    </main>
  );
}
