# CarePrompt — A Learning Clone of promptcare.com

A simple, beginner-friendly frontend project that recreates the look and feel
of [promptcare.com](https://www.promptcare.com) using **only the three
fundamental web technologies**:

| Tech       | What it does                                  | File         |
|------------|-----------------------------------------------|--------------|
| HTML       | Structure & content (the "skeleton")          | `index.html` |
| CSS        | Visual styling & layout (the "skin & makeup") | `styles.css` |
| JavaScript | Interactivity (the "muscles")                 | `script.js`  |

No frameworks, no build tools, no dependencies. Open the HTML file in a
browser and it just works. This is the best foundation before you move on to
React, Vue, Next.js, etc.

---

## How to run it locally

### Option A — easiest (just double-click)
1. Open File Explorer → navigate to `c:\Deloitte_Projects\SimpleFrontend`
2. Double-click `index.html`. It opens in your default browser.

### Option B — recommended (live-reload while you edit)
1. Install the **Live Server** extension in VS Code (publisher: Ritwick Dey).
2. Right-click `index.html` → **Open with Live Server**.
3. Edit any file, save, and the browser refreshes automatically.

---

## How the page is built — section by section

Each section below explains:
1. **What it does** on this site
2. **What the original** promptcare.com does
3. **What you learn** from it

### 1. Top utility bar
- **Ours:** thin teal bar with tagline + "Pay Your Bill" / "Refer a Patient" links.
- **Original:** identical pattern — a thin strip with the same two CTAs.
- **Learn:** a `<div>` with `display: flex` and `justify-content: space-between` is the standard recipe for "thing on the left + thing on the right".

### 2. Main header / navigation
- **Ours:** logo + horizontal menu, sticky to the top (`position: sticky`), collapses into a hamburger menu under 800px.
- **Original:** also sticky, also has a hamburger on mobile, with a fancier mega-menu on desktop.
- **Learn:** the **mobile-first** mindset and how a **media query** (`@media (max-width: 800px)`) reorganizes layout for small screens. The hamburger toggle is your first taste of JavaScript-driven UI state.

### 3. Hero section
- **Ours:** two-column grid — text on the left, image on the right.
- **Original:** very similar; PromptCare uses a larger full-bleed photo with the headline overlaid, but the principle is identical.
- **Learn:** CSS Grid (`grid-template-columns: 1fr 1fr`) and the `clamp()` function for **fluid typography** (`font-size: clamp(2rem, 4vw, 3.25rem)` — the heading scales smoothly between 2rem and 3.25rem based on viewport width).

### 4. Service cards
- **Ours:** two image cards side by side, hover lifts the card.
- **Original:** same pattern — "Infusion Therapy & Specialty Pharmacy" and "Respiratory Services" cards.
- **Learn:** the **card UI pattern** that you will use on every site forever. Notice how each card is a self-contained block of HTML — you can copy/paste another `<article class="card">` and a third card appears with no extra CSS work. That's the power of class-based design.

### 5. Accordion ("Helping Patients Live Their Fullest Lives")
- **Ours:** three rows; click one to expand its panel, others collapse.
- **Original:** identical interaction — "Care That Comes To You", "Whole Person Care", "Experts At Your Service".
- **Learn:** combining HTML structure + CSS `max-height` transition + JavaScript class toggling. This is the classic "show/hide" pattern; once you understand it you can build tabs, modals, dropdowns, etc.

### 6. Testimonials slider
- **Ours:** dark section with quote cards, prev / next buttons, auto-advance every 6s, pauses on hover.
- **Original:** also a slider with patient and provider testimonials.
- **Learn:** **state management** in plain JS — keeping an `index` variable and translating the track with `transform: translateX(...)`. Same idea used by every carousel library.

### 7. About / Legacy section
- **Ours:** two-column block with image and CTA.
- **Original:** "A Continual Force in a Complex Landscape" with a doctor-and-pharmacist image.
- **Learn:** how reusing the same two-column grid pattern (already used in the hero) gives a site visual consistency.

### 8. Newsletter signup
- **Ours:** simple form, captures the submit, shows a thank-you message.
- **Original:** same form, but really posts to their email service.
- **Learn:** how a `<form>` works, why `event.preventDefault()` is needed, and that the **next step** in your learning journey is sending that email to a backend (an API, a serverless function, Mailchimp, etc.).

### 9. Footer
- **Ours:** four columns of links + social icons + copyright with auto-updating year.
- **Original:** richer (more legal links, accreditation logos) but same multi-column grid.
- **Learn:** another Grid layout, and a one-liner JS to set the year so you never have to update it manually.

---

## What is NOT in this clone (on purpose)

To keep things learnable, we left out:
- **A backend.** No email is actually stored. To do this for real you would use a service like Formspree, Netlify Forms, or a tiny Node/Express API.
- **A CMS.** The text is hardcoded in `index.html`. The original uses WordPress so non-developers can edit content.
- **A framework.** No React/Vue/Angular. Once you're comfortable here, React is the natural next step — it reuses everything you learned in HTML/CSS/JS.
- **Cookie consent / analytics / SEO meta tags beyond the basics.**

---

## How to host it (free options)

You don't need a server. Static sites can be hosted **free** on these platforms:

### 1. GitHub Pages (most popular for beginners)
```powershell
# from this folder
git init
git add .
git commit -m "Initial site"
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/careprompt.git
git push -u origin main
```
Then on github.com → repo → **Settings** → **Pages** → set "Source" to `main` branch, `/ (root)`. Your site goes live at `https://<your-username>.github.io/careprompt/`.

### 2. Netlify (drag & drop, easiest)
1. Go to <https://app.netlify.com/drop>
2. Drag this entire folder onto the page.
3. You get a live URL in seconds.

### 3. Vercel
1. Install: `npm i -g vercel`
2. Run `vercel` in this folder, follow the prompts.

### 4. Custom domain
All three providers let you add a domain you own (e.g. from Namecheap / GoDaddy) for free — you just point the domain's DNS to their servers.

---

## A suggested learning path from here

1. **Tweak everything.** Change colors in `:root` (top of `styles.css`). Change the headlines. See what breaks. This is the fastest way to learn.
2. **Add a new page.** Copy `index.html` to `about.html`, change its content, link to it from the nav.
3. **Add a contact form** that uses [Formspree](https://formspree.io) (no backend code required).
4. **Learn the box model and Flexbox** deeply (search "Josh Comeau CSS for JS Devs" or MDN's Flexbox guide).
5. **Move to a framework.** Once you're tired of copy/pasting the header into every page, you're ready for **React + Vite** or **Astro**. Both let you keep using the HTML/CSS skills you just built.
6. **Pick up Git** — the version control system. The hosting steps above all rely on it.

---

## File map

```
SimpleFrontend/
├── index.html      # the page structure (every section is commented)
├── styles.css      # all visual styling (organized to mirror index.html)
├── script.js       # all interactivity (nav toggle, accordion, slider, form)
└── README.md       # this guide
```

Happy hacking. Open the files, read the comments, change one thing at a
time, and reload the page. That feedback loop — change → save → see — is
the heart of frontend development.
