import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button component', () => {
  it('should render component without crashing when no props are provided', () => {
    render(<Button />)
  })

  it('Then the component should be shown with default props', () => {
    const { getByRole } = render(<Button />)
    const button = getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'bg-blue-500 text-white hover:bg-blue-600 px-5 py-2.5 text-base',
    )
    expect(button).toHaveAttribute('type', 'button')
    expect(button).not.toHaveAttribute('id')
    expect(button).not.toBeDisabled()
  })

  it('Then if have a children this shlound be showm', () => {
    const { getByRole } = render(
      <Button>
        <span>I am a children</span>
      </Button>,
    )
    const button = getByRole('button')

    expect(button).toHaveTextContent('I am a children')
  })

  it('onClick prop', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()

    const { getByRole } = render(<Button onClick={onClick} />)
    const button = getByRole('button')

    await user.click(button)

    expect(onClick).toBeCalled()
  })

  it('Then when props exist the button should be shown with this props', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()

    const { getByRole } = render(
      <Button
        size='sm'
        color="primary"
        idButton="my-button"
        disabled
        className="test-class"
        text="test-text"
        type="reset"
        onClick={onClick}>
        <span> children test</span>
      </Button>,
    )

    const button = getByRole('button')

    await user.click(button)

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'bg-lime-500 text-white hover:bg-lime-600 px-3 py-2 text-sm test-class',
    )
    expect(button).toHaveAttribute('id', 'my-button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('type', 'reset')
    expect(button).toHaveTextContent('test-text children test')
    expect(onClick).not.toBeCalled()
  })
})
