import React from "react";
import { getButtonStyle } from "./Button.style";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" style={getButtonStyle(primary, size)} {...props}>
      {label}
    </button>
  );
};
