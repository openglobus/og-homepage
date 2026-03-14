import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import logoImg from "@/assets/f8a0fd3a5538efa253beec7c4d81b669c48e97cb.png";

const navItems = [
  { label: "about", href: "/#about" },
  { label: "examples", href: "https://sandbox.openglobus.org/", external: true },
  { label: "contacts", href: "/contacts" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="w-full z-20 flex items-center justify-between px-6 md:px-16"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Logo */}
        <Link to="/" className="py-3">
          <img src={logoImg} alt="OpenGlobus" className="w-7 h-7" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center py-4">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors lowercase text-white/90 hover:text-white"
                style={{ fontSize: "1.15rem", letterSpacing: "0.15em", fontWeight: 300 }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="transition-colors lowercase text-white/90 hover:text-white"
                style={{ fontSize: "1.15rem", letterSpacing: "0.15em", fontWeight: 300 }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile burger */}
        <div className="flex md:hidden items-center py-4">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-full transition-colors text-white/60 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-10 flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-black/95`}
      >
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="lowercase transition-colors text-white/80 hover:text-white"
              style={{ fontSize: "1.5rem", letterSpacing: "0.2em", fontWeight: 300 }}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="lowercase transition-colors text-white/80 hover:text-white"
              style={{ fontSize: "1.5rem", letterSpacing: "0.2em", fontWeight: 300 }}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
