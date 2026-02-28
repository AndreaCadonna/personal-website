# Development Guide

## Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or pnpm/yarn)
- **Git**: For version control
- **VS Code**: Recommended editor (optional)

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd personal-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## Development Workflow

### Running the Project

```bash
# Development mode (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

### Development Server

- **URL**: `http://localhost:3000`
- **Hot Reload**: Automatic on file changes
- **Error Overlay**: Shows build/runtime errors in browser
- **Fast Refresh**: Preserves React state on edits

## Code Style & Conventions

### TypeScript

**Strict Mode Enabled**

```typescript
// ✅ Good - Explicit types
interface UserProps {
  name: string;
  age: number;
}

export function User({ name, age }: UserProps) {
  return <div>{name}, {age}</div>;
}

// ❌ Bad - No types
export function User({ name, age }: any) {
  return <div>{name}, {age}</div>;
}
```

**No `any` Types**

```typescript
// ✅ Good - Use proper types or unknown
function processData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  }
}

// ❌ Bad - Using any
function processData(data: any): void {
  console.log(data.toUpperCase());
}
```

### File Naming

```
Components (PascalCase):
  ✅ Button.tsx
  ✅ ChessBoard.tsx
  ❌ button.tsx
  ❌ chess-board.tsx

Utilities (camelCase):
  ✅ cn.ts
  ✅ formatDate.ts
  ❌ CN.ts
  ❌ FormatDate.ts

Types (camelCase):
  ✅ chess.ts
  ✅ resume.ts
  ❌ Chess.ts
```

### Component Structure

**Server Component (default)**

```tsx
// app/components/resume/Experience.tsx
import { Job } from '@/lib/types/resume';

interface ExperienceProps {
  jobs: Job[];
}

export function Experience({ jobs }: ExperienceProps) {
  return (
    <section>
      {jobs.map((job) => (
        <article key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </article>
      ))}
    </section>
  );
}
```

**Client Component**

```tsx
// app/components/chess/PuzzleBoard.tsx
"use client";

import { useState } from 'react';
import { useChessPuzzle } from '@/lib/hooks/useChessPuzzle';

interface PuzzleBoardProps {
  puzzleId: string;
}

export function PuzzleBoard({ puzzleId }: PuzzleBoardProps) {
  const { position, makeMove, status } = useChessPuzzle(puzzleId);

  return (
    <div>
      {/* Interactive chess board */}
    </div>
  );
}
```

### Import Order

```typescript
// 1. React/Next.js imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

// 3. Internal imports (using @/ alias)
import { useChessGame } from '@/lib/hooks/useChessGame';
import { validateMove } from '@/lib/chess/puzzle';
import { Button } from '@/app/components/ui/Button';
import type { Move } from '@/lib/types/chess';

// 4. Styles (if any)
import styles from './Component.module.css';
```

### Path Aliases

Always use `@/` alias for internal imports:

```typescript
// ✅ Good - Using alias
import { Button } from '@/app/components/ui/Button';
import { colors } from '@/lib/design/theme';

// ❌ Bad - Relative paths
import { Button } from '../../../components/ui/Button';
import { colors } from '../../lib/design/theme';
```

### CSS/Styling

**Tailwind First**

```tsx
// ✅ Good - Tailwind classes
<div className="border-4 border-black p-8 hover:bg-black hover:text-white">
  Content
</div>

// ❌ Bad - Inline styles (unless dynamic)
<div style={{ border: '4px solid black', padding: '32px' }}>
  Content
</div>
```

**Use cn() Utility**

```tsx
import { cn } from '@/lib/utils/cn';

// ✅ Good - Conditional classes with cn()
<button
  className={cn(
    'px-6 py-3 border-4 border-black',
    isActive && 'bg-black text-white',
    disabled && 'opacity-50 cursor-not-allowed'
  )}
>
  Click me
</button>

// ❌ Bad - String concatenation
<button
  className={`px-6 py-3 border-4 border-black ${isActive ? 'bg-black text-white' : ''}`}
>
  Click me
</button>
```

## Git Workflow

### Branch Naming

```bash
# Feature branches
git checkout -b feature/chess-puzzle-solver
git checkout -b feature/about-page

# Bug fixes
git checkout -b fix/broken-imports
git checkout -b fix/mobile-responsive

# Documentation
git checkout -b docs/update-readme
```

### Commit Messages

Follow conventional commits:

```bash
# Format: <type>(<scope>): <message>

# Examples
git commit -m "feat(chess): add Lichess API integration"
git commit -m "fix(ui): correct border width on cards"
git commit -m "docs: add development guide"
git commit -m "refactor(hooks): extract chess logic to custom hook"
git commit -m "style(design): update brutal theme colors"
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Before Committing

```bash
# 1. Lint your code
npm run lint

