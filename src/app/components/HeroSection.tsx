import { useState } from "react";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";
import logoImg from "@/assets/f8a0fd3a5538efa253beec7c4d81b669c48e97cb.png";

const navItems = [
  { label: "about", href: "#about" },
  { label: "examples", href: "https://sandbox.openglobus.org/", external: true },
  { label: "contacts", href: "#contacts" },
];

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="#2181C4"
      strokeWidth={1.6}
      className={className}
    >
      <circle cx="18" cy="18" r="14" />
      <ellipse cx="18" cy="18" rx="6.5" ry="14" />
      <ellipse cx="18" cy="10.5" rx="12" ry="2.8" />
      <ellipse cx="18" cy="25.5" rx="12" ry="2.8" />
      <line x1="4" y1="18" x2="32" y2="18" />
    </svg>
  );
}

export function HeroSection() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const glowShadow = "#ffffff5e 1px 0px 16px";

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ background: "#000" }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.4 }}
        src="/video.mp4"
      />
      {/* Navigation */}
      <nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Logo */}
        <a href="#" className="py-3">
          <img src={logoImg} alt="OpenGlobus" className="w-7 h-7" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="transition-colors lowercase text-white/90 hover:text-white"
              style={{
                fontSize: "1.15rem",
                letterSpacing: "0.15em",
                fontWeight: 300,
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-full transition-colors text-white/40 hover:text-white hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Moon className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + burger */}
        <div className="flex md:hidden items-center gap-3 py-4">
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-colors text-white/50 hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Moon className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-full transition-colors text-white/60 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-10 flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black/95`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={() => setMenuOpen(false)}
            className="lowercase transition-colors text-white/80 hover:text-white"
            style={{
              fontSize: "1.5rem",
              letterSpacing: "0.2em",
              fontWeight: 300,
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

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
          className="text-white/90 mb-2"
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
          className="text-white/70 mb-10"
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
            className="w-6 h-6 transition-colors text-white/25 group-hover:text-white/50"
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