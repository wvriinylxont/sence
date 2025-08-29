import React, { useEffect, useState, useRef } from "react";
import "./CoreValue.css";

function CoreValue() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    "1인 가구를 위한\n실용적이면서\n감각적인 디자인 제공",
    "친환경적이고, 지속 가능한\n인테리어 솔루션 제안",
    "단순한 가구가 아닌,\n라이프스타일을 디자인하는\n브랜드",
  ];

  return (
    <section className="corevalue-intro" ref={sectionRef}>
      <div className="intro-content">
        <span className={`about-corevalue ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.3s" }}>CORE VALUE</span>
        <div className="intro-text">
            <div className="number-and-text">
                <h1 className={`intro-number ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.6s" }}>03</h1>
                <div className={`vision-block ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.6s" }}>
                  <span className="vision-title">_Core Value</span>
                  <div className="vision-desc">" 개성적인 맞춤형 인테리어 "</div>
                </div>
            </div>

          <div className="corevalue-circles">
            {coreValues.map((text, idx) => (
              <div
                key={idx}
                className={`corevalue-circle ${visible ? "slide-in-left" : "slide-out-left"}`}
                style={{ animationDelay: `${0.9 + idx * 0.3}s` }}>
                <p className="circle-text">
                  {text.split("\n").map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`intro-image-block ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "1.8s" }}>
          <img src="/라운지존4.png" alt="라운지존4" className="corevalue-image" />
          <div className="image-caption">* 오가닉 미니멀리즘 외관 이미지</div>
        </div>
      </div>
    </section>
  );
}

export default CoreValue;
