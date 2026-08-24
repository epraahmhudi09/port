# Hudi Portfolio

Personal portfolio for Epraahm Hudi — Fullstack Developer. Built with React (Vite), Tailwind CSS, Framer Motion and Firebase.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Contact form (Firebase)

The contact form saves messages to Firestore under a `messages` collection. To enable it:

1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** (start in production or test mode).
3. Add a Web App in Project settings and copy its config values.
4. Copy `.env.example` to `.env` and fill in the `VITE_FIREBASE_*` values.
5. Restart `npm run dev`.

Without a configured `.env`, the form falls back to opening the visitor's email client instead — so the site works either way.

## Build

```bash
npm run build
npm run preview
```

## Editing content

Site copy (name, services, projects, skills, contact info) lives in one place: [src/lib/content.js](src/lib/content.js).
