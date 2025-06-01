import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="contact-page " id='contact-page'>
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Likes & Clicks</p>
        <div className="logo-box">Your logo</div>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="contact-block">
            <h3>Address</h3>
            <p>1. Dubai:
Dubai Marina, Dubai, United Arab Emirates
Plot No. 123, Dubai Marina Complex, Dubai, UAE
<br></br>
<br></br>

2. Mumbai:
123, MG Road, Fort, Mumbai, Maharashtra 400001, India
<br></br>
<br></br>

3. Australia (Sydney):
Level 1, 123 Pitt Street, Sydney NSW 2000, Australia</p>
          </div>
          
          <div className="contact-block">
            <h3>Contact Us</h3>
            <p>
            {" "}
            <i class="fa-solid fa-phone fa-lg " style={{color:"gray"}}></i>  : +91 75889 95299
          </p>
          <br></br>
          <br></br>

          <p>
            {" "}
            <i class="fa-solid fa-envelope fa-lg"></i> :

            aftabmaldar1201@gmail.com
          </p>
          <br></br>
         
          <p>
            <a
              href="https://wa.me/+91 75889 95299?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
              className="mail"
              
            >
            <br></br>
              {" "}
              <i class="fa-brands fa-square-whatsapp fa-lg" style={{color: "white"}}></i> WHATSAPP : 
            </a>{" "}
          </p>
          </div>
        </div>
      <div className="map-section">
  <video
    src="/video/footerl.mp4"
    autoPlay
    muted
    loop
    playsInline
    controls
    style={{ width: "500px",height:"500px"}}
  />
</div>
      </div>
    </div>
  );
}

export default Footer;
