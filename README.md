# Muntasrab Global Concept Ltd — Website & Portfolio

Static website for **Muntasrab Global Concept Ltd**, a Nigerian civil
engineering, construction and consultancy company led by
**Engr. Muntari Sagir Malumfashi, FNICE**.

One website with six pages that share the same header, footer and design:

| Page | File | Contents |
|------|------|----------|
| Home | `index.html` | Hero, credentials, short about, selected projects, community impact teaser |
| About | `about.html` | Who we are, mission and vision, leadership, why work with us |
| Services | `services.html` | Six services, how we work |
| Portfolio | `portfolio.html` | Counts, filters, all projects, detail pop-up with photo gallery |
| Community Impact | `impact.html` | Projects commissioned on 20 April 2026, Governor's quote, photos |
| Contact | `contact.html` | Offices, phone, email, proposal / tender form |

The header, menu and footer are repeated in each page. If you change one,
change it in all six.

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
   - CEO portrait (`about.html`) and impact photos (`index.html`,
     `impact.html`): the `data-src` attribute on each `data-photo` element

   Use the company's own photos, or get permission. The Katsina State
   Government press photos belong to the government.
2. **Company projects.** `js/projects.js` lists nine company projects taken
   from public posts. Have the company confirm the status, dates and scope of
   each (see the `TODO` comments).
3. **Contact details** (search `TODO` in `contact.html`): office addresses,
   phone, email. The form's `data-email` must match.
4. **Confirm with the company:** the about text, mission and vision, the service
   list, and what vehicle was donated to GGSSS (the press release says an
   18-seater bus; the photo shows a car).

## Structure

```
index.html              home
about.html              about & leadership
services.html           services & how we work
portfolio.html          portfolio
impact.html             community impact
contact.html            contact / proposal form
css/styles.css          shared styles
js/projects.js          portfolio data (edit this)
js/main.js              nav, animations, photo placeholders, grid, filters, modal, form
assets/logo.svg         logo mark / favicon
assets/photos/          project photos
docs/company-research.md  sources for every fact on the site
```
