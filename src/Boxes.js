import React from "react";
import "./Boxes.css";
import { useNavigate } from "react-router-dom";

function Boxes() {
  const nav = useNavigate();

  return (
    <div className="boxes-section">
      <div className="box" id="boxone">
        <img src="/wd.jpeg" alt="Blocks" className="box-icon" />
        <h2>Web development</h2>
        <p>
          The <strong>Organic Blocks</strong> plugin includes <strong>20 premium blocks</strong> for creating amazing content. Each block is showcased in <strong>L&C</strong>.
        </p>
        <button 
          className="box-button" 
          onClick={() => nav("/Boxone")}
        >
          LEARN ABOUT WEB
        </button>
      </div>

      <div className="box" id="boxtwo">
        <img src="/cs.jpeg" alt="Patterns" className="box-icon" />
        <h2>Cyber security</h2>
        <p>
          <strong>L&C</strong> includes a large collection of patterns. A pattern is a group of blocks organized in a unique layout for a specific purpose.
        </p>
        <button 
          className="box-button"
          onClick={() => nav("/Boxtwo")}
        >
          SECURITY
        </button>
      </div>

      <div className="box" id="boxthree">
        <img src="/market.jpeg" alt="Templates" className="box-icon" />
        <h2>Marketing</h2>
        <p>
          <strong>L&C</strong> features a variety of useful page templates. Templates provide a great starting place for adding patterns and blocks.
        </p>
        <button 
          className="box-button"
          onClick={() => nav("/Boxthree")}
        >
          LEARN MARKETING
        </button>
        
      </div>
      <div className="box" id="boxthree">
        <img src="/Ai.png" alt="Templates" className="box-icon" />
        <h2>AI Development</h2>
        <p>
          <strong>L&C</strong> features a variety of useful page templates. Templates provide a great starting place for adding patterns and blocks.
        </p>
        <button 
          className="box-button"
          onClick={() => nav("/Boxfour")}
        >
          LEARN AI
        </button>
        
      </div>
    </div>
  );
}

export default Boxes;
