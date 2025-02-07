import { ComponentPropsWithoutRef, ElementType } from "react";
import arr from "@/assets/icons/log-out.svg";

import s from "./button.module.scss";
import clsx from "clsx";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  icon?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const {
    as: Component = "button",
    className,
    fullWidth,
    variant = "primary",
    children,
    icon,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    >
      {icon && <img src={arr} alt="icon" className={s.icon} />}
      {children}
    </Component>
  );
};
