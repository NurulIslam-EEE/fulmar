"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.css";

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

function Slider() {
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
        <img src="/images/cpa.png" alt="" />
        <img src="/images/bc.png" alt="" />
        <img src="/images/ccci.png" alt="" />
        <img className={styles.mespas} src="/images/mespas.png" alt="" />
        <img className={styles.procure} src="/images/procure.svg" alt="" />
        <img className={styles.procure} src="/images/Shipserv.png" alt="" />
      </Carousel>
    </div>
  );
}

export default Slider;
