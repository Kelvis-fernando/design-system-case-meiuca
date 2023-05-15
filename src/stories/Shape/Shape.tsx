import { shapeStyle } from "./Shape.style";
import { ShapeProps } from "../../types/ShapeProps";

export const Shape: React.FC<ShapeProps> = ({
  children,
  width,
  height,
  ...props
}) => {
  return (
    <div style={shapeStyle(width!, height!)} {...props}>
      {children}
    </div>
  );
};
