import { Link } from "@remix-run/react";
import { useState } from "react";

type DropdownProps = {
  slug?: string;
  className?: string;
  children?: JSX.Element | string | null;
};

export default function Dropdown({ slug, className, children }: DropdownProps) {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className={`${className}`}>
        <button
          className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-pink-500"
          type="button"
          onClick={toogleMenu}
          onMouseEnter={toogleMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>

        {showMenu && (
          <>
            <div
              id="dropdownDots"
              onMouseLeave={toogleMenu}
              className="z-10 absolute right-[50%] bg-pink-600 divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                className="py-2 text-sm text-white"
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <Link
                    to={`/admin/${slug}/editar`}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 hover:bg-pink-500"
                  >
                    Editar
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <Link
                  to={`/admin/${slug}/eliminar`}
                  className="block px-4 py-2 text-sm text-white hover:bg-pink-500"
                >
                  Eliminar
                </Link>
              </div>
            </div>
            {children}
          </>
        )}
      </div>
    </div>
  );
}
