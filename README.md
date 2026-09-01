# Vincent Chen — Personal Portfolio

A sleek, performant, and responsive personal portfolio web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Demo:** [https://vincent-portfolio.vercel.app](https://vincent-portfolio.vercel.app) *(or your Vercel URL)*

---

## ⚡ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Tabler & Simple Icons)
- **Animations:** [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) via Client Provider
- **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ Key Features & Architecture

- **60 FPS AOS Scroll Animations:** Integrated using the Client Provider Pattern (`AosProvider.tsx`) with fine-tuned `ease-out-quart` easing and staggered delay.
- **Lightbox Screenshot Zoom (React Portal):** Fullscreen screenshot modal rendered directly into `document.body` using `createPortal` to escape CSS transform context.
- **Interactive Project Showcase:** Multi-project tab switcher with dynamic thumbnail carousel and live preview links.
- **Academic Timeline:** Visual timeline with glowing status indicator for educational background.
- **Security Hardening:** OWASP-compliant security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) configured in `next.config.ts`.
- **SEO & OpenGraph:** Configured metadata for social sharing cards on LinkedIn, WhatsApp, and Telegram.
- **100% Mobile Responsive:** Tested across mobile (390px), tablet (768px), and desktop (1440px+).

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vincent0-8/vincent-portfolio.git
   cd vincent-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Vincent Chen**
- GitHub: [@Vincent0-8](https://github.com/Vincent0-8)
- LinkedIn: [Vincent Chen](https://www.linkedin.com/in/vincent-chenn/)
- Email: [chenvincent.846@gmail.com](mailto:chenvincent.846@gmail.com)
