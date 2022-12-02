import React from "react";

export function Button({ title, type = "button", onClickHandler, variant }) {
  return (
    <>
      <button
        type={type}
        className={`${
          variant === "primary"
            ? "rounded-lg text-white py-2 px-4 flex justify-center items-center bg-[#141E27] shadow cursor-pointer hover:bg-[#203239]"
            : "rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm cursor-pointer hover:bg-slate-100"
        }`}
        onClick={onClickHandler}
      >
        {title}
      </button>
    </>
  );
}
