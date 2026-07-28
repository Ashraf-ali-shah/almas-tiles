import React from 'react'
import t from '../data/whyChooseUsdata.js'
import { C, fontBody as bFont, fontDisplay as dFont } from '../data/theme.js'
import VeinDivider from './VeinDivider.jsx';
import imgs from '../data/imgs.js'
import {
    Menu,
    X,
    Phone,
    MessageCircle,
    ChevronDown,
    MapPin,

} from "lucide-react";
const WhyChooseUs = () => {
    return (
        <section className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl mb-3" style={{ fontFamily: dFont, color: C.charcoal }}>
                    {t.why.eyebrow}
                </h2>
                <VeinDivider />

                <div className="grid md:grid-cols-2 gap-14 items-center mt-14">
                    <div className="divide-y" style={{ borderColor: C.line }}>
                        {t.why.items.map((w, i) => (
                            <div key={i} className="py-5" style={{ borderTop: i === 0 ? "none" : `1px solid ${C.line}` }}>
                                <h3 className="mb-1" style={{ fontFamily: dFont, color: C.goldDeep, fontSize: "20px", fontWeight: 600 }}>
                                    {w.title}
                                </h3>
                                <p className="text-sm" style={{ color: C.muted }}>
                                    {w.desc}
                                </p>
                            </div>
                        ))}
                        <div className="flex gap-4 pt-6 flex-wrap">
                            <a
                                href="https://wa.me/966532587334"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                                style={{ background: C.ink, color: C.gold }}
                            >
                                <MessageCircle size={16} /> {t.why.whatsapp}
                            </a>
                            <a
                                href="tel:+966532587334"
                                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border"
                                style={{ borderColor: C.ink, color: C.ink }}
                            >
                                <Phone size={16} /> {t.why.contact}
                            </a>
                        </div>
                    </div>

                    <img
                        src={imgs[2]}
                        alt="Ornate polished marble medallion floor pattern"
                        className="w-full h-[500px] object-cover rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs