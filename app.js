(function () {
  var data = window.PORTAL || { categories: [] };
  var content = document.getElementById("content");
  var nav = document.getElementById("nav");
  var search = document.getElementById("search");
  var empty = document.getElementById("empty");

  if (data.title) {
    document.title = data.title;
    document.getElementById("site-title").textContent = data.title;
  }
  document.getElementById("site-subtitle").textContent = data.subtitle || "";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return url; }
  }

  function card(link) {
    var a = el("a", "card");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var host = hostOf(link.url);
    var icon = el("span", "icon");
    var letter = el("span", "letter", (link.title || host).trim().charAt(0).toUpperCase());
    var img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.src = "https://www.google.com/s2/favicons?sz=64&domain=" + encodeURIComponent(host);
    img.onload = function () { icon.classList.add("has-img"); };
    img.onerror = function () { img.remove(); };
    icon.appendChild(letter);
    icon.appendChild(img);

    var text = el("span", "text");
    text.appendChild(el("span", "title", link.title || host));
    text.appendChild(el("span", "desc", link.desc || host));

    a.appendChild(icon);
    a.appendChild(text);
    a.dataset.search = [link.title, link.desc, link.url].join(" ").toLowerCase();
    return a;
  }

  data.categories.forEach(function (cat, i) {
    var id = "cat-" + i;
    var section = el("section", "category");
    section.id = id;

    var h2 = el("h2");
    h2.appendChild(el("span", "cat-icon", cat.icon || "📁"));
    h2.appendChild(document.createTextNode(cat.name));
    h2.appendChild(el("span", "count", String((cat.links || []).length)));
    section.appendChild(h2);

    var grid = el("div", "grid");
    (cat.links || []).forEach(function (link) { grid.appendChild(card(link)); });
    section.appendChild(grid);
    content.appendChild(section);

    var chip = el("a", "chip", (cat.icon ? cat.icon + " " : "") + cat.name);
    chip.href = "#" + id;
    nav.appendChild(chip);
  });

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
})();
