import React from "react";
import globeImg from "@/assets/f8a0fd3a5538efa253beec7c4d81b669c48e97cb.png";

function MailSvg({ className }: { className?: string }) {
  const id1 = React.useId();
  const id2 = React.useId();
  return (
    <svg viewBox="0 -4 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M29.0909 0H2.90909C1.30244 0 0 1.30244 0 2.90909V20.3636C0 21.9703 1.30244 23.2727 2.90909 23.2727H29.0909C30.6976 23.2727 32 21.9703 32 20.3636V2.90909C32 1.30244 30.6976 0 29.0909 0Z" fill={`url(#${id1})`} />
      <path fillRule="evenodd" clipRule="evenodd" d="M29.0909 0H2.90909C2.52332 0 2.15223 0.0738135 1.79583 0.221441C1.43942 0.369069 1.12483 0.579272 0.852049 0.852054L13.943 13.943C14.2157 14.2157 14.5303 14.4259 14.8867 14.5735C15.2431 14.7212 15.6142 14.7951 16 14.7951C16.3857 14.7951 16.7568 14.7212 17.1133 14.5735C17.4696 14.4259 17.7842 14.2157 18.057 13.943L31.1479 0.852049C30.8752 0.57927 30.5606 0.369067 30.2042 0.22144C29.8478 0.0738131 29.4767 0 29.0909 0Z" fill={`url(#${id2})`} />
      <defs>
        <linearGradient id={id1} x1="16" y1="0" x2="16" y2="23.2727" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAC227" />
          <stop offset="1" stopColor="#FAA627" />
        </linearGradient>
        <linearGradient id={id2} x1="16.0002" y1="0" x2="16.0002" y2="14.7951" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCE4B1" />
          <stop offset="1" stopColor="#FFD272" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GithubSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#333333" />
      <path d="M24 6C13.511 6 5 14.511 5 25c0 8.394 5.442 15.513 12.998 18.026.95.175 1.297-.413 1.297-.917 0-.452-.016-1.648-.025-3.234-5.288 1.149-6.404-2.549-6.404-2.549-.865-2.196-2.11-2.781-2.11-2.781-1.725-1.179.13-1.155.13-1.155 1.907.134 2.912 1.958 2.912 1.958 1.695 2.904 4.447 2.064 5.53 1.578.172-1.228.664-2.064 1.21-2.538-4.222-.48-8.663-2.11-8.663-9.396 0-2.076.744-3.773 1.964-5.103-.197-.48-.851-2.414.186-5.034 0 0 1.6-.512 5.24 1.95a18.268 18.268 0 0 1 4.784-.644c1.623.007 3.259.22 4.787.644 3.637-2.462 5.233-1.95 5.233-1.95 1.04 2.62.386 4.554.19 5.034 1.222 1.33 1.96 3.027 1.96 5.103 0 7.305-4.447 8.912-8.682 9.382.682.588 1.29 1.748 1.29 3.522 0 2.543-.023 4.594-.023 5.22 0 .508.34 1.1 1.306.914C37.564 40.506 43 33.39 43 25 43 14.511 34.489 6 24 6z" fill="#ffffff" />
    </svg>
  );
}

function LinkedinSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#0077B5" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white" />
    </svg>
  );
}

function YoutubeSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FF0000" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white" />
    </svg>
  );
}

function TwitterSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white" />
    </svg>
  );
}

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
      id="contacts"
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
              className="text-white mb-6"
              style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.6 }}
            >
              Independent Open-Source 3D Geospatial Engine
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