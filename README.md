# MangoBook — Online Book Borrowing Platform

A modern web application that digitizes the traditional library experience. Users can browse a collection of books, filter them by category, view details, and borrow titles digitally.

- **Live site:** https://online-book-borrowing-tau.vercel.app
- **Repository:** https://github.com/Limonislam5990/online-book-borrowing

## Purpose

Make borrowing books simple and fast: one place to explore a catalog, search and filter titles, sign in securely, and manage a personal profile — without visiting a physical library.

## Key Features

- Email/password and Google sign-in powered by BetterAuth, with session-aware navbar (name + logout when logged in, Login when logged out).
- User registration with name, email, photo URL and password.
- Home page with banner, marquee of new arrivals, featured books, and extra informational sections (Why Choose Us, FAQ).
- All Books page with title search and a category sidebar (Story, Tech, Science).
- Private routes: single book details and My Profile are available only to logged-in users.
- Profile update page to change name and profile image.
- Fully responsive layout for mobile, tablet, and desktop.
- All configuration (database URI, auth secrets, OAuth credentials) supplied through environment variables.

## Tech Stack

Next.js (App Router), React, Tailwind CSS, DaisyUI / HeroUI, BetterAuth, MongoDB.

## npm Packages Used

- `next`, `react`, `react-dom`
- `better-auth`, `@better-auth/mongo-adapter`
- `mongodb`
- `@heroui/react`, `@heroui/styles`
- `tailwindcss`, `@tailwindcss/postcss`, `daisyui`
- `animate.css`
- `eslint`, `eslint-config-next`, `babel-plugin-react-compiler`

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

On Vercel, set the same variables in Project Settings → Environment Variables, using the deployed URL for `BETTER_AUTH_URL` and `NEXT_PUBLIC_SERVER_URL`.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.
