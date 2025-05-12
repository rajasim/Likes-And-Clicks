import React, { useEffect, useRef } from "react";
import "./Custome.css";

function Custome() {
  const aboutusRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target.querySelector("div");
          div.style.transform = "translateX(0px)";
          div.style.transition = "transform 1s linear";

          observer.unobserve(div);
        }
      });
    });

    if (aboutusRef.current) {
      observer.observe(aboutusRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      style={{ width: "100%", height: "fit-content", overflow: "hidden" }}
      ref={aboutusRef}
    >
      <div className="custom-section">
        <div className="custom-section-content">
          <h1>
            Likes &<br />
            Clicks
          </h1>

          <p className="custom-section-subtitle">
            dynamic marketing and web development company{" "}
            <strong>LIKES & CLICKS</strong>
          </p>

          <p className="custom-section-description">
            dedicated to amplifying your online presence and driving tangible
            results. We blend innovative digital marketing strategies with
            cutting-edge web development expertise to create compelling user
            experiences and foster meaningful engagement. From crafting
            data-driven campaigns that generate likes and clicks to building
            robust and visually appealing websites, we empower businesses to
            thrive in the digital landscape and achieve sustainable growth.
          </p>
        </div>

        <div
          className="custom-section-image"
          style={{ backgroundImage: "url('/aboutu.jpeg')" }} // ✅ Direct public folder image
        />
      </div>
    </div>
  );
}

export default Custome;
