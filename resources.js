(() => {
  const detectBase = () => {
    // يحاول يلتقط base من سكربت Vite المبني: /math-grade3/assets/...
    const mod = document.querySelector('script[type="module"][src*="/assets/"]');
    const src = mod?.getAttribute("src");
    if (src && src.includes("/assets/")) return src.split("/assets/")[0] + "/";

    // أو من الأيقونة: /math-grade3/vite.svg
    const icon = document.querySelector('link[rel="icon"]');
    const href = icon?.getAttribute("href");
    if (href && href.startsWith("/") && href.includes("/")) {
      const parts = href.split("/");
      parts.pop();
      return parts.join("/") + "/";
    }

    return "/";
  };

  const BASE = detectBase();

  const css = `
#fhResFab{
  position:fixed; left:16px; bottom:16px; z-index:2147483000;
  display:flex; align-items:center; gap:10px;
  background:linear-gradient(135deg,#0b6b4f,#0f8a67);
  color:#fff; border:1px solid rgba(255,255,255,.25);
  padding:12px 14px; border-radius:999px;
  box-shadow:0 18px 45px rgba(0,0,0,.18);
  cursor:pointer; user-select:none;
  font-family:system-ui,"Tajawal",Arial,sans-serif; font-weight:900;
}
#fhResFab:hover{ filter:brightness(1.03); }
#fhResFab .dot{
  width:10px; height:10px; border-radius:50%;
  background:rgba(255,255,255,.9);
  box-shadow:0 0 0 4px rgba(255,255,255,.18);
}
#fhResOverlay{
  position:fixed; inset:0; z-index:2147483001;
  background:rgba(0,0,0,.45); backdrop-filter:blur(6px);
  display:none; align-items:center; justify-content:center;
  padding:16px;
}
#fhResModal{
  width:min(980px,100%); max-height:min(82vh,820px);
  background:rgba(255,255,255,.92);
  border:1px solid #e5e7eb; border-radius:20px;
  box-shadow:0 18px 45px rgba(0,0,0,.18);
  overflow:hidden; direction:rtl;
  font-family:system-ui,"Tajawal",Arial,sans-serif;
}
#fhResHeader{
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  padding:14px 16px; background:rgba(255,255,255,.85);
  border-bottom:1px solid #e5e7eb;
}
#fhResTitle{ font-weight:900; font-size:16px; display:flex; align-items:center; gap:10px; }
#fhResBadge{
  font-size:12px; font-weight:900;
  color:#0b6b4f; background:#ecfdf5;
  border:1px solid #bbf7d0;
  padding:4px 10px; border-radius:999px;
}
#fhResClose{
  border:1px solid #e5e7eb; background:#fff; color:#111827;
  border-radius:12px; padding:8px 10px; cursor:pointer; font-weight:900;
}
#fhResTools{
  padding:12px 16px 6px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;
}
#fhResSearch{
  flex:1 1 280px; border:1px solid #e5e7eb; border-radius:14px;
  padding:10px 12px; outline:none; font-weight:800; background:#fff;
}
#fhResHint{ font-size:12px; opacity:.75; font-weight:800; }
#fhResBody{
  padding:6px 16px 16px; overflow:auto;
  max-height: calc(min(82vh,820px) - 120px);
}
details.fhCat{
  border:1px solid #e5e7eb; background:#fff; border-radius:16px;
  padding:10px 12px; margin:10px 0;
}
details.fhCat > summary{
  cursor:pointer; list-style:none; font-weight:900; color:#0f172a;
  display:flex; align-items:center; justify-content:space-between; gap:10px;
}
details.fhCat > summary::-webkit-details-marker{ display:none; }
.fhCount{
  font-size:12px; font-weight:900; color:#334155;
  background:#f1f5f9; border:1px solid #e2e8f0;
  padding:3px 10px; border-radius:999px; white-space:nowrap;
}
.fhGrid{
  margin-top:10px; display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:10px;
}
a.fhCard{
  text-decoration:none; color:inherit;
  border:1px solid #e5e7eb; border-radius:16px;
  background:#fff; padding:12px; display:block;
  box-shadow:0 8px 22px rgba(0,0,0,.06);
  transition:transform .12s ease, box-shadow .12s ease;
}
a.fhCard:hover{ transform:translateY(-2px); box-shadow:0 12px 28px rgba(0,0,0,.10); }
.fhCardTitle{ font-weight:900; margin-bottom:6px; }
.fhCardDesc{ font-size:13px; opacity:.82; line-height:1.6; }
.fhCardOpen{ margin-top:10px; font-size:12px; font-weight:900; color:#0b6b4f; }
.fhEmpty{
  border:1px dashed #cbd5e1; background:#f8fafc; border-radius:16px;
  padding:14px; font-weight:900; opacity:.85;
}
`;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const fab = document.createElement("button");
  fab.id = "fhResFab";
  fab.type = "button";
  fab.innerHTML = `<span class="dot"></span><span>روابط الألعاب</span>`;
  document.body.appendChild(fab);

  const overlay = document.createElement("div");
  overlay.id = "fhResOverlay";
  overlay.innerHTML = `
    <div id="fhResModal" role="dialog" aria-modal="true" aria-label="مكتبة الألعاب">
      <div id="fhResHeader">
        <div id="fhResTitle">
          <span id="fhResTitleText">مكتبة الألعاب والأنشطة</span>
          <span id="fhResBadge">تحميل…</span>
        </div>
        <button id="fhResClose" type="button">إغلاق ✕</button>
      </div>
      <div id="fhResTools">
        <input id="fhResSearch" type="search" placeholder="ابحث عن لعبة أو درس…" />
        <div id="fhResHint">تفتح الروابط في تبويب جديد</div>
      </div>
      <div id="fhResBody"><div class="fhEmpty">جاري تحميل الروابط…</div></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector("#fhResClose");
  const body = overlay.querySelector("#fhResBody");
  const search = overlay.querySelector("#fhResSearch");
  const titleText = overlay.querySelector("#fhResTitleText");
  const badge = overlay.querySelector("#fhResBadge");

  const track = (name, params = {}) => {
    try { if (typeof window.gtag === "function") window.gtag("event", name, params); } catch {}
  };

  const openModal = () => {
    overlay.style.display = "flex";
    document.documentElement.style.overflow = "hidden";
    track("resources_open", { event_category: "Resources" });
    search.focus();
  };
  const closeModal = () => {
    overlay.style.display = "none";
    document.documentElement.style.overflow = "";
  };

  fab.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") closeModal();
  });

  const esc = (s = "") => String(s)
    .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
    .replaceAll('"',"&quot;").replaceAll("'","&#39;");

  let data = null;

  const render = () => {
    if (!data) { body.innerHTML = `<div class="fhEmpty">لا توجد بيانات.</div>`; return; }
    const q = (search.value || "").trim().toLowerCase();

    const cats = Array.isArray(data.categories) ? data.categories : [];
    const filtered = cats.map(c => {
      const items = Array.isArray(c.items) ? c.items : [];
      const items2 = q
        ? items.filter(it =>
            (it.title || "").toLowerCase().includes(q) ||
            (it.desc || "").toLowerCase().includes(q)
          )
        : items;
      return { name: c.name, items: items2 };
    }).filter(c => (c.items || []).length);

    if (!filtered.length) { body.innerHTML = `<div class="fhEmpty">لا توجد نتائج مطابقة للبحث.</div>`; return; }

    body.innerHTML = filtered.map((c, i) => `
      <details class="fhCat"${i === 0 ? " open" : ""}>
        <summary>
          <span>${esc(c.name || "بدون تصنيف")}</span>
          <span class="fhCount">${c.items.length} رابط</span>
        </summary>
        <div class="fhGrid">
          ${c.items.map(it => `
            <a class="fhCard" href="${esc(it.url || "#")}" target="_blank" rel="noopener noreferrer"
               data-title="${esc(it.title || "")}" data-url="${esc(it.url || "")}">
              <div class="fhCardTitle">${esc(it.title || "رابط")}</div>
              ${it.desc ? `<div class="fhCardDesc">${esc(it.desc)}</div>` : ""}
              <div class="fhCardOpen">فتح ↗</div>
            </a>
          `).join("")}
        </div>
      </details>
    `).join("");

    body.querySelectorAll("a.fhCard").forEach(a => {
      a.addEventListener("click", () => {
        track("resource_click", {
          event_category: "Resources",
          event_label: a.getAttribute("data-title") || "",
          link_url: a.getAttribute("data-url") || ""
        });
      });
    });
  };

  search.addEventListener("input", render);

  (async () => {
    try {
      const url = `${BASE}links.json?v=${Date.now()}`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(res.status);
      data = await res.json();

      titleText.textContent = data.title || "مكتبة الألعاب والأنشطة";
      const total = (data.categories || []).reduce((s, c) => s + ((c.items || []).length), 0);
      badge.textContent = `${total} رابط`;
      render();
    } catch {
      badge.textContent = "تعذّر التحميل";
      body.innerHTML = `<div class="fhEmpty">تعذّر تحميل links.json — تأكد أنه موجود داخل public.</div>`;
    }
  })();
})();
