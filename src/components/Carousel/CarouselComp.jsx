"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.css";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div onClick={() => onClick()} className={styles.arrow_container}>
      &#8594;
    </div>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div onClick={() => onClick()} className={styles.arrow_container_left}>
      &#8592;
    </div>
  );
};

function CarouselComp() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        className={styles.slide_container + " arrow_hover"}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
      >
        {[
          "/images/b1.webp",
          "/images/Chittagong Port, Ship chandler chittagong,fms, marine service, chittagong port vendor.webp",
          "/images/provision at chittagong, sludge disposal at chittagong, chittagong port, vendor at chittagong, supplier at chittagong.webp",
        ].map((x) => {
          return (
            <div key={x} className={styles.slide_card}>
              {/* <img src={x} alt="" /> */}
              <Image
                src={x}
                width={960}
                height={369}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority={true}
                // loader="eager"
                alt="Banner Image"
              />
              {/*  */}
              {/* <LazyLoadImage
                alt={"banner"}
                height={"auto"}
                src={x}
                width={"100%"}
                effect="blur"
              /> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
