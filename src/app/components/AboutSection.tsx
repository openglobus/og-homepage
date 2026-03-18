export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-5 overflow-hidden"
      style={{ backgroundColor: "#d0dced" }}
    >
      <div className="relative max-w-[900px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Photo circle */}
        <img src="/me.jpg" alt="Michael Gevlich" className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg object-cover" />

        {/* Quote */}
        <blockquote className="border-l-[3px] border-[#2181C4]/30 pl-6">
          <p
            className="text-gray-700 mb-4"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300, lineHeight: 1.9 }}
          >
            Hi, I'm{" "}
            <span className="text-gray-900" style={{ fontWeight: 500 }}>Michael Gevlich</span>,
            the founder and lead architect of OpenGlobus.
          </p>
          <p
            className="text-gray-700 mb-4"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300, lineHeight: 1.9 }}
          >
            I'm a software engineer focused on real-time graphics and geospatial visualization.
            Since 2013 I've been designing and developing OpenGlobus as an independent open-source
            3D geospatial engine.
          </p>
          <p
            className="text-gray-700 mb-4"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300, lineHeight: 1.9 }}
          >
            The project reflects over a decade of continuous work on planetary-scale visualization,
            simulation environments and spatial systems.
          </p>
          <p
            className="text-gray-700"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300, lineHeight: 1.9 }}
          >
            Welcome - explore the engine and follow the project to stay updated.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
