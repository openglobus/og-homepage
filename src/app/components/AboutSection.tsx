import { useTheme } from "./ThemeContext";

export function AboutSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className="relative py-32 md:py-44 px-5 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#0d1520" : "#d0dced" }}
    >
      <div className="relative max-w-[1000px] mx-auto text-center">
        {/* Thin decorative line */}
        <div className={`w-12 h-[1px] mx-auto mb-10 ${isDark ? "bg-white/20" : "bg-gray-300"}`} />

        <p
          className={isDark ? "text-white/80" : "text-gray-700"}
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: "0.01em",
          }}
        >
          <span className={isDark ? "text-white" : "text-gray-900"} style={{ fontWeight: 500 }}>
            OpenGlobus
          </span>{" "}
          is an open-source{" "}
          <span className={isDark ? "text-white/95" : "text-gray-800"} style={{ fontWeight: 400 }}>
            WebGL engine
          </span>{" "}
          designed for advanced 3D visualization of{" "}
          <span className={isDark ? "text-white/95" : "text-gray-800"} style={{ fontWeight: 400 }}>
            planetary surfaces
          </span>
          , terrain data,{" "}
          <span className={isDark ? "text-white/95" : "text-gray-800"} style={{ fontWeight: 400 }}>
            industrial infrastructure
          </span>{" "}
          and{" "}
          <span className={isDark ? "text-white/95" : "text-gray-800"} style={{ fontWeight: 400 }}>
            dynamic geospatial systems
          </span>
          .
        </p>

        {/* Thin decorative line */}
        <div className={`w-12 h-[1px] mx-auto mt-10 ${isDark ? "bg-white/20" : "bg-gray-300"}`} />
      </div>
    </section>
  );
}