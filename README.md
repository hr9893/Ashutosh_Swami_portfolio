# Ashutosh Swami - Personal Portfolio

A personal portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Content is dynamically rendered from a local JSON file.

## Features
- **Local Data Driven**: All projects and metadata are sourced from `src/data/projects.json`. No CMS or database required.
- **Advanced Filtering**: Multi-select filtering for tech stack and category, with a search bar and sorting options.
- **Framer Motion Animations**: Animated page transitions, layout filtering (AnimatePresence), and hover effects.
- **Dark Mode**: System-aware light/dark theme toggle using `next-themes`.
- **Responsive & Accessible**: Mobile-first design, semantic HTML, and fully responsive layouts.

## Setup Instructions

Use Node.js 20 or newer and npm. The `package-lock.json` file keeps dependency versions consistent across your computer and deployment platform.

1. **Install dependencies**
   ```bash
   npm ci
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. **Check the production build**
   ```bash
   npm run build
   ```

4. **Run the production server locally**
   ```bash
   npm start
   ```

For deployment, push the complete project (including `package-lock.json`) to your Git provider and use a hosting service that supports Next.js/Node.js, such as Vercel. Configure Node.js 20 or newer, dependency installation as `npm ci`, and the build command as `npm run build`. The platform should run the app with `npm start` or its native Next.js runtime. Do not deploy only the source files to static hosting: this project uses Next.js server features and needs a compatible runtime.

## How to Add a New Project
1. Open `src/data/projects.json`.
2. Add a new JSON object following the structure of existing projects.
3. Make sure to provide an `id` (kebab-case), `title`, `tagline`, `category` (array), `status`, `year`, `role`, `techStack` (array), `overview`, `problem`, `solution`, `features` (array), `architecture` object, `challenges` array, `metrics` array, `links` object, and `images` array.
4. The project will automatically populate on the home page and get a dedicated static detail page at `/projects/[id]`.

## Vercel Deployment
1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository in [Vercel](https://vercel.com).
3. Keep the detected Next.js settings, select Node.js 20 or newer, and deploy. Vercel installs dependencies from `package-lock.json` and runs the production build.
