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
        "Organisation: " + (data.get("org") || "-") + "\n" +
        "Phone: " + (data.get("phone") || "-") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Enquiry: " + (data.get("service") || "-") + "\n\n" +
        data.get("message");
      window.location.href =
        "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var status = form.querySelector(".form-status");
      if (status) status.textContent = "Opening your email app… if nothing happens, email us directly at " + to + ".";
    });
  }

  /* ---------- Photos & placeholders ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var CAMERA =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

  function photo(p) {
    if (p && p.src) return '<img src="' + esc(p.src) + '" alt="' + esc(p.caption || "") + '" loading="lazy">';
    return (
      '<div class="photo-ph" role="img" aria-label="Photo placeholder: ' + esc(p ? p.caption : "") + '">' +
      CAMERA + "<span>Photo placeholder</span><small>" + esc(p ? p.caption : "") + "</small></div>"
    );
  }
  window.renderPhoto = photo;

  // Static placeholders written in the HTML: <div data-photo="caption" data-src=""></div>
  document.querySelectorAll("[data-photo]").forEach(function (el) {
    el.innerHTML = photo({ src: el.getAttribute("data-src") || "", caption: el.getAttribute("data-photo") });
  });

  /* ---------- Project grid ---------- */
  var grid = document.querySelector("[data-project-grid]");
  // Company projects first, then community projects; newest first within each.
  var year = function (p) { var m = String(p.date).match(/\d{4}/); return m ? +m[0] : 0; };
  var projects = (window.PROJECTS || []).slice().sort(function (a, b) {
    return (a.group === "company" ? 0 : 1) - (b.group === "company" ? 0 : 1) || year(b) - year(a);
  });
  var cats = window.CATEGORY_LABELS || {};
  var groups = window.GROUP_LABELS || {};

  function card(p) {
    return (
      '<button class="project reveal' + (p.placeholder ? " project--slot" : "") + '" type="button" data-id="' + p.id + '">' +
      '<div class="project-media">' + photo(p.photos && p.photos[0]) +
      '<span class="project-tag">' + esc(groups[p.group] || p.group) + "</span></div>" +
      '<div class="project-body"><span class="project-cat">' + esc(cats[p.category] || p.category) + "</span>" +
      "<h3>" + esc(p.title) + "</h3>" +
      '<div class="project-meta"><span>' + esc(p.location) + "</span><span>" + esc(p.date) + "</span></div>" +
      "</div></button>"
    );
  }

  function matches(p, filter) {
    return !filter || filter === "all" || p.group === filter || p.category === filter;
  }

  function render(filter) {
    if (!grid) return;
    var limit = parseInt(grid.getAttribute("data-limit"), 10) || projects.length;
    var base = grid.getAttribute("data-group");
    var featuredOnly = grid.hasAttribute("data-featured");
    var list = projects
      .filter(function (p) {
        return (!base || p.group === base) && (!featuredOnly || p.featured) && matches(p, filter);
      })
      .slice(0, limit);
    grid.innerHTML = list.map(card).join("") || "<p>No projects in this category yet.</p>";
    observeReveals(grid);
  }
  render("all");
  observeReveals();

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

  /* Stats computed from the data */
  document.querySelectorAll("[data-stat]").forEach(function (el) {
    var k = el.getAttribute("data-stat");
    el.textContent = projects.filter(function (p) {
      return !p.placeholder && (k === "total" || p.group === k || p.category === k);
    }).length;
  });

  /* ---------- Project modal ---------- */
  var modal = document.querySelector("#project-modal");
  var lastFocus = null;

  function openModal(p) {
    if (!modal) return;
    var photos = p.photos && p.photos.length ? p.photos : [{ src: "", caption: "Project photo" }];
    modal.querySelector(".modal-media").innerHTML = photo(photos[0]);
    modal.querySelector("[data-m-gallery]").innerHTML = photos.length > 1
      ? photos.map(function (ph) { return "<figure>" + photo(ph) + "</figure>"; }).join("")
      : "";
    modal.querySelector("[data-m-cat]").textContent = (groups[p.group] || "") + " · " + (cats[p.category] || "");
    modal.querySelector("[data-m-title]").textContent = p.title;
    modal.querySelector("[data-m-summary]").textContent = p.summary;
    modal.querySelector("[data-m-facts]").innerHTML =
      [["Location", p.location], ["Date", p.date], ["Status", p.status], ["Client", p.client]]
        .filter(function (f) { return f[1]; })
        .map(function (f) { return "<div><small>" + f[0] + "</small><strong>" + esc(f[1]) + "</strong></div>"; })
        .join("");
    modal.querySelector("[data-m-scope]").innerHTML = (p.scope || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
    var note = modal.querySelector("[data-m-note]");
    if (note) note.hidden = p.group !== "community";
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
