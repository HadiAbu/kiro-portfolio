/**
 * Formats an ISO date string for display.
 * Returns "Present" unchanged.
 *
 * @example formatDate('2024-06-01') → 'Jun 2024'
 * @example formatDate('Present')   → 'Present'
 */
export function formatDate(isoDate: string): string {
  if (isoDate === 'Present') return 'Present'

  const date = new Date(isoDate)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

/**
 * Formats a date range from two ISO date strings.
 *
 * @example formatDateRange('2021-01-01', '2023-01-01') → 'Jan 2021 – Jan 2023'
 * @example formatDateRange('2023-01-01', 'Present')    → 'Jan 2023 – Present'
 */
export function formatDateRange(startDate: string, endDate: string | 'Present'): string {
  return `${formatDate(startDate)} – ${formatDate(endDate)}`
}
