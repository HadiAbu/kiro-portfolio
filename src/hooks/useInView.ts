import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has scrolled into view, once. Falls back to
 * "already in view" when IntersectionObserver is unavailable so content
 * never gets stuck hidden.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
    // `options` is intentionally excluded: callers pass an inline object, and
    // this should observe once on mount rather than re-subscribe every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}
