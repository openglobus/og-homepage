import globeImg from "@/assets/f8a0fd3a5538efa253beec7c4d81b669c48e97cb.png";
import { MailSvg, GithubSvg, LinkedinSvg, YoutubeSvg, TwitterSvg } from "./icons";

const socials = [
  { icon: MailSvg, href: "mailto:mgevlich@gmail.com", label: "Email", size: "w-6 h-6" },
  { icon: GithubSvg, href: "https://github.com/openglobus", label: "GitHub", size: "w-9 h-9" },
  { icon: LinkedinSvg, href: "https://www.linkedin.com/company/openglobus/", label: "LinkedIn", size: "w-9 h-9" },
  { icon: YoutubeSvg, href: "https://www.youtube.com/@mgevlich", label: "YouTube", size: "w-9 h-9" },
  { icon: TwitterSvg, href: "https://twitter.com/openglobus", label: "Twitter", size: "w-9 h-9" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={globeImg} alt="OpenGlobus" className="w-6 h-6 shrink-0" />
              <span
                className="block text-[#4A9ED9]"
                style={{ fontSize: "1.25rem", letterSpacing: "0.15em", fontWeight: 500 }}
              >
                OpenGlobus
              </span>
            </div>
            <p
              className="text-white mb-2"
              style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.6 }}
            >
              Independent Open-Source 3D Geospatial Engine
            </p>
            <p
              className="text-white/60 mb-6"
              style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.6 }}
            >
              <a
                href="https://github.com/openglobus/openglobus/blob/master/LICENSE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A9ED9] hover:underline"
              >
                MIT License
              </a>
              {" "}&mdash; free for commercial and non-commercial use
            </p>
            <div style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 2 }}>
              <p className="text-white">Michael Gevlich</p>
              <p className="text-white">Founder & Lead Architect</p>
              <p className="text-white">Developed since 2013</p>
            </div>
          </div>

          {/* Right - socials */}
          <div className="flex gap-4 items-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="transition-opacity hover:opacity-80"
              >
                <s.icon className={s.size} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t px-6 py-5 border-white/[0.04]">
        <p
          className="text-center text-white/50"
          style={{ fontSize: "0.9rem", fontWeight: 300 }}
        >
          &copy; 2013 &ndash; 2026 OpenGlobus
        </p>
      </div>
    </footer>
  );
}