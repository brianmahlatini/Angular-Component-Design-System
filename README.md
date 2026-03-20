# Angular Component Design System

This repository is a **library-first Angular workspace** that showcases how to build a scalable, reusable UI component system (similar in spirit to Angular Material) from the ground up. Instead of a single app, the workspace contains a **publishable component library** (`projects/acds`) and a **demo playground app** (`projects/playground`) used to validate and showcase the components in real time. Source code intentionally lives under `projects/` (there is no root `src/`), which is the standard structure for Angular libraries.

**What this project is about**
- Building a cohesive UI system with consistent behavior, styling, and accessibility.
- Providing a theming layer via design tokens + CSS variables that can be swapped per brand or product.
- Documenting components with Storybook so usage and variants are visible to any team.
- Proving clean architecture: standalone components, clear public API, and CDK-driven behaviors.

**What you get out of the box**
- Core UI primitives (Button, Badge, Tabs, Accordion, Modal, Drawer, Tooltip, Popover).
- Form foundations (Input, Select, Autocomplete, Datepicker, MultiSelect).
- Data building blocks (DataTable, Pagination, Tree View).
- A working playground app and Storybook setup for demo + documentation.

## What This Proves
- Scalable Angular architecture for a component library.
- A theming system based on design tokens + CSS variables.
- Accessibility-first UI built on Angular CDK.
- Storybook-driven documentation and visual testing.
- Unit testing for foundational components.

## Tech Stack
- Angular 17
- Tailwind CSS
- Storybook
- Angular CDK
- TypeScript

## Project Structure
**Key folders**
- `projects/acds/` — Component library source (publishable)
- `projects/playground/` — Demo application for local development
- `.storybook/` — Storybook configuration

## Full Tree (Important Files)
```
angular-component-design-system
├─ .storybook
│  ├─ main.ts
│  ├─ preview.ts
│  └─ tsconfig.json
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  └─ tasks.json
├─ projects
│  ├─ acds
│  │  ├─ ng-package.json
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ tsconfig.lib.json
│  │  ├─ tsconfig.lib.prod.json
│  │  └─ src
│  │     ├─ public-api.ts
│  │     └─ lib
│  │        ├─ components
│  │        │  ├─ accordion
│  │        │  ├─ autocomplete
│  │        │  ├─ badge
│  │        │  ├─ button
│  │        │  ├─ data-table
│  │        │  ├─ datepicker
│  │        │  ├─ drawer
│  │        │  ├─ input
│  │        │  ├─ modal
│  │        │  ├─ multi-select
│  │        │  ├─ pagination
│  │        │  ├─ popover
│  │        │  ├─ select
│  │        │  ├─ tabs
│  │        │  ├─ tooltip
│  │        │  └─ tree-view
│  │        └─ theme
│  │           ├─ theme.css
│  │           ├─ theme.service.ts
│  │           └─ theme.tokens.ts
│  └─ playground
│     ├─ src
│     │  ├─ app
│     │  ├─ assets
│     │  ├─ index.html
│     │  ├─ main.ts
│     │  └─ styles.css
│     └─ tsconfig.app.json
├─ .dockerignore
├─ Dockerfile
├─ angular.json
├─ package.json
├─ package-lock.json
├─ postcss.config.js
├─ tailwind.config.js
└─ tsconfig.json
```

## Components (Current)
UI
- Button
- Badge
- Tooltip
- Popover
- Modal
- Drawer
- Tabs
- Accordion

Forms
- Input
- Select
- Autocomplete
- Datepicker
- MultiSelect

Data
- DataTable
- Pagination
- Tree View

Advanced
- Theming system
- Accessibility support
- Component documentation
- Unit tests

## Getting Started
Install dependencies:
```bash
npm install
```

Run the playground app:
```bash
npm start
```

Run Storybook:
```bash
npm run storybook
```

Build Storybook:
```bash
npm run build:storybook
```

## Docker
Build and run Storybook as a static site:
```bash
docker build -t acds-storybook .
docker run -p 8080:80 acds-storybook
```

## Notes
- Theme tokens live in `projects/acds/src/lib/theme/theme.tokens.ts`
- CSS variables are defined in `projects/acds/src/lib/theme/theme.css`

---
Built as a senior-level Angular component system foundation.
