import React, { useState } from 'react'
import VeinDivider from './VeinDivider'
import { C,fontBody as bFont,fontDisplay as dFont } from '../data/theme.js'
import imgs from '../data/imgs.js'
import t from '../data/contactData.js'
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  MapPin,

} from "lucide-react";

const Contact = () => {
    const [error,setError]=useState(false)
    const hanldeSubmit= async(e)=>{
        e.preventDefault();
        try {
        let formData=new FormData(e.target);
        const response=await fetch('https://script.google.com/macros/s/AKfycby5qK6gR8SUvGEiVNzSluAhux_jv4zjt2xgwxBrI4jsnhZoj2czQ53uyWOnxoolu4GeOA/exec',{
            method:'POST',
            body:formData
        })
        const res=await response.json()
        console.log("sucessfully delivered")
        } catch (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            console.log(error.message)
        }
    }
    return (
        <section id="contact" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl mb-14" style={{ fontFamily: dFont, color: C.charcoal }}>
                    {t.contact.eyebrow}
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <form  className="space-y-4" onSubmit={hanldeSubmit}>
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: C.goldDeep }}>
                            {t.contact.formLabel}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder={t.contact.firstName}
                                className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent"
                                style={{ borderColor: C.line }}
                                name='First_Name'
                                required
                            />
                            <input
                                type="text"
                                placeholder={t.contact.lastName}
                                className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent"
                                style={{ borderColor: C.line }}
                                name='Last_Name'
                            />
                        </div>
                        <input
                            type="email"
                            placeholder={t.contact.email}
                            className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent"
                            style={{ borderColor: C.line }}
                            name='Email'
                        />
                        <input
                            type="tel"
                            placeholder={t.contact.phone}
                            className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent"
                            style={{ borderColor: C.line }}
                            name='Phone'
                            required
                        />
                        <textarea
                            placeholder={t.contact.message}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border text-sm bg-transparent"
                            style={{ borderColor: C.line }}
                            name='Message'
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-full cursor-pointer text-sm font-semibold"
                            style={{ background: C.ink, color: C.gold }}
                        >
                            {t.contact.send}
                        </button>
                        <p className='text-red-500 m-0 p-0 pl-2 h-4'>{error && "حدث خطأ ما"}</p>

                    </form>

                    <div className="rounded-xl overflow-hidden border h-80 md:h-full relative" style={{ borderColor: C.line }}>
                        <iframe
                            title="Riyadh Map"
                            src="https://www.google.com/maps?q=Riyadh,Saudi+Arabia&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(15%)" }}
                            loading="lazy"
                        />
                        <a
                            href="https://www.google.com/maps?q=Riyadh,Saudi+Arabia"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute top-3 flex items-center gap-1 text-xs px-3 py-2 rounded-full shadow"
                            style={{
                                background: C.ink,
                                color: C.gold,
                                "right": "12px",
                            }}
                        >
                            <MapPin size={13} /> {t.contact.openMaps}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact