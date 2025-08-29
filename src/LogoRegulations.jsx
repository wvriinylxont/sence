import React, { useEffect, useState, useRef } from "react";
import "./LogoRegulations.css";

function LogoRegulations() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6 } // 60% 이상 보일 때 활성화
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="logo-regulations" ref={sectionRef}>
      <div className="header-row">
        <span className={`section-label ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.3s" }} >LOGO REGULATIONS</span>
        <div className={`regulation-number ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.6s" }}>02</div>
      </div>

      <div className="main-row">
        <div className={`left-column ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.9s" }}>
          <span className="sub-label">_Logo</span>
          <img src="/로고-최종.png" alt="로고 이미지" className="logo-image" />
          <div className="font-info">
            <span className="sub-label">_서체</span>
            <div className="font-name">Coolvetica Regular</div>
          </div>
        </div>

        <div className={`right-column ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "1.2s" }}>
          <div className="color-wrapper">
            <span className="sub-label">_Color</span>
            <div className="color-section">
              <div className="color-item">
                <div className="color-swatch red"></div>
                <span className="color-hex">#F26F63</span>
              </div>
              <div className="color-item">
                <div className="color-swatch blue"></div>
                <span className="color-hex">#6ACBDA</span>
              </div>
            </div>
          </div>

          <div className="combination-wrapper">
            <span className="sub-label">_조합규정</span>
            <img src="/조합규정.png" alt="조합규정 이미지" className="combination-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoRegulations;
