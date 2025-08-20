# 👨‍💻 Amit Yehoshaphat – Developer Portfolio

Welcome to my personal developer portfolio.  
It’s a fully responsive, animated site built with **React + Vite + Tailwind CSS**, featuring polished page transitions, accessible navigation, and a robust contact workflow.

🌐 Live Site: https://amityst12.github.io/My-Portfolio  
📦 Repo: https://github.com/amityst12/My-Portfolio

---

## ✨ What’s new

- New “AmitWeb” section for my freelance work (logo, preview image, and CTAs to the site and Instagram)
- Responsive navbar + mobile menu with scroll spy and external social links (Instagram, Website, WhatsApp, LinkedIn) using lucide-react icons
- Full‑bleed section backgrounds with gradient overlays and smooth top/bottom fades between sections
- Polished LoadingScreen with a material‑style indeterminate progress bar and reduced‑motion support
- Contact form hardened with EmailJS env guards and clear user feedback
- Mobile‑first refinements: safe‑area support, no horizontal overflow, balanced typography/spacings

---

## 🚀 Tech Stack

- React 19 + Vite 6
- Tailwind CSS v4 (utilities + custom keyframes)
- lucide-react (icons)
- EmailJS (contact form)
- IntersectionObserver (reveal‑on‑scroll)

---

## � Features

- ⚡ Smooth reveal animations and section fades for clean visual flow
- 📱 Mobile‑optimized layout, safe‑area aware, no horizontal scroll
- 🧭 Navbar with scroll spy and desktop/mobile parity, plus social icon links
- ✉️ Contact form via EmailJS with validation and helpful errors
- �️ Hero image and assets optimized (lazy/async decoding, proper sizing)
- 🧩 Reusable patterns across sections for consistent look and behavior

---

## 🧠 Sections

- Home – Intro, hero image, quick badges, CTAs
- About – Skills, courses, hobbies, education & experience
- AmitWeb – My 48‑hour fixed‑price website offering (logo, preview, features, process, CTAs)
- Projects – A selection of featured projects with tech tags and links
- Contact – EmailJS form, plus quick social links (Instagram, Website, WhatsApp, LinkedIn)

---

## 🧪 Local Setup

```bash
git clone https://github.com/amityst12/My-Portfolio.git
cd My-Portfolio/my-portfolio
npm install
npm run dev
```

Open http://localhost:5173

---

## 🔐 Environment (EmailJS)

Create a `.env` (or `.env.local`) at the project root with:

```bash
VITE_SERVICE_ID=your_emailjs_service
VITE_TEMPLATE_ID=your_emailjs_template
VITE_PUBLIC_KEY=your_emailjs_public_key
```

Without these, the form shows a friendly message and won’t attempt to send.

---

## 🧰 Build & Deploy (GitHub Pages)

```bash
npm run build       # type-check + vite build
npm run deploy      # publishes dist/ via gh-pages
```

Notes:
- `package.json` has `homepage` set for GitHub Pages.
- The favicon uses `public/AmitWeb_logo.png` and is referenced in `index.html`.

---

## � Social

- Website (AmitWeb): https://amitweb.com/
- Instagram: https://www.instagram.com/amitweb1/
- WhatsApp: https://api.whatsapp.com/send/?phone=972502227134
- LinkedIn: https://www.linkedin.com/in/amityehoshaphat/

---

## � License

Personal portfolio project. Content and branding (images, logos, text) are © Amit Yehoshaphat. Code is open for learning—please credit if you reuse significant parts.
