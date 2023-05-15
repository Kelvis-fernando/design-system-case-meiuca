import React from "react";
import { buttonStyle } from "./Button.style";
import { ButtonProps } from "../../types/ButtonProps";

export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" style={buttonStyle(primary, size)} {...props}>
      {label}
    </button>
  );
};
