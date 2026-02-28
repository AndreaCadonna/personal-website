/**
 * Design System - Brutal Minimalism Theme
 *
 * Centralized design tokens for the entire website.
 * Modify these values to update the design system globally.
 */

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
} as const;

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
} as const;

export const borders = {
  width: {
    thin: '2px',
    default: '4px',
    thick: '8px',
  },
  style: 'solid' as const,
  color: colors.black,
  radius: '0px', // Brutal aesthetic - no rounded corners
} as const;

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
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Component variant configurations
 */
export const components = {
  button: {
    base: 'px-6 py-3 font-bold border-4 border-black transition-colors',
    variants: {
      primary: 'bg-black text-white hover:bg-white hover:text-black',
      secondary: 'bg-white text-black hover:bg-black hover:text-white',
      ghost: 'bg-transparent border-2 hover:bg-black hover:text-white',
    },
  },
  card: {
    base: 'border-4 border-black bg-white p-8',
    hoverable: 'hover:bg-black hover:text-white transition-colors cursor-pointer',
  },
  section: {
    base: 'mb-16',
    title: 'border-4 border-black bg-black text-white p-6 mb-4 text-3xl font-bold',
  },
} as const;

/**
 * Chess board styling
 */
export const chess = {
  lightSquare: colors.chessBeige,
  darkSquare: colors.chessGreen,
  border: `${borders.width.default} ${borders.style} ${borders.color}`,
} as const;

// Type exports for TypeScript
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
export type BorderWidth = keyof typeof borders.width;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type Breakpoint = keyof typeof breakpoints;
