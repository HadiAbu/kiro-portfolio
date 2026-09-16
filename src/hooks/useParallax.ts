import { useEffect, useRef } from 'react'

/**
 * Applies a small, capped scroll-linked vertical translate to a ref'd element.
 * Disabled under prefers-reduced-motion and below `minWidth`, where the
 * element sits in a stacked mobile layout and parallax would just read as jank.
 */
export function useParallax<T extends HTMLElement>(maxOffset = 14, minWidth = 900) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let ticking = false

    const update = () => {
      ticking = false
      if (window.innerWidth < minWidth) {
        node.style.transform = ''
        return
      }
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter
      const offset = Math.max(-maxOffset, Math.min(maxOffset, distanceFromCenter * -0.04))
      node.style.transform = `translateY(${offset}px)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [maxOffset, minWidth])

  return ref
}
