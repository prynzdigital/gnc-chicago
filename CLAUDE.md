# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ghana National Council (GNC) Digital Ecosystem Platform**

A modern, scalable nonprofit platform serving as the digital headquarters for GNC. The platform unites Ghanaian students and community members, promotes culture and heritage, supports student success, and fosters leadership development.

**Design Inspiration**: LinkedIn Communities, Apple.com, Notion, Stripe, Eventbrite, Harvard Alumni, Discord Communities

**Target Outcome**: A production-ready platform that feels premium, modern, warm, and built to last—exceeding the current reference site in every dimension.

---

## Tech Stack

### Frontend
- **Framework**: Next.js 14+ with App Router (TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React hooks + Zustand (for complex state)
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion (tasteful, performance-aware)
- **Image Optimization**: Next.js Image, Cloudinary or similar

### Backend
- **Runtime**: Node.js with Next.js API routes or tRPC
- **Database**: PostgreSQL (Prisma ORM)
- **Authentication**: NextAuth.js (OAuth + credentials)
- **File Storage**: S3-compatible or Cloudinary
- **Email**: SendGrid or Resend for transactional email

### DevOps & Tools
- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (recommended) or similar
- **Monitoring**: Sentry for error tracking
- **Analytics**: Plausible or similar (privacy-respecting)

### Quality & Testing
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode
- **Unit & Integration**: Jest + React Testing Library
- **E2E**: Playwright or Cypress
- **Performance**: Lighthouse CI integration
- **Accessibility**: axe-core

---

## Project Structure

```
gnc-platform/
├── public/                      # Static assets (images, icons, favicons)
├── src/
│   ├── app/                     # Next.js App Router (pages & layouts)
│   │   ├── (public)/           # Public pages (wrapped layout)
│   │   │   ├── page.tsx        # Home
│   │   │   ├── about/
│   │   │   ├── events/
│   │   │   ├── groups/
│   │   │   ├── sponsors/
│   │   │   ├── donate/
│   │   │   └── contact/
│   │   ├── (member)/           # Member pages (requires auth)
│   │   │   ├── dashboard/
│   │   │   ├── profile/
│   │   │   ├── groups/
│   │   │   ├── events/
│   │   │   └── settings/
│   │   ├── (admin)/            # Admin/executive pages (requires admin role)
│   │   │   ├── dashboard/
│   │   │   ├── groups/
│   │   │   ├── members/
│   │   │   ├── events/
│   │   │   ├── fundraising/
│   │   │   └── sponsors/
│   │   ├── api/                # API routes & tRPC
│   │   ├── layout.tsx          # Root layout
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components (buttons, cards, etc.)
│   │   ├── layout/             # Header, footer, navigation
│   │   ├── sections/           # Page sections (hero, impact, testimonials, etc.)
│   │   ├── forms/              # Reusable form components
│   │   ├── dashboard/          # Dashboard-specific components
│   │   └── shared/             # Shared utilities (modals, loaders, etc.)
│   ├── lib/
│   │   ├── auth.ts             # Authentication utilities
│   │   ├── db.ts               # Database client setup
│   │   ├── trpc.ts             # tRPC setup
│   │   ├── utils.ts            # Generic utilities
│   │   └── constants.ts        # App-wide constants (colors, routes, etc.)
│   ├── styles/
│   │   ├── globals.css         # Global styles
│   │   └── animations.css      # Reusable animations
│   ├── types/                  # Global TypeScript types
│   ├── server/                 # Server-side code (db queries, business logic)
│   │   ├── db/                 # Database queries/models
│   │   ├── services/           # Business logic services
│   │   └── actions/            # Server actions
│   └── hooks/                  # Custom React hooks
├── prisma/
│   └── schema.prisma           # Database schema
├── tests/
│   ├── unit/                   # Unit tests
│   ├── integration/            # Integration tests
│   └── e2e/                    # End-to-end tests
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── package.json
├── CLAUDE.md                   # This file
└── README.md
```

---

## Development Commands

### Setup
```powershell
npm install
cp .env.example .env.local     # Configure environment variables
npx prisma migrate dev         # Run database migrations
npm run dev                    # Start dev server (http://localhost:3000)
```

### Common Development Tasks

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Type check | `npm run type-check` |
| Lint code | `npm run lint` |
| Format code | `npm run format` |
| Run all tests | `npm run test` |
| Run tests in watch mode | `npm run test -- --watch` |
| Run single test file | `npm run test -- path/to/test.spec.ts` |
| Run E2E tests | `npm run test:e2e` |
| Generate Prisma client | `npx prisma generate` |
| Open Prisma Studio (DB GUI) | `npx prisma studio` |
| Run Lighthouse audit | `npm run audit:lighthouse` |
| Check accessibility | `npm run audit:a11y` |

### Git Workflow
- Feature branches: `feature/feature-name`
- Bugfix branches: `fix/bug-name`
- Always create descriptive commit messages
- PR reviews required before merge to main

---

## Architecture Patterns

### 1. **Page Organization (App Router)**
- Public pages wrapped in `(public)` layout with global header/footer
- Member pages wrapped in `(member)` layout with member header/sidebar
- Admin pages wrapped in `(admin)` layout with admin navigation
- Each group of pages shares a consistent layout without repetition

### 2. **Authentication & Authorization**
- NextAuth.js handles OAuth (Google, GitHub) + email/password
- Middleware protects routes based on user roles (public, member, admin)
- Roles: `USER`, `GROUP_ADMIN`, `GLOBAL_ADMIN`, `EXECUTIVE`
- Permissions enforced at both route and API level

### 3. **Database Schema**
Key entities:
- **Users**: Profile, roles, membership status
- **Groups**: GNC departments (e.g., Student Org, Alumni, Mentorship)
- **Events**: Upcoming activities, registration, RSVPs
- **Memberships**: User-to-group relationships with roles
- **Donations**: Fundraising campaigns and recurring gifts
- **Sponsors**: Partnership tiers and recognition

### 4. **Component Reusability**
- `components/ui/`: Atomic shadcn/ui components (Button, Card, Dialog, etc.)
- `components/sections/`: Page-level sections that compose multiple UI components
- `components/forms/`: Domain-specific forms with validation
- Props drilling kept minimal; use Context for deeply shared state

### 5. **Server vs. Client**
- Server components by default (automatic with App Router)
- Client components only when needed (interactivity, hooks, state)
- Sensitive operations (auth, db queries) in server components or API routes
- Client components mark with `"use client"` at the top

### 6. **Data Fetching**
- Server components: Direct database queries or API calls
- Client components: Use React Query or SWR for refetching and caching
- API routes/tRPC for client-side mutations
- No API keys exposed to client (use environment variables with `NEXT_PUBLIC_` prefix only for public values)

### 7. **Styling Approach**
- Tailwind utility classes for rapid development
- shadcn/ui for complex components (modals, forms, tables)
- CSS modules or globals for animations and special styling
- Design tokens (colors, spacing) managed in `tailwind.config.ts`
- Dark mode support from day one (toggle in settings)

### 8. **Animation Strategy**
- Framer Motion for complex interactions (page transitions, list animations)
- CSS animations for simple effects (fade-ins, hovers)
- Performance: GPU-accelerated transforms, no layout shifts
- Disable animations in prefers-reduced-motion

---

## Code Quality Standards

### TypeScript
- **Strict mode**: Enabled in `tsconfig.json`
- No implicit `any`
- Import types explicitly: `import type { User } from "@/types"`

### Naming Conventions
- Components: PascalCase (`UserCard.tsx`)
- Hooks: camelCase starting with `use` (`useAuth.ts`)
- Utilities: camelCase (`formatDate.ts`)
- Files: Match export name case

### File Conventions
- One component per file (unless tightly coupled)
- Index files only for directory barrel exports
- Test files colocated: `Component.test.tsx` next to `Component.tsx`

### Error Handling
- Graceful fallbacks for missing data
- User-friendly error messages in UI
- Sentry for production error tracking
- Server logs for debugging (never expose to client)

---

## Key Features & Areas to Develop

### Phase 1: Public Website
- [ ] Home page with hero, impact metrics, mission statement
- [ ] About GNC with vision, values, history
- [ ] Groups directory with individual group pages
- [ ] Events listing with registration
- [ ] Testimonials section with carousel
- [ ] Sponsors showcase with tiers
- [ ] Donation flow with multiple payment options
- [ ] Footer with comprehensive links
- [ ] SEO optimization (metadata, structured data, sitemaps)

### Phase 2: Member Experience
- [ ] User registration and profile creation
- [ ] Authentication (OAuth + email)
- [ ] Member dashboard with personalized content
- [ ] Group discovery and joining
- [ ] Event registration and calendar
- [ ] Notification preferences
- [ ] Member directory (optional privacy controls)
- [ ] Resource library per group

### Phase 3: Group Administration
- [ ] Group dashboards for each department
- [ ] Member management (invite, remove, roles)
- [ ] Announcement creation and broadcasting
- [ ] Event creation and management
- [ ] Resource uploads
- [ ] Group-level permissions and role hierarchy

### Phase 4: Executive Dashboard
- [ ] Organizational metrics and KPIs
- [ ] Member analytics
- [ ] Event insights
- [ ] Fundraising campaign tracking
- [ ] Sponsor management and renewals
- [ ] Bulk announcements and communications
- [ ] Financial reporting (donations, expenses)

---

## Performance & Accessibility Targets

- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 95+
- **Lighthouse SEO**: 95+
- **Lighthouse Best Practices**: 95+

Performance priorities:
1. Image optimization (next/image, responsive sizes)
2. Code splitting (dynamic imports, route-based bundles)
3. Font loading (system fonts or subset/preload)
4. API response caching
5. Database query optimization

Accessibility priorities:
1. Semantic HTML (heading hierarchy, landmarks)
2. ARIA labels for interactive elements
3. Keyboard navigation support
4. Color contrast compliance (WCAG AA minimum)
5. Focus indicators
6. Screen reader testing

---

## Deployment & Environment

### Environment Variables
```
DATABASE_URL=postgres://...
NEXTAUTH_SECRET=generated-secret
NEXTAUTH_URL=https://yourdomain.com
OAUTH_GOOGLE_ID=...
OAUTH_GOOGLE_SECRET=...
STRIPE_SECRET_KEY=...
STRIPE_PUBLIC_KEY=...
SENDGRID_API_KEY=...
```

### Deployment Platform
- **Recommended**: Vercel (native Next.js support, serverless functions, edge caching)
- **Alternative**: Self-hosted on AWS/DigitalOcean with Docker

### Database Backups
- Automated daily backups (configure provider)
- Retention policy: 30 days

### Monitoring
- Sentry for frontend and backend errors
- Custom analytics dashboard for member insights
- Uptime monitoring (Uptime Robot or similar)

---

## Git & PR Standards

### Branch Naming
- `feature/page-name` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code improvements
- `docs/description` - Documentation

### Commit Messages
```
<type>: <subject>

<body (optional)>

Fixes #123  (if applicable)
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`

### PR Checklist
- [ ] TypeScript strict mode passes
- [ ] ESLint and Prettier pass
- [ ] Tests pass (unit + E2E relevant)
- [ ] Lighthouse scores maintained (no regressions)
- [ ] Accessibility audit passes
- [ ] Mobile responsive verified
- [ ] Database migrations tested (if applicable)

---

## Common Gotchas & Solutions

### Issue: Hydration mismatch in Next.js
**Solution**: Ensure client and server render identical HTML. Check for Date.now(), random, browser-only APIs in server components. Use `useEffect` for client-side-only logic.

### Issue: Images not optimizing
**Solution**: Use `next/image` component with explicit `width` and `height`. Avoid `layout="fill"` without `position: relative` parent.

### Issue: Slow database queries
**Solution**: Use Prisma Studio to profile. Add indexes for foreign keys and frequently queried fields. Use `.select()` to limit returned fields.

### Issue: Form submission errors with Server Actions
**Solution**: Validate input with Zod before processing. Return structured errors. Use `useFormStatus()` hook for loading states.

### Issue: Authentication token expiration
**Solution**: Configure NextAuth refresh token rotation. Implement automatic token refresh in middleware.

---

## Useful Resources

- Next.js Docs: https://nextjs.org/docs
- shadcn/ui: https://ui.shadcn.com
- Tailwind CSS: https://tailwindcss.com
- Prisma: https://www.prisma.io/docs
- NextAuth.js: https://next-auth.js.org
- Framer Motion: https://www.framer.com/motion
- Stripe Payments: https://stripe.com/docs
- WCAG Accessibility: https://www.w3.org/WAI/standards-guidelines/wcag

---

## Next Steps for Future Instances

1. **Initialize the project**: `npm create next-app@latest gnc-platform --typescript --tailwind`
2. **Set up database**: Configure PostgreSQL and Prisma
3. **Install core dependencies**: NextAuth, Stripe, React Query, Framer Motion
4. **Build Phase 1**: Public website (pages, components, styles)
5. **Implement authentication**: NextAuth setup and member login
6. **Build member dashboard**: Personalized experience and group management
7. **Add admin functionality**: Group and executive dashboards
8. **Test extensively**: Unit tests, E2E tests, accessibility audits
9. **Deploy**: Set up CI/CD pipeline and deploy to Vercel
10. **Monitor**: Configure Sentry, analytics, and uptime monitoring

---

**Last Updated**: June 2026
**Status**: Project initialization phase
