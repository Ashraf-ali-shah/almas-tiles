import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { C } from "../data/theme";
import { WhatsAppIcon } from "../data/socialicons.jsx";
import { floatingContact } from "../data/contactButton.js";


export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 60 }}>
      {/* WhatsApp option */}
      <a
        href={floatingContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={floatingContact.whatsappLabel}
        style={{
          position: "absolute",
          bottom: open ? "132px" : "0px",
          right: "4px",
          width: "48px",
          height: "48px",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#25D366",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0.4)",
          pointerEvents: open ? "auto" : "none",
          transition: "all 0.25s ease",
        }}
      >
        <WhatsAppIcon size={22} color="#ffffff" />
      </a>

      {/* Call option */}
      <a
        href={floatingContact.phoneHref}
        aria-label={floatingContact.phoneLabel}
        style={{
          position: "absolute",
          bottom: open ? "72px" : "0px",
          right: "4px",
          width: "48px",
          height: "48px",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.ink,
          border: `1px solid ${C.gold}`,
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0.4)",
          pointerEvents: open ? "auto" : "none",
          transition: "all 0.25s ease",
          transitionDelay: open ? "0.05s" : "0s",
        }}
      >
        <Phone size={20} color={C.gold} />
      </a>

      {/* main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "إغلاق خيارات التواصل" : "تواصل معنا"}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.gold,
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          border: "none",
          cursor: "pointer",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.25s ease",
        }}
      >
        {open ? <X size={24} color={C.ink} /> : <MessageCircle size={24} color={C.ink} />}
      </button>
    </div>
  );
}