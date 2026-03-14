import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import scientificResearchImg from "@/assets/9acded955993d9eb5f477212f04b7749d95f868e.png";
import industrialEnergyImg from "@/assets/12822d57bf9f68c9cff1a193dcfbc52c11cdc07d.png";
import droneSystemsImg from "@/assets/5cf84f2f72a2d8afab32f40c4b767ec2f23ef1e6.png";
import simulationImg from "@/assets/f69a5dd10be98abec8c5ca48c584d90b35d5d5ff.png";

const industries = [
  {
    title: "Drone Systems",
    desc: "Real-time visualization of aerial vehicles, telemetry streams and terrain interaction. Supports drone navigation, monitoring systems and spatial control interfaces.",
    img: droneSystemsImg,
  },
  {
    title: "Industrial & Energy Infrastructure",
    desc: "Visualization of large-scale industrial assets such as pipelines, mining operations and energy facilities, enabling terrain-aware spatial planning.",
    img: industrialEnergyImg,
  },
  {
    title: "Scientific Research",
    desc: "Planetary-scale terrain rendering and geospatial modeling for academic research, environmental analysis and experimental visualization workflows.",
    img: scientificResearchImg,
  },
  {
    title: "Planetary Visualization",
    desc: "High-precision rendering of Earth, Moon, Mars and custom planetary bodies with flexible projection handling and scalable terrain integration.",
    img: "https://images.unsplash.com/photo-1769251971680-005dfa536f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzI3MjIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Simulation & Game Engines",
    desc: "Foundation for browser-based simulation environments and interactive 3D systems combining terrain rendering, dynamic objects and real-time control logic.",
    img: simulationImg,
  },
];

export function IndustrySection() {
  const { isDark } = useTheme();

  return (
    <section
      id="examples"
      className="py-20 md:py-28 px-6 transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#141414" : "#f2f5fb" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-center mb-6 uppercase ${isDark ? "text-white" : "text-gray-900"}`}
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "0.5em", fontWeight: 500 }}
        >
          Industry Applications
        </h2>
        <p
          className={`text-center max-w-[700px] mx-auto mb-16 ${isDark ? "text-white/65" : "text-gray-600"}`}
          style={{ fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.7 }}
        >
          Explore how OpenGlobus is used across industries — from drone operations
          and energy infrastructure to planetary science and real-time simulation.
        </p>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mb-14">
          {industries.slice(0, 3).map((item) => (
            <IndustryCard key={item.title} item={item} isDark={isDark} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 max-w-[720px] mx-auto">
          {industries.slice(3).map((item) => (
            <IndustryCard key={item.title} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ item, isDark }: { item: (typeof industries)[number]; isDark: boolean }) {
  return (
    <div className="flex flex-col group">
      {/* Image */}
      <div
        className={`relative overflow-hidden mb-5 aspect-[16/10] ${
          isDark ? "rounded-sm" : "rounded-lg shadow-md"
        }`}
      >
        <ImageWithFallback
          src={item.img}
          alt={item.title}
          className={`w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500 ${
            isDark ? "opacity-70 group-hover:opacity-90" : "opacity-90 group-hover:opacity-100"
          }`}
          style={item.title === "Scientific Research" ? { objectPosition: "center 65%", transform: "scale(1.25)" } : undefined}
        />
      </div>

      {/* Title */}
      <h3
        className={isDark ? "text-white mb-2" : "text-gray-800 mb-2"}
        style={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.4 }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className={isDark ? "text-white/70 mb-4" : "text-gray-600 mb-4"}
        style={{ fontSize: "1.15rem", fontWeight: 300, lineHeight: 1.8 }}
      >
        {item.desc}
      </p>

      {/* Link */}
      <span
        className={`mt-auto cursor-pointer transition-colors ${
          isDark
            ? "text-white/30 group-hover:text-white/60"
            : "text-gray-400 group-hover:text-[#2181C4]"
        }`}
        style={{ fontSize: "0.85rem", fontWeight: 400 }}
      >
        Learn more →
      </span>
    </div>
  );
}