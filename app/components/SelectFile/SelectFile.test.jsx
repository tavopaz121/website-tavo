import { screen, fireEvent, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import sinon from 'sinon'
import SelectFile from './SelectFile'

describe('SelectFile component', () => {
  it('SelectFile renders correctly', () => {
    const label = 'Test Label'
    const { getByText } = render(<SelectFile label={label} />)
    const labelElement = getByText(label)
    expect(labelElement).toBeInTheDocument()
  })

  it('should accept attribute', () => {
    const accept = 'image/png'
    const { getByTestId } = render(<SelectFile accept={accept} />)
    const input = getByTestId('input-file')
    expect(input).toHaveAttribute('accept', accept)
  })

  it('Select file on change', () => {
    const onChange = sinon.spy()

    render(<SelectFile onChange={onChange} />)

    const input = screen.getByTestId('input-file')
    fireEvent.change(input, {
      target: { files: [new File([''], 'test.png', { type: 'image/png' })] },
    })
    expect(onChange.called).toBe(true)
  })
})
