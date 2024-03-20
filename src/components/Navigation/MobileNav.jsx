"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.module.css";
import Link from "next/link";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaAngleDown } from "react-icons/fa";

export default function MobileNav() {
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" className={styles.nav_container}>
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} href="/" className={styles.nav_item}>
              {" "}
              <p>HOME</p>
            </Nav.Link>
            <Nav.Link as={Link} href="/about-us" className={styles.nav_item}>
              {" "}
              <p>ABOUT US</p>
            </Nav.Link>
            <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
              {" "}
              <p>SERVICES</p>
            </Nav.Link>
            <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
              {" "}
              <p>SERVICE PORT</p>
            </Nav.Link>
            <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
              {" "}
              <p>CERTIFICATIONS</p>
            </Nav.Link>
            <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
              {" "}
              <p>CONTACT US</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

      {["xxl"].map((expand) => (
        <Navbar key={false} expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="w-75"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  FULMAR MARINE SERVICES
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    as={Link}
                    href="/"
                    className={styles.nav_item}
                    onToggle={false}
                  >
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      {" "}
                      <p>HOME</p>
                    </Navbar.Toggle>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="/about-us"
                    className={styles.nav_item}
                  >
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      <p>ABOUT US</p>
                    </Navbar.Toggle>{" "}
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="/services"
                    className={styles.nav_item}
                  >
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      {" "}
                      <p>
                        SERVICES
                        {/* <FaAngleDown style={{ marginLeft: "10px" }} /> */}
                      </p>
                    </Navbar.Toggle>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="/service-ports"
                    className={styles.nav_item}
                  >
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      {" "}
                      <p>SERVICE PORTS</p>
                    </Navbar.Toggle>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="#action2"
                    className={styles.nav_item}
                  >
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      {" "}
                      <p>CERTIFICATIONS</p>
                    </Navbar.Toggle>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="/contact-us"
                    className={styles.nav_item}
                  >
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      {" "}
                      <p>CONTACT US</p>
                    </Navbar.Toggle>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
