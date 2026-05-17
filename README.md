# Aaryan Neurology Clinic — Frontend

This repository is a small React + Vite site for Aaryan Neurology Clinic. The app is intentionally simple
and uses a single-page app pattern with client-side navigation between four pages.

Tech
- React (v19) + Vite

Quick start
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Project structure (important files)
- `src/App.jsx` — application shell and header
- `src/data.js` — shared data used by pages (contacts, services, doctors)
- `src/pages/` — separate page components:
	- `Home.jsx`, `About.jsx`, `Services.jsx`, `Contact.jsx`
- `src/main.jsx` — app entry

Notes
- Behavior unchanged: pages were extracted into components to improve structure.
- Use `npm run dev` to preview locally.

Author
- Developed by Pradhumn Pawar

