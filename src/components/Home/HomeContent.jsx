"use client";
import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";
function HomeContent() {
  return (
    <div className={styles.homeContent + " container"}>
      <h3 className="mt-4 mb-3">Company Profile</h3>
      <div className={styles.about}>
        <p>
          Fulmar Marine Services established in 2021 in Bangladesh. We are
          providing best quality supplies that modern ship owner/operators
          require through the utilization of an audacious import strategy, and
          aligning this with our customer focused service ethics. Fulmar Marine
          Services are shaping the future of the ship-supply industry in
          Bangladesh. <br /> <br />
          Utilizing our extensive inventory in excess of 45,000 marine store
          items, and combining this with our qualified efficient workers and the
          latest technology, FMS thus is able to offer, what we believe to be
          market-leading performance service to our customers. <br /> <br /> Our
          ultimate satisfaction is to fulfill our customers requirements.
        </p>
        <img src="/images/quote.png" alt="" />
      </div>
      <div className="d-flex align-items-center my-4">
        <h5>Click here to download brochure</h5>
        <Link
          href="/fulmar.pdf"
          download="Fulmar Marine Services"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.adobe}>
            {" "}
            <img src="/images/adobe.png" alt="" />
          </div>
        </Link>
      </div>

      <h4>In Association with :</h4>
      <div className={styles.association}>
        <div
          style={{
            height: "auto",
            minWidth: "50px",
            width: "50px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            // fill={true}
            width={300}
            height={286}
            src="/images/cpa.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* <img loading="lazy" src="/images/cpa.png" alt="" /> */}
        <div
          style={{
            height: "auto",
            minWidth: "50px",
            width: "50px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            // fill={true}
            width={300}
            height={286}
            src="/images/bc.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <img loading="lazy" src="/images/bc.png" alt="" /> */}
        <div
          style={{
            height: "5auto",
            minWidth: "50px",
            width: "50px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            // fill={true}
            width={300}
            height={286}
            src="/images/ccci.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <img loading="lazy" src="/images/ccci.png" alt="" /> */}
        <div
          style={{
            height: "auto",
            minWidth: "150px",
            width: "150px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            // fill={true}
            width={2362}
            height={591}
            src="/images/mespas.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <img
          loading="lazy"
          className={styles.mespas}
          src="/images/mespas.png"
          alt=""
        /> */}
        <div
          style={{
            height: "auto",
            minWidth: "200px",
            width: "200px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            // fill={true}
            width={534}
            height={94}
            src="/images/procure.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <img
          loading="lazy"
          className={styles.procure}
          src="/images/procure.png"
          alt=""
        /> */}

        <div
          style={{
            height: "auto",
            minWidth: "200px",
            width: "200px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            // fill={true}
            width={1024}
            height={231}
            src="/images/Shipserv.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <img
          loading="lazy"
          className={styles.procure}
          src="/images/Shipserv.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default HomeContent;
