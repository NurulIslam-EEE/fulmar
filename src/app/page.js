import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
// import HomeContent from "@/components/Home/HomeContent";
import dynamic from "next/dynamic";
const HomeContent = dynamic(() => import("@/components/Home/HomeContent"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner config={{ banner: true }} />
      <HomeContent />
    </main>
  );
}
