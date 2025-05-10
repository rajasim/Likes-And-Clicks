import React from "react";
import "./Homepage.css";

function Metro() {
  return (
    <div 
      className="homepage"
      style={{ 
        backgroundImage: "url('/ho.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "105vh",
        width: "98%",
        position: "relative",
        color: "white"
      }}
    >
      <div className="overlay"></div>

      <nav className="navbar">
        <div className="logo">LIKES & CLICKS</div>
        <ul className="nav-links">
          <li><b>Home</b></li>
          <li><b>About</b></li>
          <li><b>Blocks</b></li>
          
          <li><b>Contact</b></li>
          
        </ul>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Likes & Clicks <br />Driving Profit to your Doors</h1>
          <p>
            <strong>Likes & Clicks</strong> Likes & Clicks is a dynamic marketing and web development company dedicated to amplifying your online presence and driving tangible results.
             <strong>Likes & Clickss</strong>.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Metro;
