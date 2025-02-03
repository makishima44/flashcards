import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

import s from "./button.module.scss";
import clsx from "clsx";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  children: ReactNode;
} & ComponentPropsWithRef<T>;

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const {
    as: Component = "button",
    className,
    fullWidth,
    variant = "primary",

    children,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
