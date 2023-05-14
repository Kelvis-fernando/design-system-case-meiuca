import { CardProps } from "../../types/CardProps";
import { Shape } from "../Shape/Shape";

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
