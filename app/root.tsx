import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import stylesheet from '~/tailwind.css'
import FooterNav from './components/FooterNav/FooterNav'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet, content: 'text/css' },
]

export const meta = () => [
  { charset: 'utf-8' },
  { title: 'Comida sana' },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' },
]

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <FooterNav />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
