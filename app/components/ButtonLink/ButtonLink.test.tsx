import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ButtonLink from './ButtonLink'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('When buttonLink component', () => {
  let router: any

  beforeEach(() => {
    router = createBrowserRouter([
      {
        path: '/',
        element: (
          <div data-testid="container">
            <ButtonLink to="/home" content="Inicio"></ButtonLink>
          </div>
        ),
        loader: () => ({}),
      },
      {
        path: '/home',
        element: <div data-testid="container">Bienvenido al home</div>,
        loader: () => ({}),
      },
    ])
  })

  afterEach(() => {
    cleanup()
  })

  it('should display a content when passed in the "content" property', async () => {
    const view = render(<RouterProvider router={router} />)

    const buttonLink = await view.findByTestId('button-link')

    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink).toHaveTextContent('Inicio')
  })

  it('when the button is clicked, it should redirect to the route passed in the "to" property', async () => {
    const view = render(<RouterProvider router={router} />)
    const user = userEvent.setup()

    const buttonLink = await view.findByTestId('button-link')
    const container = await view.findByTestId('container')

    expect(container).not.toHaveTextContent('Home')

    await act(async () => {
      await user.click(buttonLink)
    })

    expect(container).toHaveTextContent('Bienvenido al home')
  })
})
