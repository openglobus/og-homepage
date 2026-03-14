import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#f5f5f5] text-gray-900"
      style={{ fontFamily: "'Quicksand', sans-serif", WebkitFontSmoothing: "antialiased" }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
