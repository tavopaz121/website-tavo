export default function SelectFile({
  clsNInput,
  label,
  placeholder,
  clsN,
  onChange,
  children,
  ...moreProps
}) {
  return (
    <div className={`w-full mb-4 ${clsN}`}>
      {label && <p className="block text-sm mb-1 font-medium">{label}</p>}

      <div
        className={`flex gap-4 w-full align-middle bg-white border-solid border-2 border-gray-300 rounded-md ${clsNInput}`}>
        <label className="w-full flex gap-4 p-3 cursor-pointer">
          <svg
            className="w-8 h-8 align-middle"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-1 text-sm font-medium leading-normal text-gray-600">
            {placeholder}
          </span>
          <input
            onChange={onChange}
            type="file"
            className="hidden"
            {...moreProps}
          />
        </label>
      </div>

      {children}
    </div>
  )
}
