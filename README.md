# Shabari Shetty — Portfolio

A premium, interactive portfolio built with React, Vite, Tailwind CSS,
Framer Motion and React Three Fiber (Three.js).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Where to edit things

- **Social links, email, resume URL** — `src/config/links.js` (single source of truth,
  used everywhere in the site).
- **Profile photo** — replace `public/profile.jpg` with your own image (same filename).
- **Resume** — add a `resume.pdf` file to `public/` so the "Download Resume" buttons work.
- **Projects** — `src/components/Projects.jsx` (the `PROJECTS` array).
- **Skills** — `src/components/Skills.jsx` (the `GROUPS` array).
- **Timeline / journey** — `src/components/Journey.jsx`.

## Structure

```
src/
  components/   # one component per section (Navbar, Hero, About, Skills, ...)
  config/       # links.js — edit social/contact links here
  index.css     # design tokens (colors, fonts) + global styles
  App.jsx       # page assembly
public/
  profile.jpg   # your photo
```

## Notes

- The contact form is client-side only (validation + a friendly confirmation state).
  To actually send messages, connect it to a service like Formspree, EmailJS, or your
  own backend inside `src/components/Contact.jsx`'s `handleSubmit`.
- The 3D hero scene is lazy-loaded and automatically disabled when the visitor's
  OS has "reduce motion" turned on.
- Built to be deployed as a static site (Vercel, Netlify, GitHub Pages, etc.) —
  just run `npm run build` and deploy the `dist/` folder.

## Resume & Certificates

- Add your resume PDF to `public/resume.pdf`. Both the Hero's "View Resume" /
  "Download Resume" links and the navbar's "Resume" button read from this
  exact path — nothing else to configure.
- Add certificate PDFs to `public/certificates/` following the naming guide
  in that folder's own README. Edit `CERTIFICATIONS` in `src/config/links.js`
  if you add, remove, or reorder certificates.
