import { getPageRange } from "~/functions/getRangePagination";
import { Link } from "@remix-run/react";
import type { PaginationProps } from "./pagination.d";

export default function Pagination({
  numPages,
  startPath = "/blog",
  currentPage = 1,
}: PaginationProps) {
  const limitPages = Math.ceil(numPages / 10);

  const pageRange = getPageRange(currentPage, limitPages);

  return (
    <nav
      className="flex justify-center pt-4"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
        <li className="m-1">
          <Link
            to={
              currentPage === 2
                ? startPath
                : `${startPath}/pagina/${currentPage - 1}`
            }
            className={`inline-flex h-10 min-w-[2.5rem] ${
              currentPage === 1
                ? "pointer-events-none text-gray-500"
                : "text-gray-300"
            } justify-center items-center bg-gray-800 px-4 rounded-full  hover:bg-pink-600 transition-colors duration-150 ease-in-out`}
          >
            Anterior
          </Link>
        </li>
        {pageRange.map((page) => (
          <li key={page} className="m-1">
            <Link
              to={page === 1 ? startPath : `${startPath}/pagina/${page}`}
              className={`inline-flex h-10 min-w-[2.5rem] ${
                currentPage === page
                  ? "pointer-events-none text-gray-500"
                  : "text-gray-300"
              } justify-center items-center bg-gray-800 px-2 rounded-full hover:bg-pink-600 transition-colors duration-150 ease-in-out`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li className="m-1">
          <Link
            to={`${startPath}/pagina/${currentPage + 1}`}
            className={`inline-flex h-10 min-w-[2.5rem] ${
              limitPages === currentPage
                ? "pointer-events-none text-gray-500"
                : ""
            } justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-pink-600 transition-colors duration-150 ease-in-out`}
          >
            Siguiente
          </Link>
        </li>
      </ul>
    </nav>
  );
}