# 2. Type check
npx tsc --noEmit

# 3. Test build
npm run build

# 4. Review changes
git diff

# 5. Commit
git add .
git commit -m "feat: your message"
```

## Component Development

### Creating a New Component

1. **Create component file**

```bash
# UI components
touch app/components/ui/NewComponent.tsx

# Feature components
touch app/components/feature/NewComponent.tsx
```

2. **Write component with types**

```tsx
// app/components/ui/NewComponent.tsx
interface NewComponentProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export function NewComponent({
  title,
  children,
  variant = 'default'
}: NewComponentProps) {
  return (
    <div className={cn(
      'border-4 border-black p-8',
      variant === 'accent' && 'bg-chess-green'
    )}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

3. **Export from barrel file (optional)**

```typescript
// app/components/ui/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { NewComponent } from './NewComponent';
```

### Component Checklist

Before considering a component complete:

- [ ] TypeScript types defined
- [ ] Props interface exported
- [ ] Uses design system tokens
- [ ] Responsive design implemented
- [ ] Accessible (keyboard, ARIA)
- [ ] Follows brutal design aesthetic
- [ ] No console errors/warnings
- [ ] Works in both dev and production build

## Custom Hooks Development

### Hook Structure

```tsx
// lib/hooks/useExample.ts
import { useState, useCallback } from 'react';

export function useExample(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const updateValue = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  const resetValue = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    updateValue,
    resetValue,
  };
}
```

### Hook Checklist

- [ ] Proper TypeScript types
- [ ] Uses useCallback for functions (prevent re-renders)
- [ ] Uses useMemo for expensive computations
- [ ] Proper dependency arrays
- [ ] Returns object (not array) for clarity
- [ ] Documented with JSDoc comments

## Adding a New Page

```bash
# 1. Create page directory
mkdir app/new-page

# 2. Create page file
touch app/new-page/page.tsx
```

```tsx
// app/new-page/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Page | Your Name',
  description: 'Page description',
};

export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
    </main>
  );
}
```

```tsx
// 3. Add to navigation
// app/components/layout/Header.tsx
<nav>
  <Link href="/new-page">New Page</Link>
</nav>
```

## Environment Variables

```bash
# .env.local (create this file, not tracked in git)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
LICHESS_API_KEY=your_api_key_here
```

```typescript
// Usage in code
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const apiKey = process.env.LICHESS_API_KEY; // Server-side only
```

**Rules:**
- `NEXT_PUBLIC_*` - Exposed to browser
- Other vars - Server-side only
- Never commit `.env.local` to git
- Use `.env.example` for documentation

## Debugging

### Development Tools

```tsx
// React DevTools
// Install browser extension: React Developer Tools

// Next.js debugging
// Add to next.config.ts
const nextConfig = {
  reactStrictMode: true, // Catches issues early
};
```

### Common Issues

**Issue: "Cannot find module '@/...'"**
```typescript
// Solution: Check tsconfig.json has path alias
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Issue: "Hydration mismatch"**
```tsx
// Problem: Server/client rendering differs
// Solution: Use 'use client' or useEffect for client-only code

"use client";
export function ClientOnly() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>Client content</div>;
}
```

**Issue: Build fails but dev works**
```bash
# Solution: Always test production builds
npm run build
npm start
```

## Performance Best Practices

### Image Optimization

```tsx
import Image from 'next/image';

// ✅ Good - Using Next.js Image
<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
  priority={true} // For above-the-fold images
/>

// ❌ Bad - Regular img tag
<img src="/images/profile.jpg" alt="Profile" />
```

### Code Splitting

```tsx
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Server vs Client Components

```tsx
// ✅ Good - Server component for static content
export function StaticSection() {
  return <div>Static content</div>;
}

// ✅ Good - Client component only when needed
"use client";
export function InteractiveSection() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

## Testing (Future)

### Directory Structure

```
app/components/ui/
├── Button.tsx
└── Button.test.tsx

lib/chess/
├── puzzle.ts
└── puzzle.test.ts
```

### Example Test (when implemented)

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## VS Code Setup (Recommended)

### Extensions

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript Importer** - Auto-import suggestions

### Settings

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Useful Commands

```bash
# Find all TODOs in code
grep -r "TODO" app/ lib/

# Check bundle size
npm run build
# Look for large chunks in .next/

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Type check watch mode
npx tsc --noEmit --watch
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

## Getting Help

If you encounter issues:

1. Check the documentation (this file and others in `/docs`)
2. Search Next.js GitHub issues
3. Check the console for error messages
4. Try clearing cache and rebuilding

---

Happy coding! ♟️
