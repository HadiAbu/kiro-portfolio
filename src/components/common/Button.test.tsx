import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('Basic Rendering', () => {
    it('renders button with text content', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('applies custom className', () => {
      const { container } = render(<Button className="custom-class">Button</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('custom-class')
    })

    it('defaults to type="button"', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('accepts custom type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })
  })

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Button>Primary</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('primary')
    })

    it('renders secondary variant', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('secondary')
    })

    it('renders outline variant', () => {
      const { container } = render(<Button variant="outline">Outline</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('outline')
    })
  })

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      const { container } = render(<Button>Medium</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('medium')
    })

    it('renders small size', () => {
      const { container } = render(<Button size="small">Small</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('small')
    })

    it('renders large size', () => {
      const { container } = render(<Button size="large">Large</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('large')
    })
  })

  describe('Disabled State', () => {
    it('disables button when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('does not trigger onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      )
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Loading State', () => {
    it('shows spinner when loading', () => {
      const { container } = render(<Button loading>Loading</Button>)
      const spinner = container.querySelector('[role="status"]')
      expect(spinner).toBeInTheDocument()
    })

    it('sets aria-busy="true" when loading', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-busy', 'true')
    })

    it('disables button when loading', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('does not trigger onClick when loading', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <Button loading onClick={handleClick}>
          Loading
        </Button>
      )
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('applies loading class', () => {
      const { container } = render(<Button loading>Loading</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('loading')
    })

    it('hides icon when loading', () => {
      const icon = <span data-testid="icon">→</span>
      const { queryByTestId } = render(
        <Button loading icon={icon}>
          Loading
        </Button>
      )
      expect(queryByTestId('icon')).not.toBeInTheDocument()
    })
  })

  describe('Full Width', () => {
    it('applies fullWidth class when fullWidth prop is true', () => {
      const { container } = render(<Button fullWidth>Full Width</Button>)
      const button = container.querySelector('button')
      expect(button?.className).toContain('fullWidth')
    })
  })

  describe('Icon Support', () => {
    it('renders icon when provided', () => {
      const icon = <span data-testid="icon">→</span>
      render(<Button icon={icon}>Button with icon</Button>)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('icon has aria-hidden="true"', () => {
      const icon = <span data-testid="icon">→</span>
      const { container } = render(<Button icon={icon}>Button</Button>)
      const iconWrapper = container.querySelector('[aria-hidden="true"]')
      expect(iconWrapper).toBeInTheDocument()
    })

    it('does not render icon when loading', () => {
      const icon = <span data-testid="icon">→</span>
      const { queryByTestId } = render(
        <Button loading icon={icon}>
          Loading
        </Button>
      )
      expect(queryByTestId('icon')).not.toBeInTheDocument()
    })
  })

  describe('Click Handler', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('passes event to onClick handler', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object))
    })
  })

  describe('Keyboard Navigation (WCAG AA - Requirement 11.3)', () => {
    it('is keyboard accessible with Tab', async () => {
      const user = userEvent.setup()
      render(<Button>Keyboard accessible</Button>)

      const button = screen.getByRole('button')
      await user.tab()

      expect(button).toHaveFocus()
    })

    it('triggers onClick on Enter key', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Press Enter</Button>)
      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{Enter}')

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('triggers onClick on Space key', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Press Space</Button>)
      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{ }')

      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Focus Indicators (WCAG AA - Requirement 11.4)', () => {
    it('can receive focus', async () => {
      const user = userEvent.setup()
      render(<Button>Focusable</Button>)

      const button = screen.getByRole('button')
      await user.tab()

      expect(button).toHaveFocus()
    })

    it('does not receive focus when disabled', async () => {
      const user = userEvent.setup()
      render(
        <>
          <Button>First</Button>
          <Button disabled>Disabled</Button>
          <Button>Third</Button>
        </>
      )

      const firstButton = screen.getByRole('button', { name: 'First' })
      const thirdButton = screen.getByRole('button', { name: 'Third' })

      await user.tab()
      expect(firstButton).toHaveFocus()

      await user.tab()
      expect(thirdButton).toHaveFocus() // Skips disabled button
    })
  })

  describe('Accessibility', () => {
    it('maintains button semantics', () => {
      render(<Button>Accessible button</Button>)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })

    it('spinner is hidden from screen readers', () => {
      const { container } = render(<Button loading>Loading</Button>)
      const spinner = container.querySelector('[role="status"]')
      expect(spinner).toHaveAttribute('aria-hidden', 'true')
    })

    it('content remains visible during loading', () => {
      render(<Button loading>Loading text</Button>)
      expect(screen.getByText('Loading text')).toBeInTheDocument()
    })
  })

  describe('Forward Ref', () => {
    it('forwards ref to button element', () => {
      const ref = vi.fn()
      render(<Button ref={ref}>Button</Button>)

      expect(ref).toHaveBeenCalled()
      const buttonElement = ref.mock.calls[0][0]
      expect(buttonElement.tagName).toBe('BUTTON')
    })
  })

  describe('Props Spreading', () => {
    it('spreads additional HTML button attributes', () => {
      render(
        <Button data-testid="custom-button" aria-label="Custom label">
          Button
        </Button>
      )

      const button = screen.getByTestId('custom-button')
      expect(button).toHaveAttribute('aria-label', 'Custom label')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      const { container } = render(<Button>{''}</Button>)
      const button = container.querySelector('button')
      expect(button).toBeInTheDocument()
    })

    it('combines multiple class modifiers correctly', () => {
      const { container } = render(
        <Button variant="outline" size="large" fullWidth loading className="custom">
          Multi-modifier
        </Button>
      )

      const button = container.querySelector('button')
      expect(button?.className).toContain('outline')
      expect(button?.className).toContain('large')
      expect(button?.className).toContain('fullWidth')
      expect(button?.className).toContain('loading')
      expect(button?.className).toContain('custom')
    })

    it('loading state takes precedence over disabled state', () => {
      render(
        <Button loading disabled>
          Both states
        </Button>
      )
      const button = screen.getByRole('button')

      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')
    })
  })
})
