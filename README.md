# SkillSphere

An online learning platform built with **Next.js**, **BetterAuth**, and **MongoDB**. SkillSphere lets users browse courses, view detailed curricula, and manage their profile — all behind a clean dark editorial aesthetic with smooth animations.

🌐 **Live Site:** [skillsphere on Netlify](https://b13-a08.netlify.app)

---

## Features

- **Hero Slider** — Animated full-screen slides powered by Swiper.js and Framer Motion
- **Course Catalogue** — 7 courses across Development, Design, Marketing, and Data categories
- **Live Search** — Instantly filter courses by title on the All Courses page
- **Course Detail Pages** — Full curriculum list, instructor info, and an enroll button (protected)
- **Authentication** — Email/password sign-up and login via BetterAuth, plus Google OAuth
- **Route Protection** — Middleware guards course detail pages and the profile page
- **User Profile** — View and update your name, email, and profile photo
- **Responsive Design** — Mobile-first layout with a hamburger menu on small screens
- **404 Page** — Custom not-found page matching the site theme
- **Netlify Deployment** — Configured with `netlify.toml` and the official Next.js plugin

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + DaisyUI |
| Auth | BetterAuth v1 |
| Database | MongoDB (via BetterAuth adapter) |
| Animation | Framer Motion (motion/react) |
| Slider | Swiper.js |
| Notifications | React Hot Toast |
| Icons | React Icons |
| Fonts | Playfair Display + DM Sans (Google Fonts) |
| Deployment | Netlify |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero slider, popular courses, learning tips, top instructors |
| `/courses` | All courses with live search |
| `/courses/[id]` | Course detail — curriculum, instructor, enroll (login required) |
| `/login` | Login with email or Google |
| `/register` | Register with name, email, photo URL, and password |
| `/my-profile` | View your profile (login required) |
| `/my-profile/update` | Update your name and photo URL (login required) |

---

## Design System

SkillSphere uses a **Dark Editorial** aesthetic:

- **Background:** `#0a0a0a` (near-black)
- **Surface:** `#111111` with `#1F1F1F` borders
- **Accent:** `#E8622A` (burnt orange)
- **Text:** `#F5F0E8` (warm white) / `#6B6B6B` (muted grey)
- **Headings:** Playfair Display (serif, italic accents)
- **Body:** DM Sans (clean, modern sans-serif)

---

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/   # BetterAuth API handler
│   ├── courses/
│   │   ├── page.js          # All courses + search
│   │   └── [id]/page.js     # Course detail (protected)
│   ├── login/page.js
│   ├── register/page.js
│   ├── my-profile/          # Profile view + update (protected)
│   ├── not-found.js
│   ├── layout.js
│   └── page.js              # Home page
├── components/
│   ├── Navbar.js
│   ├── NavbarWrapper.js
│   ├── Footer.js
│   ├── HeroSlider.js
│   ├── CourseCard.js
│   ├── InstructorCard.js
│   └── LoadingSpinner.js
├── data/
│   └── courses.json         # Static course data
├── lib/
│   ├── auth.js              # BetterAuth server config
│   └── auth-client.js       # BetterAuth client config
└── middleware.js            # Route protection
```

