import { useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const glowShadow = "#ffffff5e 1px 0px 16px";

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ background: "#000" }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        // @ts-expect-error webkit vendor attribute for older Safari/iOS
        webkit-playsinline=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.8 }}
        onEnded={() => {
          const v = videoRef.current;
          if (v) { v.currentTime = 0; v.play(); }
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Hero content */}
      <div className="relative z-[5] text-center px-5 max-w-4xl flex flex-col items-center">
        {/* Title */}
        <h1
          className="uppercase mb-5 md:mb-6 text-white"
          style={{
            fontSize: "clamp(1.5rem, 7vw, 3.5rem)",
            letterSpacing: "clamp(0.3rem, 3vw, 1.17rem)",
            fontWeight: 500,
            lineHeight: 1.2,
            textShadow: glowShadow,
          }}
        >
          OpenGlobus
        </h1>

        <p
          className="text-white mb-2"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.55rem)",
            fontWeight: 300,
            lineHeight: 1.6,
            textShadow: glowShadow,
          }}
        >
          Open-Source 3D Geospatial Engine
        </p>
        <p
          className="text-white mb-10"
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
            fontWeight: 300,
            lineHeight: 1.6,
            textShadow: glowShadow,
          }}
        >
          for High-Precision Planetary &amp; Industrial Visualization
        </p>

        {/* CTA button + scroll arrow */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-6 group"
        >
          <span
            className={`inline-block px-8 py-3 uppercase transition-all ${
              "border border-white/30 text-white/90 group-hover:border-white/60 group-hover:text-white"
            }`}
            style={{ fontSize: "0.85rem", letterSpacing: "0.2em", fontWeight: 500 }}
          >
            Explore the Engine
          </span>

          <ChevronDown
            className="w-6 h-6 transition-colors text-white/60 group-hover:text-white/90"
            strokeWidth={1.5}
            style={{ animation: "bounceArrow 2s ease-in-out infinite" }}
          />
        </a>
      </div>

      <style>{`
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}