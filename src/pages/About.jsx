import React, { useState } from "react";
import { Menu, X, Phone, MessageCircle, Gem, Wrench, Leaf, MapPin, Cat } from "lucide-react";
import { C, fontDisplay, fontBody, FONT_IMPORT_URL } from "../data/theme";
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from "../data/socialicons.jsx";
import { aboutData } from "../data/AboutPageData.js";
import Navbar from "../components/Navbar.jsx";
import AboutUs from "../components/AboutUs.jsx";
import VeinDivider from "../components/VeinDivider.jsx";
import Footer from "../components/Footer.jsx";
import imgs from '../data/imgs.js'
import CTA from "../components/CTA.jsx";
import ContactButton from "../components/ContactButton.jsx";



const valueIconMap = { precision: Gem, equipment: Wrench, eco: Leaf, local: MapPin };


export default function AboutPage() {
  const d = aboutData;
  const year = new Date().getFullYear();

  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: fontBody, color: C.charcoal, background: C.cream }}>
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>

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
          <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: "#cbc2a9" }}>
            {d.banner.subtitle}
          </p>
        </div>
      </section>

      {/* ============================= STORY ============================= */}
      <section id="about" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto">
          <span className="block text-center text-xs tracking-widest uppercase mb-2" style={{ color: C.goldDeep }}>
            {d.story.eyebrow}
          </span>
          <h2 className="text-center text-3xl md:text-4xl mb-2" style={{ fontFamily: fontDisplay, color: C.charcoal, fontWeight: 600 }}>
            {d.story.title}
          </h2>
          <VeinDivider />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative h-[420px] order-1 md:order-2">
              <img
                src={imgs[5]}
                alt={d.story.images[0].alt}
                className="absolute top-0 right-0 w-4/5 h-64 object-cover rounded-lg shadow-xl border-4"
                style={{ borderColor: C.creamCard }}
              />
              <img
                src={imgs[1]}
                alt={d.story.images[1].alt}
                className="absolute bottom-0 left-0 w-3/5 h-56 object-cover rounded-lg shadow-2xl border-4"
                style={{ borderColor: C.creamCard }}
              />
            </div>
            <div className="order-2 md:order-1">
              {d.story.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base mb-4" style={{ color: C.muted }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================= MILESTONES ============================= */}
      <section className="py-20 px-5 md:px-8" style={{ background: C.creamCard }}>
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs tracking-widest uppercase mb-2" style={{ color: C.goldDeep }}>
            {d.milestones.eyebrow}
          </span>
          <h2 className="text-center text-3xl md:text-4xl mb-2" style={{ fontFamily: fontDisplay, color: C.charcoal, fontWeight: 600 }}>
            {d.milestones.title}
          </h2>
          <VeinDivider />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {d.milestones.items.map((m, i) => (
              <div key={m.year} className="relative pt-6" style={{ borderTop: `2px solid ${C.gold}` }}>
                <span
                  className="absolute -top-3 right-0 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ background: C.gold, color: C.ink }}
                >
                  {i + 1}
                </span>
                <div style={{ fontFamily: fontDisplay, color: C.goldDeep, fontSize: "26px", fontWeight: 700 }}>{m.year}</div>
                <h3 className="mt-1 mb-2 text-sm font-semibold" style={{ color: C.charcoal }}>{m.title}</h3>
                <p className="text-sm" style={{ color: C.muted }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CORE VALUES ============================= */}
      <section className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs tracking-widest uppercase mb-2" style={{ color: C.goldDeep }}>
            {d.values.eyebrow}
          </span>
          <h2 className="text-center text-3xl md:text-4xl mb-2" style={{ fontFamily: fontDisplay, color: C.charcoal, fontWeight: 600 }}>
            {d.values.title}
          </h2>
          <VeinDivider />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {d.values.items.map((v) => {
              const Icon = valueIconMap[v.icon];
              return (
                <div key={v.title} className="p-6 rounded-xl border text-center" style={{ borderColor: C.line, background: C.creamCard }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: C.ink }}>
                    <Icon size={22} color={C.gold} />
                  </div>
                  <h3 className="mb-2 text-base" style={{ fontFamily: fontDisplay, color: C.goldDeep, fontWeight: 600 }}>
                    {v.title}
                  </h3>
                  <p className="text-sm" style={{ color: C.muted }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================= STATS ============================= */}
      <section className="py-14 px-5 md:px-8" style={{ background: C.ink }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {d.stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: fontDisplay, color: C.gold, fontSize: "34px", fontWeight: 700 }}>{s.value}</div>
              <div className="text-xs md:text-sm mt-1" style={{ color: "#cfc7b3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= GALLERY ============================= */}
      <section className="py-20 px-5 md:px-8" style={{ background: C.creamCard }}>
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs tracking-widest uppercase mb-2" style={{ color: C.goldDeep }}>
            {d.gallery.eyebrow}
          </span>
          <h2 className="text-center text-3xl md:text-4xl mb-2" style={{ fontFamily: fontDisplay, color: C.charcoal, fontWeight: 600 }}>
            {d.gallery.title}
          </h2>
          <VeinDivider />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
            {d.gallery.images.map((img,i) => (
              <img key={img} src={imgs[i]} alt={img.alt} className="w-full h-40 md:h-52 object-cover rounded-lg shadow" />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <CTA></CTA>

      {/* ============================= FOOTER ============================= */}
            <Footer></Footer>
    </div>
  );
}