import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { C, fontDisplay } from "../data/theme.js";
import { TwitterIcon, WhatsAppIcon, FacebookIcon, InstagramIcon } from "../data/socialicons.jsx";
import { testimonialsEyebrow, testimonialItems } from "../data/testimonialData";

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS SLIDER                                                 */
/*  Shows one customer review at a time with prev/next arrows and       */
/*  clickable dot indicators. RTL Arabic layout.                        */
/* ------------------------------------------------------------------ */

const iconMap = {
  twitter: TwitterIcon,
  whatsapp: WhatsAppIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonialItems.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const current = testimonialItems[index];
  const Icon = iconMap[current.icon] || TwitterIcon;

  return (
    <section className="py-20 px-5 md:px-8" dir="rtl" style={{ background: C.creamCard }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-center text-3xl md:text-4xl mb-14"
          style={{ fontFamily: fontDisplay, color: C.charcoal, fontWeight: 600 }}
        >
          {testimonialsEyebrow}
        </h2>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={goPrev}
            aria-label="السابق"
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: C.gold, color: C.gold }}
          >
            <ChevronRight size={20} />
          </button>

          <div
            key={index}
            className="flex-1 p-7 md:p-10 rounded-xl border text-center"
            style={{ borderColor: C.line, background: C.cream, animation: "fadeIn 0.35s ease" }}
          >
            <p className="text-sm md:text-base mb-6 leading-relaxed" style={{ color: C.charcoal }}>
              "{current.quote}"
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-semibold" style={{ color: C.goldDeep }}>
                {current.name}
              </span>
              <Icon size={16} color={C.gold} />
            </div>
          </div>

          <button
            onClick={goNext}
            aria-label="التالي"
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: C.gold, color: C.gold }}
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialItems.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setIndex(i)}
              aria-label={`رأي رقم ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === index ? "22px" : "8px",
                height: "8px",
                background: i === index ? C.gold : C.line,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}