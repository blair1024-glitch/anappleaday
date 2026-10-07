(function () {
  var data = window.PORTAL || { categories: [] };

  var UI = {
    zh: {
      search: "搜尋網站名稱、說明或網址…（按 / 快速搜尋）",
      empty: "找不到符合的網站",
      daily: "🍎 今日一站",
      shuffle: "🎲 換一個",
      open: "前往網站 →",
      isNew: "新",
      pv: "次瀏覽",
      uv: "位訪客",
      locale: "zh-TW"
    },
    en: {
      search: "Search by name, description or URL… (press / to search)",
      empty: "No matching sites",
      daily: "🍎 Site of the Day",
      shuffle: "🎲 Surprise me",
      open: "Visit site →",
      isNew: "NEW",
      pv: "views",
      uv: "visitors",
      locale: "en-US"
    }
  };

  var $ = function (id) { return document.getElementById(id); };
  var content = $("content"), nav = $("nav"), search = $("search"), empty = $("empty");

  // ---- language ----
  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "zh" || q === "en") return q;
    var saved = storageGet("lang");
    if (saved === "zh" || saved === "en") return saved;
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  }
  var lang = initialLang();

  // A text field is either a plain string or { zh, en }
  function tr(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.zh || v.en || "";
  }
  function allText(v) {
    if (v == null) return "";
    return typeof v === "string" ? v : [v.zh, v.en].join(" ");
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return url; }
  }

  function localDay(d) {
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }
  var today = localDay(new Date());

  function isNew(link) {
    if (!link.added) return false;
    var t = Date.parse(link.added + "T00:00:00");
    if (isNaN(t)) return false;
    var age = today - localDay(new Date(t));
    return age >= 0 && age < 7;
  }

  function favicon(link, size) {
    var host = hostOf(link.url);
    var icon = el("span", "icon" + (size ? " " + size : ""));
    icon.appendChild(el("span", "letter", (tr(link.title) || host).trim().charAt(0).toUpperCase()));
    var img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.src = "https://www.google.com/s2/favicons?sz=64&domain=" + encodeURIComponent(host);
    img.onload = function () { icon.classList.add("has-img"); };
    img.onerror = function () { img.remove(); };
    icon.appendChild(img);
    return icon;
  }

  // Flat list of every link, with its category attached
  var all = [];
  data.categories.forEach(function (cat) {
    (cat.links || []).forEach(function (link) { all.push({ link: link, cat: cat }); });
  });

  // ---- site of the day: rotates through every link, one per calendar day ----
  var dailyIndex = all.length ? ((today % all.length) + all.length) % all.length : -1;

  function renderDaily() {
    var box = $("daily");
    if (dailyIndex < 0) { box.hidden = true; return; }
    box.hidden = false;
    var t = UI[lang];
    $("daily-label").textContent = t.daily;
    $("daily-date").textContent = new Date().toLocaleDateString(t.locale, { month: "long", day: "numeric", weekday: "short" });
    $("shuffle").textContent = t.shuffle;
    $("shuffle").hidden = all.length < 2;

    var item = all[dailyIndex];
    var card = $("daily-card");
    card.href = item.link.url;
    card.textContent = "";
    card.appendChild(favicon(item.link, "big"));
    var text = el("span", "text");
    text.appendChild(el("span", "daily-cat", (item.cat.icon ? item.cat.icon + " " : "") + tr(item.cat.name)));
    text.appendChild(el("span", "title", tr(item.link.title) || hostOf(item.link.url)));
    text.appendChild(el("span", "desc", tr(item.link.desc) || hostOf(item.link.url)));
    card.appendChild(text);
    card.appendChild(el("span", "go", t.open));
  }

  $("shuffle").addEventListener("click", function () {
    var next = dailyIndex;
    while (next === dailyIndex) next = Math.floor(Math.random() * all.length);
    dailyIndex = next;
    renderDaily();
  });

  // ---- categories ----
  function card(link) {
    var host = hostOf(link.url);
    var a = el("a", "card");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var text = el("span", "text");
    var title = el("span", "title");
    title.appendChild(el("span", "name", tr(link.title) || host));
    if (isNew(link)) title.appendChild(el("span", "badge", UI[lang].isNew));
    text.appendChild(title);
    text.appendChild(el("span", "desc", tr(link.desc) || host));

    a.title = tr(link.desc) || host;
    a.appendChild(favicon(link));
    a.appendChild(text);
    a.dataset.search = [allText(link.title), allText(link.desc), link.url].join(" ").toLowerCase();
    return a;
  }

  function renderCategories() {
    content.textContent = "";
    nav.textContent = "";
    data.categories.forEach(function (cat, i) {
      var id = "cat-" + i;
      var section = el("section", "category");
      section.id = id;

      var h2 = el("h2");
      h2.appendChild(el("span", "cat-icon", cat.icon || "📁"));
      h2.appendChild(document.createTextNode(tr(cat.name)));
      h2.appendChild(el("span", "count", String((cat.links || []).length)));
      section.appendChild(h2);

      var grid = el("div", "grid");
      (cat.links || []).forEach(function (link) { grid.appendChild(card(link)); });
      section.appendChild(grid);
      content.appendChild(section);

      var chip = el("a", "chip", (cat.icon ? cat.icon + " " : "") + tr(cat.name));
      chip.href = "#" + id;
      nav.appendChild(chip);
    });
  }

  function filter() {
    var q = search.value.trim().toLowerCase();
    var any = false;
    content.querySelectorAll(".category").forEach(function (section) {
      var visible = 0;
      section.querySelectorAll(".card").forEach(function (c) {
        var show = !q || c.dataset.search.indexOf(q) !== -1;
        c.hidden = !show;
        if (show) visible++;
      });
      section.hidden = visible === 0;
      if (visible) any = true;
    });
    empty.hidden = any;
  }

  function render() {
    var t = UI[lang];
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title = data.title || "An Apple A Day";
    $("site-title").textContent = data.title || "An Apple A Day";
    $("site-subtitle").textContent = tr(data.subtitle);
    search.placeholder = t.search;
    empty.textContent = t.empty;
    $("pv-label").textContent = t.pv;
    $("uv-label").textContent = t.uv;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    renderDaily();
    renderCategories();
    filter();
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      storageSet("lang", lang);
      render();
    });
  });

  // ---- visitor counter (abacus.jasoncameron.dev: free, no sign-up) ----
  // views: +1 on every page load; visitors: +1 once per browser per day
  function countVisits() {
    if (location.protocol === "file:") return; // don't count local previews
    var api = "https://abacus.jasoncameron.dev";
    var ns = "anappleaday-blair1024";
    var day = String(today);
    var newToday = storageGet("counted-day") !== day;

    function call(action, key) {
      var ctrl = window.AbortController ? new AbortController() : null;
      if (ctrl) setTimeout(function () { ctrl.abort(); }, 5000);
      return fetch(api + "/" + action + "/" + ns + "/" + key, ctrl ? { signal: ctrl.signal } : {})
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { if (typeof d.value !== "number") throw new Error("bad"); return d.value; });
    }

    Promise.all([call("hit", "views"), call(newToday ? "hit" : "get", "visitors")])
      .then(function (v) {
        if (newToday) storageSet("counted-day", day);
        $("pv").textContent = v[0].toLocaleString();
        $("uv").textContent = v[1].toLocaleString();
        $("stats").hidden = false;
      })
      .catch(function () { /* service unavailable: keep the counter hidden */ });
  }

  search.addEventListener("input", filter);
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== search) {
      e.preventDefault();
      search.focus();
    } else if (e.key === "Escape" && document.activeElement === search) {
      search.value = "";
      filter();
      search.blur();
    }
  });

  render();
  countVisits();
})();
