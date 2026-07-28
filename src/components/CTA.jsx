import React from 'react'
import cta from '../data/CTAdata'
import { C, fontDisplay, fontBody, FONT_IMPORT_URL } from "../data/theme";
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section
      className="py-16 px-5 md:px-8 text-center"
      style={{ background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldDeep} 100%)` }}
    >
      <h2 className="text-2xl md:text-3xl mb-3" style={{ color: C.ink, fontFamily: fontDisplay, fontWeight: 600 }}>
        {cta.title}
      </h2>
      <p className="text-sm md:text-base mb-8 max-w-xl mx-auto" style={{ color: "#3d2f16" }}>{cta.desc}</p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <a
          href="https://wa.me/966532587334"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
          style={{ background: C.ink, color: C.gold }}
        >
          <MessageCircle size={16} /> {cta.whatsappLabel}
        </a>
        <a
          href="tel:+966532587334"
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border"
          style={{ borderColor: C.ink, color: C.ink }}
        >
          <Phone size={16} /> {cta.contactLabel}
        </a>
      </div>
    </section>
  )
}

export default CTA