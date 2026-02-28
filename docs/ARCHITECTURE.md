# Architecture Documentation

## Overview

This document describes the architectural decisions, folder structure, and design patterns used in this personal portfolio website.

## Core Principles

1. **Server-first**: Use React Server Components by default, client components only when needed
2. **Modular design**: Each feature is self-contained and reusable
3. **Type-safe**: Strict TypeScript throughout
4. **Scalable**: Structure supports growth from 1 page to many pages
5. **Separation of concerns**: Logic, UI, and data are clearly separated

## Folder Structure

```
personal-website/
├── app/                              # Next.js App Router
│   ├── (root)/                       # Route group (future)
│   │   └── page.tsx                  # Homepage
│   │
│   ├── components/                   # Shared components
│   │   ├── layout/                   # Site-wide layout components
│   │   │   ├── Header.tsx            # Navigation header
│   │   │   ├── Footer.tsx            # Site footer
│   │   │   └── Container.tsx         # Max-width container wrapper
│   │   │
│   │   ├── chess/                    # Chess UI components
│   │   │   ├── ChessBoard.tsx        # Pure board display (server/client)
│   │   │   ├── PuzzleBoard.tsx       # Interactive puzzle (client)
│   │   │   ├── MiniBoard.tsx         # Small decorative version
│   │   │   └── PieceDisplay.tsx      # Individual piece display
│   │   │
│   │   ├── resume/                   # Resume-specific components
│   │   │   ├── Hero.tsx              # Hero section
│   │   │   ├── Experience.tsx        # Work experience
│   │   │   ├── Skills.tsx            # Technical skills
│   │   │   └── Projects.tsx          # Project showcase
│   │   │
│   │   └── ui/                       # Reusable UI primitives
│   │       ├── Button.tsx            # Brutal-styled button
│   │       ├── Card.tsx              # Brutal-styled card
│   │       ├── Badge.tsx             # Skill badges, tags
│   │       └── Section.tsx           # Page section wrapper
│   │
│   ├── layout.tsx                    # Root layout (metadata, fonts)
│   ├── globals.css                   # Global styles & Tailwind
│   ├── page.tsx                      # Homepage (digital resume)
│   └── not-found.tsx                 # 404 page
│
├── lib/                              # Core logic & utilities
│   ├── chess/                        # Chess engine logic
│   │   ├── engine.ts                 # Chess.js wrapper & utilities
│   │   ├── puzzle.ts                 # Puzzle validation logic
│   │   ├── moves.ts                  # Move utilities (UCI, highlights)
│   │   └── lichess.ts                # Lichess API client
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useChessGame.ts           # Basic chess game state
│   │   ├── useChessPuzzle.ts         # Puzzle-specific logic
│   │   └── useMediaQuery.ts          # Responsive utilities
│   │
│   ├── design/                       # Design system
│   │   ├── theme.ts                  # Design tokens (colors, spacing)
│   │   └── components.ts             # Component variant configs
│   │
│   ├── types/                        # TypeScript definitions
│   │   ├── chess.ts                  # Chess-related types
│   │   ├── resume.ts                 # Resume content types
│   │   └── index.ts                  # Barrel export
│   │
│   └── utils/                        # Utility functions
│       ├── cn.ts                     # Tailwind class merger (clsx + twMerge)
│       └── constants.ts              # App-wide constants
│
├── data/                             # Static content (before CMS/API)
│   └── resume.ts                     # Resume data (type-safe)
│
├── public/                           # Static assets
│   ├── images/                       # Images
│   │   ├── profile/                  # Profile photos
│   │   └── projects/                 # Project screenshots
│   └── fonts/                        # Custom fonts (if needed)
│
└── docs/                             # Documentation
    ├── ARCHITECTURE.md               # This file
    ├── DESIGN_SYSTEM.md              # Design guidelines
    ├── DEVELOPMENT.md                # Dev setup & conventions
    └── CHESS_SYSTEM.md               # Chess module docs
```

## Architectural Layers

### 1. Presentation Layer (`app/components/`)

**Responsibility:** UI components, visual presentation

**Patterns:**
- Server Components by default for static content
- Client Components (marked with `"use client"`) for interactivity
- Props-based API for flexibility
- Design system tokens for consistent styling

**Example:**
```tsx
// Server Component (default)
export function ExperienceSection({ jobs }: { jobs: Job[] }) {
  return (
    <Section>
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </Section>
  );
}

// Client Component (interactive)
"use client";
export function PuzzleBoard({ puzzleId }: { puzzleId: string }) {
  const { position, makeMove, status } = useChessPuzzle(puzzleId);
  return <ChessBoard position={position} onMove={makeMove} />;
}
```

### 2. Logic Layer (`lib/`)

**Responsibility:** Business logic, data manipulation, API calls

**Patterns:**
- Pure functions where possible
- Framework-agnostic (can be used outside React)
- Type-safe with TypeScript
- Separated by domain (chess, design, etc.)

**Example:**
```tsx
// lib/chess/puzzle.ts
export function validatePuzzleMove(
  move: string,
  solution: string[],
  stepIndex: number
): boolean {
  return move === solution[stepIndex];
}
```

### 3. Hook Layer (`lib/hooks/`)

