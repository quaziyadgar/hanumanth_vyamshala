import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-withoutbg.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./navbar.component.scss";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about-us" },
  { label: "CLASSES", to: "/classes" },
  { label: "SERVICES", to: "/services" },
  { label: "OUR TEAM", to: "/our-team" },
  {
    label: "PAGES",
    to: "#",
    children: [
      {
        label: "Classes timetable",
        to: "/classes-timetable",
      },
      {
        label: "Bmi calculator",
        to: "/bmi-calculator",
      },
      {
        label: "Gallery",
        to: "/gallery",
      },
      {
        label: "Our blog",
        to: "/our-blog",
      },
    ],
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const socialLinks = [
  { label: "fa-brands fa-facebook", to: "https://www.facebook.com" },
  { label: "fa-brands fa-instagram", to: "https://www.instagram.com" },
  { label: "fa-brands fa-twitter", to: "https://www.twitter.com" },
  { label: "fa-brands fa-youtube", to: "https://www.youtube.com" },
];

export const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary`}
        style={{
          background:
            "linear-gradient(180deg, var(--black-nav), var(--brown-nav))",
        }}
      >
        <Container className={`${scrolled ? "scrolled" : ""}`}>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" color="white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link, index) => (
                <div>
                  {!link.children && (
                    <Nav.Link
                      href={link.to}
                      key={index}
                      className={`custom-nav ${
                        index === active ? "active" : ""
                      }`}
                      onClick={() => {setActive(index)}}
                    >
                      {link.label}
                    </Nav.Link>
                  )}
                  {link.children && (
                    <NavDropdown
                      title={link.label}
                      id="basic-nav-dropdown"
                      className="text-white"
                      key={index}
                    >
                      {link.children.map((childLink, key) => (
                        <NavDropdown.Item
                          href={childLink.to}
                          key={key}
                        >
                          {childLink.label}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  )}
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className="text-white">
            <div className="d-flex top-option">
              <div className="to-search search-switch">
                <i className="fa fa-search" />
              </div>
              <div className="to-social">
                {socialLinks.map((link, index) => (
                  <Link to={link.to} key={index} className="p-2 text-white">
                    <i className={link.label} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
      {/* <header className={`header-section ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-sm-2">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <nav className="nav-menu">
                <ul>
                  {navLinks.map((link, index) => (
                    <li
                      className={`${index === active ? "active" : ""}`}
                      key={index}
                      onClick={() => setActive(index)}
                    >
                      <Link to={link.to}>{link.label}</Link>
                      {link.children && (
                        <ul className="dropdown">
                          {link.children.map((chileLink, key) => (
                            <li key={`child${key}`}>
                              <Link to={chileLink.to}>{chileLink.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search" />
                </div>
                <div className="to-social">
                  {socialLinks.map((link, index) => (
                    <Link to={link.to} key={index}>
                      <i className={link.label} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header> */}
    </>
  );
};
