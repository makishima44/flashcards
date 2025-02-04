import { ComponentPropsWithRef } from "react";

import s from "./input.module.scss";
import clsx from "clsx";

export type InputProps = {
  label?: string;
  error?: boolean;
  variant: "text" | "password" | "search";
} & ComponentPropsWithRef<"input">;

export const Input = (props: InputProps) => {
  const { label, className, error } = props;
  return (
    <>
      {label && <label htmlFor="">{label}</label>}
      <input className={clsx(s.input, error && s.error, className)}></input>
      {error && <span className={s.errorText}>Error</span>}
    </>
  );
};
