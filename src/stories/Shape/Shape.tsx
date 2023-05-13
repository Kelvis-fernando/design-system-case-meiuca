import { getShapeStyle } from "./Shape.style";
import { ShapeProps } from "../../types/ShapeProps";

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
