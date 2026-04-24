import React from "react";

export function MailSvg({ className }: { className?: string }) {
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

const githubPath = "M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z";

export function GithubSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d={githubPath} fill="#ffffff" />
    </svg>
  );
}

export function GithubSvgDark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d={githubPath} fill="#333333" />
    </svg>
  );
}

export function LinkedinSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#0077B5" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white" />
    </svg>
  );
}

export function YoutubeSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FF0000" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white" />
    </svg>
  );
}

export function TwitterSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

export function DiscussionsSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#8957E5" />
      <path d="M15 16h18a2 2 0 012 2v10a2 2 0 01-2 2h-5l-4 4-4-4h-5a2 2 0 01-2-2V18a2 2 0 012-2z" fill="#ffffff" />
      <circle cx="20" cy="23" r="1.5" fill="#8957E5" />
      <circle cx="24" cy="23" r="1.5" fill="#8957E5" />
      <circle cx="28" cy="23" r="1.5" fill="#8957E5" />
    </svg>
  );
}

export function WikiSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#2DA44E" />
      <path d="M16 14h16a2 2 0 012 2v16a2 2 0 01-2 2H16a2 2 0 01-2-2V16a2 2 0 012-2z" fill="#ffffff" />
      <path d="M18 19h12M18 23h12M18 27h8" stroke="#2DA44E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
