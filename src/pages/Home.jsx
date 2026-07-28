import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Testimonials from '../components/Testimonials.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import VeinDivider from '../components/VeinDivider.jsx'
import Contact from '../components/Contact.jsx'
import Services from '../components/Services.jsx'
import AboutUs from '../components/AboutUs.jsx'
import FAQ from '../components/Faq.jsx'
import Footer from '../components/Footer.jsx'
import t from '../data/homeData.js'
import imgs from '../data/imgs.js'
import ContactButton from '../components/ContactButton.jsx'
import { C, fontBody as bFont, fontDisplay as dFont } from '../data/theme.js'
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  MapPin,

} from "lucide-react";


const Home = () => {

  return (
    <div>
      <Navbar></Navbar>
      <ContactButton></ContactButton>
      {/* hero section  */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${C.ink} 0%, #232019 55%, #171410 100%)`,
        }}
      >
        {/* decorative marble vein SVG background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1000 600"
        >
          <path d="M0 400 C 150 300, 250 500, 400 380 S 650 250, 800 400 S 950 500, 1000 380" stroke={C.gold} strokeWidth="1.2" fill="none" />
          <path d="M0 120 C 200 60, 300 200, 500 100 S 750 40, 1000 140" stroke={C.gold} strokeWidth="0.8" fill="none" />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center px-6 py-24 md:py-32">
          <p className="text-sm md:text-base mb-5" style={{ color: "#d8cfb4", fontFamily: bFont }}>
            {t.hero.eyebrow}
          </p>
          <h1
            className="text-3xl md:text-5xl leading-snug mb-6"
            style={{ color: C.gold, fontFamily: dFont, fontWeight: 600 }}
          >
            {t.hero.title}
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto mb-9" style={{ color: "#cbc2a9" }}>
            {t.hero.desc}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/966532587334"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: C.ink, border: `1px solid ${C.gold}`, color: C.gold }}
            >
              <MessageCircle size={16} /> {t.hero.whatsapp}
            </a>
            <a
              href="tel:+966532587334"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: C.gold, color: C.ink }}
            >
              <Phone size={16} /> {t.hero.contact}
            </a>
          </div>
        </div>
      </section>
      {/* ============================= WHO WE ARE ============================= */}
      <AboutUs></AboutUs>
      {/* ============================= SERVICES ============================= */}
      <Services></Services>
      {/* ============================= WHY CHOOSE US ============================= */}
      <WhyChooseUs></WhyChooseUs>
      {/* ============================= FAQ ============================= */}
      <FAQ></FAQ>
      {/* ============================= OUR WORK GALLERY ============================= */}
      <section className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl mb-10" style={{ fontFamily: dFont, color: C.charcoal }}>
            {t.work.eyebrow}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <img
                key={i}
                src={imgs[i]}
                alt={`Marble polishing project ${i + 1}`}
                className="w-full h-36 md:h-44 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      </section>
      {/* ============================= TESTIMONIALS ============================= */}
      <Testimonials></Testimonials>
      {/* ============================= CONTACT ============================= */}
      <Contact></Contact>
      {/* ============================= FOOTER ============================= */}
      <Footer></Footer>

    </div>
  )
}

export default Home