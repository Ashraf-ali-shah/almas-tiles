import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { C, fontDisplay, fontBody, FONT_IMPORT_URL } from "../data/theme";
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from "../data/socialicons.jsx";
import { servicesPageData } from "../data/servicesPageData";
import VeinDivider from "../components/VeinDivider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ContactButton from "../components/ContactButton";



export default function ServicesPage() {
  const d = servicesPageData;
  const year = new Date().getFullYear();

  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: fontBody, color: C.charcoal, background: C.cream }}>
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>

      {/* ============================= NAVBAR ============================= */}
     <Navbar></Navbar>
      <ContactButton></ContactButton>
      {/* ============================= BANNER ============================= */}
      <section className="relative overflow-hidden">
        <img src={d.banner.bgImage.src} alt={d.banner.bgImage.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${C.ink}ee 0%, ${C.ink}cc 55%, ${C.ink}ee 100%)` }} />
        <div className="relative max-w-4xl mx-auto text-center px-6 py-20 md:py-28">
          <div className="flex items-center justify-center gap-2 text-xs mb-5" style={{ color: "#d8cfb4" }}>
            <span>{d.banner.breadcrumbHome}</span>
            <span style={{ color: C.gold }}>/</span>
            <span style={{ color: C.gold }}>{d.banner.breadcrumbCurrent}</span>
          </div>
          <h1 className="text-3xl md:text-5xl leading-snug mb-5" style={{ color: C.gold, fontFamily: fontDisplay, fontWeight: 600 }}>
            {d.banner.title}
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: "#cbc2a9" }}>{d.banner.subtitle}</p>
        </div>
      </section>

      {/* ============================= SERVICES GRID ============================= */}
     <Services></Services>

      {/* ============================= FOOTER ============================= */}
      <Footer></Footer>
    </div>
  );
}