(function () {
  "use strict";

  /* ---------- Navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Reveal on scroll ---------- */
  function observeReveals(root) {
    var items = (root || document).querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach(function (el) { io.observe(el); });
  }
  observeReveals();

  /* ---------- Contact form (no backend: opens the visitor's email app) ---------- */
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var to = form.getAttribute("data-email");
      var subject = "Enquiry: " + (data.get("service") || "General") + " — " + data.get("name");
      var body =
        "Name: " + data.get("name") + "\n" +
        "Phone: " + (data.get("phone") || "-") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Service: " + (data.get("service") || "-") + "\n\n" +
        data.get("message");
      window.location.href =
        "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var status = form.querySelector(".form-status");
      if (status) status.textContent = "Opening your email app… if nothing happens, email us directly at " + to + ".";
    });
  }

  /* ---------- Project illustrations ---------- */
  var SKIES = [
    ["#f3d9a4", "#e9b872"], // warm morning
    ["#cfe3e8", "#9cc3cf"], // clear day
    ["#f0c7a0", "#c98a6b"], // harmattan dusk
    ["#dfe8d5", "#b4cba6"], // soft green
  ];

  function rect(x, y, w, h, fill, extra) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"' + (extra || "") + "/>";
  }
  function windows(x0, y0, cols, rows, w, h, gx, gy, fill) {
    var s = "";
    for (var r = 0; r < rows; r++)
      for (var c = 0; c < cols; c++) s += rect(x0 + c * (w + gx), y0 + r * (h + gy), w, h, fill, ' rx="1.5"');
    return s;
  }

  var WALL = "#f7f3ea", WALL2 = "#e6dfcf", DARK = "#123a2f", GOLD = "#c9a24a", GLASS = "#2f5f6b";

  var BUILDINGS = {
    duplex: function () {
      return (
        rect(110, 130, 180, 110, WALL) + rect(110, 130, 180, 8, WALL2) +
        '<polygon points="100,132 200,82 300,132" fill="' + DARK + '"/>' +
        rect(250, 150, 70, 90, WALL2) + rect(245, 146, 80, 8, DARK) +
        windows(128, 150, 3, 2, 30, 28, 20, 18, GLASS) +
        rect(186, 206, 28, 34, GOLD) + windows(262, 165, 2, 1, 18, 26, 10, 0, GLASS)
      );
    },
    terrace: function () {
      var s = "";
      for (var i = 0; i < 4; i++) {
        var x = 40 + i * 82;
        s += rect(x, 150, 78, 90, i % 2 ? WALL : WALL2);
        s += '<polygon points="' + (x - 4) + ",152 " + (x + 39) + ",118 " + (x + 82) + ',152" fill="' + DARK + '"/>';
        s += windows(x + 10, 164, 2, 1, 22, 22, 14, 0, GLASS) + rect(x + 28, 206, 22, 34, GOLD);
      }
      return s;
    },
    office: function () {
      return (
        rect(90, 70, 220, 170, WALL) + rect(90, 70, 220, 10, DARK) +
        windows(104, 92, 6, 4, 26, 26, 8, 12, GLASS) +
        rect(90, 228, 220, 12, WALL2) + rect(178, 200, 44, 40, GOLD)
      );
    },
    bungalow: function () {
      return (
        rect(80, 160, 240, 80, WALL) +
        '<polygon points="66,164 140,120 260,120 334,164" fill="' + DARK + '"/>' +
        windows(100, 180, 2, 1, 34, 28, 16, 0, GLASS) + windows(236, 180, 2, 1, 30, 28, 14, 0, GLASS) +
        rect(186, 196, 28, 44, GOLD) + rect(170, 190, 60, 4, WALL2)
      );
    },
    plots: function () {
      var s = rect(30, 170, 340, 70, "#d9c89a");
      for (var i = 0; i < 5; i++) s += rect(40 + i * 66, 180, 58, 22, "#c5b27f", ' rx="2"') + rect(40 + i * 66, 210, 58, 22, "#c5b27f", ' rx="2"');
      s += rect(30, 203, 340, 5, "#8a7a55");
      for (var j = 0; j < 6; j++) s += rect(38 + j * 66, 176, 3, 60, GOLD);
      return s;
    },
    apartments: function () {
      return (
        rect(120, 60, 160, 180, WALL) + rect(114, 56, 172, 10, DARK) +
        rect(120, 118, 160, 5, WALL2) + rect(120, 178, 160, 5, WALL2) +
        windows(134, 76, 4, 3, 24, 30, 12, 30, GLASS) +
        rect(186, 206, 28, 34, GOLD) + rect(250, 40, 24, 16, "#3b4a55")
      );
    },
    shops: function () {
      var s = rect(40, 160, 320, 80, WALL) + rect(34, 150, 332, 14, DARK);
      for (var i = 0; i < 6; i++) s += rect(50 + i * 52, 180, 42, 60, i % 2 ? "#9aa8a3" : "#aab6b1") + rect(50 + i * 52, 172, 42, 5, GOLD);
      return s;
    },
    institutional: function () {
      return (
        rect(50, 140, 300, 100, WALL) +
        '<polygon points="40,144 200,104 360,144" fill="' + DARK + '"/>' +
        windows(66, 160, 8, 1, 26, 34, 10, 0, GLASS) +
        rect(50, 210, 300, 30, WALL2) + rect(186, 206, 28, 34, GOLD)
      );
    },
    villa: function () {
      return (
        rect(70, 170, 200, 70, WALL) + rect(140, 110, 200, 60, WALL2) +
        rect(136, 104, 208, 8, DARK) + rect(66, 166, 208, 6, DARK) +
        rect(160, 124, 160, 34, GLASS) + windows(84, 186, 3, 1, 40, 36, 14, 0, GLASS) +
        rect(280, 226, 80, 12, "#6fb3c4", ' rx="3"')
      );
    },
  };

  function illustration(project, index) {
    var sky = SKIES[index % SKIES.length];
    var gid = "sky-" + project.id;
    var draw = BUILDINGS[project.style] || BUILDINGS.duplex;
    return (
      '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of ' +
      project.title + '">' +
      '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + sky[0] + '"/><stop offset="1" stop-color="' + sky[1] + '"/></linearGradient></defs>' +
      rect(0, 0, 400, 300, "url(#" + gid + ")") +
      '<circle cx="' + (60 + (index * 47) % 280) + '" cy="60" r="22" fill="#fff" opacity="0.55"/>' +
      '<ellipse cx="60" cy="240" rx="70" ry="40" fill="#5f8a63" opacity="0.5"/>' +
      '<ellipse cx="350" cy="240" rx="80" ry="36" fill="#5f8a63" opacity="0.45"/>' +
      draw() +
      rect(0, 240, 400, 60, "#3e6b4f") + rect(0, 240, 400, 4, "#2e5540") +
      "</svg>"
    );
  }

  function media(project, index) {
    if (project.image) {
      return '<img src="' + project.image + '" alt="' + project.title + '" loading="lazy">';
    }
    return illustration(project, index);
  }

  /* ---------- Project grid ---------- */
  var grid = document.querySelector("[data-project-grid]");
  var projects = window.PROJECTS || [];
  var labels = window.CATEGORY_LABELS || {};

  function card(p) {
    var i = projects.indexOf(p);
    return (
      '<button class="project reveal" type="button" data-id="' + p.id + '">' +
      '<div class="project-media">' + media(p, i) +
      '<span class="project-tag">' + (labels[p.category] || p.category) + "</span></div>" +
      '<div class="project-body"><h3>' + p.title + "</h3>" +
      '<div class="project-meta"><span>' + p.location + "</span><span>" + p.year + "</span><span>" + p.status + "</span></div>" +
      "</div></button>"
    );
  }

  function render(filter) {
    if (!grid) return;
    var limit = parseInt(grid.getAttribute("data-limit"), 10) || projects.length;
    var list = projects.filter(function (p) { return !filter || filter === "all" || p.category === filter; }).slice(0, limit);
    grid.innerHTML = list.map(card).join("") ||
      '<p>No projects in this category yet.</p>';
    observeReveals(grid);
  }
  render("all");

  /* Filters */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      filterBar.querySelectorAll(".filter").forEach(function (b) {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      render(btn.getAttribute("data-filter"));
    });
  }

  /* ---------- Project modal ---------- */
  var modal = document.querySelector("#project-modal");
  var lastFocus = null;

  function openModal(p) {
    if (!modal) return;
    var i = projects.indexOf(p);
    modal.querySelector(".modal-media").innerHTML = media(p, i);
    modal.querySelector("[data-m-title]").textContent = p.title;
    modal.querySelector("[data-m-cat]").textContent = labels[p.category] || p.category;
    modal.querySelector("[data-m-summary]").textContent = p.summary;
    modal.querySelector("[data-m-facts]").innerHTML =
      [["Location", p.location], ["Year", p.year], ["Status", p.status], ["Size", p.size]]
        .map(function (f) { return "<div><small>" + f[0] + "</small><strong>" + f[1] + "</strong></div>"; })
        .join("");
    modal.querySelector("[data-m-scope]").innerHTML = (p.scope || []).map(function (s) { return "<li>" + s + "</li>"; }).join("");
    lastFocus = document.activeElement;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  if (grid) {
    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".project");
      if (!btn) return;
      var p = projects.find(function (x) { return x.id === btn.getAttribute("data-id"); });
      if (!p) return;
      if (modal) openModal(p);
      else window.location.href = "portfolio.html#" + p.id;
    });
  }
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest(".modal-close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
    // Deep link: portfolio.html#project-id opens that project
    var hashP = projects.find(function (x) { return "#" + x.id === window.location.hash; });
    if (hashP) openModal(hashP);
  }
})();
