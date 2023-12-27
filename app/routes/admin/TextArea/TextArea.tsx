import { useId } from "react";
import { XcircleSolidIcon } from "../Icons";
import type { TextAreaProps } from "./TextArea.d";

export default function TextArea({
  title,
  name,
  error,
  className,
  required,
  rows,
  placeholder,
  value,
  ...moreProps
}: TextAreaProps) {
  const id = useId();
  const ariaId = `${id}-${name}`;

  return (
    <>
      {title && (
        <label
          className="block text-gray-200 text-base font-normal mb-1"
          htmlFor={id}
        >
          {title}
        </label>
      )}
      <textarea
        id={id}
        required={required}
        name={name}
        value={value}
        rows={rows || 4}
        className={`form-input bg-black autofill:!bg-black p-4 w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 border-[1px] border-transparent placeholder-slate-400 ${className}`}
        placeholder={placeholder}
        {...moreProps}
      ></textarea>
      {error && (
        <div
          id={ariaId}
          data-testid="error-text-field"
          className={`text-red-500 text-sm mt-2 flex items-center gap-1`}
        >
          <XcircleSolidIcon />
          {error}
        </div>
      )}
    </>
  );
}
