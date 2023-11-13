import type { PropsNav } from "./Nav.d";

export default function NavLg({
  handleMenuButton,
  logo,
  hasLogo,
  items,
  secondaryItems,
  aLign,
  children,
  isHome,
}: PropsNav) {
  const textClasses = isHome
    ? "text-white dark:text-white"
    : "text-black dark:text-black";
  const anchorClass = `relative group inline-block py-3 px-4 font-semibold ${textClasses} overflow-hidden transition duration-300`;

  return (
    <nav className="absolute top-0 z-10 w-full bg-transparent py-6 px-4">
      <div className="mx-auto">
        <div className={"flex items-center justify-" + aLign}>
          {hasLogo && (
            <a className="inline-block text-lg font-bold mr-14" href="/">
              {logo}
            </a>
          )}
          <div className="lg:hidden ml-auto">
            <button
              className="navbar-burger flex w-12 h-12 items-center justify-center bg-gradient-pink hover:bg-gradient-blue rounded-md transition duration-200"
              onClick={handleMenuButton}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {items && (
            <ul className="hidden lg:flex lg:w-auto lg:space-x-6">
              {items?.map(({ to, label }) => (
                <li key={to}>
                  <a className={anchorClass} href={to}>
                    <div className="absolute bottom-4 right-full w-full h-2 bg-gradient-pink transform group-hover:translate-x-full transition duration-500" />
                    <span className="relative">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {secondaryItems && (
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                {secondaryItems.map(({ to, label, isButton }) => {
                  return (
                    <a
                      key={to}
                      className={`${anchorClass} border border-gray-200 rounded-md`}
                      href={to}
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                      <span className="relative">{label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </nav>
  );
}
