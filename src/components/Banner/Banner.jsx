"use client";
import Image from "next/image";
import CarouselComp from "../Carousel/CarouselComp";
import Navigation from "../Navigation/Navigation";

import styles from "./Banner.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Banner({ config }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <Navigation />

        {config?.banner && config?.show && (
          <>
            <div className={styles.bannerImg}>
              {/* <img src={config?.img} alt="" /> */}
              <Image
                src={config?.img}
                width={960}
                height={320}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Banner Image"
                // priority={true}
              />
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
