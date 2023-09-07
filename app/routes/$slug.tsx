import type { LoaderArgs } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;
  return slug;
}

export default function Post() {
  return (
    <>
      <section>
        <nav className="relative py-6 bg-white z-50">
          <div className="container px-4 mx-auto">
            <div className="flex items-center relative">
              <a
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold"
                href="/"
              >
                <img className="h-10" src="/pw-logo.svg" alt="" width="auto" />
              </a>
              <div className="lg:hidden ml-auto">
                <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
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
              <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
                <li className="group relative">
                  <a
                    className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                    href="/"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                    href="/productos"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                    href="/servicios"
                  >
                    servicios
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                    href="/equitpo"
                  >
                    Equipo
                  </a>
                </li>
              </ul>
              <div className="hidden lg:block ml-auto">
                <div className="flex items-center">
                  <a
                    className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
                    href="/contacto"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-16">
              <a className="mr-auto text-2xl font-medium leading-none" href="/">
                <img className="h-10" src="/pw-logo.svg" alt="" width="auto" />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul className="mb-2">
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                    href="/"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                    href="/"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                    href="/"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                    href="/"
                  >
                    blog
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                    href="/"
                  >
                    contacto
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <img
          className="absolute top-0 left-0 mt-44"
          src="/images/stars-left-top.svg"
          alt=""
        />
        <img
          className="absolute top-0 right-0 mt-52"
          src="/images/blue-light-right.png"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-16">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-lg">
                  <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                    RICH TEXT MODULE
                  </span>
                  <h2 className="font-heading text-3xl xs:text-4xl font-semibold text-gray-800">
                    All in one for you payment transaction online without having
                    to leave the house to make transactions
                  </h2>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-lg">
                  <p className="text-lg font-semibold text-gray-900 mb-5">
                    Pellentesque ipsum nulla in eget interdum a. Neque
                    pellentesque pulvinar mauris pulvinar diam.
                  </p>
                  <p className="text-lg text-gray-900 mb-5">
                    Turpis aliquet pellentesque velit vitae nisi sed morbi
                    ultrices sed. Egestas interdum elit integer nec pharetra
                    eget blandit dolor purus. A sed nisi congue morbi fermentum
                    blandit. Turpis pretium dignissim risus ultrices purus et
                    amet netus nibh.
                  </p>
                  <p className="text-lg text-gray-500">
                    Vestibulum est ante in congue a fusce nunc. At tristique
                    donec nisi viverra vulputate blandit orci at lectus. Morbi
                    cras urna congue ornare. Mi magna vestibulum tortor id nec
                    tortor non. Enim orci lorem egestas sed morbi dui mauris
                    etiam nulla. Euismod cursus viverra ut ac eu sit quam amet
                    tempor. Id in suspendisse nam sit vitae ullamcorper mollis
                    et ut.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="block w-full"
                src="/images/photo-article-large.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24">
        <div className="px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:pr-24 xl:pr-40">
              <div className="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  RICH TEXT MODULE
                </span>
                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
                  <span className="block">Pensemosweb</span>
                  <span>Desarollo de software</span> y
                  <span className="block font-serif italic">Agilidad</span>
                </h1>
              </div>
              <img
                className="block w-full"
                src="/images/image-big-article.png"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md md:max-w-lg xl:max-w-2xl mx-auto lg:mx-0">
                <p className="text-2xl text-gray-800 mb-8">
                  Arcu ultrices sit non magna enim id semper quam venenatis. Mi
                  quisque ultrices hendrerit nec aliquet integer mollis faucibus
                  morbi. Augue justo at convallis vitae nunc maecenas est.
                  Viverra duis feugiat posuere vitae tincidunt. Sed tristique
                  sit faucibus nisi rutrum lacus. Sollicitudin non pretium
                  commodo ut fermentum.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-8">
                  Pellentesque ipsum nulla in eget interdum a. Neque
                  pellentesque pulvinar mauris pulvinar diam.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Egestas interdum elit integer nec pharetra eget blandit dolor
                  purus. A sed nisi congue morbi fermentum blandit. Turpis
                  pretium dignissim risus ultrices purus et amet netus nibh.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Vestibulum est ante in congue a fusce nunc. At tristique donec
                  nisi viverra vulputate blandit orci at lectus. Morbi cras urna
                  congue ornare. Mi magna vestibulum tortor id nec tortor non.
                  Enim orci lorem egestas sed morbi dui mauris etiam nulla.
                  Euismod cursus viverra ut ac eu sit quam amet tempor. Id in
                  suspendisse nam sit vitae ullamcorper mollis et ut.
                </p>
                <p className="text-lg text-gray-700">
                  Egestas interdum elit integer nec pharetra eget blandit dolor
                  purus. A sed nisi congue morbi fermentum blandit. Turpis
                  pretium dignissim risus ultrices purus et amet netus nibh.
                  Vestibulum est ante in congue a fusce nunc. At tristique donec
                  nisi viverra vulputate blandit orci at lectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <img
          className="absolute top-0 left-0 mt-10"
          src="/images/stars-left-top.svg"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0"
          src="/images/orange-light-right.png"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="text-center mb-18">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
              RICH TEXT MODULE
            </span>
            <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-12">
              <span>Pensemosweb, y</span>
              <span className="block font-serif italic">Agilidad</span>
            </h1>
          </div>
          <div className="max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-lg">
                  <p className="text-2xl text-gray-800 mb-12">
                    Arcu ultrices sit non magna enim semper quam venenatis. Mi
                    quisque ultrices rerit nec aliquet integer mollis faucibus
                    colum morbi paleo javanicus.
                  </p>
                  <p className="text-2xl text-gray-800 mb-12">
                    Augue justo at convallis vitae nunc maecenas est. Viverra
                    duis feugiat posuere vitae tincidunt.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Pellentesque ipsum nulla in eget interdum a. Neque
                    pellentesque pulvinar mauris pulvinar diam. Turpis aliquet
                    pellentesque velit vitae nisi sed morbi ultrices sed.
                    Egestas interdum elit integer nec pharetra eget blandit
                    dolor purus. A sed nisi congue morbi fermentum blandit.
                    Turpis pretium dignissim risus ultrices purus et amet netus
                    nibh.
                  </p>
                  <p className="text-lg text-gray-700">
                    Vestibulum est ante in congue a fusce nunc. At tristique
                    donec nisi viverra vulputate blandit orci at lectus. Morbi
                    cras urna congue ornare. Mi magna vestibulum tortor id nec
                    tortor non. Enim orci lorem egestas sed morbi dui mauris
                    etiam nulla. Euismod cursus viverra ut ac eu sit quam amet
                    tempor. Id in suspendisse nam sit vitae ullamcorper mollis
                    et ut.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-lg">
                  <p className="text-2xl font-semibold text-gray-800 mb-10">
                    Vestibulum est ante in congue a fusce nunc. At tristique
                    donec nisi viverra vulputate blandit turpis pretium
                    dignissim risus ultrices purus et amet netus nibh.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Pellentesque ipsum nulla in eget interdum a. Neque
                    pellentesque pulvinar mauris pulvinar diam. Turpis aliquet
                    pellentesque velit vitae nisi sed morbi ultrices sed.
                    Egestas interdum elit integer nec pharetra eget blandit
                    dolor purus. A sed nisi congue morbi fermentum blandit.
                    Turpis pretium dignissim risus ultrices purus et amet netus
                    nibh.
                  </p>
                  <p className="text-lg text-gray-700">
                    Vestibulum est ante in congue a fusce nunc. At tristique
                    donec nisi viverra vulputate blandit orci at lectus. Morbi
                    cras urna congue ornare. Mi magna vestibulum tortor id nec
                    tortor non. Enim orci lorem egestas sed morbi dui mauris
                    etiam nulla. Euismod cursus viverra ut ac eu sit quam amet
                    tempor. Id in suspendisse nam sit vitae ullamcorper mollis
                    et ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
