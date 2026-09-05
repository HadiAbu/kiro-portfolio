import React from 'react'
import styles from './Button.module.css'

/**
 * Button Component
 *
 * Provides accessible, interactive button with multiple variants and states.
 *
 * Requirements:
 * - 5.5: Hero section displays call-to-action button
 * - 5.6: Button navigates to contact/services section
 * - 11.3: Full keyboard navigation support
 * - 11.4: Visible focus indicators (WCAG AA: 2px outline with 2px offset)
 *
 * @component
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'outline'
  /** Button size */
  size?: 'small' | 'medium' | 'large'
  /** Loading state - shows spinner and disables interaction */
  loading?: boolean
  /** Full width button */
  fullWidth?: boolean
  /** Icon element to display before text */
  icon?: React.ReactNode
  /** Children content (button text) */
  children: React.ReactNode
}

/**
 * Button component with variants: primary, secondary, outline
 * Supports disabled and loading states with WCAG AA compliant focus indicators
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      loading = false,
      fullWidth = false,
      disabled = false,
      icon,
      className = '',
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      loading && styles.loading,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={buttonClasses}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true" role="status">
            <span className={styles.spinnerCircle} />
          </span>
        )}
        {!loading && icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={styles.content}>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
