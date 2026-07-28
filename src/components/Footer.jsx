import React from "react";
import { C, fontDisplay, BUSINESS } from "../data/theme";
import { navItems } from "../data/navdata";
import logo from '../assets/logo.jpeg'
import { footerDesc, footerMenuTitle, footerContactTitle, socialLinks } from "../data/footerData";
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from "../data/socialicons.jsx";
import { NavLink, useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/*  Brand + description, quick links (reuses navData), contact info,   */
/*  social icons, and a copyright bar. RTL Arabic layout.               */
/* ------------------------------------------------------------------ */

const iconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

export default function Footer() {
  const navigate=useNavigate()
  const year = new Date().getFullYear();

  return (
    <footer dir="rtl" style={{ background: C.ink }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-3 gap-10">
        {/* brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border"
            
            >
              <img src={logo} alt="brand logo" />
            </div>
            <span style={{ color: C.gold, fontFamily: fontDisplay, fontSize: "20px", fontWeight: 600 }}>
              {BUSINESS.nameAr}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#b7ac90" }}>
            {footerDesc}
          </p>
        </div>

        {/* quick links */}
        <div>
          <h4 className="mb-4 text-sm" style={{ color: C.gold, letterSpacing: "0.05em" }}>
            {footerMenuTitle}
          </h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.href} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#cfc7b3" }}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* contact + social */}
        <div>
          <h4 className="mb-4 text-sm" style={{ color: C.gold, letterSpacing: "0.05em" }}>
            {footerContactTitle}
          </h4>
          <a href={BUSINESS.phoneHref} className="block text-sm mb-2 hover:opacity-80 transition-opacity" style={{ color: "#cfc7b3" }}>
            {BUSINESS.phoneDisplay}
          </a>
          <p className="text-sm mb-4" style={{ color: "#cfc7b3" }}>
            {BUSINESS.address}
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon];
              if (!Icon) return null;
              return (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.icon}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Icon size={20} color={C.gold} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-xs" style={{ borderColor: "#2a271e", color: "#8d8368" }}>
        {`© ${year} جميع الحقوق محفوظة · تصميم وتطوير أشرف علي`}
      </div>
    </footer>
  );
}