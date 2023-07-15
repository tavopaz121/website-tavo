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
        element: <ButtonLink to="/"></ButtonLink>,
        loader: () => ({}),
      },
    ])
  })

  afterEach(() => {
    cleanup()
  })

  it('Should render corectly', () => {
    render(<RouterProvider router={router} />)
  })
})
