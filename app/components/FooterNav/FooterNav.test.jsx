import { cleanup, render } from '@testing-library/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { describe, it, afterEach, beforeEach, expect } from 'vitest'
import FooterNav from './FooterNav'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('FooterNav render', () => {
  let router

  const navLinks = [
    {
      to: '/',
      icon: 'Home',
      dataTestId: 'btn-home',
    },
    {
      to: '/edit',
      icon: 'Edit',
      dataTestId: 'btn-edit',
    },
  ]

  beforeEach(() => {
    router = createBrowserRouter([
      {
        path: '/',
        element: (
          <div data-testid="container">
            <p>Bienvenido al home</p>
            <FooterNav navLinks={navLinks} />
          </div>
        ),
        loader: () => ({}),
      },
      {
        path: '/edit',
        element: (
          <div data-testid="container">
            <p>Pagina de edit</p>
            <FooterNav navLinks={navLinks} />
          </div>
        ),
        loader: () => ({}),
      },
    ])
  })

  afterEach(() => {
    cleanup()
  })

  it('Sholud render correctly', async () => {
    const view = render(<RouterProvider router={router} />)

    const footer = await view.findByTestId('footer-nav')

    expect(footer).toBeInTheDocument()
  })

  it('button links should display correctly and display the correct content', async () => {
    const view = render(<RouterProvider router={router} />)

    const home = await view.findByTestId('btn-home')
    const edit = await view.findByTestId('btn-edit')

    expect(home).toBeInTheDocument()
    expect(edit).toBeInTheDocument()
    expect(home).toHaveTextContent('Home')
    expect(edit).toHaveTextContent('Edit')
  })

  it('when you click on a link it should show the correct page', async () => {
    const view = render(<RouterProvider router={router} />)

    const user = userEvent.setup()

    const home = await view.findByTestId('btn-home')
    const edit = await view.findByTestId('btn-edit')
    const container = await view.findByTestId('container')

    await act(async () => {
      await user.click(edit)
    })

    expect(container).toHaveTextContent('Pagina de edit')

    await act(async () => {
      await user.click(home)
    })

    expect(container).toHaveTextContent('Bienvenido al home')
  })
})
