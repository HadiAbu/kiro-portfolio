# Static Site Generation (SSG) Setup Guide

## Overview

This project is configured with React Router v7 and Vite. For static site generation, you have two main options:

## Option 1: React Router v7 Framework Mode (Recommended)

React Router v7 has built-in SSG support when used in framework mode. To enable this:

### 1. Install React Router Dev Tools

```bash
npm install -D @react-router/dev
```

### 2. Create `react-router.config.ts`

```typescript
import type { Config } from "@react-router/dev/config";

export default {
  // Disable runtime SSR for static deployment
  ssr: false,
  
  // Enable pre-rendering for all static routes
  prerender: true,
  
  // Or specify specific paths:
  // prerender: ["/", "/resume"],
  
  // For dynamic routes, use a function:
  // async prerender({ getStaticPaths }) {
  //   return [
  //     ...getStaticPaths(),
  //   ];
  // },
} satisfies Config;
```

### 3. Update Build Script

```json
{
  "scripts": {
    "build": "react-router build"
  }
}
```

### 4. Configure Routes

Create a `routes.ts` file to define your routes using React Router v7's route configuration format.

## Option 2: vite-react-ssg (Alternative)

If you prefer to continue using standard Vite setup:

### 1. Install (with peer dependency workaround)

```bash
npm install -D vite-react-ssg --legacy-peer-deps
```

### 2. Update package.json

```json
{
  "scripts": {
    "build": "vite-react-ssg build"
  }
}
```

### 3. Update main.tsx

```typescript
import { ViteReactSSG } from 'vite-react-ssg'
import routes from './App.tsx'

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, routes, isClient, initialState }) => {
    // Custom setup if needed
  },
)
```

## Current Configuration

The project currently uses:
- **Vite** for build tooling with optimizations configured
- **React Router v7** as a library (not framework mode)
- **Code splitting** for vendor and router chunks
- **Minification** with Terser (console.logs removed in production)

## Performance Optimizations Already Applied

✅ Code splitting (vendor, router chunks)
✅ Minification with Terser
✅ Console.log removal in production
✅ Optimized dependency pre-bundling
✅ Chunk size warnings configured

## Next Steps

1. Choose SSG strategy (Option 1 or 2)
2. Implement based on project needs
3. Configure deployment server to handle client-side routing
4. Test performance with Lighthouse

## Deployment Considerations

For static hosting, ensure your server is configured to:
- Serve `index.html` for all routes (SPA fallback)
- Enable gzip/brotli compression
- Set appropriate cache headers
- Support HTTPS

### Example nginx configuration

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## References

- [React Router v7 Pre-rendering](https://reactrouter.com/how-to/pre-rendering)
- [React Router v7 SPA Mode](https://reactrouter.com/how-to/spa)
- [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)
