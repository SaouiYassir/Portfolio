export const PROJECTS = [
  {
    slug: 'marrakech-location',
    title: 'Marrakech Location',
    pitch: 'A full car-rental platform shipped for a Moroccan agency — booking flow, live catalogue, zero backend cost.',
    tags: ['React', 'WhatsApp booking', 'EmailJS'],
    liveUrl: 'https://location-var1.vercel.app/',
    repoUrl: null,
    featured: true,
    brief: 'A Marrakech-based car rental agency needed an online presence that could showcase their fleet and let customers request bookings — without the cost or complexity of a custom backend.',
    build: [
      {
        title: 'Starting with zero backend cost',
        desc: 'Early data lived in a Google Sheet fetched client-side, with WhatsApp `wa.me` links handling bookings. This let the client launch fast and validate demand before any backend investment was justified.',
      },
      {
        title: 'Fixing a stacking-context bug',
        desc: 'The booking modal was getting trapped behind other elements due to nested stacking contexts. Rendering it through `ReactDOM.createPortal` instead of inline solved it cleanly, independent of parent layout.',
      },
      {
        title: 'Building the Atlas Warm design system',
        desc: 'The original dark navy and rust palette was replaced with a warm cream, terracotta, and gold system — paired with Fraunces and Inter — to feel more inviting for a customer-facing booking site.',
      },
    ],
    gallery: ['/Gallery/marrakech-location-1.jpg', '/Gallery/marrakech-location-2.jpg', '/Gallery/marrakech-location-3.jpg'],
    outcome: 'Delivered as a three-route React app with a filterable 30-car catalogue, WhatsApp-based booking, and SEO metadata per page — presented to the client and shared publicly as a portfolio case study.',
  },
  {
    slug: 'portfolio',
    title: 'Personal portfolio',
    pitch: 'This site — designed and built from scratch with a custom theming system, responsive layouts, and polished route-based interactions.',
    tags: ['React', 'Vite', 'Design system'],
    liveUrl: 'https://yassirsaoui.vercel.app/',
    repoUrl: null,
    featured: true,
    brief: "I needed a portfolio that could represent both sides of my work — a CS student's technical grounding and a freelancer's ability to ship real, polished projects — without relying on a template.",
    build: [
      {
        title: 'Persistent dark/light theme',
        desc: 'Built with React state, localStorage, and CSS custom properties that toggle a `body.dark-mode` class. The selected theme is preserved between visits without relying on a third-party theme library.',
      },
      {
        title: 'Fixing a flash-of-wrong-theme on load',
        desc: 'Since theme state initializes from `localStorage` inside React, there was a brief flash before first paint. Solved with a small inline script in `index.html` that sets the class before the app bundle even loads.',
      },
      {
        title: 'Consolidating a scattered CSS variable system',
        desc: 'Audited every raw color value across components and moved them into `:root` tokens — turning a working-but-messy CSS foundation into a documented, reusable design system.',
      },
    ],
    gallery: ['/Gallery/portfolio-1.jpg', '/Gallery/portfolio-2.jpg'],
    outcome: 'A responsive portfolio with route-based project case studies, dark/light mode, reusable components, dynamic metadata, and a centralized CSS design system.',
  },
  {
    slug: 'minigame',
    title: 'Mini Game C++',
    pitch: 'Polished 2D SFML mini-game with smooth physics, collision response, health HUD, and modular OOP design.',
    tags: ['C++', 'OOP', 'SFML', 'Open source'],
    liveUrl: null,
    repoUrl: 'https://github.com/SaouiYassir/miniGame_cpp',
    featured: true,
    brief: "I kept rebuilding game loops and entity management from scratch for each small project. I wanted a reusable foundation — clean OOP architecture, smooth animations, and robust collision — that I could extend without rewriting core systems every time.",
    build: [
      {
        title: 'Modular OOP architecture',
        desc: 'Built with scalable class hierarchy (Entity, Player, Enemy, Projectile) — separation of concerns makes adding new game elements straightforward without touching core engine logic.',
      },
      {
        title: 'Smooth physics & collision response',
        desc: 'Implements deltaTime-based movement for frame-independent animations, plus AABB collision detection with proper resolution — no jitter or ghosting during gameplay.',
      },
      {
        title: 'Health UI & real-time feedback',
        desc: 'Integrated HUD with health bars and damage indicators that update dynamically — player feedback feels immediate and polished.',
      },
    ],
    gallery: ['/Gallery/minigame1.png', '/Gallery/minigame2.png', '/Gallery/minigame3.png'],
    outcome: 'A complete, polished mini-game foundation in C++/SFML — reusable as a template for future 2D projects, eliminating the overhead of rebuilding rendering loops, collision, and UI from scratch each time.',
  }
]

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug)

export const getProjectLink = (project) => `/projects/${project.slug}`

export const getFeaturedProjects = (limit = 3) =>
  PROJECTS.filter((p) => p.featured).slice(0, limit)

export const getNextProject = (currentSlug) => {
  const i = PROJECTS.findIndex((p) => p.slug === currentSlug)
  if (i === -1) return PROJECTS[0]
  return PROJECTS[(i + 1) % PROJECTS.length]
}