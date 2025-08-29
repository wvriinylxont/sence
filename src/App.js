import BrandIntro from "./BrandIntro";
import LogoRegulations from "./LogoRegulations";
import AnimatedSection from "./AnimatedSection";
import FirstScreen from "./FirstScreen";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AnimatedSection>
        <FirstScreen />
      </AnimatedSection>
      <AnimatedSection>
        <BrandIntro />
      </AnimatedSection>
      <AnimatedSection>
        <LogoRegulations />
      </AnimatedSection>
    </div>
  );
}

export default App;
