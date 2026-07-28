
export const C = {
  ink: "#15130f",       // near-black warm charcoal — header / hero / footer bg
  inkSoft: "#1f1c15",   // slightly lighter charcoal, gradients
  gold: "#c9a35c",      // muted brass accent — headings, borders, icons
  goldDeep: "#a3792f",  // darker brass — hover states, sub-headings
  cream: "#f7f2e6",     // warm off-white — section background
  creamCard: "#fffdf8", // lightest surface — cards, alternate sections
  charcoal: "#26221a",  // primary body text
  muted: "#766c58",     // secondary / paragraph text
  line: "#e7dcc2",      // hairline borders/dividers
};

// Arabic-only site: both display and body use Tajawal,
// differentiated by weight/size rather than family.
export const fontDisplay = "'Tajawal', sans-serif"; // headings (use weight 600–700)
export const fontBody = "'Tajawal', sans-serif";    // body text (use weight 400–500)

export const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700&display=swap";

// Business contact info — reused across Navbar, Hero, Footer, Contact section
export const BUSINESS = {
  nameAr: "الماس تايلز",
  taglineAr: "بلاط ورخام الرياض",
  phoneDisplay: "966532587334+",
  phoneHref: "tel:+966532587334",
  whatsappHref: "https://wa.me/966532587334",
  address: "الرياض، المملكة العربية السعودية",
};