**Responsibility:** State management, side effects

**Patterns:**
- Custom hooks for reusable stateful logic
- Single Responsibility Principle
- Composable (hooks can use other hooks)

**Example:**
```tsx
// lib/hooks/useChessGame.ts
export function useChessGame(initialFen?: string) {
  const [position, setPosition] = useState(initialFen || STARTING_FEN);
  const gameRef = useRef(new Chess(initialFen));

  const makeMove = useCallback((move: string) => {
    // Logic here
  }, []);

  return { position, makeMove, undo, reset };
}
```

### 4. Data Layer (`data/`, `lib/chess/lichess.ts`)

**Responsibility:** Data fetching, storage, transformation

**Current:** Static TypeScript files
**Future:** API routes, database, CMS

**Example:**
```tsx
// data/resume.ts
export const resumeData: Resume = {
  name: "Your Name",
  title: "Software Engineer",
  experience: [
    // ...
  ],
};
```

## Routing Strategy

### Current (Phase 1)
- Single page: `/` (homepage/digital resume)
- Folder structure prepared for expansion

### Future (Phase 2+)
```
app/
├── page.tsx                    # Homepage
├── about/page.tsx              # About page
├── projects/
│   ├── page.tsx                # Projects listing
│   └── [slug]/page.tsx         # Individual project
├── chess/
│   ├── page.tsx                # Chess puzzles home
│   └── [puzzleId]/page.tsx     # Individual puzzle
└── contact/page.tsx            # Contact page
```

## Server vs Client Components

### Use Server Components for:
- Static content (resume sections, about text)
- SEO-critical pages
- Data fetching from APIs
- Layout components without interactivity

### Use Client Components for:
- Interactive elements (chess board, forms)
- Browser APIs (localStorage, window)
- React hooks (useState, useEffect)
- Event handlers (onClick, onSubmit)

### Component Boundaries

```tsx
// app/page.tsx (Server Component)
export default function HomePage() {
  const resumeData = getResumeData(); // Can fetch directly

  return (
    <>
      <Hero data={resumeData.hero} />        {/* Server */}
      <Experience jobs={resumeData.jobs} />  {/* Server */}
      <PuzzleBoard puzzleId="daily" />       {/* Client */}
    </>
  );
}
```

## Data Flow

```
┌─────────────────────────────────────────────┐
│  User Interaction (click, drag)             │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  UI Component (app/components/)             │
│  - Calls hook or handler                    │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  Custom Hook (lib/hooks/)                   │
│  - Manages state                            │
│  - Calls logic functions                    │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  Logic Layer (lib/chess/, lib/utils/)       │
│  - Pure business logic                      │
│  - API calls                                │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  Data Layer (Lichess API, data files)       │
└─────────────────────────────────────────────┘
```

## Chess System Architecture

See [CHESS_SYSTEM.md](./CHESS_SYSTEM.md) for detailed documentation.

**Summary:**
- **3-layer architecture:** Logic → Hooks → UI
- **Modular components:** Flexible for different use cases
- **Lichess API integration:** Fetch puzzles on-demand
- **Type-safe:** Full TypeScript coverage

## Design System Architecture

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete guidelines.

**Summary:**
- **Design tokens:** Single source of truth in `lib/design/theme.ts`
- **CSS variables:** Global brutal theme in `globals.css`
- **Component variants:** Reusable configurations
- **Tailwind extension:** Custom brutal utilities

## Future Expansion

### Adding a New Page

1. Create folder: `app/new-page/`
2. Add page: `app/new-page/page.tsx`
3. Add to navigation: Update `Header.tsx`
4. Create components if needed: `app/components/new-page/`

### Adding a New Feature

1. Logic: `lib/feature-name/`
2. Hooks: `lib/hooks/useFeature.ts`
3. Types: `lib/types/feature.ts`
4. Components: `app/components/feature-name/`

### Adding an API Route

```tsx
// app/api/feature/route.ts
export async function GET(request: Request) {
  // Server-side logic
  return Response.json({ data });
}
```

## Performance Considerations

1. **Server Components**: Default to server rendering for better performance
2. **Image Optimization**: Use Next.js `<Image>` component
3. **Code Splitting**: Automatic with Next.js App Router
4. **Font Loading**: Using `next/font` for optimal font loading
5. **CSS**: Tailwind with PostCSS for minimal CSS bundle

## Type Safety

- **Strict TypeScript**: All files use strict mode
- **No `any` types**: Explicit typing throughout
- **Type definitions**: Centralized in `lib/types/`
- **Props validation**: All components have typed props

## Error Handling

- **Error boundaries**: Wrap client components (future)
- **Loading states**: Suspense boundaries (future)
- **404 page**: Custom `not-found.tsx`
- **API errors**: Try-catch with user-friendly messages

## Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: For interactive elements
- **Keyboard navigation**: All interactive elements accessible
- **Color contrast**: Brutal design naturally high contrast

## SEO

- **Metadata**: Defined in layout.tsx and page.tsx
- **Semantic structure**: Proper HTML5 elements
- **Server rendering**: Critical content server-rendered
- **Performance**: Fast load times with Next.js optimization

---

This architecture is designed to scale from a single page to a full portfolio site while maintaining code quality and developer experience.
