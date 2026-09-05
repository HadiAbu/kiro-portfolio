# Build Tools and Linting Configuration

## Summary

This document describes the build tools and linting configuration completed for the portfolio website project.

## Installed Packages

### Linting & Formatting
- **prettier** - Code formatter
- **eslint-config-prettier** - Disables ESLint rules that conflict with Prettier
- **eslint-plugin-prettier** - Runs Prettier as an ESLint rule
- **eslint-plugin-react** - React-specific linting rules
- **@typescript-eslint/parser** - TypeScript parser for ESLint
- **@typescript-eslint/eslint-plugin** - TypeScript-specific linting rules

### Build Tools
- **terser** - JavaScript minifier for production builds

## Configuration Files

### 1. ESLint Configuration (`eslint.config.js`)

Uses the new ESLint flat config format (required for ESLint 10+):

**Features:**
- TypeScript support with type-aware linting
- React and React Hooks rules
- Prettier integration
- Custom rules for:
  - Unused variables (with underscore prefix ignore)
  - Console statements (warnings, allows warn/error)
  - React in JSX scope (disabled for React 17+)
  - Prop types validation (disabled, using TypeScript)

**Ignored directories:** `dist`, `node_modules`, `build`, `.git`

### 2. Prettier Configuration (`.prettierrc`)

**Settings:**
- No semicolons (`semi: false`)
- Single quotes (`singleQuote: true`)
- 2-space indentation
- 100 character line width
- ES5 trailing commas
- Arrow function parentheses always
- LF line endings
- Bracket spacing enabled
- Brackets on same line disabled

### 3. Prettier Ignore (`.prettierignore`)

Excludes:
- `node_modules`
- `dist`, `build`
- `.git`
- `coverage`
- Lock files
- Minified files

### 4. Vite Configuration (`vite.config.ts`)

**Build Optimizations:**
- **Minification:** Terser minifier enabled
- **Code Splitting:**
  - Vendor chunk: React & React DOM
  - Router chunk: React Router DOM
- **Chunk Size Warning:** 1000 KB limit
- **Dependency Optimization:** Pre-bundling for React packages

**Path Aliases:**
- `@` → `./src`
- `@components` → `./src/components`
- `@hooks` → `./src/hooks`
- `@utils` → `./src/utils`
- `@data` → `./src/data`
- `@types` → `./src/types`
- `@styles` → `./src/styles`

## NPM Scripts

### Available Commands

```bash
# Development
npm run dev                # Start development server

# Building
npm run build             # Build for production (TypeScript + Vite)

# Linting
npm run lint              # Check for linting errors
npm run lint:fix          # Auto-fix linting errors

# Formatting
npm run format            # Format source code
npm run format:check      # Check formatting without modifying files

# Preview
npm run preview           # Preview production build locally
```

## Usage Examples

### Format all source files
```bash
npm run format
```

### Check for linting issues
```bash
npm run lint
```

### Auto-fix linting issues
```bash
npm run lint:fix
```

### Build for production
```bash
npm run build
```

## Build Output

The production build generates:
- Optimized HTML, CSS, and JavaScript
- Code-split chunks (vendor, router)
- Minified assets with gzip size reporting
- Assets placed in `dist/` directory

**Example Build Output:**
```
dist/index.html                   0.54 kB │ gzip:  0.33 kB
dist/assets/index-[hash].css      4.10 kB │ gzip:  1.47 kB
dist/assets/index-[hash].js       5.00 kB │ gzip:  1.68 kB
dist/assets/vendor-[hash].js    189.30 kB │ gzip: 60.10 kB
```

## Requirements Satisfied

✅ **Requirement 8.2** - Performance Optimization
- Minification enabled
- Code splitting configured
- Dependency optimization
- Chunk size monitoring

✅ **Requirement 8.5** - Build Configuration
- ESLint configured with TypeScript support
- Prettier configured for consistent formatting
- Lint and format scripts added to package.json
- Build optimizations applied

## Static Site Generation (SSG)

For SSG configuration, see `SSG_SETUP.md` which provides:
- React Router v7 framework mode setup instructions
- Alternative `vite-react-ssg` configuration
- Deployment considerations

## Notes

- ESLint 10 uses the new flat config format (`eslint.config.js`)
- Some packages required `--legacy-peer-deps` due to ESLint 10 compatibility
- Terser is an optional dependency in Vite 3+ and must be explicitly installed
- Build configuration uses function-based code splitting for better flexibility

## Troubleshooting

### ESLint/Prettier conflicts
Run `npm run lint:fix` to auto-fix formatting issues detected by ESLint.

### Build failures
Ensure all dependencies are installed:
```bash
npm install
```

### TypeScript errors
Run type checking separately:
```bash
npx tsc --noEmit
```
