import React from 'react';
import './Stackpage.css';

function Stackpage() {
  return (
    <div className="stack-page">
      <h1 className="stack-title">OUR SERVICES</h1>
      <p className="stack-subtitle">
        Likes and Clicks, we offer a comprehensive suite of services designed to elevate your digital footprint and ensure your online success. Our expertise spans across web development, where we craft engaging and functional websites tailored to your unique needs.
      </p>

      <div className="stack-grid">

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-brands fa-slideshare"></i></div>
          <h3 className="stack-heading">Website Development</h3>
          <p className="stack-description">Custom websites for businesses, schools, e-commerce, and more using modern frameworks.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
          <h3 className="stack-heading">Mobile App Development</h3>
          <p className="stack-description">Android and iOS app development with responsive design and user-friendly interfaces.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
          <h3 className="stack-heading">Search Engine Optimization (SEO)</h3>
          <p className="stack-description">On-page and off-page SEO to improve website visibility and ranking.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-brands fa-facebook"></i></div>
          <h3 className="stack-heading">Social Media Marketing (SMM)</h3>
          <p className="stack-description">Campaigns and content strategies for platforms like Instagram, Facebook, and LinkedIn.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-bullseye"></i></div>
          <h3 className="stack-heading">Pay-Per-Click Advertising (PPC)</h3>
          <p className="stack-description">Google Ads, Meta Ads, and other paid ad management for high-converting traffic.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-pen-nib"></i></div>
          <h3 className="stack-heading">Content Marketing</h3>
          <p className="stack-description">Blog writing, press releases, video content, and infographics to attract and retain audiences.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-envelope-circle-check"></i></div>
          <h3 className="stack-heading">Email Marketing Automation</h3>
          <p className="stack-description">Bulk mailing, automated follow-ups, and personalized email campaigns.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-laptop-code"></i></div>
          <h3 className="stack-heading">Custom Software Development</h3>
          <p className="stack-description">ERP, CRM, inventory, and custom SaaS solutions tailored to business needs.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-cloud"></i></div>
          <h3 className="stack-heading">Cloud Services & Hosting</h3>
          <p className="stack-description">Secure cloud storage, AWS/Azure management, and domain/hosting support.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-chart-line"></i></div>
          <h3 className="stack-heading">Data Analytics & Business Intelligence</h3>
          <p className="stack-description">Visual dashboards, sales insights, and predictive analytics for better decisions.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-shield-halved"></i></div>
          <h3 className="stack-heading">Cybersecurity & Data Protection Services</h3>
          <p className="stack-description">Firewall setup, penetration testing, encryption, endpoint protection, and GDPR compliance.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

        <div className="stack-card">
          <div className="stack-icon"><i className="fa-solid fa-palette"></i></div>
          <h3 className="stack-heading">UI/UX Design</h3>
          <p className="stack-description">Attractive, user-friendly design for websites and mobile apps with wireframes and prototypes.</p>
          <a href="https://wa.me/917588995299" target="_blank" rel="noopener noreferrer">
            <button className="stack-button">Book Now</button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Stackpage;
