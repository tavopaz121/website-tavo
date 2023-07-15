import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ButtonLink from './ButtonLink'

describe('When buttonLink component', () => {
  let router: any

  beforeEach(() => {
    router = createBrowserRouter([
      {
        path: '/',
        element: (
          <ButtonLink
            target="_blank"
            content="test"
            to="/home"></ButtonLink>
        ),
        loader: () => ({}),
      },
    ])
  })

  afterEach(() => {
    cleanup()
  })

  it('Should render with custom properties', async () => {
    const view = render(<RouterProvider router={router} />)

    const buttonLink = await view.findByTestId('button-link')

    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink).toHaveTextContent('test')
    expect(buttonLink).toHaveProperty('target', '_blank')
    expect(buttonLink).toHaveAttribute('href', '/home')
  })
})
