import { screen } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TextArea from './TextArea'

describe('TextAreaComponent', () => {
  it('should render component without crashing when no props are provided', () => {
    render(<TextArea />)
  })

  it('should renders label if provided', () => {
    const label = 'Test Label'

    render(<TextArea label={label} />)

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('should render textarea with correct props', () => {
    const maxLength = 100
    const placeholder = 'Test placeholder'
    const rows = 10
    const name = 'Test name'

    render(
      <TextArea
        maxLength={maxLength}
        placeholder={placeholder}
        rows={rows}
        name={name}
      />,
    )

    const textarea = screen.getByTestId('TextArea')

    expect(textarea).toHaveAttribute('maxlength', maxLength.toString())
    expect(textarea).toHaveAttribute('placeholder', placeholder)
    expect(textarea).toHaveAttribute('rows', rows.toString())
    expect(textarea).toHaveAttribute('name', name)
  })

  it('should update text state', () => {
    const text = 'Hola'

    render(<TextArea />)

    const textarea = screen.getByTestId('TextArea')

    fireEvent.change(textarea, { target: { value: text } })
    expect(textarea.value).toBe(text)
  })

  it('the maximum number of characters will be the total of the maxlength property', () => {
    const text = 'test maxlength'
    const maxLength = 15

    render(<TextArea maxLength={maxLength}/>)

    const textarea = screen.getByTestId('TextArea')
    fireEvent.change(textarea, { target: { value: text } })

    expect(textarea.value.length).toBeLessThanOrEqual(textarea.maxLength)
  })
})
