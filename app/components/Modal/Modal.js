export default function Modal({
  title,
  shortDescription,
  children,
  isOpen = false,
  icon,
  actions,
}) {
  return (
    <div
      className={`relative z-10 ${isOpen ? "block" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-400-100 text-green-400 sm:mx-0 sm:h-10 sm:w-10">
                  {icon ? (
                    icon
                  ) : (
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 52 52"
                      enableBackground="new 0 0 52 52"
                      height="100%"
                    >
                      <g fill="currentColor">
                        <path
                          fill="currentColor"
                          d="M26,0C11.66,0,0,11.66,0,26s11.66,26,26,26s26-11.66,26-26S40.34,0,26,0z M26,50C12.77,50,2,39.23,2,26   S12.77,2,26,2s24,10.77,24,24S39.23,50,26,50z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M38.25,15.34L22.88,32.63l-9.26-7.41c-0.43-0.34-1.06-0.27-1.41,0.16c-0.35,0.43-0.28,1.06,0.16,1.41l10,8   C22.56,34.93,22.78,35,23,35c0.28,0,0.55-0.11,0.75-0.34l16-18c0.37-0.41,0.33-1.04-0.08-1.41C39.25,14.88,38.62,14.92,38.25,15.34   z"
                        ></path>
                      </g>
                    </svg>
                  )}
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">{shortDescription}</div>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {actions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
