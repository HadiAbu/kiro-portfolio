/**
 * Returns a new array sorted by a date-valued key in descending order (newest first).
 * The value `'Present'` is always treated as the most recent.
 *
 * @param items the array to sort (not mutated)
 * @param key   the key whose value is an ISO date string or 'Present'
 */
export function sortByDate<T>(items: readonly T[], key: keyof T): T[] {
  const toTime = (value: unknown): number => {
    if (value === 'Present') return Number.POSITIVE_INFINITY
    if (typeof value === 'string') return new Date(value).getTime()
    return 0
  }

  return [...items].sort((a, b) => toTime(b[key]) - toTime(a[key]))
}
