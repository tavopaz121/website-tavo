import { useId, forwardRef } from "react";
import type { ForwardedRef } from "react";
import { XcircleSolidIcon } from "../Icons";
import type { TextFieldProps } from "./TextField.d";

const inputClassName = "w-full rounded border border-gray-500 px-2 py-1 text-lg";
const errorClassName = "pt-1 flex items-center gap-1 text-red-700 dark:text-red-400";

export default forwardRef(TextField);

function TextField(
  {
    idInput,
    isInvalid,
    label,
    required,
    autoFocus,
    name,
    value,
    type,
    autoComplete,
    clsNInput,
    error,
    children,
    clsN,
    placeholder,
    pattern,
    ...moreProps
  }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const id = useId();
  const ariaId = `${id}-${name}`;

  return (
    <div className={`mb-4 ${clsN}`} data-testid="TextField">
      {label ? (
        <label htmlFor={id} className="block font-medium">
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={idInput ? idInput : id}
        required={required}
        autoFocus={autoFocus}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={isInvalid}
        aria-describedby={ariaId}
        className={`${inputClassName} ${clsNInput}`}
        placeholder={placeholder}
        pattern={pattern}
        {...moreProps}
      />
      {error && (
        <div className={errorClassName} id={ariaId}>
          <XcircleSolidIcon />
          {error}
        </div>
      )}
      {children}
    </div>
  );
}
