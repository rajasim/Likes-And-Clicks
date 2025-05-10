import React from "react";
import "./Boxone.css"; // Reusing the same CSS

function Boxthree() {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        <h1 className="heading">Marketing Essentials Users Value Most</h1>
        <p className="subheading">
          Explore the foundational elements of high-impact marketing that drive visibility, build trust, and convert interest into measurable growth.
        </p>

        {/* Section 1 */}
        <div className="content-section bg-light">
          <img src="/mark1.1.jpeg" alt="Strategy" className="feature-image" />
          <div className="text-content">
            <h2>Strategic Campaign Planning</h2>
            <p>
              Every successful marketing effort starts with a solid plan. We define clear goals, ideal audiences,<br />
              and optimal platforms to ensure that each campaign delivers impact, efficiency, and long-term ROI.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-section reverse bg-dark">
          <img src="/mark1.2.jpeg" alt="Design" className="feature-image" />
          <div className="text-content">
            <h2>Creative & Consistent Branding</h2>
            <p>
              Memorable brands are built on consistency. From logos to tone of voice, we create unified brand visuals<br />
              and messaging that resonate with your audience and set you apart in competitive markets.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-section bg-light">
          <img src="/mark1.3.jpeg" alt="Content" className="feature-image" />
          <div className="text-content">
            <h2>Targeted Content Marketing</h2>
            <p>
              We produce meaningful content tailored to your audience's needs and pain points — including blogs,<br />
              videos, emails, and infographics — that educate, engage, and convert across every stage of the funnel.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="content-section reverse bg-dark">
          <img src="/mark1.4.jpeg" alt="Social Media" className="feature-image" />
          <div className="text-content">
            <h2>Engaging Social Media Presence</h2>
            <p>
              Social platforms are where brands come alive. We build active, on-brand profiles that boost awareness,<br />
              spark conversations, and deepen relationships with followers through daily, strategic engagement.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="content-section bg-light">
          <img src="/mark1.5.jpeg" alt="Testimonials" className="feature-image" />
          <div className="text-content">
            <h2>Client Testimonials & Case Studies</h2>
            <p>
              Real-world results build trust. We showcase testimonials, reviews, and case studies that prove your<br />
              value, highlight key wins, and offer social proof to turn leads into loyal customers.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="content-section reverse bg-dark">
          <img src="/mark1.6.jpeg" alt="SEO and Analytics" className="feature-image" />
          <div className="text-content">
            <h2>SEO Optimization & Performance Tracking</h2>
            <p>
              Visibility without data is guesswork. We fine-tune your content for search engines and implement<br />
              detailed analytics so you can measure what matters and refine your strategies with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxthree;
