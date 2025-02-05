import { ComponentPropsWithRef } from "react";

import s from "./input.module.scss";
import clsx from "clsx";

export type InputProps = {
  label?: string;
  error?: boolean;
  variant?: "password" | "search";
} & ComponentPropsWithRef<"input">;

export const Input = (props: InputProps) => {
  const { label, className, error, disabled, ...rest } = props;

  const inputClass = clsx(s.input, disabled && s.disabled, error && s.error, className);
  const labelClass = clsx(s.label, disabled && s.disabled);
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={s.main}>
      <div className={s.inputBlock}>
        {label && (
          <label className={labelClass} htmlFor={inputId}>
            {label}
          </label>
        )}

        <input id={inputId} className={inputClass} disabled={disabled} {...rest}></input>
      </div>

      {error && <span className={s.errorText}>Error</span>}
    </div>
  );
};
