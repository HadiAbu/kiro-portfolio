import { useCallback, useEffect, useState } from 'react'

/**
 * Reads and writes a typed value to localStorage, keeping React state in sync.
 * Falls back to `defaultValue` when the key is absent or parsing fails.
 *
 * @param key          the localStorage key
 * @param defaultValue the value used when nothing is stored
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') return defaultValue
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? (JSON.parse(item) as T) : defaultValue
    } catch {
      return defaultValue
    }
  }, [key, defaultValue])

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value
        try {
          window.localStorage.setItem(key, JSON.stringify(next))
        } catch {
          // Ignore write errors (e.g. storage disabled or full).
        }
        return next
      })
    },
    [key]
  )

  // Sync across tabs/windows.
  useEffect(() => {
    const handler = (event: StorageEvent) => {
      if (event.key === key) setStoredValue(readValue())
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [key, readValue])

  return [storedValue, setValue]
}
