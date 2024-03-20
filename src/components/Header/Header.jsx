"use client";
import Navbar from "../Navigation/Navigation";
import styles from "./header.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import MobileNav from "../Navigation/MobileNav";

function Header() {
  const { height, width } = useWindowDimensions();
  // console.log(height, width, ".......");
  return (
    <div className={styles.header}>
      <div className={styles.content + " container"}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/images/logo4.png" alt="" />
          </div>
        </Link>

        {width < 821 && <MobileNav />}
        {width > 820 && (
          <div className={styles.contactinfo}>
            <p>
              {" "}
              <FaPhoneAlt className={styles.icon} />
              +880-2333313030
            </p>
            <p>
              {" "}
              <MdEmail className={styles.icon} />
              info@fmscgp.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
