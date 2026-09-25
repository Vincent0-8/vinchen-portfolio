import { Project } from "@/types";

export const projects: Project[] = [
  // ── 1. Personal Portfolio ──────────────────────────────────────────────────
  {
    slug: "vincent-portfolio",
    title: "Personal Portfolio",
    description:
      "Fully responsive personal portfolio built with Next.js (App Router) and TypeScript, styled with Tailwind CSS. Features interactive project showcase with thumbnail carousel, modal lightbox previews, scroll-triggered animations (AOS), and strict TypeScript interfaces across all data models.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    githubClient: "https://github.com/Vincent0-8/vinchen-portfolio",
    liveUrl: "https://vincentchenn.com/",
    imageUrl: "/images/projects/personal-web/hero.webp",
    featured: true,
    screenshots: [
      {
        title: "Portfolio Hero Section",
        imageUrl: "/images/projects/personal-web/hero.webp",
      },
      {
        title: "Responsive Multi-Device Layout",
        imageUrl: "/images/projects/personal-web/responsive-personal.webp",
      },
      {
        title: "Lighthouse Performance & SEO Audit",
        imageUrl: "/images/projects/personal-web/lighthouse-personal.webp",
      },
      {
        title: "Google Search Indexing & Favicon",
        imageUrl: "/images/projects/personal-web/seo-personal.webp",
      },
    ],
  },

  // ── 2. Catalyst Marketplace ────────────────────────────────────────────────
  {
    slug: "catalyst-marketplace",
    title: "Catalyst Marketplace",
    description:
      "Full-stack fashion e-commerce marketplace built with React, Redux Toolkit, Node.js, Express, TypeScript, and MongoDB. Features product catalog with search/filter, cart & wishlist management, multi-step checkout with server-side stock and price validation, order history, JWT authentication, and API security hardening (rate limiting, CORS, input sanitization).",
    tags: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubClient: "https://github.com/Vincent0-8/Catalyst-client",
    githubServer: "https://github.com/Vincent0-8/Catalyst-server",
    liveUrl: "https://catalyst-client-marketplace.vercel.app/",
    imageUrl: "/images/projects/catalyst/Hero.webp",
    featured: true,
    screenshots: [
      {
        title: "Storefront & Hero Showcase",
        imageUrl: "/images/projects/catalyst/Hero.webp",
      },
      {
        title: "Category Filter & Catalog",
        imageUrl: "/images/projects/catalyst/CategoryFilter.webp",
      },
      {
        title: "Live Product Search",
        imageUrl: "/images/projects/catalyst/SearchFeature.webp",
      },
      {
        title: "Product Detail & Stock Control",
        imageUrl: "/images/projects/catalyst/Product-Overview.webp",
      },
      {
        title: "Shopping Cart & Subtotal Calculation",
        imageUrl: "/images/projects/catalyst/Cart.webp",
      },
      {
        title: "Customer Wishlist",
        imageUrl: "/images/projects/catalyst/Wishlist.webp",
      },
      {
        title: "Order History & Database Sync",
        imageUrl: "/images/projects/catalyst/Order-History.webp",
      },
      {
        title: "Multi-Device Responsive Showcase",
        imageUrl: "/images/projects/catalyst/Responsive-Showcase.webp",
      },
      {
        title: "Lighthouse Performance Audit",
        imageUrl: "/images/projects/catalyst/Lighthouse Desktop - Catalyst.webp",
      },
    ],
  },

  // ── 3. Cent Graphics ───────────────────────────────────────────────────────
  {
    slug: "cent-graphics",
    title: "Cent Graphics",
    description:
      "Solo-built color palette web app using the MERN stack. Features JWT authentication, backend-synced palette collections, and one-click hex code copying — built entirely without tutorials.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    githubClient: "https://github.com/Vincent0-8/cent-graphics-client",
    githubServer: "https://github.com/Vincent0-8/cent-graphics-server",
    liveUrl: "https://cent-graphics.vercel.app/",
    imageUrl: "/images/projects/cent-graphics/Hero.webp",
    featured: true,
    screenshots: [
      {
        title: "Landing Page & Brand Identity",
        imageUrl: "/images/projects/cent-graphics/Hero.webp",
      },
      {
        title: "Curated Color Palettes Collection",
        imageUrl: "/images/projects/cent-graphics/Palette.webp",
      },
      {
        title: "User Saved Palette Collection",
        imageUrl: "/images/projects/cent-graphics/Collection-SavedPalette.webp",
      },
      {
        title: "Multi-Device Responsive Showcase",
        imageUrl: "/images/projects/cent-graphics/Responsive-Showcase.webp",
      },
    ],
  },

  // ── 4. Nova Landing Page ───────────────────────────────────────────────────
  {
    slug: "nova-landing",
    title: "Nova",
    description:
      "High-performance SaaS landing page for Nova, an all-in-one website builder platform. Built with Next.js 16 (App Router, Turbopack) and Tailwind CSS v4. Includes a live email subscription flow powered by Resend API with a custom HTML email template.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend API", "Vercel"],
    githubClient: "https://github.com/Vincent0-8/Nova-landing-page",
    liveUrl: "https://nova-landing-appv1.vercel.app/",
    imageUrl: "/images/projects/landing/hero-landing/nova-hero.webp",
    featured: true,
    screenshots: [
      {
        title: "Hero & Above the Fold",
        imageUrl: "/images/projects/landing/hero-landing/nova-hero.webp",
      },
      {
        title: "Responsive Design Showcase",
        imageUrl: "/images/projects/landing/responsive/nova-responsive.webp",
      },
      {
        title: "Lighthouse Performance Audit",
        imageUrl: "/images/projects/landing/lighthouse/nova-lighthouse.webp",
      },
      {
        title: "Custom Email Notification Template",
        imageUrl: "/images/projects/landing/nova-subs/email-content.webp",
      },
    ],
  },

  // ── 5. Haven Landing Page ──────────────────────────────────────────────────
  {
    slug: "haven-landing",
    title: "Haven",
    description:
      "Coastal home care landing page built with Next.js 16, React 19, and Tailwind CSS v4. Features a custom OKLCH color design system, native IntersectionObserver scroll animations (no external libraries), GPU-accelerated CSS transitions, and an interactive toast notification system.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubClient: "https://github.com/Vincent0-8/Haven-landing-page",
    liveUrl: "https://haven-landing-app.vercel.app/",
    imageUrl: "/images/projects/landing/hero-landing/haven-hero.webp",
    featured: false,
    screenshots: [
      {
        title: "Hero & Above the Fold",
        imageUrl: "/images/projects/landing/hero-landing/haven-hero.webp",
      },
      {
        title: "Responsive Design Showcase",
        imageUrl: "/images/projects/landing/responsive/haven-responsive.webp",
      },
      {
        title: "Lighthouse Performance Audit",
        imageUrl: "/images/projects/landing/lighthouse/haven-lighthouse.webp",
      },
    ],
  },

  // ── 6. NexTidy Landing Page ────────────────────────────────────────────────
  {
    slug: "nextidy-landing",
    title: "NexTidy",
    description:
      "Modern SaaS landing page for a productivity app, built with Nuxt 3 (SSG) and Tailwind CSS v4. Implements Vue 3 Composition API with modular Single File Components, accessible modal dialogs, toast notification system, and AOS scroll animations.",
    tags: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubClient: "https://github.com/Vincent0-8/NexTidy-Vue-landing-page",
    liveUrl: "https://nex-tidy-vue-landing-page.vercel.app/",
    imageUrl: "/images/projects/landing/hero-landing/nexTidy-hero.webp",
    featured: false,
    screenshots: [
      {
        title: "Hero & Above the Fold",
        imageUrl: "/images/projects/landing/hero-landing/nexTidy-hero.webp",
      },
      {
        title: "Responsive Design Showcase",
        imageUrl: "/images/projects/landing/responsive/nexTidy-responsive.webp",
      },
      {
        title: "Lighthouse Performance Audit",
        imageUrl: "/images/projects/landing/lighthouse/nexTidy-lighthouse.webp",
      },
    ],
  },

  // ── 7. Vortex Landing Page ─────────────────────────────────────────────────
  {
    slug: "vortex-landing",
    title: "Vortex",
    description:
      "Sleek SaaS landing page for a cloud edge deployment platform, built with Vue 3 (Composition API), Vite, and Tailwind CSS v4. Features smooth entrance stagger animations, an infinite marquee, interactive FAQ accordion via CSS Grid height transitions, and native IntersectionObserver scroll reveals — with zero external animation libraries.",
    tags: ["Vue.js", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    githubClient: "https://github.com/Vincent0-8/Vortex-Vue-landing-page",
    liveUrl: "https://vortex-vue-landing-page.vercel.app/",
    imageUrl: "/images/projects/landing/hero-landing/vortex-hero.webp",
    featured: false,
    screenshots: [
      {
        title: "Hero & Above the Fold",
        imageUrl: "/images/projects/landing/hero-landing/vortex-hero.webp",
      },
      {
        title: "Responsive Design Showcase",
        imageUrl: "/images/projects/landing/responsive/vortex-responsive.webp",
      },
      {
        title: "Lighthouse Performance Audit",
        imageUrl: "/images/projects/landing/lighthouse/vortex-lighthouse.webp",
      },
    ],
  },
];
