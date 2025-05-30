import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import { ChevronDown } from "lucide-react";

function Metro() {
  const herotextref = useRef();
  const linkref = useRef();
  const [navbarheight, setNavbarHeight] = useState(0);
  const navbarref = useRef();

  useEffect(() => {
    if (herotextref.current) {
      herotextref.current.style.transform = "translateX(25px)";
      herotextref.current.style.transition = "transform 2.0s linear";
    }
    if (navbarref.current) {
      setNavbarHeight(navbarref.current.clientHeight);
    }
  }, []);

  const dropdownMenu = useRef();

  return (
    <div
      className="homepage"
      id="homepage"
      style={{
        backgroundImage: "url('/hoo.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "98%",
        position: "relative",
        color: "white",
      }}
    >
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div style={{ padding: 0, backgroundColor: "transparent" }}>
          <img
            src="/wd1.6.jpeg"
            alt="Snactek Logo"
            className="logo"
            height={navbarheight}
            width={navbarheight * 2.5}
          />
        </div>

        <ul className="navbar-center" ref={linkref}>
          <li>
            <a href="#home">
              <strong>Home</strong>
            </a>
          </li>
           <li>
            <a href="#home">
              <strong>About Us</strong>
            </a>
          </li>
          
          <li
            className="dropdown"
            onMouseEnter={() => {
              dropdownMenu.current.style.display = "block";
            }}
          >
            <a href="#frying-machines" className="dropdown-toggle">
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
              {""}
                <a href="#web">Web development</a>
              </li>
              <li>
                <a href="#continuous-fryer">Cyber security</a>
              </li>
                <li>
                <a href="#continuous-fryer">Marketing</a>
              </li>
                <li>
                <a href="#continuous-fryer">AI Development</a>
              </li>
            </ul>
          </li>

         
           
         

          <li>
            <a href="#blog">
              <strong>Topics</strong>
            </a>
          </li>
          <li>
            <a href="#contact">
              <strong>Contact Us</strong>
            </a>
          </li>
        </ul>

        <blockquote>
          <div style={{ cursor: "pointer", zIndex: 2 }} ref={navbarref}>
            <a href="#contact" className="cta-button text-white font-bold">
              GET IN TOUCH →
            </a>
          </div>

          
        </blockquote>
      </nav>

      {/* Hero Section */}
      <div className="hero-content">
        <div className="hero-text" ref={herotextref}>
          <div class="hero-text">
  <h1>
    <span class="fade-in">Likes & Clicks</span><br />
    <span class="fade-in delay-1">Driving Profit to your Doors</span>
  </h1>
  <p class="fade-in delay-2">
   We are a dynamic
    marketing and web development company dedicated to amplifying your
    online presence and driving tangible results.
    <strong></strong>.
  </p>
</div>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Metro;