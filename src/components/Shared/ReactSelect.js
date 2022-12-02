import React from "react";
import Select from "react-select";

export const ReactSelect = (props) => {
  const {
    isMulti,
    onChange,
    options,
    isLoading,
    value,
    isDisabled,
    label,
    required,
    isClearable = false,
    showLabel = true,
    indexValue = 0,
    name,
    placeholder,
  } = props;

  const defaultValue = (options, value) => {
    if (Array.isArray(value) && value?.length) {
      return options
        ? options.filter((item) => value.includes(item.value))
        : [];
    }
    return options
      ? options.find(
          (option) => option.value === value || option.label === value
        )
      : "";
  };

  const customStyles = () => ({
    option: (provided) => ({
      ...provided,
      fontSize: ".9rem",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 50 }),
    multiValueRemove: (styles) => ({
      ...styles,
      ":hover": {
        color: "black",
      },
    }),
  });

  return (
    <div className="relative ring-input my-8" index={indexValue}>
      {showLabel && (
        <label
          className={`md:text-sm text-xs text-darkBlack ${
            label ? "inline-block" : ""
          }`}
        >
          {label}
          {required && <span className="text-Sonia md:text-sm text-xs">*</span>}
        </label>
      )}
      <Select
        name={name}
        menuPlacement="auto"
        menuShouldBlockScroll={true}
        isClearable={isClearable}
        isDisabled={isDisabled}
        menuPosition={"fixed"}
        menuPortalTarget={document.body}
        styles={customStyles(value)}
        placeholder={
          <div className="placeHolder">{placeholder ? placeholder : label}</div>
        }
        isMulti={isMulti}
        value={defaultValue(options, value)}
        onChange={(option) => onChange(option)}
        options={options}
        className="mt-1"
        isLoading={isLoading}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary: "#9ca3af",
            primary25: "#141e2734",
          },
        })}
      />
    </div>
  );
};
