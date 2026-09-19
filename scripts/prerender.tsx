import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '../src/hooks'
import { AppRoutes, PRERENDER_PATHS } from './render-routes'

/**
 * Post-build step: renders every static route to a real HTML string
 * (react-dom/server, no browser involved) and writes it into dist/ so
 * crawlers that don't execute JavaScript (Twitterbot, LinkedIn, Slack,
 * most AI crawlers) see the actual title/description/OG tags/content
 * instead of the bare `<div id="root"></div>` shell.
 *
 * The client still boots normally via createRoot in src/main.tsx and
 * re-renders over this markup on mount — no hydration is attempted, so
 * there's nothing to mismatch.
 *
 * Each route is rendered inside a throwaway <html><head></head><body>
 * wrapper so React 19's built-in metadata hoisting moves the <Seo>
 * component's <title>/<meta>/<link> tags into that <head> during the
 * server render; react-helmet-async's own SSR context extraction only
 * works pre-React-19 and stays empty here. The hoisted head content and
 * the root markup are then pulled out of that throwaway document and
 * spliced into the real dist/index.html template, which keeps the
 * static boilerplate (fonts, theme script, hashed build asset tags).
 */

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const templatePath = join(distDir, 'index.html')

if (!existsSync(templatePath)) {
  console.error(`Prerender: ${templatePath} not found. Run "vite build" first.`)
  process.exit(1)
}

const template = readFileSync(templatePath, 'utf-8')

for (const path of PRERENDER_PATHS) {
  const document = renderToStaticMarkup(
    <html>
      <head></head>
      <body>
        <div id="root">
          <HelmetProvider context={{}}>
            <ThemeProvider>
              <StaticRouter location={path}>
                <AppRoutes />
              </StaticRouter>
            </ThemeProvider>
          </HelmetProvider>
        </div>
      </body>
    </html>
  )

  const headMatch = document.match(/^<html><head>([\s\S]*)<\/head><body>/)
  const rootMatch = document.match(/<div id="root">([\s\S]*)<\/div><\/body><\/html>$/)

  if (!headMatch || !rootMatch) {
    throw new Error(`Prerender: could not parse rendered document for ${path}`)
  }

  const [, hoistedHead] = headMatch
  const [, appHtml] = rootMatch

  const html = template
    // Drop the static fallback <title> from index.html so the page carries
    // exactly one, Seo-managed <title> (React hoists its own regardless).
    .replace(/<title>.*?<\/title>\n?/, '')
    .replace('</head>', `    ${hoistedHead}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath = path === '/' ? join(distDir, 'index.html') : join(distDir, path.slice(1), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf-8')
  console.log(`Prerendered ${path} -> ${outPath.replace(distDir, 'dist')}`)
}
