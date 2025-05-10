import React from "react";
import "./Boxone.css";

function Boxone() {
  return (
    <div className="features-wrapper">
     
      <div className="features-container">
        <h1 className="heading">Web Development Essentials Users Appreciate Most</h1>
        <p className="subheading">
          Discover what makes a truly effective and modern website. These key features improve user satisfaction, boost trust, and drive long-term performance.
        </p>

        {/* Section 1 */}
        <div className="content-section bg-light">
          <img src="/wd1.1.jpeg" alt="Navigation" className="feature-image" />
          <div className="text-content">
            <h2>Streamlined Site Architecture</h2>
            <p>
            Our websites feature intuitive, well-structured navigation systems that minimize confusion and maximize efficiency. By prioritizing clarity and simplicity,<br></br>  we help users find what they need quickly — improving session duration, lowering bounce rates, and boosting overall satisfaction.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-section reverse bg-dark">
          <img src="/wd1.2.jpeg" alt="Design" className="feature-image" />
          <div className="text-content">
            <h2>Modern, Responsive Design</h2>
            <p>
            A visually polished, responsive design is no longer optional — it's expected. We create modern, scalable interfaces that adapt, <br></br> flawlessly to any device ensuring your brand leaves a lasting impression whether viewed on desktop, tablet, or mobile.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-section bg-light">
          <img src="/wd1.3.jpeg" alt="Value Proposition" className="feature-image" />
          <div className="text-content">
            <h2>Strategic Messaging & Positioning</h2>
            <p>
            Clear, benefit-driven messaging is at the heart of user trust and conversion. We work with you to define and communicate , <br></br> a compelling value proposition that resonates with your target market and reinforces your brand’s unique edge.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="content-section reverse bg-dark">
          <img src="/wd1.4.jpeg" alt="About Us" className="feature-image" />
          <div className="text-content">
            <h2>Authentic Brand Representation</h2>
            <p>
            Your story matters. We craft About pages that do more than list facts — they build connection. By sharing your mission, <br></br> values, and team personality, we humanize your brand and establish credibility from the first interaction.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="content-section bg-light">
          <img src="/wd1.5.jpeg" alt="Clients" className="feature-image" />
          <div className="text-content">
            <h2>Social Proof & Case Studies</h2>
            <p>
            Testimonials, logos, and client stories serve as powerful trust signals. We integrate these elements thoughtfully <br></br> to demonstrate your experience,  reinforce credibility, and give potential clients confidence in your capabilities.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="content-section reverse bg-dark">
          <img src="/wd1.6.jpeg" alt="Content Authority" className="feature-image" />
          <div className="text-content">
            <h2>SEO-Driven, Value-Rich Content</h2>
            <p>
            Great design needs great content. We create and structure content to support both user intent and SEO best practices. Whether it's <br></br> service pages, blogs, or thought leadership, your site becomes a high-performing resource that builds authority and drives results.
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
