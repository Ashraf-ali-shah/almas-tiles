import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Calendar, Clock } from "lucide-react";
import { C, fontDisplay, fontBody, FONT_IMPORT_URL } from "../data/theme";
import { blogPageTitle, blogPageSubtitle, blogPosts,blogBanner } from "../data/blogData";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imgs from '../data/imgs.js'
import ContactButton from "../components/ContactButton.jsx";

const PAGE_SIZE = 8;

export default function BlogPage({ onOpenPost }) {
  const navigate=useNavigate()
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = blogPosts.slice(start, start + PAGE_SIZE);

  function goToPage(p) {
    const next = Math.max(1, Math.min(totalPages, p));
    setPage(next);
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" });
  }

  return (
    <>
    <Navbar></Navbar>
    <ContactButton></ContactButton>
    <div dir="rtl" lang="ar" style={{ background: C.cream, fontFamily: fontBody, minHeight: "100vh" }}>
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>

      {/* page title band */}
   <section className="relative overflow-hidden">
        <img
          src={blogBanner.bgImage.src}
          alt={blogBanner.bgImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(160deg, ${C.ink}ee 0%, ${C.ink}cc 55%, ${C.ink}ee 100%)` }}
        />
        <div className="relative max-w-4xl mx-auto text-center px-6 py-20 md:py-28">
          <div className="flex items-center justify-center gap-2 text-xs mb-5" style={{ color: "#d8cfb4" }}>
            <span>{blogBanner.breadcrumbHome}</span>
            <span style={{ color: C.gold }}>/</span>
            <span style={{ color: C.gold }}>{blogBanner.breadcrumbCurrent}</span>
          </div>
          <h1 className="text-3xl md:text-5xl leading-snug mb-5" style={{ color: C.gold, fontFamily: fontDisplay, fontWeight: 600 }}>
            {blogBanner.title}
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: "#cbc2a9" }}>
            {blogBanner.subtitle}
          </p>
        </div>
      </section>

      {/* posts grid */}
      <section className="py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {visiblePosts.map((post,i) => {
              const CardTag = onOpenPost ? "button" : "a";
              const cardProps = onOpenPost
                ? { onClick: () => onOpenPost(post.slug), type: "button" }
                : { onClick:()=>navigate(`/المدونة/${post.slug}`) };

              return (
                <CardTag
                  key={post.id}
                  {...cardProps}
                  className="text-start rounded-xl cursor-pointer overflow-hidden border shadow-sm flex flex-col"
                  style={{ background: C.creamCard, borderColor: C.line }}
                >
                  <img src={imgs[i]} alt={post.thumbnail.alt} className="w-full h-40 object-cover" />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] mb-2" style={{ color: C.muted }}>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3
                      className="mb-2 text-base leading-snug"
                      style={{ fontFamily: fontDisplay, color: C.goldDeep, fontWeight: 600 }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: C.muted }}>
                      {post.excerpt}
                    </p>
                    <span className="mt-auto text-xs font-semibold inline-flex items-center gap-1" style={{ color: C.gold }}>
                      اقرأ المزيد <ChevronLeft size={13} />
                    </span>
                  </div>
                </CardTag>
              );
            })}
          </div>

          {/* pagination */}
          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="الصفحة السابقة"
              className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center border disabled:opacity-30"
              style={{ borderColor: C.gold, color: C.gold }}
            >
              <ChevronRight size={16} />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center text-sm font-semibold transition-colors"
                  style={{
                    background: active ? C.gold : "transparent",
                    color: active ? C.ink : C.charcoal,
                    border: active ? "none" : `1px solid ${C.line}`,
                  }}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="الصفحة التالية"
              className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center border disabled:opacity-30"
              style={{ borderColor: C.gold, color: C.gold }}
            >
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}