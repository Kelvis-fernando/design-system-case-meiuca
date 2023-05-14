import { ReactNode } from "react";
import { Shape } from "../Shape/Shape";

export interface CardProps {
  width?: string;
  height?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  ...props
}) => {
  return (
    <Shape width={width} height={height} {...props}>
      {children}
    </Shape>
  );
};
