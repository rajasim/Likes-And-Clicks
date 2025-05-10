import React from 'react';
import './Custome.css';

function Custome() {
    return (
        <div className="custom-section">
          <div className="custom-section-content">
            <h1>
            Likes &<br />Clicks
            </h1>
    
            <p className="custom-section-subtitle">
            dynamic marketing and web development company <strong>LIKES & CLICKS</strong>
            </p>
    
            <p className="custom-section-description">
            dedicated to amplifying your online presence and driving tangible results. We blend innovative digital marketing strategies with cutting-edge web development expertise to create compelling user experiences and foster meaningful engagement. From crafting data-driven campaigns that generate likes and clicks to building robust and visually appealing websites, we empower businesses to thrive in the digital landscape and achieve sustainable growth.
            </p>
          </div>
    
          <div
            className="custom-section-image"
            style={{ backgroundImage: "url('/aboutu.jpeg')" }} // ✅ Direct public folder image
          />
        </div>
      );
    }
  
export default Custome;
