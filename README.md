# Muntasrab Global Concept Ltd — Website & Portfolio

Static website for **Muntasrab Global Concept Ltd**, a Nigerian civil
engineering, construction and consultancy company led by
**Engr. Muntari Sagir Malumfashi, FNICE**.

| Page | File | Contents |
|------|------|----------|
| Company website | `index.html` | Hero, credentials, about, services, leadership, community impact, process, contact / proposal form |
| Portfolio | `portfolio.html` | Counts, filters (community / company / healthcare / education / infrastructure), project cards, detail pop-up with photo gallery |

No build step. Open `index.html` in a browser or serve the folder with any static host.

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What the content is based on

Every fact on the site comes from `docs/company-research.md`, which records
each source:

- RC 1161080, REDAN membership, PenCom compliance
- Engr. Muntari Sagir Malumfashi, Chief Executive; FNICE (October 2025)
- The six community projects commissioned by Governor Dikko Umaru Radda on
  20 April 2026. The CEO funded these **personally**, and the site says so.
- Company projects, from public posts: the Galadiman Katsina's palace (2020),
  the 54-house FMBN-financed estate (2022), the APC State Secretariat (2022),
  the Maternal & Children Hospital rehabilitation (2022), the KTSTA facility
  (2025) and four Juma'at mosques (2025–26)

## Before going live

1. **Photos.** Every image is a labelled placeholder. Add photos to
   `assets/photos/` and point to them:
   - projects: `photos[].src` in `js/projects.js`
   - CEO portrait and impact gallery: the `data-src` attribute on each
     `data-photo` element in `index.html`

   Use the company's own photos, or get permission. The Katsina State
   Government press photos belong to the government.
2. **Company projects.** `js/projects.js` lists nine company projects taken
   from public posts. Have the company confirm the status, dates and scope of
   each (see the `TODO` comments).
3. **Contact details** (search `TODO` in `index.html`): office addresses,
   phone, email. The form's `data-email` must match.
4. **Confirm with the company:** the about text, mission and vision, the service
   list, and what vehicle was donated to GGSSS (the press release says an
   18-seater bus; the photo shows a car).

## Structure

```
index.html              company website
portfolio.html          portfolio
css/styles.css          shared styles
js/projects.js          portfolio data (edit this)
js/main.js              nav, animations, photo placeholders, grid, filters, modal, form
assets/logo.svg         logo mark / favicon
assets/photos/          project photos go here
docs/company-research.md  sources for every fact on the site
```
