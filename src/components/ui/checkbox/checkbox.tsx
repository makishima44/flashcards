import * as CheckboxRadix from "@radix-ui/react-checkbox";
import check from "@/assets/icons/checkboxIcon.svg";
import disabledCheck from "@/assets/icons/disabledCheckboxIcon.svg";
import s from "./checkbox.module.scss";
import { Typography } from "../typography";
import { forwardRef, useId } from "react";

export type CheckboxProps = {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: (checked: boolean) => void;
} & React.ComponentPropsWithoutRef<"button">;

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, checked, disabled, onCheckedChange, ...props }: CheckboxProps) => {
    const generatedId = useId();
    const checkboxId = props.id || generatedId;

    return (
      <div className={s.main}>
        <CheckboxRadix.Root
          className={s.Root}
          id={checkboxId}
          disabled={disabled}
          checked={checked}
          onCheckedChange={onCheckedChange}
          {...props}
        >
          <CheckboxRadix.Indicator className={s.Indicator}>
            <img src={disabled ? disabledCheck : check} alt={checked ? "Checked" : "Unchecked"} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>

        {label && (
          <label htmlFor={checkboxId} className={disabled ? `${s.label} ${s.disabled}` : s.label}>
            <Typography variant="subtitle1" className={s.typography}>
              {label}
            </Typography>
          </label>
        )}
      </div>
    );
  }
);
