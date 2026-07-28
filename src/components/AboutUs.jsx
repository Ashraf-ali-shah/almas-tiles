import React from 'react'
import { C, fontBody as bFont, fontDisplay as dFont } from '../data/theme.js'
import VeinDivider from './VeinDivider.jsx';
import imgs from '../data/imgs.js';
import t from '../data/AboutUsData.js'
import {
    Menu,
    X,
    Phone,
    MessageCircle,
    ChevronDown,
    MapPin,

} from "lucide-react";
const AboutUs = () => {
    return (
        <section id="about" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl mb-2" style={{ fontFamily: dFont, color: C.charcoal }}>
                    {t.who.eyebrow}
                </h2>
                <VeinDivider />
                <p className="text-center max-w-3xl mx-auto mt-6 text-sm md:text-base" style={{ color: C.muted }}>
                    {t.who.p1}
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                    {/* image collage */}
                    <div className="relative h-[420px]">
                        <img
                            src={imgs[1]}
                            alt="Polished marble lobby floor"
                            className="absolute top-0 left-0 w-4/5 h-64 object-cover rounded-lg shadow-xl border-4"
                            style={{ borderColor: C.creamCard }}
                        />
                        <img
                            src={imgs[5]}
                            alt="Marble staircase detail"
                            className="absolute bottom-0 right-0 w-3/5 h-56 object-cover rounded-lg shadow-2xl border-4"
                            style={{ borderColor: C.creamCard }}
                        />
                    </div>

                    {/* text */}
                    <div>
                        {t.who.p2.split("\n\n").map((para, i) => (
                            <p key={i} className="text-sm md:text-base mb-4" style={{ color: C.muted }}>
                                {para}
                            </p>
                        ))}
                        <h3 className="text-lg mt-6 mb-3 font-semibold" style={{ color: C.goldDeep, fontFamily: dFont, fontSize: "22px" }}>
                            {t.who.valuesTitle}
                        </h3>
                        <ul className="space-y-2 mb-6">
                            {t.who.values.map((v, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.charcoal }}>
                                    <span style={{ color: C.gold }}>◆</span> {v}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/966532587334"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                            style={{ background: C.ink, color: C.gold }}
                        >
                            <MessageCircle size={16} /> {t.who.whatsapp}
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUs