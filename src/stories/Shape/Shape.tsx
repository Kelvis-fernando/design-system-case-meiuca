import React, { ReactNode } from "react";
import { getShapeStyle } from "./Shape.style";

export interface ShapeProps {
  children: ReactNode;
  width?: string;
  height?: string;
}

export const Shape: React.FC<ShapeProps> = ({
  children,
  width,
  height,
  ...props
}) => {
  return (
    <div style={getShapeStyle(width!, height!)} {...props}>
      {children}
    </div>
  );
};
