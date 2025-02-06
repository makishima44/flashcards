import { ComponentPropsWithRef, useState } from "react";

import EyeIcon from "@/assets/icons/eye-icon.svg?react";
import SearchIcon from "@/assets/icons/search-icon.svg?react";
import clean from "@/assets/icons/clean 2.svg";
import clsx from "clsx";
import s from "./input.module.scss";

export type InputProps = {
  label?: string;
  error?: boolean;
  variant?: "password" | "search";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ComponentPropsWithRef<"input">;

export const Input = (props: InputProps) => {
  const { label, className, error, disabled, variant, onClick, ...rest } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputType = variant === "password" ? (isVisible ? "text" : "password") : "text";

  const inputClass = clsx(
    s.input,
    variant === "password" && s.password,
    error && s.error,
    variant === "search" && s.search,
    className
  );
  const labelClass = clsx(s.label, disabled && s.disabled);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className={s.main}>
      <div className={s.inputBlock}>
        {label && (
          <label className={labelClass} htmlFor={"input"}>
            {label}
          </label>
        )}

        <div className={s.inputWrapper}>
          {variant === "search" && (
            <button
              onClick={onClick}
              disabled={disabled}
              type="button"
              className={clsx(s.iconButton, s.iconSearchButton)}
            >
              <SearchIcon className={clsx(s.iconSearch)} />

              {inputValue && (
                <button
                  disabled={disabled}
                  type="button"
                  className={clsx(s.iconButton, s.iconClean)}
                  onClick={clearInput}
                >
                  <img src={clean} alt="clean" className={s.iconPassword} />
                </button>
              )}
            </button>
          )}

          <input
            value={inputValue}
            type={inputType}
            id={"input"}
            className={inputClass}
            disabled={disabled}
            onChange={handleInputChange}
            {...rest}
          />

          {variant === "password" && (
            <button
              disabled={disabled}
              type="button"
              className={clsx(s.iconButton, s.iconPasswordButton)}
              onClick={() => setIsVisible(!isVisible)}
            >
              <EyeIcon className={clsx(s.iconPassword)} />
            </button>
          )}
        </div>
      </div>

      {error && <span className={s.errorText}>Error!</span>}
    </div>
  );
};
