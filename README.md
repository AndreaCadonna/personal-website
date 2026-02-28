# Personal Portfolio Website

A modern, brutalist-inspired personal portfolio website built with Next.js 16, featuring interactive chess elements and a bold design aesthetic.

## 🎯 Project Goals

- **Single-page digital resume** as the initial implementation
- **Scalable architecture** ready to grow into a multi-page website
- **Modular chess system** integrated throughout the site
- **Production-quality code** following Next.js best practices
- **Brutal minimalism design** with strong visual identity

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📚 Documentation

Comprehensive documentation is available in the following files:

- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Project structure and architectural decisions
- **[DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)** - Design tokens, components, and styling guidelines
- **[DEVELOPMENT.md](./docs/DEVELOPMENT.md)** - Development setup, conventions, and best practices
- **[CHESS_SYSTEM.md](./docs/CHESS_SYSTEM.md)** - Chess module architecture and usage

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Chess Engine:** chess.js
- **Chess UI:** react-chessboard
- **Chess Data:** Lichess API
- **React:** 19.2.0

## 🎨 Design Philosophy

**Brutal Minimalism** - A design approach characterized by:
- Heavy 4px black borders
- Stark black and white color scheme
- Chess board colors as accents (#769656 green, #EEEED2 beige)
- Bold typography with high contrast
- Grid-based layouts
- Black/white inversion hover effects

See [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) for complete design guidelines.

## 📁 Project Structure

```
personal-website/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── page.tsx           # Homepage (digital resume)
│   └── layout.tsx         # Root layout
├── lib/                   # Core logic and utilities
│   ├── chess/            # Chess engine and logic
│   ├── design/           # Design system tokens
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── data/                 # Static content
├── public/               # Static assets
└── docs/                 # Documentation
```

See [ARCHITECTURE.md](./docs/ARCHITECTURE.md) for detailed structure explanation.

## 🎮 Chess System

The chess system is fully modular and reusable across the website:

- **Logic Layer:** Pure functions, game engine, API integration
- **Hook Layer:** State management with custom React hooks
- **UI Layer:** Flexible components for different use cases

Chess puzzles are fetched from the Lichess API on-demand.

See [CHESS_SYSTEM.md](./docs/CHESS_SYSTEM.md) for complete documentation.

## 📅 Development Phases

### Phase 1: Foundation (Current)
- Fix critical issues
- Set up folder structure
- Create design system
- Extract chess logic into modular components

### Phase 2: Digital Resume
- Build layout components
- Create resume sections
- Integrate chess elements
- Implement responsive design

### Phase 3: Polish & Features
- Add Lichess API integration
- Error boundaries and loading states
- Accessibility improvements
- SEO optimization

## 🤝 Contributing

This is a personal project, but the architecture and patterns can serve as reference for similar projects.

## 📝 License

Private project - All rights reserved

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lichess API](https://lichess.org/api)
- [chess.js](https://github.com/jhlywa/chess.js)

---

**Built with craftsmanship** ♟️
