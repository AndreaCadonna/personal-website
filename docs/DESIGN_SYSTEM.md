# Design System Documentation

## Overview

This design system implements a **Brutal Minimalism** aesthetic - a bold, high-contrast design language characterized by heavy borders, stark black and white colors, and chess-inspired accents.

## Design Philosophy

### Core Principles

1. **Bold & Unapologetic**: Heavy borders and strong contrasts
2. **Grid-Based**: Structured layouts following strict grids
3. **High Contrast**: Maximum readability, no subtle gradients
4. **Chess Integration**: Chess board colors as the primary accent
5. **Functional First**: Design serves content, not the opposite

### Visual Language

- **Brutalist borders**: 4px solid black borders everywhere
- **Binary colors**: Pure black (#000000) and white (#FFFFFF)
- **Chess accents**: Board green (#769656) and beige (#EEEED2)
- **Sharp corners**: No border-radius (except where intentional)
- **Heavy typography**: Bold weights, high contrast

## Design Tokens

### Colors

```typescript
// lib/design/theme.ts
export const colors = {
  // Primary colors
  black: '#000000',
  white: '#FFFFFF',

  // Chess board colors (accents)
  chessGreen: '#769656',    // Dark squares
  chessBeige: '#EEEED2',    // Light squares

  // Functional colors
  error: '#DC2626',
  success: '#16A34A',
  warning: '#CA8A04',
  info: '#2563EB',
};
```

### Spacing

Following a strict 4px baseline grid:

```typescript
export const spacing = {
  0: '0',
  1: '4px',     // 0.25rem
  2: '8px',     // 0.5rem
  3: '12px',    // 0.75rem
  4: '16px',    // 1rem
  6: '24px',    // 1.5rem
  8: '32px',    // 2rem
  12: '48px',   // 3rem
  16: '64px',   // 4rem
  24: '96px',   // 6rem
  32: '128px',  // 8rem
};
```

### Borders

```typescript
export const borders = {
  width: {
    thin: '2px',
    default: '4px',
    thick: '8px',
  },
  style: 'solid',
  color: colors.black,
};
```

### Typography

```typescript
export const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};
```

## Global Styles

### CSS Variables

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-chess-green: #769656;
  --color-chess-beige: #EEEED2;

  /* Spacing */
  --spacing-unit: 4px;

  /* Borders */
  --border-width: 4px;
  --border-style: solid;
  --border-color: var(--color-black);

  /* Typography */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Base Styles

```css
/* Brutal theme base styles */
* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-white);
  color: var(--color-black);
  line-height: 1.5;
}

/* Strong focus states for accessibility */
*:focus-visible {
  outline: 4px solid var(--color-black);
  outline-offset: 2px;
}
```

## Component Patterns

### Buttons

```tsx
// app/components/ui/Button.tsx
import { cn } from '@/lib/utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        'px-6 py-3 font-bold border-4 border-black transition-colors',

        // Variants
        variant === 'primary' && 'bg-black text-white hover:bg-white hover:text-black',
        variant === 'secondary' && 'bg-white text-black hover:bg-black hover:text-white',
        variant === 'ghost' && 'bg-transparent border-2 hover:bg-black hover:text-white'
      )}
    >
      {children}
    </button>
  );
}
```

### Cards

```tsx
// app/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        'border-4 border-black bg-white p-8',
        hoverable && 'hover:bg-black hover:text-white transition-colors cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
```

### Sections

```tsx
// app/components/ui/Section.tsx
interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={cn('mb-16', className)}>
      {title && (
        <div className="border-4 border-black bg-black text-white p-6 mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
```

### Badges

```tsx
// app/components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-sm font-mono border-2 border-black',
        variant === 'default' && 'bg-white text-black',
        variant === 'accent' && 'bg-chess-green text-white'
      )}
    >
      {children}
    </span>
  );
}
```

## Layout Components

### Container

```tsx
// app/components/layout/Container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-8">
      {children}
    </div>
  );
}
```

### Header

```tsx
// app/components/layout/Header.tsx
export function Header() {
  return (
    <header className="border-b-4 border-black">
      <Container>
        <div className="py-8 flex justify-between items-center">
          <div className="text-2xl font-bold">YOUR.NAME</div>
          <nav className="flex gap-6 font-mono text-sm">
            <button className="hover:bg-black hover:text-white px-3 py-1 border-2 border-black transition-colors">
              WORK
            </button>
            {/* More nav items */}
          </nav>
        </div>
      </Container>
    </header>
  );
}
```

### Footer

```tsx
// app/components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t-4 border-black mt-16">
      <Container>
        <div className="py-8 flex justify-between items-center">
          <div className="font-mono text-sm">© 2024 YOUR NAME</div>
          <div className="flex gap-4">
            {/* Social links */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

## Chess-Specific Components

### Chess Board Styling

```tsx
// Chess board uses the design system colors
const chessboardStyles = {
  lightSquareStyle: { backgroundColor: '#EEEED2' },
  darkSquareStyle: { backgroundColor: '#769656' },
  customBoardStyle: {
    border: '4px solid #000000',
  },
};
```

## Responsive Design

### Breakpoints

```typescript
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
```

### Mobile-First Approach

```tsx
// Example responsive component
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

## Tailwind Configuration

```typescript
// tailwind.config.ts (if using Tailwind 3, Tailwind 4 uses CSS)
export default {
  theme: {
    extend: {
      colors: {
        'chess-green': '#769656',
        'chess-beige': '#EEEED2',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
};
```

## Animation & Transitions

### Brutal Transitions

Keep transitions snappy and purposeful:

```css
/* Quick color inversions */
.brutal-hover {
  transition: background-color 150ms ease, color 150ms ease;
}

/* No easing for brutal aesthetic */
.brutal-transform {
  transition: transform 100ms linear;
}
```

### Hover Effects

```tsx
// Standard brutal hover pattern
className="hover:bg-black hover:text-white transition-colors"

// Inversion hover
className="bg-black text-white hover:bg-white hover:text-black transition-colors"
```

## Accessibility

### Color Contrast

- Black on white: 21:1 (WCAG AAA)
- White on black: 21:1 (WCAG AAA)
- White on chess green: 4.8:1 (WCAG AA)

### Focus States

All interactive elements have 4px black outline on focus:

```css
*:focus-visible {
  outline: 4px solid var(--color-black);
  outline-offset: 2px;
}
```

### Screen Reader Support

```tsx
// Example with SR-only text
<button>
  <span className="sr-only">Close menu</span>
  <CloseIcon />
</button>
```

## Usage Examples

### Full Page Layout

```tsx
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Section title="ABOUT">
            <Card>
              <p>Content here...</p>
            </Card>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
```

### Chess-Integrated Section

```tsx
<Section title="CHESS PUZZLES">
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3>Solve tactical problems</h3>
      <Button variant="primary">START PUZZLE</Button>
    </div>
    <div className="border-4 border-black">
      <MiniBoard size={300} />
    </div>
  </div>
</Section>
```

## Do's and Don'ts

### ✅ Do

- Use 4px borders for major elements
- Stick to black/white with chess accent colors
- Use bold typography for emphasis
- Create strong visual hierarchy
- Embrace the grid
- Use high contrast

### ❌ Don't

- Use subtle gradients or shadows
- Add unnecessary border-radius
- Use muted or pastel colors
- Create complex nested borders
- Overcomplicate layouts
- Reduce contrast for "elegance"

## Component Checklist

When creating a new component:

- [ ] Uses design tokens from `lib/design/theme.ts`
- [ ] Follows brutal aesthetic (borders, colors)
- [ ] Has proper TypeScript types
- [ ] Responsive (mobile-first)
- [ ] Accessible (keyboard, screen readers)
- [ ] Uses `cn()` utility for className merging
- [ ] Documented with examples

---

This design system ensures consistency across the entire website while maintaining the bold, distinctive brutal minimalism aesthetic.
