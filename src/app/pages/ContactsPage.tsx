import { ExternalLink } from "lucide-react";
import { MailSvg, LinkedinSvg, GithubSvgDark, DiscussionsSvg, WikiSvg, YoutubeSvg } from "../components/icons";

function YoutubeSvgDark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FF0000" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white" />
    </svg>
  );
}

const cards = [
  {
    icon: DiscussionsSvg,
    title: "Ask Questions",
    desc: "For technical questions, feature ideas, and community discussions.",
    link: "https://github.com/openglobus/openglobus/discussions",
    linkLabel: "GitHub Discussions",
    external: true,
  },
  {
    icon: GithubSvgDark,
    title: "Explore the Code",
    desc: "Follow development, report issues, or contribute to the engine.",
    link: "https://github.com/openglobus/openglobus",
    linkLabel: "GitHub Repository",
    external: true,
  },
  {
    icon: WikiSvg,
    title: "Read the Documentation",
    desc: "Technical notes, guides, and explanations of engine capabilities.",
    link: "https://github.com/openglobus/openglobus/wiki",
    linkLabel: "Project Wiki",
    external: true,
  },
  {
    icon: YoutubeSvgDark,
    title: "Watch Demos",
    desc: "Visual experiments, engine demos and real-time geospatial visualization examples.",
    link: "https://www.youtube.com/@mgevlich",
    linkLabel: "YouTube",
    external: true,
  },
  {
    icon: LinkedinSvg,
    title: "Professional Contact",
    desc: "For industry collaboration, partnerships, or professional networking.",
    link: "https://www.linkedin.com/in/mgevlich/",
    linkLabel: "linkedin.com/in/mgevlich",
    external: true,
  },
  {
    icon: MailSvg,
    title: "Direct Email",
    desc: "For direct communication regarding the project or collaboration.",
    link: "mailto:mgevlich@gmail.com",
    linkLabel: "mgevlich@gmail.com",
  },
];

function ContactCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <a
      href={card.link}
      {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex flex-col p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2181C4]/20 transition-all group"
    >
      <card.icon className="w-9 h-9 mb-4" />
      <h3
        className="text-gray-800 mb-1"
        style={{ fontSize: "1.15rem", fontWeight: 500 }}
      >
        {card.title}
      </h3>
      <p
        className="text-gray-500 mb-4"
        style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.6 }}
      >
        {card.desc}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-[#2181C4] group-hover:underline" style={{ fontSize: "0.95rem", fontWeight: 400 }}>
        {card.linkLabel}
        {card.external && <ExternalLink className="w-3.5 h-3.5" />}
      </span>
    </a>
  );
}

export function ContactsPage() {
  return (
    <main className="flex-1 py-20 md:py-28 px-6" style={{ backgroundColor: "#f2f5fb" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1
          className="text-center uppercase text-gray-900 mb-6"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "0.5em", fontWeight: 500 }}
        >
          Contact & Community
        </h1>
        <p
          className="text-center max-w-[700px] mx-auto mb-4 text-gray-600"
          style={{ fontSize: "1.15rem", fontWeight: 300, lineHeight: 1.8 }}
        >
          OpenGlobus is an independent open-source project.
          <br />
          If you have questions, ideas, or would like to collaborate - you are always welcome to reach out.
        </p>
        <p
          className="text-center mb-14 text-gray-400"
          style={{ fontSize: "1rem", fontWeight: 400 }}
        >
          Choose the best way to connect:
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {cards.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}
        </div>

        {/* Author signature */}
        <div className="border-t border-gray-200 pt-10 max-w-[600px] mx-auto text-center">
          <p
            className="text-gray-500 mb-4"
            style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            I'm always happy to hear about new ideas, experiments, and applications built with the engine.
          </p>
          <p
            className="text-gray-700"
            style={{ fontSize: "1.05rem", fontWeight: 500 }}
          >
            — Michael Gevlich
          </p>
        </div>
      </div>
    </main>
  );
}
