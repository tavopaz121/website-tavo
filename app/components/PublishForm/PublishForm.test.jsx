import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import PublishForm from './PublishForm'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe.only('When PublishForm is rendered', () => {
  let router

  beforeEach(() => {
    router = createBrowserRouter([
      {
        path: '/',
        element: <PublishForm></PublishForm>,
        loader: () => ({}),
      },
    ])
  })

  afterEach(() => {
    cleanup()
  })

  it("Then publish button should exist", async () => {
    const formView = render(<RouterProvider router={router}/>)

    const btn = await formView.findByTestId('btn-publish')

    expect(btn).toBeInTheDocument()
  })
})
