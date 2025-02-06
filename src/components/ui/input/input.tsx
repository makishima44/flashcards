import { ComponentPropsWithRef, useState } from "react";
import clsx from "clsx";

import eye from "@/assets/icons/eye-outline.svg";
import eyeDisabled from "@/assets/icons/eye-outline-disable.svg";

import s from "./input.module.scss";

export type InputProps = {
  label?: string;
  error?: boolean;
  variant?: "password" | "search";
} & ComponentPropsWithRef<"input">;

export const Input = (props: InputProps) => {
  const { label, className, error, disabled, variant, ...rest } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputType = variant === "password" ? (isVisible ? "text" : "password") : "text";
  const inputClass = clsx(
    s.input,
    variant === "password" && s.password,
    error && s.error,
    className
  );
  const labelClass = clsx(s.label, disabled && s.disabled);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
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
              className={s.iconButton}
              onClick={() => setIsVisible(!isVisible)}
            >
              <img
                src={disabled ? eyeDisabled : eye}
                className={clsx(s.icon, disabled && s.disabledIcon)}
              />
            </button>
          )}
        </div>
      </div>

      {error && <span className={s.errorText}>Error!</span>}
    </div>
  );
};
