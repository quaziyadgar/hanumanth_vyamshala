import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-withoutbg.png";

import "./navbar.component.scss";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about-US" },
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
    label: "Contact",
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
      <header className={`header-section ${scrolled ? "scrolled" : ""}`}>
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
      </header>
    </>
  );
};
