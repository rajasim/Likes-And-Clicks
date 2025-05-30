import React from "react";
import "./Boxone.css";

function Boxfour() {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        <h1 className="heading">AI that Works for You</h1>
        <p className="subheading">
          Harness the power of intelligent automation to simplify tasks, accelerate decisions, and drive your business forward with confidence.
        </p>

        {/* Section 1 */}
        <div className="content-section bg-light">
          <img src="/a1.1.png" alt="AI Automation" className="feature-image" />
          <div className="text-content">
            <h2>AI-Powered Automation</h2>
            <p>
              Streamline repetitive tasks and workflows using intelligent automation to save time and reduce costs.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-section reverse bg-dark">
          <img src="/a1.2.png" alt="Predictive Analytics" className="feature-image" />
          <div className="text-content">
            <h2>Predictive Analytics</h2>
            <p>
              Use data-driven AI models to forecast trends, customer behavior, and business outcomes with high accuracy.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-section bg-light">
          <img src="\a1.3.png" alt="NLP" className="feature-image" />
          <div className="text-content">
            <h2>Natural Language Processing (NLP)</h2>
            <p>
              Enable machines to understand, interpret, and respond to human language through chatbots, voice assistants, and sentiment analysis.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="content-section reverse bg-dark">
          <img src="/a.1.4.jpg" alt="Computer Vision" className="feature-image" />
          <div className="text-content">
            <h2>Computer Vision Solutions</h2>
            <p>
              Leverage AI to analyze images and videos for applications like facial recognition, defect detection, and visual search.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="content-section bg-light">
          <img src="/a1.5.jpg" alt="Custom AI Models" className="feature-image" />
          <div className="text-content">
            <h2>Custom AI Model Development</h2>
            <p>
              Design and deploy machine learning models tailored to your specific business needs and challenges.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="content-section reverse bg-dark">
          <img src="/a1.6.png" alt="AI Integration" className="feature-image" />
          <div className="text-content">
            <h2>AI Integration & Consultation</h2>
            <p>
              Seamlessly integrate AI into your existing systems and receive expert guidance on strategy, tools, and implementation.
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

export default Boxfour;
