import { UploadIcon } from "../Icons";

export default function SelectFile({
  title,
  placeholder,
  onChange,
  accept,
  children,
  className,
  ...moreProps
}) {
  return (
    <div className="w-full mb-4">
      {title && <p className="block text-lg mb-1 font-medium">{title}</p>}

      <div
        className={`flex gap-4 w-full align-middle bg-white border border-black rounded-md ${className}`}>
        <label
          data-testid="label-file"
          htmlFor="file"
          className="w-full flex gap-4 p-3 cursor-pointer">
          <UploadIcon fill="#262626" />
          <span className="mt-1 text-lg font-medium leading-normal text-pw-black">
            {placeholder}
          </span>
          <input
            id="file"
            accept={accept || "image/*"}
            data-testid="input-file"
            onChange={onChange}
            type="file"
            className="hidden"
            {...moreProps}
          />
        </label>
      </div>

      {children}
    </div>
  );
}
