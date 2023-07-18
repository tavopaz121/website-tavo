import ButtonLink from '../ButtonLink/ButtonLink'

import { GoHomeFill, GoPasskeyFill } from 'react-icons/go'
import { HiPencilAlt } from 'react-icons/hi'

const sizeIcon = 'text-3xl'

const links = [
  {
    to: '/',
    icon: <GoHomeFill className={sizeIcon} />,
  },
  {
    to: '/publish',
    icon: <HiPencilAlt className={sizeIcon} />,
  },
  {
    to: '/logout',
    icon: <GoPasskeyFill className={sizeIcon} />,
  },
]

export default function FooterNav() {
  return (
    <div className="mt-16">
      <footer className="w-full items-center flex justify-around fixed bottom-0 p-2 bg-pw-lightgreen text-white">
        {links.map((link) => (
          <ButtonLink
            key={link.to}
            className="border-none p-2"
            to={link.to}
            content={link.icon}
          />
        ))}
      </footer>
    </div>
  )
}
