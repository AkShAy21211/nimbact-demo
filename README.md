# Demo Website Generator

One static codebase that shows a personalised demo website for any local business. The page changes based on the URL, with no build step and no framework, so it's ready for Vercel.

## 1. Before you deploy

Open `config.js` and fill in your details:

```js
name: "Nimbact",            // your brand
owner: "Akshay",
whatsapp: "91XXXXXXXXXX",   // your WhatsApp Business number (digits only)
email: "...",
```

These appear in the black **DEMO** ribbon ("Get this website" button), the footer disclaimer and the home page.

## 2. Deploy to Vercel

**Option A – GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.

**Option B – Vercel CLI**
```bash
npm i -g vercel
vercel        # first time, follow prompts
vercel --prod
```

Optional: add a domain such as `demo.yourbrand.in` in Vercel → Settings → Domains.

## 3. How the links work

```
https://your-demo.vercel.app/<template>?n=<name>&t=<town>&p=<phone>&r=<rating>&rv=<reviews>
```

| Param | Meaning | Example |
|---|---|---|
| path or `c` | template (see list below) | `/salon` or `?c=salon` |
| `n` | business name | `Neyora Beauty Box` |
| `t` | town | `Alakode` |
| `p` | business phone / WhatsApp (call & booking buttons go here) | `919876543210` |
| `r` | Google rating (optional, shows a badge) | `4.9` |
| `rv` | Google review count (optional) | `88` |
| `color` | brand colour hex without `#` (optional) | `b0486b` |
| `tag` | custom headline (optional) | `Kannur's favourite bridal studio` |

Example:
```
/salon?n=Neyora%20Beauty%20Box&t=Alakode&p=919876543210&r=4.9&rv=88
```

**Templates:** `salon`, `boutique`, `bakery`, `restaurant`, `clinic`, `gym`, `photography`, `furniture`, `homestay`, `taxi`, `driving`, `coaching`, `mobile`, `auto`

- `/` (no template) shows your **showcase page** listing every design. Use it as your portfolio.
- `/builder` is a private **link builder**. It creates single links, or uploads the lead-list CSV and downloads demo links for every business. It isn't linked from the public site.

## 4. Demo etiquette (built in)

- A sticky **DEMO** ribbon on every page: "Free concept website designed for X by Nimbact · not the official site · sample photos & prices".
- A footer disclaimer saying it isn't the business's official site.
- Testimonials are clearly tagged **Sample reviews**.
- `noindex` meta tag, `X-Robots-Tag` header and `robots.txt`, so demos never show up on Google under the business's name.

## 5. Customising

- **Text, prices, images:** `assets/categories.js`, one block per template.
- **Add a template:** copy a block in `categories.js`, give it a new key, add keywords to `CATEGORY_KEYWORDS`, and add the key to the `rewrites` list in `vercel.json`.
- **Look & feel:** `assets/styles.css`. Colours and fonts per template are in each block's `theme`.

Photos come from Unsplash (free to use). Replace them with the client's real photos when they sign up.

## Files

```
index.html            page shell
config.js             your agency details  ← edit this
builder.html          private link builder (/builder)
assets/app.js         rendering logic
assets/categories.js  all template content
assets/styles.css     styles
vercel.json           routes + noindex headers
robots.txt
```
