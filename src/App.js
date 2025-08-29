import BrandIntro from "./BrandIntro";
import LogoRegulations from "./LogoRegulations";
import AnimatedSection from "./AnimatedSection";
import FirstScreen from "./FirstScreen";
import CoreValue from "./CoreValue";
import ViewMore from "./ViewMore";

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
      <AnimatedSection>
        <CoreValue />
      </AnimatedSection>
      <AnimatedSection>
        <ViewMore />
      </AnimatedSection>
    </div>
  );
}

export default App;
