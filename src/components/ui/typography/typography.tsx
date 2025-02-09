import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";

import s from "./typography.module.scss";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "overline"
  | "link1"
  | "link2";

type TypographyProps<T extends ElementType = "span"> = {
  as?: T;
  variant: TypographyVariant;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "span">(props: TypographyProps<T>) => {
  const { as: Component = "span", variant, className, ...rest } = props;

  return <Component className={clsx(s[variant], className)} {...rest}></Component>;
};
