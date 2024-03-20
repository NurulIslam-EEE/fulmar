"use client";
import Image from "next/image";
import CarouselComp from "../Carousel/CarouselComp";
import Navigation from "../Navigation/Navigation";

import styles from "./Banner.module.css";

function Banner({ config }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <Navigation />

        {config?.banner && config?.show && (
          <>
            <div className={styles.bannerImg}>
              {/* <Image src={config?.img} sizes="100vw" fill /> */}
              <img src={config?.img} alt="" />
            </div>
          </>
        )}
        {/* <img className={styles.bg} src="/images/body-bg.png" alt="" /> */}

        {config?.banner && !config?.show && <CarouselComp />}
      </div>
    </div>
  );
}

export default Banner;
