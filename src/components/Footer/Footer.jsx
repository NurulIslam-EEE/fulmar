"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import styles from "./footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="">
          {props?.modalImg === "whatsapp" && (
            <img src="/images/whatsapp.jpg" alt="" width="100%" />
          )}
          {props?.modalImg === "wechat" && (
            <img src="/images/wechat.jpg" alt="" width="100%" />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Footer() {
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState("whatsapp");
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer + " container"}>
        <div className={styles.address}>
          {/* <p>
            Affiliated Companies : Adamallys Marine | Adamallys Marine and Ship
            Chandling
            <br />
            <span>P.O.Box 4684 Dubai UAE E-mail info@adamallys.com</span>
          </p> */}
          <strong>Fulmar Marine Services</strong>

          <p>
            <MdEmail className={styles.icon} /> info@fmscgp.com
          </p>

          <p>
            <FaPhoneAlt className={styles.icon} />
            +880-2333313030
          </p>

          <p>
            <FaLocationDot className={styles.icon} /> House#7, Lane#2, Road#2,
            Block#L, Port Connecting Road, Halishahar, Chittagong-4224,
            Bangladesh.
          </p>
        </div>
        <div className={styles.contact}></div>
        <div className={styles.copyright}>
          <p>
            © Copyright {new Date().getFullYear()} Fulmar Marine Services. All
            Rights Reserved.
          </p>

          <div className={styles.social}>
            <Link
              href="https://linkedin.com/in/fulmar-marine-services-60ab9528a"
              target="_blank"
              className={styles.social_container}
            >
              <FaLinkedinIn />
            </Link>
            <div
              // href="Wechat - fms_Chittagong"
              // target="_blank"
              onClick={() => {
                setModalShow(true), setModalImg("wechat");
              }}
              className={styles.social_container}
            >
              <AiOutlineWechat />
            </div>
            <div
              // href="whatsapp://send?8801919051677"
              // target="_blank"
              className={styles.social_container}
              onClick={() => setModalShow(true)}
            >
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>
      </div>

      <ModalComponent
        show={modalShow}
        modalImg={modalImg}
        onHide={() => {
          setModalShow(false), setModalImg("whatsapp");
        }}
      />
    </footer>
  );
}

export default Footer;
