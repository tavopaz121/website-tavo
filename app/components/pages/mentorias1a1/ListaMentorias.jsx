import picturejs from "~/assets/imgs/clasesonetoone/picture-js-front.webp";
import picturejsb from "~/assets/imgs/clasesonetoone/picture-js-back-code.webp";
import picturehtml5 from "~/assets/imgs/clasesonetoone/picture-html-code.webp";
import picturecss3 from "~/assets/imgs/clasesonetoone/picture-css-code.webp";
import pictureagile from "~/assets/imgs/clasesonetoone/picture-agile-devops.webp";
import pictureagilefront from "~/assets/imgs/clasesonetoone/picture-agile-front.webp";
import pictureagileback from "~/assets/imgs/clasesonetoone/picture-agile-back.webp";
import pictureagilfull from "~/assets/imgs/clasesonetoone/picture-agile-full.webp";

export default function ListaMentorias() {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
        <h2
          className="lg:text-7xl md:text-6xl text-4xl font-bold text-white"
          data-aos="fade-up"
        >
          Inscribete a cualquiera de nuestras mentorias
        </h2>
      </div>
      <div className="max-w-6xl grid grid-cols-12 gap-6 px-4 mx-auto pb-4">
        {/* Cards a */}
        <div className="flex flex-col items-center col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              JavaScript Frontend
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div className="pb-5">
                    <img
                      className="mx-auto w-full md:w-[50%]"
                      src={picturejs}
                      width={210}
                      height={200}
                      alt="JavaScript Frontend"
                    />
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Información
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards b */}
        <div className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              JavaScript Backend
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturejsb}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Obtener
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards c */}
        <div className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Html 5
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturehtml5}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Obtener
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards d */}
        <div className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              CSS3
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturecss3}
                        width={105}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Obtener
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards e */}
        <div className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Agile
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={pictureagile}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Obtener
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards f */}
        <div className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Agile Frontend Developer
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap items-center">
              {/* Unique Visitors */}
              <div className="flex py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={pictureagilefront}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col xl:items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Obtener
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards g */}
        <div className="flex flex-col items-center col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Agile Backend Developer
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full md:w-[50%]"
                        src={pictureagileback}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <div className="text-justify text-white pb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas adipisci ipsam id alias unde aliquam minus et
                      accusamus assumenda harum expedita saepe necessitatibus
                      rerum in, dicta libero nemo deleniti inventore?
                    </p>
                  </div>
                  <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mb-2">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Design</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mob Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pair Programming</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>BDD</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TDD</span>
                    </li>
                  </ul>
                  <a
                    className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                    href="#principios"
                  >
                    Obtener
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards h */}
        <div className="flex flex-col items-center col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 px-4 mb-20">
          <div className=" py-1">
            <div className="xl:flex xl:flex-wrap tex-justify items-center ">
              <div className="w-full xl:w-1/3 px-4 py-4">
                <img
                  className="mx-auto w-full"
                  src={pictureagilfull}
                  width={150}
                  height={200}
                  alt="JavaScript Frontend"
                />
              </div>
              <div className="w-full xl:w-2/3 text-center text-white pb-5">
                <header className="text-center px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                  <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                    Agile Fullstack Developer
                  </h2>
                </header>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam vel sunt expedita! Suscipit magnam sit aperiam ad
                  neque eos nulla laudantium praesentium velit. Accusamus saepe
                  minus sit dicta debitis eligendi.
                </p>
                <ul className="flex flex-wrap items-start space-y-5 text-left text-gray-300 mb-2">
                  <li className="flex items-center mx-2 my-1 mt-5">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Simple Design</span>
                  </li>
                  <li className="flex items-center mx-2 my-1">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Mob Programming</span>
                  </li>
                  <li className="flex items-center mx-2 my-1">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Pair Programming</span>
                  </li>
                  <li className="flex items-center mx-2 my-1">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>BDD</span>
                  </li>
                  <li className="flex items-center mx-2 my-1">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>TDD</span>
                  </li>
                </ul>
                <a
                  className="btn text-white bg-gray-700 hover:bg-pink-700 lg:w-full w-auto mx-auto"
                  href="#principios"
                >
                  Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
