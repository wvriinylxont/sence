import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const aboutRef = useRef(null);

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

  return (
    <div className="container">
      {/* 첫 화면: 배경 + 로고 고정 */}
      <section className={`firstScreen ${showOverlay ? "hide" : ""}`}>
        <div className="background" />
        <header className={`header ${showOverlay ? "hide" : ""}`}>
          <img src="/로고-최종.png" alt="VON Logo" className="logo" />
        </header>
      </section>

      {/* 빈 공간: 첫 화면 높이 만큼, 두 번째 화면 위치 조정용 */}
      <section className="spacer" />

      {/* 본문 */}
      <section className={`about ${showOverlay ? "active" : ""}`} ref={aboutRef}>
        <div className="about-text">
          <h2>ABOUT</h2>
          <h2>Where Living Meets Design :</h2>
          <h2>MINIMALISM THAT BREATHES. INDIVIDUALITY THAT LASTS.</h2>
          <p>감각은 단순함에서 피어나고, 공간은 본질에서 완성됩니다.</p>
          <p>von은 모던 미니멀리즘과 친환경적인 소재, 그리고 개인의 라이프스타일을 반영한 디자인을 통해</p>
          <p>1인 가구를 위한 새로운 주거 방식을 제안합니다.</p>
          <p>불필요한 것을 덜어내고, 꼭 필요한 것만 남기는 과정 속에서</p>
          <p>개성과 지속 가능성이 조화를 이루는 공간을 창조합니다.</p>
          <p>작지만 깊은 삶의 여유, 변화에 유연하게 적응하는 실용성,</p>
          <p>그리고 환경을 고려한 지속 가능한 선택은 von이 지향하는 가치입니다.</p>
          <p>von이 만드는 공간 속에서,</p>
          <p>당신의 삶은 더 단순하고, 더 가볍고, 더 자신다워집니다.</p>
        </div>
      </section>

      {/* 오버레이 */}
      <div className={`overlay ${showOverlay ? "active" : ""}`} />

      {/* 푸터 */}
      <footer className={`footer-text ${showOverlay ? "active" : ""}`}>
        <div className="left-text">REDEFINING LIVING, SHAPING INDIVIDUALITY</div>
        <div className="center-text">MINIMAL.</div>
        <div className="right-text">SUSTAINABLE. VON.</div>
      </footer>
    </div>
  );
}

export default App;
