import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { C, fontDisplay } from "../data/theme.js";
import { faqEyebrow, faqItems } from "../data/faqData.js";

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/*  Accordion list — one item open at a time. First item open by      */
/*  default to match the original design. RTL Arabic layout.           */
/* ------------------------------------------------------------------ */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-5 md:px-8" dir="rtl" style={{ background: C.creamCard }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-center text-3xl md:text-4xl mb-10"
          style={{ fontFamily: fontDisplay, color: C.charcoal, fontWeight: 600 }}
        >
          {faqEyebrow}
        </h2>

        <div className="border rounded-xl overflow-hidden" style={{ borderColor: C.line }}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.line}` }}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-medium" style={{ color: C.charcoal }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: C.gold,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm" style={{ color: C.muted }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}