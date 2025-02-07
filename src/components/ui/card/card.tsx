import { ComponentPropsWithoutRef } from "react";

import s from "./card.module.scss";
import clsx from "clsx";

type CardProps = ComponentPropsWithoutRef<"div">;

export const Card = ({ className, ...rest }: CardProps) => {
  const cardClass = clsx(s.main, className);

  return <div className={cardClass} {...rest}></div>;
};
