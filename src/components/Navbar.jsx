import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from '../assets/logo.jpeg'
import { NavLink } from "react-router-dom";
import { C, fontDisplay, FONT_IMPORT_URL, BUSINESS } from "../data/theme.js";
import { navItems, callNowLabel } from "../data/navdata.js";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" dir="rtl" style={{ background: C.ink }}>
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        {/* logo */}
        <NavLink to={'/'} className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center border"

          >
            {/* <span style={{ color: C.gold, fontFamily: fontDisplay, fontSize: "18px" }}>◆</span> */}
            <img src={logo} alt="brand logo" />
          </div>
          <div className="leading-tight">
            <div style={{ color: C.gold, fontFamily: fontDisplay, fontSize: "22px", fontWeight: 600 }}>
              {BUSINESS.nameAr}
            </div>
            <div style={{ color: "#cfc7b3", fontSize: "10px", letterSpacing: "0.05em" }}>
              {BUSINESS.taglineAr}
            </div>
          </div>
        </NavLink>

        {/* desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (

            <NavLink key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `text-sm hover:opacity-80 transition-opacity ${isActive ? "text-[#FFD700]" : "text-[#efe9d8]"
                }`}

            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* desktop call button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+966532587334"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: C.gold, color: C.ink }}
          >
            <Phone size={15} />
            {callNowLabel}
          </a>
        </div>

        {/* mobile menu toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: C.gold }}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden fixed w-full px-5 pb-5 flex flex-col gap-4" style={{ background: C.ink }}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `text-sm hover:opacity-80 transition-opacity ${isActive ? "text-[#FFD700]" : "text-[#efe9d8]"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:+966532587334"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: C.gold, color: C.ink }}
          >
            <Phone size={15} />
            {callNowLabel}
          </a>
        </div>
      )}
    </header>
  );
}