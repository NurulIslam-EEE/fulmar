"use client";
import Navbar from "../Navigation/Navigation";
import styles from "./header.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import MobileNav from "../Navigation/MobileNav";
import Image from "next/image";

function Header() {
  const { height, width } = useWindowDimensions();
  // console.log(height, width, ".......");
  return (
    <div className={styles.header}>
      <div className={styles.content + " container"}>
        <Link href="/">
          <p className={styles.logo}>
            {/* <img src="/images/logo4.png" alt="" /> */}

            <Image
              // fill={true}
              width={1624}
              height={356}
              src="/images/logo4.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </p>
        </Link>

        {width < 821 && <MobileNav />}
        {width > 820 && (
          <h3 className={styles.contactinfo}>
            <p>
              {" "}
              <FaPhoneAlt className={styles.icon} />
              +880-2333313030
            </p>
            <p>
              {" "}
              <MdEmail className={styles.icon} />
              info@fulmarmarine.com
            </p>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Header;
