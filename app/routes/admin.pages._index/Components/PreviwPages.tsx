import { Link } from "@remix-run/react";

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
                  <div className="font-semibold text-left">Descripción</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">URL</div>
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
                    <div className="font-medium text-slate-800 dark:text-slate-100">
                      Form Builder CP
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <p>Subscription</p>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <Link to="/">/inicio</Link>
                </td>
                <td className="p-2 whitespace-nowrap flex items-center gap-3 lg:gap-5 sm:gap-2">
                  <Link to="/admin/pages/editar">
                    <IconEdit title="Icono editar página" />
                  </Link>
                  <Link to="/">
                    <IconDelete title="Icono para eliminar página" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function IconEdit({
  width,
  height,
  color,
  title,
}: {
  title?: string;
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <>
      <svg
        width={width || "20px"}
        height={height || "20px"}
        viewBox="0 0 24 24"
        fill={"none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
          stroke={color || "currentcolor"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
          stroke={color || "currentcolor"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <title className="sr-only">{title}</title>
    </>
  );
}

function IconDelete({
  width,
  height,
  color,
  title,
}: {
  title?: string;
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <>
      <svg
        width={width || "20px"}
        height={height || "20px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 11V17"
          stroke={color || "#ffff"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 11V17"
          stroke={color || "#ffff"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 7H20"
          stroke={color || "#ffff"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
          stroke={color || "#ffff"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          stroke={color || "#ffff"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <title className="sr-only">{title}</title>
    </>
  );
}
