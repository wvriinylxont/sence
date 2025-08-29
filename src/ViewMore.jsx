import React, { useEffect, useState, useRef } from "react";
import "./ViewMore.css";

function ViewMore() {
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

  const items = [
    { number: "01", title: "BIO-TECH LOUNGE", img: "/라운지존4.png" },
    { number: "02", title: "NATURAL MINIMAL HOUSE", img: "/라운지존5.png" },
    { number: "03", title: "RESTFUL RHYTHM", img: "/라운지존6.png" },
  ];

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        {items.map((item, idx) => (
          <div className="card" key={idx}>
            <div className="text-wrapper">
              <span className={`number ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: `${0.3 + idx * 0.3}s` }}>
                {item.number}
              </span>
              <h2 className={`title ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: `${0.3 + idx * 0.3}s` }}>
                {item.title}
              </h2>
            </div>
            <div className={`image-container ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: `${0.3 + idx * 0.3}s` }}>
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      <div className={`view-more-wrapper ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "1.2s" }}>
        <div className="view-more-text">VIEW MORE →</div>
        <div className="view-more-line" />
      </div>
    </section>
  );
}

export default ViewMore;
