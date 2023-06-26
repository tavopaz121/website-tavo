import { useState } from 'react'
import { XcircleSolidIcon } from '../Icons'

const inputClassName =
  'w-full rounded border border-gray-500 px-2 py-1 text-lg dark:text-black'
const errorClassName =
  'pt-1 flex items-center gap-1 text-red-700 dark:text-red-400'

/* eslint-disable react/prop-types */
export default function TextArea({
  label,
  maxLength,
  placeholder,
  height,
  clsNInput,
  rows,
  error,
  ref,
  name,
  required,
  children,
  ...moreProps
}) {
  const [text, setText] = useState('')

  return (
    <div>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <textarea
        ref={ref}
        required={required || false}
        onChange={(evt) => setText(evt.target.value)}
        className={`${inputClassName} ${clsNInput}`}
        name={name}
        maxLength={maxLength || 250}
        cols={height}
        placeholder={placeholder}
        rows={rows}></textarea>

      {error ? (
        <div className={errorClassName}>
          <XcircleSolidIcon />
          {error}
        </div>
      ) : (
        <span className="block mb-2 text-right mt-1 text-sm text-gray-500">
          {text.length}/{maxLength || 250}
        </span>
      )}
      {children}
    </div>
  )
}
