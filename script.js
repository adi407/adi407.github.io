(function () {
  const P = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>',
    live: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',
  };

  const linkBtn = (href, label, icon, cls = "") =>
    `<a class="btn ${cls}" href="${esc(href)}" ${href.startsWith("#") || href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>${ICONS[icon] || ""}${esc(label)}</a>`;

  /* ---------- HERO ---------- */
  const initials = P.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  document.title = `${P.name} — ${P.role}`;
  $("brandMark").textContent = initials;
  $("brandName").textContent = P.handle || P.name;
  $("heroName").setAttribute("aria-label", P.name);
  $("heroName").innerHTML = P.name.split(" ").map((w, wi) =>
    `<span class="word" aria-hidden="true">${[...w].map((ch, ci) => `<span class="ch" style="--i:${wi * 6 + ci}">${esc(ch)}</span>`).join("")}</span>`).join(" ");
  const roles = P.roles && P.roles.length ? P.roles : [P.role];
  $("heroRole").innerHTML = `<span class="slash">//</span> <span class="rot" id="roleRot">${esc(roles[0])}</span>`;
  $("heroTagline").textContent = P.tagline;
  $("heroIntro").textContent = P.intro;
  $("availText").textContent = (P.available ? (P.availability || "Open to opportunities") : "Currently heads-down") + (P.location ? " · " + P.location : "");
  if (!P.available) $("availDot").style.background = "var(--ink-3)";

  const L = P.links;
  const mail = (subject, body) => "mailto:" + L.email + "?subject=" + encodeURIComponent(subject) + (body ? "&body=" + encodeURIComponent(body) : "");
  const social = () =>
    (L.linkedin ? linkBtn(L.linkedin, "LinkedIn", "linkedin") : "") +
    (L.github ? linkBtn(L.github, "GitHub", "github") : "") +
    (L.resume ? linkBtn(L.resume, "Resume", "resume") : "");
  $("heroLinks").innerHTML =
    linkBtn("#contact", "Work with me", "arrow", "primary") +
    linkBtn("#systems", "See my systems", "") + social();
  if (L.email) {
    $("contactHire").innerHTML = linkBtn(mail("Job opportunity for " + P.name), "Email me", "email", "primary") + social();
    $("contactProject").innerHTML = linkBtn(
      mail("Project enquiry: AI / automation",
        "Hi " + P.name.split(" ")[0] + ",\n\nWhat I'd like to automate or build:\n\nTools / systems we use today:\n\nRough timeline and budget:\n\nThanks,"),
      "Start a project", "email", "primary") + (L.linkedin ? linkBtn(L.linkedin, "Message on LinkedIn", "linkedin") : "");
    $("serviceCta").href = "#contact";
  } else {
    $("contactHire").innerHTML = social();
    $("contactProject").innerHTML = social();
  }

  /* ---------- ABOUT ---------- */
  if (P.about) {
    $("aboutText").innerHTML = P.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
    $("aboutFacts").innerHTML = P.about.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  } else $("about").remove();

  /* ---------- SERVICES ---------- */
  const SVC_ICONS = {
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
    flow: '<circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v3a3 3 0 0 0 3 3h6"/><path d="m13 12 3 3-3 3"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    wave: '<path d="M2 12h2M6 8v8M10 5v14M14 9v6M18 7v10M22 12h-2"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  };
  const sysName = Object.fromEntries(P.systems.map((s) => [s.id, s.name]));
  if (P.services && P.services.length) {
    $("serviceGrid").innerHTML = P.services.map((v) => `
      <div class="service">
        <div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SVC_ICONS[v.icon] || SVC_ICONS.box}</svg></div>
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.pitch)}</p>
        <ul>${v.deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        <div class="proof"><span>Proof:</span>${v.proof.filter((id) => sysName[id]).map((id) => `<a href="#sys-${id}">${esc(sysName[id])}</a>`).join("")}</div>
      </div>`).join("");
    $("process").innerHTML = (P.process || []).map(([t, d], i) => `
      <div class="step"><b>${String(i + 1).padStart(2, "0")}</b><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("");
  } else $("services").remove();
  $("footName").textContent = P.name;
  $("year").textContent = new Date().getFullYear();

  $("stats").innerHTML = P.stats.map((s) => `<div class="stat"><b data-count="${esc(s.value)}">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

  // terminal-style index of systems
  const statusCls = (s) => (/live|production|running/i.test(s) ? "live" : /pre/i.test(s) ? "pre" : "dev");
  const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);
  const termLines = [
    `<span class="p">$</span> ls systems/ --status`,
    ...P.systems.map((s) => `<a href="#sys-${s.id}">${esc(pad(s.id + "/", Math.max(...P.systems.map((x) => x.id.length)) + 3))}</a><span class="d">${esc(pad(s.kind.split("·")[0].trim(), 20))}</span>${statusCls(s.status) === "live" ? '<span class="g">● ' + esc(s.status.toLowerCase()) + "</span>" : esc(s.status.toLowerCase())}`),
    ``,
    `<span class="p">$</span> cat stack.txt | head -1`,
    `<span class="d">${esc(P.stack.flatMap((g) => g.items.filter((i) => i[1] === "core").map((i) => i[0])).join(" · "))}</span>`,
    ``,
    `<span class="p">$</span> <span class="caret"></span>`,
  ];
  $("termBody").innerHTML = termLines.join("\n"); // final state; replayed by the typing animation below

  /* ---------- SYSTEMS ---------- */
  const chips = (list) => list.map((t) => `<button class="chip" data-tech="${esc(t)}">${esc(t)}</button>`).join("");

  $("systemList").innerHTML = P.systems.map((s) => `
    <article class="system${s.featured ? " featured" : ""}" id="sys-${s.id}" data-tech="${esc(s.tech.join("|"))}">
      ${s.image ? `<div class="sys-image"><img src="${esc(s.image)}" alt="${esc(s.name)} preview" loading="lazy" /></div>` : ""}
      <div class="sys-top">
        <div class="sys-info">
          <div class="sys-meta">${s.featured ? '<span class="badge flagship">★ Flagship</span>' : ""}<span class="badge ${statusCls(s.status)}">${esc(s.status)}</span><span>${esc(s.kind)}</span><span>· ${esc(s.year)}</span></div>
          <h3>${esc(s.name)}</h3>
          <p class="sys-tagline">${esc(s.tagline)}</p>
          ${s.client ? `<p class="private-note" style="margin:-4px 0 12px">${esc(s.client)}</p>` : ""}
          <p class="sys-summary">${esc(s.summary)}</p>
          <div class="sys-links">
            ${s.live ? linkBtn(s.live, "Live site", "live", "primary btn-sm") : ""}
            ${s.repo ? linkBtn(s.repo, "Source", "github", "btn-sm") : ""}
            ${s.private ? '<span class="private-note">Private codebase · walkthrough on request</span>' : ""}
          </div>
        </div>
        <div class="sys-arch" aria-label="Architecture of ${esc(s.name)}">
          <div class="arch-label">Architecture</div>
          ${s.flow.map((row, ri) =>
            `<div class="arch-row" style="--i:${ri * 2}">${row.map((n) => `<span class="node">${esc(n)}</span>`).join("")}</div>` +
            (ri < s.flow.length - 1 ? `<div class="arrow" style="--i:${ri * 2 + 1}"><i></i></div>` : "")).join("")}
        </div>
      </div>
      <div class="sys-metrics">${s.metrics.map((m) => `<div class="metric"><b data-count="${esc(m.value)}">${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>
      <details class="sys-bottom">
        <summary>What's inside · ${s.highlights.length} highlights · ${s.tech.length} technologies</summary>
        <div class="sys-detail">
          <div><p class="sub">Highlights</p><ul>${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div>
          <div><p class="sub">Built with</p><div class="chips">${chips(s.tech)}</div></div>
        </div>
      </details>
    </article>`).join("");

  /* ---------- STACK ---------- */
  const usage = {};
  P.systems.forEach((s) => s.tech.forEach((t) => (usage[t] = (usage[t] || 0) + 1)));
  P.contributions.forEach((c) => c.tech.forEach((t) => (usage[t] = usage[t] || 0)));
  $("stackGrid").innerHTML = P.stack.map((g) => `
    <div class="stack-card">
      <h3>${esc(g.group)}</h3>
      <div class="chips">${g.items.map(([name, lv]) => `
        <button class="tech" data-tech="${esc(name)}" title="${esc(lv)}"><i class="lv ${lv}"></i>${esc(name)}${usage[name] ? `<small>×${usage[name]}</small>` : ""}</button>`).join("")}
      </div>
    </div>`).join("");

  /* ---------- MORE (contributions / experience / education) ---------- */
  let more = "";
  if (P.contributions.length) {
    more += `<h3 class="subhead">Contributions & smaller work</h3><div class="mini-grid">${P.contributions.map((c) => `
      <div class="mini"><h3>${esc(c.name)}</h3><p>${esc(c.note)}</p><div class="chips">${chips(c.tech)}</div>
      <div class="sys-links">${c.live ? linkBtn(c.live, "Live", "live", "btn-sm") : ""}${c.repo ? linkBtn(c.repo, "Source", "github", "btn-sm") : ""}</div></div>`).join("")}</div>`;
  }
  if (more) {
    $("more").innerHTML = `<div class="section-head"><p class="kicker">06 / More</p><h2>Smaller work & contributions</h2></div>` + more;
  } else {
    $("more").remove();
  }

  /* ---------- EXPERIENCE / EDUCATION ---------- */
  if (P.experience.length) {
    $("xpList").innerHTML = P.experience.map((e, i) => `
      <div class="tl${i === 0 ? " current" : ""}">
        <div class="when">${esc(e.period)}${e.place ? `<span>${esc(e.place)}</span>` : ""}</div>
        <div><h3>${esc(e.role)}</h3><p class="org">${esc(e.org)}</p>
        ${e.points && e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>
      </div>`).join("");
    const edu = (P.education || []).map((e) => `
      <div class="edu"><p class="sub">Education</p><h3>${esc(e.degree)}</h3><p>${esc(e.org)} · ${esc(e.period)}</p></div>`).join("");
    const certs = (P.certifications || []).map((c) => `
      <div class="edu"><p class="sub">Certification${c.status ? " · " + esc(c.status) : ""}</p><h3>${esc(c.name)}</h3><p>${esc(c.org)}</p></div>`).join("");
    $("eduGrid").innerHTML = edu + certs;
  } else {
    $("experience").remove();
  }

  /* ---------- CATEGORY TABS ---------- */
  const CATS = { all: "All", ai: "AI & ML", saas: "SaaS platforms", automation: "Automation", infra: "Infrastructure" };
  const catCount = (c) => (c === "all" ? P.systems.length : P.systems.filter((s) => (s.categories || []).includes(c)).length);
  $("catTabs").innerHTML = Object.entries(CATS)
    .filter(([k]) => catCount(k) > 0)
    .map(([k, label]) => `<button role="tab" class="cat${k === "all" ? " on" : ""}" data-cat="${k}" aria-selected="${k === "all"}">${esc(label)} <small>${catCount(k)}</small></button>`)
    .join("");
  let cat = "all";
  $("catTabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    cat = b.dataset.cat;
    document.querySelectorAll(".cat").forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-selected", x === b); });
    active = null;
    applyFilters();
  });

  /* ---------- TECH FILTER ---------- */
  let active = null;
  function setFilter(tech) {
    active = active === tech ? null : tech;
    if (active) { cat = "all"; document.querySelectorAll(".cat").forEach((x) => { const on = x.dataset.cat === "all"; x.classList.toggle("on", on); x.setAttribute("aria-selected", on); }); }
    applyFilters();
  }
  function applyFilters() {
    const byId = Object.fromEntries(P.systems.map((s) => [s.id, s]));
    document.querySelectorAll(".system").forEach((el) => {
      const s = byId[el.id.slice(4)];
      const okCat = cat === "all" || (s.categories || []).includes(cat);
      const okTech = !active || el.dataset.tech.split("|").includes(active);
      const show = okCat && okTech;
      const wasHidden = el.classList.contains("dim");
      el.classList.toggle("dim", !show);
      if (show && wasHidden) { el.classList.add("in"); el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); }
    });
    document.querySelectorAll("[data-tech]").forEach((el) => {
      if (!el.classList.contains("system")) el.classList.toggle("on", el.dataset.tech === active);
    });
    $("filterBar").hidden = !active;
    if (active) {
      const n = document.querySelectorAll(".system:not(.dim)").length;
      $("filterName").textContent = active + (n ? "" : " — none of the main systems; see Contributions below");
    }
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tech]");
    if (!b) return;
    const fromStack = !!b.closest("#stack");
    setFilter(b.dataset.tech);
    if (fromStack && active) $("systems").scrollIntoView();
  });
  $("clearFilter").addEventListener("click", () => setFilter(active));

  /* ---------- THEME ---------- */
  $("themeBtn").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  /* =====================================================================
   * MOTION — everything below is decoration. With reduced motion (or no
   * IntersectionObserver) the page simply shows its final state.
   * ===================================================================== */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canObserve = "IntersectionObserver" in window;
  document.documentElement.classList.add("js");

  /* Role rotator */
  if (!reduce && roles.length > 1) {
    let r = 0;
    const rot = $("roleRot");
    setInterval(() => {
      rot.classList.add("out");
      setTimeout(() => { r = (r + 1) % roles.length; rot.textContent = roles[r]; rot.classList.remove("out"); }, 350);
    }, 2800);
  }

  /* Terminal typing */
  (function typeTerminal() {
    const body = $("termBody");
    if (reduce) return;
    body.innerHTML = "";
    const PROMPT = '<span class="p">$</span> ';
    let li = 0;
    const caret = '<span class="caret"></span>';
    let done = "";
    function next() {
      if (li >= termLines.length) { body.innerHTML = termLines.join("\n"); return; }
      const line = termLines[li];
      if (line.startsWith(PROMPT) && !line.includes("caret")) {
        const cmd = line.slice(PROMPT.length);
        let c = 0;
        (function typeChar() {
          body.innerHTML = done + PROMPT + esc(cmd.slice(0, c)) + caret;
          if (c++ < cmd.length) setTimeout(typeChar, 28 + Math.random() * 40);
          else { done += line + "\n"; li++; setTimeout(next, 260); }
        })();
      } else {
        done += line + (li < termLines.length - 1 ? "\n" : "");
        body.innerHTML = done + caret;
        li++;
        setTimeout(next, line ? 70 : 140);
      }
    }
    setTimeout(next, 700);
  })();

  /* Count-up numbers ("217", "7.7%", "1.85s", "99.3%"…). Non-numeric values are left alone. */
  function countUp(el) {
    const raw = el.dataset.count;
    const m = raw.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m || reduce) return;
    const target = parseFloat(m[2].replace(",", ""));
    const decimals = (m[2].split(".")[1] || "").length;
    const t0 = performance.now(), dur = 1300;
    (function frame(t) {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = m[1] + (target * e).toFixed(decimals) + m[3];
      if (k < 1) requestAnimationFrame(frame); else el.textContent = raw;
    })(t0);
  }

  /* Scroll reveal (with stagger within each group) */
  const groups = [
    ".section-head > *", ".cat-tabs", ".system", ".stack-card", ".mini", ".tl", ".stat", ".contact > *",
    ".about-text p", ".facts > div", ".service", ".step", ".service-cta", ".edu",
  ];
  const revealEls = [];
  groups.forEach((sel) => document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--d", (i % 6) * 70 + "ms");
    revealEls.push(el);
  }));
  const onIn = (el) => {
    el.classList.add("in");
    el.querySelectorAll("[data-count]").forEach(countUp);
    if (el.matches("[data-count]")) countUp(el);
  };
  if (reduce || !canObserve) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { onIn(e.target); io.unobserve(e.target); }
    }), { threshold: 0, rootMargin: "0px 0px -10% 0px" });
    revealEls.forEach((el) => io.observe(el));
  }

  /* Tech marquee — every technology in the stack, looping */
  const allTech = P.stack.flatMap((g) => g.items.map((i) => i[0]));
  const strip = allTech.map((t) => `<span>${esc(t)}</span>`).join("");
  $("marqueeTrack").innerHTML = strip + strip;
  $("marqueeTrack").style.setProperty("--dur", allTech.length * 2.2 + "s");

  /* Cursor spotlight on cards */
  if (!reduce && matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest(".system, .stack-card, .mini, .terminal, .service");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });
  }

  /* Scroll progress, active nav link, back-to-top */
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  let ticking = false;
  function onScroll() {
    const h = document.documentElement;
    const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    $("progress").style.transform = `scaleX(${p})`;
    $("toTop").classList.toggle("show", h.scrollTop > 900);
    document.querySelector(".nav").classList.toggle("scrolled", h.scrollTop > 10);
    let current = null;
    sections.forEach((s) => { if (s.getBoundingClientRect().top < 140) current = s; });
    navLinks.forEach((a) => a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id));
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
})();
