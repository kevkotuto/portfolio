# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Kevine Ghossoub, a fullstack developer, built with Next.js 14, TypeScript, and Tailwind CSS. The project features a modern design with animations, dark mode support, and multiple sections including projects, experience, contact, and CV.

## Development Commands
- **Development server**: `pnpm dev` (starts Next.js dev server on localhost:3000)
- **Build production**: `pnpm build` (builds the app for production)
- **Start production**: `pnpm start` (starts production server)
- **Linting**: `pnpm lint` (runs Next.js ESLint)
- **Post-build**: `next-sitemap` (automatically generates sitemap after build)

## Architecture & Structure

### App Directory Structure (Next.js 13+ App Router)
- `/app` - Main application using App Router
- `/components` - Reusable React components organized by function
- `/lib` - Utilities, hooks, and helper functions
- `/public` - Static assets (images, logos, project assets)

### Key Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations and dark mode
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion for complex animations and transitions
- **Icons**: Lucide React and Tabler Icons
- **Theme**: next-themes for dark/light mode switching
- **Email**: Nodemailer for contact form functionality
- **File Upload**: react-dropzone for file handling

### Component Organization
- `components/ui/` - Base UI components (buttons, cards, inputs, etc.)
- `components/header/` - Header navigation and title components
- `components/footer/` - Footer component
- `components/body/` - Main content sections (InfoPerso, StatsSection)
- `components/projects/` - Project-related components
- `components/theme/` - Theme provider and switcher
- `components/providers/` - Context providers

### Animation Architecture
- Extensive use of Framer Motion with consistent animation patterns
- Custom keyframes and transitions defined in tailwind.config.ts
- Staggered animations for lists and grids
- Hover effects and micro-interactions throughout

### Styling Conventions
- Uses CSS-in-JS approach with Tailwind utility classes
- Custom animations defined in Tailwind config (fadeIn, slideIn, scale, wave)
- CSS variables for theme colors following shadcn/ui color system
- Responsive design with mobile-first approach
- Glass-morphism and gradient effects for modern UI

### API Routes
- `/app/api/contact/` - Contact form submission (TypeScript)
- `/app/api/send/` - Email sending functionality
- `/app/api/caption/` - Image processing/captioning

### Content Management
- Projects data is defined inline in page components
- Static assets stored in `/public` directory
- Multi-language support (French primary language)

### Important Notes
- Portfolio owner: Kevine Ghossoub (kevine@generale-ci.com)
- Language: French (lang="fr" in HTML)
- Custom fonts: Geist Sans and Geist Mono
- Avoid excessive shadows in UI/UX (per user preference)
- Uses pnpm as package manager
- Includes sitemap generation for SEO