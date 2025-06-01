import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Metro() {
  const herotextref = useRef();
  const linkref = useRef();
  const [navbarheight, setNavbarHeight] = useState(0);
  const navbarref = useRef();
  const dropdownMenu = useRef();
  const nav = useNavigate();

  useEffect(() => {
    if (herotextref.current) {
      herotextref.current.style.transform = "translateX(25px)";
      herotextref.current.style.transition = "transform 2.0s linear";
    }
    if (navbarref.current) {
      setNavbarHeight(navbarref.current.clientHeight);
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage" id="home-page">
      <div className="overlay" ></div>

      {/* Navbar */}
      <nav className="navbar">
        <div style={{ padding: 0, backgroundColor: "transparent" }}>
          <img
            src="/likeslogo.jpeg"
            alt="Snactek Logo"
            className="logo"
            height={navbarheight}
            width={navbarheight * 2.5}
          />
        </div>

        <ul className="navbar-center" ref={linkref}>
          <li style={{ cursor: "pointer", zIndex: 2 }}>
            <a onClick={() => scrollToSection("home-page")}>
              <strong>Home</strong>
            </a>
          </li>

          <li style={{ cursor: "pointer", zIndex: 2 }}>
            <a onClick={() => scrollToSection("boxes-section")}>
              <strong>About Us</strong>
            </a>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => {
              dropdownMenu.current.style.display = "block";
            }}
          >
            <a href="#!" className="dropdown-toggle">
              <strong>Services</strong> <ChevronDown size={14} />
            </a>
            <ul
              className="dropdown-menu"
              ref={dropdownMenu}
              onMouseLeave={() => {
                dropdownMenu.current.style.display = "none";
              }}
            >
              <li>
                <a onClick={() => nav("/Boxone")}>Web development</a>
              </li>
              <li>
                <a onClick={() => nav("/Boxtwo")}>Cyber security</a>
              </li>
              <li>
                <a onClick={() => nav("/Boxthree")}>Marketing</a>
              </li>
              <li>
                <a onClick={() => nav("/Boxfour")}>AI Development</a>
              </li>
            </ul>
          </li>

          <li style={{ cursor: "pointer", zIndex: 2 }}>
            <a onClick={() => scrollToSection("stack-grid")}>
              <strong>Topics</strong>
            </a>
          </li>

          <li style={{ cursor: "pointer", zIndex: 2 }}>
            <a onClick={() => scrollToSection("contact-page")}>
              <strong>Contact Us</strong>
            </a>
          </li>
        </ul>

        <blockquote>
          <div style={{ cursor: "pointer", zIndex: 2 }} ref={navbarref}>
            <a
              onClick={() => scrollToSection("contact")}
              className="cta-button text-white font-bold"
            >
              GET IN TOUCH →
            </a>
          </div>
        </blockquote>
      </nav>

      {/* Hero Section */}
      <div className="hero-content">
        <div className="hero-text" ref={herotextref}>
          <div className="hero-text">
            <h1>
              <span className="fade-in">Likes & Clicks</span><br />
              <span className="fade-in delay-1">Driving Profit to your Doors</span>
            </h1>
            <p className="fade-in delay-2">
              We are a dynamic marketing and web development company dedicated to
              amplifying your online presence and driving tangible results.
            </p>
          </div>
          <button className="get-started-btn">Get Started</button>
        </div>
        <img src="/hoo.jpeg" style={{ height: "700px", width: "1300px" }} alt="Hero" />
      </div>
    </div>
  );
}

export default Metro;
