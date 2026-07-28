import React from "react";
import { ChevronLeft, Calendar, Clock, User } from "lucide-react";
import { C, fontDisplay, fontBody, FONT_IMPORT_URL } from "../data/theme";
import { blogPosts } from "../data/blogData";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactButton from "../components/ContactButton";


export default function BlogDetailPage({  onBack }) {
  const navigate=useNavigate()
  const {slug}=useParams()
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" });
  }

  const BackTag = onBack ? "button" : "a";
  const backProps = onBack ? { onClick: onBack, type: "button" } : { onClick:()=> navigate("/المدونة") };

  return (
    <>
    <Navbar></Navbar>
    <ContactButton></ContactButton>
    <div dir="rtl" lang="ar" style={{ background: C.cream, fontFamily: fontBody, minHeight: "100vh" }}>
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>

      {/* hero image + title */}
      <section className="relative overflow-hidden">
        <img src={post.thumbnail.src} alt={post.thumbnail.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(160deg, ${C.ink}f0 0%, #232019d9 55%, ${C.ink}f0 100%)` }}
        />
        <div className="relative max-w-3xl mx-auto text-center px-6 py-20 md:py-24">
          <h1 className="text-2xl md:text-4xl leading-snug mb-5" style={{ color: C.gold, fontFamily: fontDisplay, fontWeight: 600 }}>
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap text-xs md:text-sm" style={{ color: "#cbc2a9" }}>
            <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* article body */}
      <section className="py-16 px-5 md:px-8">
        <article className="max-w-2xl mx-auto">
          <BackTag {...backProps} className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold mb-8" style={{ color: C.goldDeep }}>
            <ChevronLeft size={15} className="rotate-180" /> العودة إلى المدونة
          </BackTag>

          {/* intro */}
          <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.charcoal }}>
            {post.intro}
          </p>

          {/* in-article image */}
          {post.contentImage && (
            <img
              src={post.contentImage.src}
              alt={post.contentImage.alt}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-10"
            />
          )}

          {/* long-form sections */}
          {post.sections.map((s, i) => (
            <div key={i} className="mb-8">
              <h2
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: fontDisplay, color: C.goldDeep, fontWeight: 700 }}
              >
                {s.heading}
              </h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.charcoal }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}