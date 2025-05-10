import React from "react";
import "./Boxone.css";

function Boxtwo() {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        <h1 className="heading">Complete Cybersecurity & IT Infrastructure Solutions</h1>
        <p className="subheading">
          Explore our comprehensive suite of services tailored to protect, support, and empower your digital operations across cloud, software, and hardware systems.
        </p>

        {/* Section 1 */}
        <div className="content-section bg-light">
          <img src="/cs1.1.jpeg" alt="Cybersecurity" className="feature-image" />
          <div className="text-content">
            <h2>Cybersecurity & Data Protection</h2>
            <p>
              We provide enterprise-grade security protocols with constant threat detection,<br />
              ensuring encrypted data transfers and real-time protection against breaches.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-section reverse bg-dark">
          <img src="/cs1.2.jpeg" alt="Cloud Services" className="feature-image" />
          <div className="text-content">
            <h2>Cloud Services & Backup</h2>
            <p>
              Store your critical data in secure cloud environments with full redundancy,<br />
              including automated backups, disaster recovery, and remote accessibility.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-section bg-light">
          <img src="/cs1.3.jpeg" alt="Hardware and Network" className="feature-image" />
          <div className="text-content">
            <h2>Hardware & Network Setup</h2>
            <p>
              From routers to servers, we build tailored IT infrastructures for businesses,<br />
              with strong connectivity, security policies, and performance optimization.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="content-section reverse bg-dark">
          <img src="/cs1.4.jpeg" alt="Software Installation" className="feature-image" />
          <div className="text-content">
            <h2>Software Installation & Support</h2>
            <p>
              We handle the deployment of all essential software with licensing and updates,<br />
              including regular maintenance and compliance-driven configuration support.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="content-section bg-light">
          <img src="/cs1.5.jpeg" alt="IT Support" className="feature-image" />
          <div className="text-content">
            <h2>Managed IT Support</h2>
            <p>
              Receive 24/7 remote and on-site technical support for uninterrupted operations,<br />
              with proactive monitoring, fast troubleshooting, and system optimization.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="content-section reverse bg-dark">
          <img src="/cs1.6.jpeg" alt="Cybersecurity Training" className="feature-image" />
          <div className="text-content">
            <h2>Cybersecurity Training</h2>
            <p>
              Empower your team with hands-on training to detect phishing, malware, and more,<br />
              improving response to threats and creating a strong internal defense culture.
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div className="content-section bg-light">
          <img src="/cs1.7.jpeg" alt="Consulting" className="feature-image" />
          <div className="text-content">
            <h2>Consulting & IT Strategy</h2>
            <p>
              Align your IT systems with long-term business goals through expert consulting,<br />
              boosting operational agility, reducing costs, and improving security outcomes.
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div className="content-section reverse bg-dark">
          <img src="/cs1.8.jpeg" alt="Wireless & Voice" className="feature-image" />
          <div className="text-content">
            <h2>Wireless & Voice Setup</h2>
            <p>
              We design and deploy high-speed Wi-Fi networks and VoIP communication systems,<br />
              enabling reliable internal calls, mobile integration, and secure connectivity.
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div className="content-section bg-light">
          <img src="/cs1.9.jpeg" alt="On-Premises Setup" className="feature-image" />
          <div className="text-content">
            <h2>On-Premises Infrastructure</h2>
            <p>
              Get fully managed physical server setups for local data storage and processing,<br />
              with secure access, custom configurations, and full lifecycle support.
            </p>
          </div>
        </div>

        {/* Section 10 */}
        <div className="content-section reverse bg-dark">
          <img src="/cs1.10.jpeg" alt="Email Setup" className="feature-image" />
          <div className="text-content">
            <h2>Email Setup & Backup</h2>
            <p>
              Create secure, scalable email environments with automated spam filtering,<br />
              data retention policies, user support, and end-to-end encryption features.
            </p>
          </div>
        </div>

        {/* Section 11 */}
        <div className="content-section bg-light">
          <img src="/cs1.11.jpeg" alt="Server Backup" className="feature-image" />
          <div className="text-content">
            <h2>Server Backup Solutions</h2>
            <p>
              Ensure business continuity with regular, encrypted server backups and snapshots,<br />
              allowing fast recovery and minimal downtime in case of data loss or system failure.
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

export default Boxtwo;
