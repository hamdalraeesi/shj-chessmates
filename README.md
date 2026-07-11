# SHJ.CHESSMATES — Website

The official website for SHJ.CHESSMATES, live at shjchessmates.com.

Payments run through Ziina payment links (no API keys or environment
variables needed — the site is fully static).

## Pricing / payment buttons

Defined at the top of `app/page.js` in the `TIERS` array:

- **Gathering** — AED 145 → Ziina payment link
- **Tournament** — AED 145 → WhatsApp (until a Ziina link is created;
  then paste the link into `payUrl`)
- **Duo Pass** — AED 260 → WhatsApp (same as above)

To update a price or link: edit `TIERS` in `app/page.js`, commit, push —
Vercel redeploys automatically.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy (Vercel)

1. Push this folder to a GitHub repository
2. In Vercel: Add New → Project → import the repo → Deploy
   (no environment variables needed)
3. Settings → Domains → add `shjchessmates.com`, then add the DNS
   records Vercel shows you in Namecheap (Domain List → Manage →
   Advanced DNS)

## Structure

```
app/
  layout.js    → page shell, fonts, metadata
  globals.css  → all styling
  page.js      → the entire site (hero, about, events, membership, join)
```
