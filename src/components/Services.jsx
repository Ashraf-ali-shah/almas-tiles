import React from 'react'
import VeinDivider from './VeinDivider'
import { C,fontBody as bFont,fontDisplay as dFont } from '../data/theme.js'
import imgs from '../data/imgs.js'
import t from '../data/ServicesData.js'
const Services = () => {
    return (
        <section id="services" className="py-20 px-5 md:px-8" style={{ background: C.creamCard }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl mb-3" style={{ fontFamily: dFont, color: C.charcoal }}>
                    {t.services.eyebrow}
                </h2>
                <VeinDivider />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                    {t.services.items.map((s, i) => (
                        <div
                            key={i}
                            className="rounded-xl overflow-hidden shadow-sm border"
                            style={{ background: C.cream, borderColor: C.line }}
                        >
                            <img
                                src={imgs[i]}
                                alt={s.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="mb-2" style={{ fontFamily: dFont, color: C.goldDeep, fontSize: "21px", fontWeight: 600 }}>
                                    {s.title}
                                </h3>
                                <p className="text-sm" style={{ color: C.muted }}>
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services