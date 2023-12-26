import type { TextFieldProps } from "./TextField.d";
export default function TextField({
  title,
  id,
  name,
  error,
  className,
  required,
  placeholder,
  type = "text",
  value,
  ...moreProps
}: TextFieldProps) {
  return (
    <>
      {title && (
        <label
          className="block text-gray-200 text-base font-normal mb-1"
          htmlFor={id}
        >
          {title} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        name={name}
        type={type}
        className={`form-input bg-black autofill:!bg-black p-4 w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 border-[1px] border-transparent placeholder-slate-400 ${className}`}
        placeholder={placeholder}
        {...moreProps}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </>
  );
}
