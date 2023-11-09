type PropsNav = {
  handleMenuButton: () => void;
  logo: string;
  hasLogo: boolean;
  items: { to: string; label: string; isButton?: boolean }[];
  secondaryItems: { to: string; label: string; isButton?: boolean }[];
  aLign: "center" | "start" | "end" | "between" | "around" | "evenly";
};

export default function Nav({
  handleMenuButton,
  logo,
  hasLogo,
  items,
  secondaryItems,
  aLign,
}: PropsNav) {
  return (
    <nav className="relative py-6 mb-12 md:mb-20 bg-transparent">
      <div className="px-4 mx-auto">
        <div className={"flex items-center justify-" + aLign}>
          {hasLogo && (
            <a className="inline-block text-lg font-bold mr-14" href="/">
              <img className="h-20 block p-5" src={logo} alt="" width="auto" />
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

          {items?.length > 0 && (
            <ul className="hidden lg:flex lg:w-auto lg:space-x-6">
              {items.map(({ to, label }) => (
                <li key={to}>
                  <a
                    className="relative group inline-block py-3 px-4 font-semibold text-white overflow-hidden transition duration-300"
                    href={to}
                  >
                    <div className="absolute bottom-4 right-full w-full h-2 bg-gradient-pink transform group-hover:translate-x-full transition duration-500" />
                    <span className="relative">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {secondaryItems?.length > 0 && (
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                {secondaryItems.map(({ to, label, isButton }) => {
                  return (
                    <a
                      key={to}
                      className="relative group inline-block py-3 px-4 font-semibold text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
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
        </div>
      </div>
    </nav>
  );
}
