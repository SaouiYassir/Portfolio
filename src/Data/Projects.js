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
    pitch: 'This site — designed and built from scratch with a custom theming system and scroll-driven animations.',
    tags: ['React', 'Vite', 'Design system'],
    liveUrl: 'https://yassirsaoui.vercel.app/',
    repoUrl: null,
    featured: true,
    brief: "I needed a portfolio that could represent both sides of my work — a CS student's technical grounding and a freelancer's ability to ship real, polished projects — without relying on a template.",
    build: [
      {
        title: 'Dark/light mode from first principles',
        desc: 'Built with React Context and CSS custom properties toggling a `body.dark-mode` class, rather than a third-party theme library — kept full control over every token.',
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
    outcome: 'A fully responsive, dark/light-aware portfolio with scroll animations (AOS) and a typewriter hero — the same design system now powering every other project page on this site.',
  },
  // {
  //   slug: 'toa',
  //   title: 'TOA — typewriter library',
  //   pitch: 'A lightweight, scroll-triggered typewriter effect built as a standalone, reusable JS utility.',
  //   tags: ['Vanilla JS', 'Open source'],
  //   liveUrl: null,
  //   repoUrl: 'https://github.com/SaouiYassir/toa',
  //   featured: true,
  //   brief: "I kept rebuilding a typewriter text effect for different projects, each time coupled to that project's specific markup. I wanted a version that any project — including non-React ones — could drop in without rewriting the logic.",
  //   build: [
  //     {
  //       title: 'Decoupling from any specific framework',
  //       desc: 'Written in vanilla JS with no dependencies, so it works whether the target project uses React, plain HTML, or anything else — a deliberate contrast to most of my other work, which leans on React.',
  //     },
  //     {
  //       title: 'Scroll-triggered activation',
  //       desc: "Uses the Intersection Observer API to start typing only once the element enters the viewport, rather than firing immediately on page load — avoids wasting the effect on content the user hasn't scrolled to yet.",
  //     },
  //   ],
  //   gallery: [],
  //   outcome: 'Published as a standalone utility on GitHub — reusable across future projects without copy-pasting the same typewriter logic each time.',
  // },
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