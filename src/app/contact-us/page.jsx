"use client";

import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

function ContactUs() {
  return (
    <>
      <Banner config={{ show: true, img: "/images/about-us-banner.jpg" }} />
      <div className="container">
        {/* <Breadcrumbs data={{ one: "Contact us" }} /> */}
        <div className="contact-us">
          <h5>E-mail</h5>
          <p>
            supply@fmscgp.com <br /> accounts@fmscgp.com <br /> info@fmscgp.com
          </p>
          <h5>Telephone</h5>
          <p>+880-2333313030</p>
          <h5>Mobile</h5>
          <p> +8801919051677</p>
          <h5>Address</h5>
          <p>
            House#7, Lane#2, Road#2, Block#L, Port Connecting Road, Halishahar,
            Chittagong-4224, Bangladesh.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.484303291172!2d91.7930753!3d22.3301661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x646b2093b7d0271b%3A0xd03d60d38a4dd0f2!2sFulmar%20Marine%20Services!5e0!3m2!1sen!2sbd!4v1704731511008!5m2!1sen!2sbd"
            width="100%"
            height="400"
            className="mb-3"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
