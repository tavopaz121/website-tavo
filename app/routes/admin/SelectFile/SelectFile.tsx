import { UploadIcon } from "../Icons";
import { type SelectFileProps } from "./SelectFile.d";

export default function SelectFile({
  title,
  placeholder,
  onChange,
  accept,
  children,
  name,
  className,
  customClasses,
  ...moreProps
}: SelectFileProps) {
  const defaultClassInput =
    "flex gap-4 w-full align-middle bg-white border border-black rounded-md";

  return (
    <div className={`w-full mb-4 ${className}`}>
      {title && (
        <p className={`block text-lg mb-1 font-medium ${customClasses?.label}`}>
          {title}
        </p>
      )}

      <div className={`${customClasses?.input || defaultClassInput}`}>
        <label
          data-testid="label-file"
          htmlFor="file"
          className={`w-full flex gap-4 p-3 cursor-pointer ${customClasses?.label}`}
        >
          <UploadIcon fill="currentcolor" />
          <span className="mt-1 text-lg font-medium leading-normal text-pw-black">
            {placeholder}
          </span>
          <input
            id="file"
            accept={accept || "image/*"}
            data-testid="input-file"
            onChange={onChange}
            type="file"
            name={name}
            className="hidden"
            {...moreProps}
          />
        </label>
      </div>

      {children}
    </div>
  );
}
