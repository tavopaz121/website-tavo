import { useId, forwardRef } from "react";
import type { ForwardedRef } from "react";
import { XcircleSolidIcon } from "../Icons";
import type { TextFieldProps } from "./TextField.d";

const inputClassNameDefault = "bg-white border border-black w-full p-2.5";
const labelClassNameDefault = "block text-lg font-medium";
const iconClassNameDefault = "absolute inset-y-0 flex items-center pl-3"
const errorClassNameDefault = "pt-1 flex items-center gap-1 text-red-700 dark:text-red-400";

export default forwardRef(TextField);

function TextField(
  {
    isInvalid,
    label,
    clsLabel,
    icon,
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
    ...moreProps
  }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const id = useId();
  const ariaId = `${id}-${name}`;
  let labelClassName: string;
  let inputClassName: string;

  labelClassName = `${labelClassNameDefault} ${clsLabel}`;
  inputClassName = `${inputClassNameDefault} ${icon && "pl-10"} ${clsNInput}`;

  return (
    <div data-testid="TextField" className={clsN}>
      {
        label ? (
          <label
            htmlFor={id}
            className={`${labelClassName}`}
            data-testid="label-text-field"
          >
            {label}
          </label>
        )
          : null
      }

      <div className="relative mb-6">
        {
          icon ? (
            <div
              className={iconClassNameDefault}
              data-testid="icon-text-field"
            >
              {icon}
            </div>
          )
            : null
        }

        <input
          ref={ref}
          id={id}
          required={required}
          autoFocus={autoFocus}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          aria-invalid={isInvalid}
          aria-describedby={ariaId}
          className={`${inputClassName}`}
          placeholder={placeholder}
          {...moreProps}
        />
      </div>

      {error && (
        <div
          className={errorClassNameDefault}
          id={ariaId}
          data-testid="error-text-field"
        >
          <XcircleSolidIcon />
          {error}
        </div>
      )}
      {children}
    </div>
  );
}
