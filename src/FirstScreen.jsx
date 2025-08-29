import { useEffect, useRef, useState } from "react";
import "./FirstScreen.css";

function FirstScreen() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); // 'up' or 'down'
  const aboutRef = useRef(null);
  const lastScrollTop = useRef(window.pageYOffset);

  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowOverlay(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTop.current) {
        setScrollDirection("up");
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container">
      {/* 첫 화면 */}
      {!showOverlay && (
        <section className="firstScreen">
          <div className="background" />
          <header className="header">
            <img src="/로고-최종.png" alt="VON Logo" className="logo" />
          </header>
        </section>
      )}

      <section className="spacer" />

      <section ref={aboutRef} className={`about ${showOverlay ? "active" : ""}`}>
        <div className={`content-wrapper ${ scrollDirection === "down"? "slideUp": scrollDirection === "up" ? "slideDown": "" }`}>
          <div className="title-text">
            <h2 className="about-word">ABOUT</h2>
            <div className="rest-words">
              <h2>Where Living Meets Design :</h2>
              <h2>MINIMALISM THAT BREATHES. INDIVIDUALITY THAT LASTS.</h2>
            </div>
          </div>
          <div className="content-text">
            <p className="first-line">
              감각은 단순함에서 피어나고, 공간은 본질에서 완성됩니다.
            </p>
            <div className="line-pair">
              <p>
                von은 모던 미니멀리즘과 친환경적인 소재, 그리고 개인의 라이프스타일을 반영한 디자인을 통해,
              </p>
              <p>1인 가구를 위한 새로운 주거 방식을 제안합니다.</p>
            </div>
            <div className="line-pair">
              <p>불필요한 것을 덜어내고, 꼭 필요한 것만 남기는 과정 속에서</p>
              <p>개성과 지속 가능성이 조화를 이루는 공간을 창조합니다.</p>
            </div>
            <div className="line-pair">
              <p>작지만 깊은 삶의 여유, 변화에 유연하게 적응하는 실용성</p>
              <p>그리고 환경을 고려한 지속 가능한 선택은 von이 지향하는 가치입니다.</p>
            </div>
            <div className="line-pair">
              <p>von이 만드는 공간 속에서,</p>
              <p>당신의 삶은 더 단순하고, 더 가볍고, 더 자신다워집니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 오버레이 */}
      <div className={`overlay ${showOverlay ? "active" : ""}`} />

      {/* 푸터 */}
      <footer className={`footer-text ${showOverlay ? "active" : ""}`}>
        <div className="footer-top">REDEFINING LIVING, SHAPING INDIVIDUALITY</div>
        <div className="footer-bottom">
          <div className="left-text">MINIMAL.</div>
          <div className="right-text">SUSTAINABLE. VON.</div>
        </div>
      </footer>
    </div>
  );
}

export default FirstScreen;
