import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../Header'

expect.extend(toHaveNoViolations)

describe('Header Accessibility', () => {
  const mockScrollToSection = jest.fn()
  const mockOpenContactModal = jest.fn()

  it('should not have any accessibility violations', async () => {
    const { container } = render(
      <Header
        scrollToSection={mockScrollToSection}
        openContactModal={mockOpenContactModal}
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

