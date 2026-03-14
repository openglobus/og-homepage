import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { IndustrySection } from "./components/IndustrySection";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

function AppContent() {
  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-[#f5f5f5] text-gray-900"}`}
      style={{
        fontFamily: "'Quicksand', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <IndustrySection />
      <ImpactSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}