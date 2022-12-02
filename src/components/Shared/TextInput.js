import React from "react";

export function Input({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  isNestedField = false,
  isNestedFieldArray = false,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  nested = true,
  className = "",
  Required = true,
  hideError = false,
  suggestion = null,
  ...props
}) {
  return (
    <>
      <div className="text-left relative ">
        <label className="text-dark-Black ">
          <span className="md:text-sm text-xs ">{label}</span>
          {label && Required && (
            <span className="text-Sonia md:text-sm text-xs">*</span>
          )}
          {suggestion && (
            <span className="md:text-sm text-xs ml-2 truncate text-gray-500 ">
              {suggestion}
            </span>
          )}
          <input
            className={`border py-[6px] px-1 my-8 transition pr-4 rounded-md w-full md:text-base text-sm font-normal bg-transparent mt-1 block bg-white border-slate-300 placeholder-slate-400
            focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 ${className} `}
            min={type === "number" && !props.min ? 0 : props.min}
            {...field}
            {...props}
            type={type}
          />
        </label>
      </div>
    </>
  );
}

export default Input;
