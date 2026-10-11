(function () {
  "use strict";

  const A = window.AGENCY || {};
  const CATS = window.CATEGORIES || {};
  const root = document.getElementById("app");

  /* ───────────── helpers ───────────── */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const digits = (s) => String(s || "").replace(/\D/g, "");
  const params = new URLSearchParams(location.search);
  const get = (...keys) => { for (const k of keys) { const v = params.get(k); if (v && v.trim()) return v.trim(); } return ""; };

  function normPhone(p) {
    let d = digits(p);
    if (d.length === 10) d = "91" + d;
    if (d.length === 11 && d.startsWith("0")) d = "91" + d.slice(1);
    return d.length >= 11 ? d : "";
  }
  function prettyPhone(d) {
    if (!d) return "";
    if (d.startsWith("91") && d.length === 12) return `+91 ${d.slice(2, 7)} ${d.slice(7)}`;
    return "+" + d;
  }
  const waLink = (num, text) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;

  /* category from path (/salon) or ?c= */
  function pickCategory() {
    const seg = location.pathname.replace(/^\/+|\/+$/g, "").split("/").pop().replace(/\.html$/, "").toLowerCase();
    const q = (get("c", "category", "type") || "").toLowerCase();
    if (CATS[q]) return q;
    if (CATS[seg]) return seg;
    return "";
  }

  /* ───────────── icons (24px line icons) ───────────── */
  const P = {
    sparkle: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    car: '<path d="M5 17h14M6 17v2M18 17v2"/><path d="M4 13l2-5a2 2 0 0 1 1.9-1.3h8.2A2 2 0 0 1 18 8l2 5v4H4z"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    scissors: '<circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="M8 8.5L20 18M8 15.5L20 6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    cake: '<path d="M4 20h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/><path d="M4 15c1.3 1 2.7 1 4 0s2.7-1 4 0 2.7 1 4 0 2.7-1 4 0"/><path d="M12 11V7M12 4.5v.01"/>',
    truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19l7-7"/>',
    flame: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.5 1 2.5 2 3 0-3 0-5.5 1-8.5z"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.2 5 2.6 5 5.8"/>',
    scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M8 12h8"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    dumbbell: '<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
    award: '<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/>',
    camera: '<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    drone: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><path d="M7 7.5l3 3M17 7.5l-3 3"/><rect x="9.5" y="10" width="5" height="4" rx="1"/><path d="M10 14l-2 4M14 14l2 4"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',
    tree: '<path d="M12 3l6 8h-3l4 5H5l4-5H6z"/><path d="M12 16v5"/>',
    ruler: '<path d="M3 16L16 3l5 5L8 21z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>',
    tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    plane: '<path d="M21 15.5l-8-4.5V5.5a1.5 1.5 0 0 0-3 0V11l-8 4.5V17l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-4.5l8 2.5z"/>',
    map: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    steering: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3.5 10.5c3-1 5.8-1.5 8.5-1.5s5.5.5 8.5 1.5M10.5 13.5L7 20M13.5 13.5L17 20"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };
  const icon = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || P.sparkle}</svg>`;
  const WA_SVG = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" style="fill:currentColor;stroke:none"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg>';

  /* ───────────── fonts & theme ───────────── */
  function loadFonts(families) {
    const uniq = [...new Set(families.filter(Boolean))];
    if (!uniq.length) return;
    const q = uniq.map((f) => `family=${f.replace(/ /g, "+")}:wght@400;500;600;700`).join("&");
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = `https://fonts.googleapis.com/css2?${q}&display=swap`;
    document.head.appendChild(l);
  }
  function applyTheme(t, accentOverride) {
    const s = document.documentElement.style;
    const acc = /^#?[0-9a-f]{6}$/i.test(accentOverride || "") ? "#" + accentOverride.replace("#", "") : t.accent;
    s.setProperty("--accent", acc);
    s.setProperty("--accent-2", t.accent2);
    s.setProperty("--bg", t.bg);
    s.setProperty("--surface", t.surface);
    s.setProperty("--ink", t.ink);
    s.setProperty("--muted", t.muted);
    s.setProperty("--line", t.line);
    s.setProperty("--font-head", `"${t.heading}", Georgia, serif`);
    s.setProperty("--font-body", `"${t.body}", system-ui, sans-serif`);
    document.documentElement.classList.toggle("theme-dark", !!t.dark);
    loadFonts([t.heading, t.body]);
  }

  /* ═════════════ DEMO SITE ═════════════ */
  function renderSite(key) {
    const cat = CATS[key];
    const name = get("n", "name", "business") || cat.sampleName;
    const isSample = !get("n", "name", "business");
    const town = get("t", "town", "city") || "Kannur";
    const phone = normPhone(get("p", "phone", "wa", "whatsapp"));
    const rating = parseFloat(get("r", "rating"));
    const reviews = parseInt(digits(get("rv", "reviews")), 10);
    const tagline = get("tag", "tagline");
    const contactNum = phone || normPhone(A.whatsapp);
    const fill = (s) => String(s || "").replace(/\{name\}/g, name).replace(/\{town\}/g, town);
    const F = (s) => esc(fill(s));

    applyTheme(cat.theme, get("color", "accent"));
    document.title = `${name} – ${cat.label} in ${town} (Demo)`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", fill(cat.hero.sub));

    const initials = name.split(/\s+/).filter((w) => /[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join("") || "★";
    const navIds = ["services", cat.extra ? "extra" : "gallery", "about", "book"];
    const navLabels = cat.nav;
    const ratingBadge = rating > 0
      ? `<div class="rating-badge">${icon("star", "fill")}<b>${rating.toFixed(1)}</b><span>${reviews > 0 ? `${reviews.toLocaleString("en-IN")} Google reviews` : "on Google"}</span></div>`
      : "";

    const agencyMsg = (A.ctaMessage || "Hi, I saw the demo website for {business}.").replace(/\{owner\}/g, A.owner || "").replace(/\{business\}/g, name);
    const agencyWa = normPhone(A.whatsapp);
    const agencyHref = agencyWa ? waLink(agencyWa, agencyMsg) : "#";

    const ribbon = `
      <div class="demo-ribbon" role="note">
        <div class="demo-ribbon__in">
          <span class="demo-pill">DEMO</span>
          <span class="demo-text">${isSample ? "Sample website design" : `Free concept website designed for <b>${esc(name)}</b>`} by <b>${esc(A.name || "our studio")}</b><span class="demo-more"> · not the official site · sample photos &amp; prices</span></span>
          <a class="demo-cta" href="${agencyHref}" target="_blank" rel="noopener">Get this website ${icon("arrow")}</a>
        </div>
      </div>`;

    const header = `
      <header class="nav" id="top">
        <div class="wrap nav__in">
          <a class="brand" href="#top"><span class="brand__mark">${esc(initials)}</span><span class="brand__name">${esc(name)}</span></a>
          <nav class="nav__links" id="navlinks">
            ${navLabels.map((l, i) => `<a href="#${navIds[i]}">${esc(l)}</a>`).join("")}
          </nav>
          <div class="nav__cta">
            <a class="btn btn--small btn--primary" href="#book">${esc(cat.navCta || "Book now")}</a>
            <button class="nav__toggle" aria-label="Menu" id="navtoggle">${icon("menu")}</button>
          </div>
        </div>
      </header>`;

    const hero = `
      <section class="hero">
        <div class="wrap hero__grid">
          <div class="hero__copy reveal">
            <p class="eyebrow">${F(cat.hero.eyebrow)}</p>
            <h1>${F(tagline || cat.hero.title)}</h1>
            <p class="lead">${F(cat.hero.sub)}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" href="#book">${esc(cat.hero.primary)} ${icon("arrow")}</a>
              <a class="btn btn--ghost" href="#services">${esc(cat.hero.secondary)}</a>
            </div>
            <div class="hero__meta">
              ${ratingBadge}
              <div class="meta-item">${icon("map")}<span>${esc(town)}, Kannur</span></div>
              <div class="meta-item">${icon("clock")}<span>${esc(cat.hours.split("·")[0].trim())}</span></div>
            </div>
          </div>
          <div class="hero__media reveal">
            <img src="${cat.hero.image}" alt="${esc(cat.label)}" fetchpriority="high">
            <div class="hero__card">
              <span class="hero__card-ic">${icon(cat.highlights[0].icon)}</span>
              <div><b>${F(cat.highlights[0].title)}</b><span>${F(cat.highlights[0].text)}</span></div>
            </div>
          </div>
        </div>
      </section>`;

    const highlights = `
      <section class="strip">
        <div class="wrap strip__grid">
          ${cat.highlights.map((h) => `<div class="strip__item reveal"><span class="strip__ic">${icon(h.icon)}</span><div><b>${F(h.title)}</b><span>${F(h.text)}</span></div></div>`).join("")}
        </div>
      </section>`;

    const services = `
      <section class="section" id="services">
        <div class="wrap">
          <div class="section__head reveal"><p class="eyebrow">${esc(navLabels[0])}</p><h2>${F(cat.services.title)}</h2><p class="muted">${F(cat.services.sub)}</p></div>
          <div class="svc-grid">
            ${cat.services.items.map((s) => `
              <article class="svc reveal">
                <div class="svc__top"><h3>${F(s.name)}</h3><span class="price">${s.price.startsWith("₹") ? `<small>from</small> ` : ""}${esc(s.price)}</span></div>
                <p>${F(s.desc)}</p>
                <a class="svc__link" href="#book" data-pick="${esc(s.name)}">Enquire ${icon("arrow")}</a>
              </article>`).join("")}
          </div>
        </div>
      </section>`;

    let extra = "";
    if (cat.extra) {
      const x = cat.extra;
      extra = `
      <section class="section section--alt" id="extra">
        <div class="wrap">
          <div class="section__head reveal"><h2>${F(x.title)}</h2><p class="muted">${F(x.sub)}</p></div>
          <div class="${x.type === "plans" ? "plans" : "cards3"}">
            ${x.items.map((it) => x.type === "plans"
              ? `<div class="plan reveal ${it.tag ? "plan--hot" : ""}">${it.tag ? `<span class="plan__tag">${esc(it.tag)}</span>` : ""}<h3>${F(it.title)}</h3><div class="plan__price">${esc(it.price)}</div><p>${F(it.text)}</p><a class="btn ${it.tag ? "btn--primary" : "btn--ghost"} btn--block" href="#book">Choose</a></div>`
              : `<div class="card3 reveal"><h3>${F(it.title)}</h3><p>${F(it.text)}</p><span class="card3__price">${esc(it.price)}</span></div>`).join("")}
          </div>
        </div>
      </section>`;
    }

    const gallery = `
      <section class="section ${cat.extra ? "" : "section--alt"}" id="gallery">
        <div class="wrap">
          <div class="section__head reveal"><h2>${F(cat.gallery.title)}</h2><p class="muted">Sample photos – your own work goes here.</p></div>
          <div class="gallery g${Math.min(cat.gallery.images.length, 6)}">
            ${cat.gallery.images.map((src, i) => `<button class="gallery__item reveal" data-src="${src.replace(/w=\d+/, "w=1600")}" aria-label="Open photo ${i + 1}"><img src="${src}" alt="" loading="lazy"></button>`).join("")}
          </div>
        </div>
      </section>`;

    const about = `
      <section class="section" id="about">
        <div class="wrap about">
          <div class="about__media reveal"><img src="${cat.about.image}" alt="" loading="lazy"></div>
          <div class="about__copy reveal">
            <p class="eyebrow">About ${esc(name)}</p>
            <h2>${F(cat.about.title)}</h2>
            <p>${F(cat.about.text)}</p>
            <ul class="ticks">${cat.about.points.map((p) => `<li>${icon("check")}<span>${F(p)}</span></li>`).join("")}</ul>
          </div>
        </div>
      </section>`;

    const testimonials = `
      <section class="section section--alt">
        <div class="wrap">
          <div class="section__head reveal"><h2>What customers say</h2><p class="muted"><span class="sample-tag">Sample reviews</span> Your real Google reviews will be shown here.</p></div>
          <div class="quotes">
            ${cat.testimonials.map((t) => `<figure class="quote reveal"><div class="stars">${icon("star", "fill").repeat(5)}</div><blockquote>“${F(t.text)}”</blockquote><figcaption>${F(t.who)}</figcaption></figure>`).join("")}
          </div>
        </div>
      </section>`;

    const field = (f, i) => {
      const id = `f${i}`;
      const req = f.required ? "required" : "";
      let input;
      if (f.type === "select") input = `<select id="${id}" name="${esc(f.label)}">${f.options.map((o) => `<option>${esc(o)}</option>`).join("")}</select>`;
      else if (f.type === "textarea") input = `<textarea id="${id}" name="${esc(f.label)}" rows="3"></textarea>`;
      else input = `<input id="${id}" name="${esc(f.label)}" type="${f.type}" ${req} ${f.type === "number" ? 'min="1"' : ""}>`;
      return `<label class="field ${f.type === "textarea" ? "field--full" : ""}" for="${id}"><span>${esc(f.label)}${f.required ? " *" : ""}</span>${input}</label>`;
    };

    const book = `
      <section class="section" id="book">
        <div class="wrap book">
          <div class="book__info reveal">
            <p class="eyebrow">${esc(navLabels[3])}</p>
            <h2>${F(cat.form.title)}</h2>
            <p class="muted">${F(cat.form.sub)}</p>
            <ul class="contact">
              ${contactNum ? `<li>${icon("phone")}<a href="tel:+${contactNum}">${esc(prettyPhone(contactNum))}</a></li>` : ""}
              <li>${icon("map")}<span>${esc(town)}, Kannur, Kerala</span></li>
              <li>${icon("clock")}<span>${esc(cat.hours)}</span></li>
            </ul>
            ${contactNum ? `<a class="btn btn--wa" href="${waLink(contactNum, fill(cat.form.intro))}" target="_blank" rel="noopener">${WA_SVG} Chat on WhatsApp</a>` : ""}
          </div>
          <form class="form reveal" id="bookform" novalidate>
            <div class="form__grid">${cat.form.fields.map(field).join("")}</div>
            <button class="btn btn--primary btn--block" type="submit">${WA_SVG} ${esc(cat.form.submit)}</button>
            <p class="form__note">Your request opens in WhatsApp – no app or login needed.</p>
          </form>
        </div>
      </section>`;

    const faq = `
      <section class="section section--alt">
        <div class="wrap faq-wrap">
          <div class="section__head reveal"><h2>Frequently asked questions</h2></div>
          <div class="faq">
            ${cat.faq.map((f) => `<details class="reveal"><summary>${F(f.q)}${icon("plus")}</summary><p>${F(f.a)}</p></details>`).join("")}
          </div>
        </div>
      </section>`;

    const mapQ = encodeURIComponent(isSample ? `${town}, Kannur, Kerala` : `${name}, ${town}, Kannur`);
    const map = `
      <section class="map">
        <iframe title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${mapQ}&output=embed"></iframe>
      </section>`;

    const footer = `
      <footer class="footer">
        <div class="wrap footer__grid">
          <div>
            <a class="brand" href="#top"><span class="brand__mark">${esc(initials)}</span><span class="brand__name">${esc(name)}</span></a>
            <p class="muted">${esc(cat.label)} in ${esc(town)}, Kannur.</p>
          </div>
          <div><b>Visit</b><p class="muted">${esc(town)}, Kannur, Kerala<br>${esc(cat.hours)}</p></div>
          <div><b>Contact</b><p class="muted">${contactNum ? `<a href="tel:+${contactNum}">${esc(prettyPhone(contactNum))}</a><br>` : ""}<a href="#book">Send an enquiry</a></p></div>
        </div>
        <div class="wrap disclaimer">
          <p><b>This is a demo.</b> This concept website was created by ${esc(A.name || "us")} to show what a website for ${esc(name)} could look like. It is not the official website of ${esc(name)}. Photos are stock images; prices, reviews and text are samples and will be replaced with real details.</p>
          <p>Website concept by <a href="${agencyHref}" target="_blank" rel="noopener">${esc(A.name || "")}</a>${A.city ? ` · ${esc(A.city)}` : ""} · <a href="/">See more designs</a></p>
        </div>
      </footer>`;

    const mobileBar = contactNum ? `
      <div class="mbar">
        <a href="tel:+${contactNum}" class="mbar__btn">${icon("phone")} Call</a>
        <a href="${waLink(contactNum, fill(cat.form.intro))}" target="_blank" rel="noopener" class="mbar__btn mbar__btn--wa">${WA_SVG} WhatsApp</a>
      </div>` : "";

    const floatWa = contactNum ? `<a class="float-wa" href="${waLink(contactNum, fill(cat.form.intro))}" target="_blank" rel="noopener" aria-label="WhatsApp">${WA_SVG}</a>` : "";

    root.innerHTML = ribbon + header + `<main>${hero}${highlights}${services}${extra}${gallery}${about}${testimonials}${book}${faq}${map}</main>` + footer + mobileBar + floatWa + `<div class="lightbox" id="lightbox" hidden><button aria-label="Close">${icon("x")}</button><img alt=""></div>`;
    document.body.classList.add("site", `cat-${key}`);

    /* form → WhatsApp */
    const form = document.getElementById("bookform");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const missing = [...form.querySelectorAll("[required]")].filter((el) => !el.value.trim());
      if (missing.length) { missing[0].focus(); missing.forEach((m) => m.classList.add("err")); return; }
      const lines = [...form.querySelectorAll("input,select,textarea")].filter((el) => el.value.trim()).map((el) => `${el.name}: ${el.value.trim()}`);
      const msg = `${fill(cat.form.intro)}\n\n${lines.join("\n")}`;
      if (contactNum) window.open(waLink(contactNum, msg), "_blank", "noopener");
    });
    form.addEventListener("input", (e) => e.target.classList.remove("err"));

    /* "Enquire" on a service preselects it when possible */
    root.querySelectorAll("[data-pick]").forEach((a) => a.addEventListener("click", () => {
      const sel = form.querySelector("select");
      if (!sel) return;
      const want = a.dataset.pick.toLowerCase();
      const opt = [...sel.options].find((o) => want.includes(o.text.toLowerCase().split(" ")[0]) || o.text.toLowerCase().includes(want.split(" ")[0]));
      if (opt) sel.value = opt.value;
      const ta = form.querySelector("textarea");
      if (ta && !ta.value) ta.value = `Interested in: ${a.dataset.pick}`;
    }));

    /* mobile nav */
    const t = document.getElementById("navtoggle"), links = document.getElementById("navlinks");
    t.addEventListener("click", () => links.classList.toggle("open"));
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

    /* lightbox */
    const lb = document.getElementById("lightbox");
    root.querySelectorAll(".gallery__item").forEach((b) => b.addEventListener("click", () => { lb.querySelector("img").src = b.dataset.src; lb.hidden = false; }));
    lb.addEventListener("click", () => { lb.hidden = true; });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

    reveal();
  }

  /* ═════════════ SHOWCASE (home page) ═════════════ */
  function renderShowcase() {
    applyTheme({ accent: "#0f766e", accent2: "#dcf0ec", bg: "#f7f6f2", surface: "#ffffff", ink: "#1b1d1c", muted: "#646a67", line: "#e3e1da", heading: "Fraunces", body: "Inter", dark: false });
    document.title = `${A.name || "Studio"} – Website designs for local businesses`;
    const agencyWa = normPhone(A.whatsapp);
    const hi = `Hi ${A.owner || ""}, I'd like a website for my business.`;
    const cards = Object.entries(CATS).map(([k, c]) => `
      <a class="sc-card reveal" href="/${k}">
        <div class="sc-card__img"><img src="${c.hero.image.replace(/w=\d+/, "w=700")}" alt="" loading="lazy"></div>
        <div class="sc-card__body"><span class="sc-card__label">${esc(c.label)}</span><b>${esc(c.sampleName)}</b><span class="sc-card__go">View demo ${icon("arrow")}</span></div>
      </a>`).join("");

    root.innerHTML = `
      <header class="nav"><div class="wrap nav__in">
        <a class="brand" href="/"><span class="brand__mark">${esc((A.name || "S")[0])}</span><span class="brand__name">${esc(A.name || "Studio")}</span></a>
        ${agencyWa ? `<a class="btn btn--small btn--primary" href="${waLink(agencyWa, hi)}" target="_blank" rel="noopener">Talk to us</a>` : ""}
      </div></header>
      <main>
        <section class="sc-hero"><div class="wrap">
          <p class="eyebrow">${esc(A.city || "")} · Web design for local businesses</p>
          <h1>${esc(A.tagline || "Websites for local businesses")}</h1>
          <p class="lead">Fast, mobile-first websites with WhatsApp booking, Google Maps and your best work up front – so customers who search for you can actually find and contact you.</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#designs">See designs ${icon("arrow")}</a>
            ${agencyWa ? `<a class="btn btn--wa" href="${waLink(agencyWa, hi)}" target="_blank" rel="noopener">${WA_SVG} WhatsApp us</a>` : ""}
          </div>
          ${A.offer ? `<p class="sc-offer">${icon("check")} ${esc(A.offer)}</p>` : ""}
        </div></section>
        <section class="section" id="designs"><div class="wrap">
          <div class="section__head"><h2>Designs by industry</h2><p class="muted">Every design below is a live demo. Tap one to see how a website for your business could look.</p></div>
          <div class="sc-grid">${cards}</div>
        </div></section>
        <section class="section section--alt"><div class="wrap">
          <div class="section__head"><h2>How it works</h2></div>
          <div class="cards3">
            <div class="card3"><h3>1 · Free demo</h3><p>We prepare a demo with your business name so you can see it before paying anything.</p></div>
            <div class="card3"><h3>2 · Your details</h3><p>Send your photos, prices and services on WhatsApp. We do the rest.</p></div>
            <div class="card3"><h3>3 · Go live</h3><p>Domain, hosting, Google Maps and WhatsApp booking set up. You're online in days.</p></div>
          </div>
        </div></section>
      </main>
      <footer class="footer"><div class="wrap disclaimer"><p>© ${new Date().getFullYear()} ${esc(A.name || "")}${A.city ? ` · ${esc(A.city)}` : ""}${A.email ? ` · <a href="mailto:${esc(A.email)}">${esc(A.email)}</a>` : ""}. Demo designs use stock photos and sample content.</p></div></footer>`;
    document.body.classList.add("showcase");
    reveal();
  }

  /* ───────────── scroll reveal ───────────── */
  function reveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  const key = pickCategory();
  key ? renderSite(key) : renderShowcase();
})();
