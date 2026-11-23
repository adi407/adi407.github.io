(function () {
  "use strict";
  const P = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* Reduced motion — read live so a settings change applies without reload */
  const motionMQ = matchMedia("(prefers-reduced-motion: reduce)");
  const reduced = () => motionMQ.matches;

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>',
    live: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
  };

  const isExternal = (href) => /^https?:/i.test(href);
  const linkBtn = (href, label, icon, cls = "", extraLabel = "") =>
    `<a class="btn ${cls}" href="${esc(href)}"${isExternal(href) ? ' target="_blank" rel="noopener"' : ""}${extraLabel ? ` aria-label="${esc(extraLabel)}"` : ""}>${ICONS[icon] || ""}${esc(label)}${isExternal(href) ? '<span class="sr-only"> (opens in a new tab)</span>' : ""}</a>`;

  /* =====================================================================
   * HERO (static markup exists; JS keeps it in sync with data.js)
   * ===================================================================== */
  const initials = P.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  document.title = `${P.name} — ${P.role}`;
  $("brandMark").textContent = initials;
  $("brandName").textContent = P.handle || P.name;
  $("heroName").textContent = P.name;
  const roles = P.roles && P.roles.length ? P.roles : [P.role];
  $("roleRot").textContent = P.role;
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
  $("heroLinks").innerHTML = linkBtn("#contact", "Work with me", "arrow", "primary") + linkBtn("#systems", "See my systems", "") + social();

  if (L.email) {
    $("contactHire").innerHTML = linkBtn(mail("Job opportunity for " + P.name), "Email me", "email", "primary") + social();
    $("contactProject").innerHTML = linkBtn(
      mail("Project enquiry: AI / automation",
        "Hi " + P.name.split(" ")[0] + ",\n\nWhat I'd like to automate or build:\n\nTools / systems we use today:\n\nRough timeline and budget:\n\nThanks,"),
      "Start a project", "email", "primary") + (L.linkedin ? linkBtn(L.linkedin, "Message on LinkedIn", "linkedin") : "");
    $("emailAddr").textContent = L.email;
    $("emailAddr").href = "mailto:" + L.email;
  } else {
    $("contactHire").innerHTML = social();
    $("contactProject").innerHTML = social();
    $("emailCopy").remove();
  }
  $("footName").textContent = P.name;
  $("year").textContent = new Date().getFullYear();

  $("stats").innerHTML = P.stats.map((s) => `<div class="stat"><b data-count="${esc(s.value)}">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

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
      <article class="service">
        <div class="svc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SVC_ICONS[v.icon] || SVC_ICONS.box}</svg></div>
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.pitch)}</p>
        <ul>${v.deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        <p class="proof"><span>Proof:</span>${v.proof.filter((id) => sysName[id]).map((id) => `<a href="#sys-${id}">${esc(sysName[id])}</a>`).join("")}</p>
      </article>`).join("");
    $("process").innerHTML = (P.process || []).map(([t, d], i) => `
      <li class="step"><b aria-hidden="true">${String(i + 1).padStart(2, "0")}</b><h3 class="step-title">${esc(t)}</h3><p>${esc(d)}</p></li>`).join("");
  } else $("services").remove();

  /* ---------- TERMINAL INDEX ---------- */
  const statusCls = (s) => (/live|production|running/i.test(s) ? "live" : /pre/i.test(s) ? "pre" : "dev");
  const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);
  const idWidth = Math.max(...P.systems.map((x) => x.id.length)) + 3;
  const termLines = [
    `<span class="p">$</span> ls systems/ --status`,
    ...P.systems.map((s) => `<a href="#sys-${s.id}">${esc(pad(s.id + "/", idWidth))}</a><span class="d">${esc(pad(s.kind.split("·")[0].trim(), 20))}</span>${statusCls(s.status) === "live" ? '<span class="g">● ' + esc(s.status.toLowerCase()) + "</span>" : esc(s.status.toLowerCase())}`),
    ``,
    `<span class="p">$</span> cat stack.txt | head -1`,
    `<span class="d">${esc(P.stack.flatMap((g) => g.items.filter((i) => i[1] === "core").map((i) => i[0])).join(" · "))}</span>`,
    ``,
    `<span class="p">$</span> <span class="caret"></span>`,
  ];
  $("termBody").innerHTML = termLines.join("\n");

  /* =====================================================================
   * SYSTEM CARDS — summary up front, details behind <details> disclosures
   * ===================================================================== */
  const techBtn = (t, cls = "chip") => `<button type="button" class="${cls}" data-tech="${esc(t)}" aria-pressed="false">${esc(t)}</button>`;
  const CHEVRON = '<svg class="chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  $("systemList").innerHTML = P.systems.map((s) => {
    const n = s.notes || {};
    const hasNotes = n.deploy || (n.tradeoffs && n.tradeoffs.length);
    return `
    <article class="system${s.featured ? " featured" : ""}" id="sys-${s.id}" data-tech="${esc(s.tech.join("|"))}" aria-labelledby="sys-${s.id}-h" style="view-transition-name: sys-${s.id}">
      ${s.image ? `<div class="sys-image"><img src="${esc(s.image)}" alt="${esc(s.name)} title slide" loading="lazy" decoding="async" width="960" height="540" /></div>` : ""}
      <div class="sys-top">
        <div class="sys-info">
          <div class="sys-meta">${s.featured ? '<span class="badge flagship">★ Flagship</span>' : ""}<span class="badge ${statusCls(s.status)}">${esc(s.status)}</span><span>${esc(s.kind)}</span><span>· ${esc(s.year)}</span></div>
          <h3 id="sys-${s.id}-h">${esc(s.name)}</h3>
          <p class="sys-tagline">${esc(s.tagline)}</p>
          ${s.client ? `<p class="private-note client-note">${esc(s.client)}</p>` : ""}
          <p class="sys-summary">${esc(s.summary)}</p>
          <div class="sys-links">
            ${s.live ? linkBtn(s.live, "Live site", "live", "primary btn-sm", `${s.name} live site`) : ""}
            ${s.repo ? linkBtn(s.repo, "Source", "github", "btn-sm", `${s.name} source code on GitHub`) : ""}
            ${s.deepDive ? linkBtn(s.deepDive, "Deep dive", "doc", "btn-sm", `${s.name} deep dive`) : ""}
            ${s.private ? '<span class="private-note">Private codebase · walkthrough on request</span>' : ""}
          </div>
        </div>
        <figure class="sys-arch" aria-label="Architecture of ${esc(s.name)}">
          <figcaption class="arch-label">Architecture</figcaption>
          ${s.flow.map((row, ri) =>
            `<div class="arch-row" style="--i:${ri * 2}">${row.map((x) => `<span class="node">${esc(x)}</span>`).join("")}</div>` +
            (ri < s.flow.length - 1 ? `<div class="arrow" style="--i:${ri * 2 + 1}" aria-hidden="true"><i></i></div>` : "")).join("")}
        </figure>
      </div>
      <dl class="sys-metrics">${s.metrics.map((m) => `<div class="metric"><dt>${esc(m.label)}</dt><dd data-count="${esc(m.value)}">${esc(m.value)}</dd></div>`).join("")}</dl>
      <div class="disclosures">
        ${hasNotes ? `
        <details class="disclose">
          <summary><span>Architecture &amp; trade-offs</span><small>${n.tradeoffs ? n.tradeoffs.length : 0} decisions</small>${CHEVRON}</summary>
          <div class="disclose-body">
            ${n.deploy ? `<div class="note-block"><p class="sub">Deployment &amp; scale</p><p>${esc(n.deploy)}</p></div>` : ""}
            ${n.tradeoffs && n.tradeoffs.length ? `<div class="note-block"><p class="sub">Design decisions &amp; trade-offs</p><ul class="tradeoffs">${n.tradeoffs.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
          </div>
        </details>` : ""}
        <details class="disclose">
          <summary><span>Highlights &amp; stack</span><small>${s.highlights.length} highlights · ${s.tech.length} technologies</small>${CHEVRON}</summary>
          <div class="disclose-body sys-detail">
            <div><p class="sub">Highlights</p><ul>${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div>
            <div><p class="sub">Built with <span class="hint">(select to filter)</span></p><div class="chips">${s.tech.map((t) => techBtn(t)).join("")}</div></div>
          </div>
        </details>
      </div>
    </article>`;
  }).join("");

  /* ---------- STACK ---------- */
  const usage = {};
  P.systems.forEach((s) => s.tech.forEach((t) => (usage[t] = (usage[t] || 0) + 1)));
  const LEVEL = { core: "Core", working: "Working", exposure: "Exposure" };
  $("stackGrid").innerHTML = P.stack.map((g) => `
    <div class="stack-card">
      <h3>${esc(g.group)}</h3>
      <div class="chips" role="group" aria-label="${esc(g.group)}">${g.items.map(([name, lv]) => {
        const u = usage[name] || 0;
        const side = !u && P.contributions.some((c) => c.tech.includes(name));
        const where = u ? `used in ${u} system${u > 1 ? "s" : ""}` : side ? "used in smaller work" : "from professional work";
        const tag = u ? `×${u}` : side ? "more" : "work";
        return `<button type="button" class="tech lv-${lv}" data-tech="${esc(name)}" aria-pressed="false" aria-label="${esc(`${name}, ${LEVEL[lv] || lv}, ${where}`)}" title="${esc(`${LEVEL[lv] || lv} · ${where}`)}"><i class="lv ${lv}" aria-hidden="true"></i>${esc(name)}<small aria-hidden="true">${tag}</small></button>`;
      }).join("")}
      </div>
    </div>`).join("");

  /* ---------- SMALLER WORK ---------- */
  if (P.contributions.length) {
    $("more").setAttribute("aria-labelledby", "more-h");
    $("more").innerHTML = `<div class="section-head"><p class="kicker">06 / More</p><h2 id="more-h">Smaller work & contributions</h2></div>
      <div class="mini-grid">${P.contributions.map((c) => `
      <article class="mini"><h3>${esc(c.name)}</h3><p>${esc(c.note)}</p><div class="chips">${c.tech.map((t) => techBtn(t)).join("")}</div>
      <div class="sys-links">${c.live ? linkBtn(c.live, "Live", "live", "btn-sm", `${c.name} live site`) : ""}${c.repo ? linkBtn(c.repo, "Source", "github", "btn-sm", `${c.name} source code`) : ""}</div></article>`).join("")}</div>`;
  } else $("more").remove();

  /* ---------- EXPERIENCE / EDUCATION ---------- */
  if (P.experience.length) {
    $("xpList").innerHTML = P.experience.map((e, i) => `
      <li class="tl${i === 0 ? " current" : ""}">
        <div class="when">${esc(e.period)}${e.place ? `<span>${esc(e.place)}</span>` : ""}</div>
        <div><h3>${esc(e.role)}</h3><p class="org">${esc(e.org)}</p>
        ${e.points && e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>
      </li>`).join("");
    const edu = (P.education || []).map((e) => `
      <div class="edu"><p class="sub">Education</p><h3>${esc(e.degree)}</h3><p>${esc(e.org)} · ${esc(e.period)}</p></div>`).join("");
    const certs = (P.certifications || []).map((c) => `
      <div class="edu"><p class="sub">Certification${c.status ? " · " + esc(c.status) : ""}</p><h3>${esc(c.name)}</h3><p>${esc(c.org)}</p></div>`).join("");
    $("eduGrid").innerHTML = edu + certs;
  } else $("experience").remove();

  /* =====================================================================
   * FILTERS — category OR technology, live count, URL (?cat= / ?tech=) sync
   * ===================================================================== */
  const CATS = { all: "All", ai: "AI & ML", saas: "SaaS platforms", automation: "Automation", infra: "Infrastructure" };
  const byId = Object.fromEntries(P.systems.map((s) => [s.id, s]));
  const total = P.systems.length;
  const catCount = (c) => (c === "all" ? total : P.systems.filter((s) => (s.categories || []).includes(c)).length);
  $("catTabs").innerHTML = Object.entries(CATS)
    .filter(([k]) => catCount(k) > 0)
    .map(([k, label]) => `<button type="button" class="cat" data-cat="${k}" aria-pressed="${k === "all"}">${esc(label)} <small aria-hidden="true">${catCount(k)}</small><span class="sr-only">, ${catCount(k)} systems</span></button>`)
    .join("");

  const state = { cat: "all", tech: null };
  const validTech = new Set(P.systems.flatMap((s) => s.tech).concat(P.stack.flatMap((g) => g.items.map((i) => i[0]))).concat(P.contributions.flatMap((c) => c.tech)));

  function matches(s) {
    if (state.tech) return s.tech.includes(state.tech);
    return state.cat === "all" || (s.categories || []).includes(state.cat);
  }

  function render() {
    let shown = 0;
    $$(".system").forEach((el) => {
      const ok = matches(byId[el.id.slice(4)]);
      if (ok) { shown++; el.classList.add("in"); }
      el.hidden = !ok;
    });
    $$("button.cat").forEach((b) => b.setAttribute("aria-pressed", String(!state.tech && b.dataset.cat === state.cat)));
    $$("button[data-tech]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tech === state.tech)));

    const filtered = state.tech || state.cat !== "all";
    let msg;
    if (state.tech) msg = `Showing <strong>${shown}</strong> of ${total} systems using <strong>${esc(state.tech)}</strong>`;
    else if (state.cat !== "all") msg = `Showing <strong>${shown}</strong> of ${total} systems in <strong>${esc(CATS[state.cat])}</strong>`;
    else msg = `Showing all <strong>${total}</strong> systems`;
    $("filterText").innerHTML = msg;
    $("clearFilter").hidden = !filtered;
    $("filterStatus").classList.toggle("active", filtered);

    const empty = $("emptyState");
    empty.hidden = shown > 0;
    if (!shown) {
      const inMore = state.tech && P.contributions.some((c) => c.tech.includes(state.tech));
      empty.innerHTML = `None of the systems shown here use <strong>${esc(state.tech || "")}</strong>. ` +
        (inMore ? `It appears in <a href="#more">smaller work</a>.` : `It comes from my professional work. See <a href="#experience">Experience</a>.`);
    }
  }

  function syncURL() {
    const url = new URL(location.href);
    url.searchParams.delete("cat");
    url.searchParams.delete("tech");
    if (state.tech) url.searchParams.set("tech", state.tech);
    else if (state.cat !== "all") url.searchParams.set("cat", state.cat);
    // replaceState: filters never add history entries, so Back still leaves the page normally
    history.replaceState(history.state, "", url);
  }

  function update(next, { scroll = false } = {}) {
    Object.assign(state, next);
    const run = () => render();
    if (document.startViewTransition && !reduced()) {
      const vt = document.startViewTransition(run);
      // A newer click skips the running transition; that's expected, not an error
      vt.ready.catch(() => {});
      vt.finished.catch(() => {});
    } else run();
    syncURL();
    if (scroll) $("systems").scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
  }

  $("catTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-cat]");
    if (b) update({ cat: b.dataset.cat, tech: null });
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tech]");
    if (!b) return;
    const t = b.dataset.tech;
    const turningOn = state.tech !== t;
    update({ tech: turningOn ? t : null, cat: "all" }, { scroll: turningOn && !b.closest("#systems") });
  });
  $("clearFilter").addEventListener("click", () => { update({ cat: "all", tech: null }); $("catTabs").querySelector("button").focus(); });

  // Initial state from the URL (e.g. ?tech=Qdrant or ?cat=ai)
  (function initFromURL() {
    const q = new URLSearchParams(location.search);
    const t = q.get("tech"), c = q.get("cat");
    if (t && validTech.has(t)) state.tech = t;
    else if (c && CATS[c] && catCount(c)) state.cat = c;
    render();
    if ((state.tech || state.cat !== "all") && !location.hash) {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      const jump = () => $("systems").scrollIntoView({ behavior: "auto", block: "start" });
      if (document.readyState === "complete") jump(); else addEventListener("load", jump, { once: true });
    }
  })();

  /* =====================================================================
   * COPY EMAIL — clipboard API with a selection fallback and live status
   * ===================================================================== */
  if ($("copyEmail")) {
    const btn = $("copyEmail"), status = $("copyStatus"), label = btn.querySelector(".copy-label");
    let timer;
    const setStatus = (ok, text) => {
      btn.classList.toggle("copied", ok);
      label.textContent = ok ? "Copied" : "Copy email";
      status.textContent = text;
      clearTimeout(timer);
      timer = setTimeout(() => { btn.classList.remove("copied"); label.textContent = "Copy email"; status.textContent = ""; }, 2500);
    };
    btn.addEventListener("click", async () => {
      const email = L.email;
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error("no clipboard");
        await navigator.clipboard.writeText(email);
        setStatus(true, "Email address copied to clipboard.");
      } catch {
        // Fallback: select the address so the visitor can press Ctrl/⌘+C
        const range = document.createRange();
        range.selectNodeContents($("emailAddr"));
        const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
        let ok = false;
        try { ok = document.execCommand("copy"); } catch { ok = false; }
        if (ok) sel.removeAllRanges();
        setStatus(ok, ok ? "Email address copied to clipboard." : "Couldn't copy automatically. The address is selected; press Ctrl+C (⌘C on Mac).");
      }
    });
  }

  /* ---------- THEME ---------- */
  $("themeBtn").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    $("themeBtn").setAttribute("aria-label", `Switch to ${dark ? "dark" : "light"} theme`);
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  /* =====================================================================
   * MOTION — decoration only. Every effect checks reduced motion; with it on
   * (or without IntersectionObserver) the page shows its final state.
   * ===================================================================== */
  const canObserve = "IntersectionObserver" in window;

  /* Role rotator */
  if (roles.length > 1) {
    let r = -1;
    const rot = $("roleRot");
    setInterval(() => {
      if (reduced() || document.hidden) return;
      rot.classList.add("out");
      setTimeout(() => { r = (r + 1) % roles.length; rot.textContent = roles[r]; rot.classList.remove("out"); }, 200);
    }, 3200);
  }

  /* Terminal typing (final text is already in the DOM for no-JS / reduced motion) */
  (function typeTerminal() {
    const body = $("termBody");
    if (reduced()) return;
    body.setAttribute("aria-busy", "true");
    body.innerHTML = "";
    const PROMPT = '<span class="p">$</span> ';
    const caret = '<span class="caret"></span>';
    let li = 0, done = "";
    const finish = () => { body.innerHTML = termLines.join("\n"); body.removeAttribute("aria-busy"); };
    function next() {
      if (reduced() || li >= termLines.length) return finish();
      const line = termLines[li];
      if (line.startsWith(PROMPT) && !line.includes("caret")) {
        const cmd = line.slice(PROMPT.length);
        let c = 0;
        (function typeChar() {
          body.innerHTML = done + PROMPT + esc(cmd.slice(0, c)) + caret;
          if (c++ < cmd.length) setTimeout(typeChar, 22 + Math.random() * 30);
          else { done += line + "\n"; li++; setTimeout(next, 180); }
        })();
      } else {
        done += line + (li < termLines.length - 1 ? "\n" : "");
        body.innerHTML = done + caret;
        li++;
        setTimeout(next, line ? 45 : 90);
      }
    }
    setTimeout(next, 400);
  })();

  /* Count-up numbers ("217", "7.7%", "8+"…). Non-numeric values are left alone. */
  function countUp(el) {
    const raw = el.dataset.count;
    const m = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!m || reduced()) return;
    const target = parseFloat(m[2]);
    const decimals = (m[2].split(".")[1] || "").length;
    const t0 = performance.now(), dur = 700;
    (function frame(t) {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = m[1] + (target * e).toFixed(decimals) + m[3];
      if (k < 1) requestAnimationFrame(frame); else el.textContent = raw;
    })(t0);
  }

  /* Scroll reveal with a short stagger within each group */
  const groups = [
    ".section-head > *", ".filters", ".system", ".stack-card", ".mini", ".tl", ".stat", ".contact > *",
    ".about-text p", ".facts > div", ".service", ".step", ".service-cta", ".edu",
  ];
  const revealEls = [];
  groups.forEach((sel) => $$(sel).forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--d", (i % 4) * 40 + "ms");
    revealEls.push(el);
  }));
  const onIn = (el) => {
    el.classList.add("in");
    $$("[data-count]", el).forEach(countUp);
    if (el.matches("[data-count]")) countUp(el);
  };
  if (reduced() || !canObserve) revealEls.forEach((el) => el.classList.add("in"));
  else {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { onIn(e.target); io.unobserve(e.target); }
    }), { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  }
  // Anything revealed by a hash jump (e.g. #sys-…) shouldn't wait for the observer
  addEventListener("hashchange", () => { const t = document.querySelector(location.hash); if (t) $$(".reveal", t).concat(t.classList.contains("reveal") ? [t] : []).forEach((el) => el.classList.add("in")); });

  /* Tech marquee */
  const allTech = P.stack.flatMap((g) => g.items.map((i) => i[0]));
  const strip = allTech.map((t) => `<span>${esc(t)}</span>`).join("");
  $("marqueeTrack").innerHTML = strip + strip;
  $("marqueeTrack").style.setProperty("--dur", allTech.length * 2.2 + "s");

  /* Cursor spotlight — one rAF-batched write per frame */
  if (matchMedia("(hover: hover)").matches) {
    let pending = null;
    document.addEventListener("pointermove", (e) => {
      if (reduced()) return;
      const card = e.target.closest(".system, .stack-card, .mini, .terminal, .service");
      if (!card) return;
      if (!pending) requestAnimationFrame(() => {
        const { card: c, x, y } = pending; pending = null;
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", x - r.left + "px");
        c.style.setProperty("--my", y - r.top + "px");
      });
      pending = { card, x: e.clientX, y: e.clientY };
    }, { passive: true });
  }

  /* Active section in the nav — IntersectionObserver, no per-scroll layout reads */
  const navLinks = $$(".nav-links a");
  if (canObserve) {
    const linkFor = Object.fromEntries(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const navIO = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => { a.classList.remove("active"); a.removeAttribute("aria-current"); });
      const a = linkFor[e.target.id];
      if (a) { a.classList.add("active"); a.setAttribute("aria-current", "location"); }
    }), { rootMargin: "-45% 0px -50% 0px" });
    navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean).forEach((s) => navIO.observe(s));
  }

  /* Scroll progress (CSS scroll-timeline when supported), nav shadow, back-to-top */
  const cssProgress = CSS.supports && CSS.supports("animation-timeline: scroll()");
  let ticking = false;
  function onScroll() {
    const h = document.documentElement, y = h.scrollTop;
    if (!cssProgress || reduced()) $("progress").style.transform = `scaleX(${y / Math.max(1, h.scrollHeight - h.clientHeight)})`;
    $("toTop").classList.toggle("show", y > 900);
    document.querySelector(".nav").classList.toggle("scrolled", y > 10);
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
})();
