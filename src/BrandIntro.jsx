import React, { useEffect, useRef, useState } from "react";
import "./BrandIntro.css";

function BrandIntro() {
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
    <section className="brand-intro" ref={sectionRef}>
      <div className="intro-content">
        <span className={`about-brand ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.3s" }}>ABOUT BRAND</span>

        <div className="intro-text">
          <h1 className={`intro-number ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.6s" }}>01</h1>

          <div className={`vision-block ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.6s" }}>
            <span className="vision-title">“ Vision + One, VON ”</span>
            <div className="vision-desc">ONE VISION SPACE FOR HUMANS</div>
          </div>

          <div className={`dailyvon-block ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "0.9s" }}>
            <span className="dailyvon-title">
              매일의 공간을 새롭게,
              <br />
              <b style={{ fontSize: "1.8rem" }}>DAILY VON</b>
            </span>
            <div className="dailyvon-desc">
              'von'은 감각적이면서도 절제된 아름다움, 그리고 자연과의 조화를 통해
              <br />
              새로운 라이프스타일을 제안하는 인테리어 브랜드입니다. 1인 가구와 MZ세대를 주 타깃으로 하며,
              <br />
              모던 미니멀리즘, 바이오필릭 디자인.
              <br />
              그리고 오가닉 미니멀리즘 요소를 조화롭게 결합해 독창적인 공간 경험을 선사합니다.
            </div>
          </div>
        </div>

        <div className={`intro-image-block ${visible ? "slide-in-left" : "slide-out-left"}`} style={{ animationDelay: "1.2s" }}>
          <img src="/라운지존-3.png" alt="브랜드 공간" className="brand-image" />
          <div className="image-caption">* 바이오 데크 컨셉의 공간 이미지</div>
        </div>
      </div>
    </section>
  );
}

export default BrandIntro;
