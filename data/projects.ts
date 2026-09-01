import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "catalyst-marketplace",
    title: "Catalyst Marketplace",
    description:
      "Fullstack fashion e-commerce marketplace built with React, Redux Toolkit, Node.js, Express, TypeScript, and MongoDB. Features product catalog with search/filter, cart & wishlist management, multi-step checkout with server-side stock and price validation, order history, JWT authentication, and API security hardening (rate limiting, CORS, input sanitization).",
    tags: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "JWT",
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
  {
    slug: "cent-graphics",
    title: "Cent Graphics",
    description:
      "Solo-built color palette web app using the MERN stack. Features JWT authentication, backend-synced palette collections, and one-click hex code copying — built entirely without tutorials.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],
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
];
