import React from "react";
import "./Boxone.css";

function Boxone() {
  return (
    <div className="features-wrapper" id="web">
      <div className="features-container">
        <h1 className="heading">We provide all web development services for your business.</h1>
        <p className="subheading">
          Discover what makes a truly effective and modern website. These key features improve user satisfaction, boost trust, and drive long-term performance.
        </p>

        {/* Section 1 */}
        <div className="content-section bg-light">
          <img src="/wd1.1.jpeg" alt="Navigation" className="feature-image" />
          <div className="text-content">
            <h2>Streamlined Site Architecture</h2>
            <p>
              Intuitive navigation reduces confusion and improves usability,<br />
              helping users find what they need quickly and confidently.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-section reverse bg-dark">
          <img src="/w1.2.jpg" alt="Design" className="feature-image" />
          <div className="text-content">
            <h2>Modern, Responsive Design</h2>
            <p>
              Our responsive designs look great on any device,<br />
              ensuring a consistent and engaging user experience.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-section bg-light">
          <img src="/w1.3.jpg" alt="Value Proposition" className="feature-image" />
          <div className="text-content">
            <h2>Strategic Messaging & Positioning</h2>
            <p>
              We craft benefit-driven content that builds trust,<br />
              aligns with your brand, and speaks to your audience.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="content-section reverse bg-dark">
          <img src="/w1.5.png" alt="About Us" className="feature-image" />
          <div className="text-content">
            <h2>Authentic Brand Representation</h2>
            <p>
              Your story matters — we highlight your mission and team<br />
              to create connection and credibility from first glance.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="content-section bg-light">
          <img src="/w1.4.jpg" alt="Clients" className="feature-image" />
          <div className="text-content">
            <h2>Social Proof & Case Studies</h2>
            <p>
              We showcase testimonials and case studies to prove value,<br />
              build trust, and support conversion.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="content-section reverse bg-dark">
          <img src="/wd1.6.jpeg" alt="Content Authority" className="feature-image" />
          <div className="text-content">
            <h2>SEO-Driven, Value-Rich Content</h2>
            <p>
              Our content strategy blends SEO with clarity,<br />
              turning your site into a high-performing resource.
            </p>
          </div>
        </div>

        <div className="enquire-wrapper">
          <a
            href="mailto:your-aftabmaldar1201@gmail.com?subject=Service Enquiry&body=I'm interested in your services"
            className="enquire-button"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Boxone;
