import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'

describe('Header', () => {
  const mockScrollToSection = jest.fn()
  const mockOpenContactModal = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the logo and navigation items', () => {
    render(
      <Header
        scrollToSection={mockScrollToSection}
        openContactModal={mockOpenContactModal}
      />
    )

    expect(screen.getByText('Rendercode Studios')).toBeInTheDocument()
    expect(screen.getByText('Packages')).toBeInTheDocument()
    expect(screen.getByText('How it Works')).toBeInTheDocument()
    expect(screen.getByText('Case Study')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('calls scrollToSection when a nav item is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Header
        scrollToSection={mockScrollToSection}
        openContactModal={mockOpenContactModal}
      />
    )

    const packagesButton = screen.getByText('Packages')
    await user.click(packagesButton)

    expect(mockScrollToSection).toHaveBeenCalledWith('packages')
  })

  it('calls openContactModal when CTA button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Header
        scrollToSection={mockScrollToSection}
        openContactModal={mockOpenContactModal}
      />
    )

    const ctaButton = screen.getByText('Book Intro Call')
    await user.click(ctaButton)

    expect(mockOpenContactModal).toHaveBeenCalled()
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Header
        scrollToSection={mockScrollToSection}
        openContactModal={mockOpenContactModal}
      />
    )

    const menuButton = screen.getByLabelText('Toggle mobile menu')
    expect(screen.queryByText('Packages')).toBeInTheDocument() // Desktop nav

    await user.click(menuButton)
    expect(screen.getByLabelText('Toggle mobile menu')).toHaveAttribute(
      'aria-expanded',
      'true'
    )
  })

  it('has proper accessibility attributes', () => {
    render(
      <Header
        scrollToSection={mockScrollToSection}
        openContactModal={mockOpenContactModal}
      />
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
    expect(screen.getByLabelText('Rendercode Studios home')).toBeInTheDocument()
  })
})

