import { Form } from '@remix-run/react'
import { GoHomeFill } from 'react-icons/go'
import { HiPencilAlt } from 'react-icons/hi'
import { TbLogin, TbLogout } from 'react-icons/tb'
import { FaUser, FaUserAlt, FaUserLock } from 'react-icons/fa'

import Button from '../Button/Button'
import ButtonLink from '../ButtonLink/ButtonLink'

const sizeIcon = 'text-3xl'

const links = [
  {
    to: '/',
    dataCy: 'nav-home',
    icon: <GoHomeFill className={sizeIcon} />,
  },
  {
    to: '/publish',
    dataCy: 'nav-publish',
    icon: <HiPencilAlt className={sizeIcon} />,
  },
]

export default function FooterNav({ user, navLinks = links }) {
  return (
    <div className="mt-16">
      <footer
        data-testid="footer-nav"
        className="w-full items-center flex justify-around fixed bottom-0 p-2 bg-pw-green text-white">
        {navLinks.map(({ to, icon, dataCy, dataTestId }) => (
          <ButtonLink
            key={to}
            className="border-none p-2"
            to={to}
            content={icon}
            data-cy={dataCy}
            data-testid={dataTestId}
          />
        ))}
        {user ? <Profile /> : <Login />}
      </footer>
    </div>
  )
}

function Login() {
  return (
    <ButtonLink
      data-cy="nav-login"
      className="border-none p-2"
      to="/login"
      content={<FaUserLock className={sizeIcon} />}
    />
  )
}

function Profile() {
  return (
    <ButtonLink
      data-cy="nav-login"
      className="border-none p-2"
      to="/usuario/tavopaz12"
      content={<FaUser className="text-2xl" />}
    />
  )
}
