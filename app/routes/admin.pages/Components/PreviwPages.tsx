import imgExample from "../../../assets/imgs/feedback-loop.webp";
export default function PreviwPages() {
  return (
    <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Página</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Image</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Descripción</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Opciones</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      <svg
                        className="w-9 h-9 fill-current text-indigo-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z" />
                      </svg>
                    </div>
                    <div className="font-medium text-slate-800 dark:text-slate-100">
                      Form Builder CP
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    <a className="block" href="#0">
                      <img
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={imgExample}
                        width={28}
                        height={28}
                        alt="User 01"
                      />
                    </a>
                    <a className="block" href="#0">
                      <img
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={imgExample}
                        width={28}
                        height={28}
                        alt="User 02"
                      />
                    </a>
                    <a className="block" href="#0">
                      <img
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={imgExample}
                        width={28}
                        height={28}
                        alt="User 03"
                      />
                    </a>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
                    </svg>
                    <div>Subscription</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <button
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-transparent rounded-lg hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
