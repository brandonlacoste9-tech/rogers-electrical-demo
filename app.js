/* EN-only i18n for Rogers Electrical demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(313) 826-4267",
    "hero.kicker": "Detroit, Michigan · Licensed electrician · Mon–Fri 7 AM–5 PM, Sat 10 AM–5 PM",
    "hero.title": "Power done right,<br>the first time.",
    "hero.sub": "Rated 5.0 out of 5 from 8 reviews: electrical installation, repairs, EV chargers and generators for Detroit homes and businesses.",
    "hero.cta1": "Call (313) 826-4267",
    "hero.cta2": "See services",
    "trust.t1t": "Full-service electrician",
    "trust.t1d": "Install, repair & maintain",
    "trust.t2t": "EV & generator pros",
    "trust.t2d": "Modern power solutions",
    "trust.t3t": "Safety first",
    "trust.t3d": "Code-compliant, every job",
    "stats.s1n": "5.0\u2605",
    "stats.s1l": "from 8 reviews",
    "stats.s2n": "Residential",
    "stats.s2l": "& commercial work",
    "stats.s3n": "Detroit",
    "stats.s3l": "& metro area",
    "stats.s4n": "Upfront",
    "stats.s4l": "honest pricing",
    "services.kicker": "What we do",
    "services.title": "Electrical work, from panel to outlet",
    "services.s1t": "Electrical installation",
    "services.s1d": "New wiring, panels and service upgrades for homes, remodels and new builds.",
    "services.s2t": "Residential repairs",
    "services.s2d": "Outlets, switches, breakers and wiring fixes — fast, safe, done right.",
    "services.s3t": "EV charging stations",
    "services.s3d": "Home EV charger installation so you wake up to a full battery every day.",
    "services.s4t": "Generators",
    "services.s4d": "Standby generator installation and maintenance — power when the grid goes down.",
    "services.s5t": "Troubleshooting & diagnostics",
    "services.s5d": "Flickering lights or mystery outages? We find the fault and fix it safely.",
    "services.s6t": "Lighting installation",
    "services.s6d": "Indoor and outdoor lighting that makes your home safer and brighter.",
    "why.kicker": "Why choose us",
    "why.title": "Detroit's trusted electrician",
    "why.intro": "Electrical work is no place for shortcuts. We do clean, code-compliant work and explain everything in plain English — that's how you earn a perfect 5-star rating.",
    "why.l1t": "Code-compliant work",
    "why.l1d": "Every job meets code — safety is never negotiable.",
    "why.l2t": "Residential specialists",
    "why.l2d": "Homes, remodels and new construction are our everyday work.",
    "why.l3t": "Modern solutions",
    "why.l3d": "EV chargers and generators for today's homes.",
    "why.l4t": "Honest pricing",
    "why.l4d": "Clear quotes before work starts — no surprises on the bill.",
    "gallery.kicker": "On the job",
    "gallery.title": "Clean work, done right",
    "gallery.c1": "Lighting that brightens your home",
    "gallery.c2": "Generators for outage-proof homes",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 5.0 out of 5 by Detroit customers",
    "reviews.more": "See what customers say about us — 5.0 stars from 8 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do you install EV chargers at home?",
    "faq.a1": "Yes — we install home EV charging stations so you can charge overnight and start every day full.",
    "faq.q2": "Can you install a backup generator?",
    "faq.a2": "Yes — standby generators keep your home powered through outages. Call us to discuss the right size for your home.",
    "faq.q3": "Do you do residential repairs?",
    "faq.a3": "Absolutely — outlets, switches, breakers, lighting and full troubleshooting for Detroit-area homes.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday to Friday 7:00 AM–5:00 PM and Saturday 10:00 AM–5:00 PM. Call (313) 826-4267 to schedule.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Mon – Fri: 7:00 AM – 5:00 PM<br>Sat: 10:00 AM – 5:00 PM",
    "contact.cta": "Call now",
    "footer.tag": "Electrician · Detroit, Michigan"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
