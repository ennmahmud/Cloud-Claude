# Muntasrab Global Concept Ltd — Website & Portfolio

Static website for **Muntasrab Global Concept Ltd**, a Nigerian real estate
development and construction company.

| Page | File | Contents |
|------|------|----------|
| Company website | `index.html` | Hero, credentials, about/mission, services, process, featured projects, contact form |
| Portfolio | `portfolio.html` | Project stats, category filters, project grid, detail pop-up, CTA |

No build step or dependencies are needed. Open `index.html` in a browser, or
serve the folder with any static host (GitHub Pages, Netlify, Vercel, cPanel).

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Verified company facts used on the site

- **RC 1161080**, registered with the Corporate Affairs Commission (CAC)
- Listed as a financial member of the **Real Estate Developers Association of Nigeria (REDAN)**
- Listed on the **PenCom** compliance certificate register (employer code PR0001161080)

## Before going live: replace placeholders

1. **Contact details** in `index.html` (search for `TODO`): office address,
   phone/WhatsApp, and email. The email also appears in the form's `data-email`
   attribute; the form opens the visitor's email app with the enquiry filled in.
2. **Projects** in `js/projects.js`: every entry is *sample* content. Replace
   the entries with real projects. Put photos in `assets/` and set
   `image: "assets/photo.jpg"`. Without a photo, an illustration is drawn.
3. **Sample notes**: after adding real projects, delete the `.sample-note`
   paragraphs in `index.html` and `portfolio.html`.
4. Review the mission/vision wording and services list with the company.
5. Optional: swap `assets/logo.svg` for the official logo.

## Structure

```
index.html        company website
portfolio.html    portfolio
css/styles.css    shared styles
js/projects.js    portfolio data (edit this)
js/main.js        nav, animations, project grid, filters, modal, contact form
assets/logo.svg   logo mark / favicon
```
