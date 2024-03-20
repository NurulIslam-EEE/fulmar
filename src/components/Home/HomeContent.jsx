"use client";
import Link from "next/link";
import styles from "./home.module.css";

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
        <img loading="lazy" src="/images/cpa.png" alt="" />
        <img loading="lazy" src="/images/bc.png" alt="" />
        <img loading="lazy" src="/images/ccci.png" alt="" />
        <img
          loading="lazy"
          className={styles.mespas}
          src="/images/mespas.png"
          alt=""
        />
        <img
          loading="lazy"
          className={styles.procure}
          src="/images/procure.png"
          alt=""
        />
        <img
          loading="lazy"
          className={styles.procure}
          src="/images/Shipserv.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeContent;
