# OGO Hospitality website package

## Included files

- `index.html` — responsive homepage
- `gallery.html` — complete internal gallery page
- `styles.css` — all desktop, tablet, and mobile styling
- `script.js` — homepage navigation, enquiry form, and preview gallery
- `gallery.js` — complete gallery generation and lightbox controls
- `assets/` — hotel, golf, gallery, and hero images

## Important Wix limitation

Wix and Wix Studio do not directly import a conventional HTML/CSS/JavaScript website as editable Wix sections. You have two practical options:

### Option 1: Host and embed the finished website

1. Upload this complete folder to a static host such as Cloudflare Pages, Netlify, Vercel, or your own hosting account.
2. In Wix, add an **Embed Code → Embed a Site** element.
3. Enter the hosted website URL.
4. Set the embedded element to full width and an appropriate height.

This preserves the design and interactions most accurately.

### Option 2: Rebuild it as editable Wix Studio sections

Use these files as the design and development reference:

1. Create the fixed header and responsive menu in Wix Studio.
2. Rebuild each HTML `<section>` as a Wix Studio section.
3. Upload the files from `assets/` to the Wix Media Manager.
4. Recreate the CSS values using Wix Studio layout, typography, spacing, and breakpoint controls.
5. Rebuild the enquiry dialog using a Wix lightbox and Wix Forms.
6. Rebuild `gallery.html` using a Wix Pro Gallery or repeater.
7. Connect property links and contact actions.

This takes more work but makes the website editable through Wix.

## Local preview

The files should be served through a local web server rather than opened directly from the filesystem.

Example:

```powershell
python -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173/
```

## Before publishing

- Confirm permission to reuse all property and gallery photographs.
- Replace sample enquiry behavior with Wix Forms or a real form endpoint.
- Review hotel names, ratings, addresses, emails, and external links.
- Optimize large images through Wix Media Manager or an image CDN.
- Add analytics, cookie consent, privacy terms, and SEO metadata.
