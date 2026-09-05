import React, { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '@data'
import ThemeToggle from './ThemeToggle'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
] as const

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLUListElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close on Escape and trap focus while the drawer is open.
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
        hamburgerRef.current?.focus()
        return
      }

      if (event.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Move focus into the drawer.
    const firstLink = drawerRef.current?.querySelector<HTMLElement>('a[href]')
    firstLink?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, closeMenu])

  return (
    <header className={styles.navbar}>
      <nav className={styles.inner} aria-label="Primary">
        <NavLink to="/" className={styles.logo}>
          {profile.personalInfo.name}
        </NavLink>

        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [styles.link, isActive && styles.linkActive].filter(Boolean).join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            ref={hamburgerRef}
            type="button"
            className={styles.hamburger}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className={styles.hamburgerIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul id="mobile-drawer" ref={drawerRef} className={styles.drawer}>
          <button
            type="button"
            className={styles.drawerClose}
            aria-label="Close navigation menu"
            onClick={() => {
              closeMenu()
              hamburgerRef.current?.focus()
            }}
          >
            <svg
              className={styles.hamburgerIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [styles.drawerLink, isActive && styles.drawerLinkActive].filter(Boolean).join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
