import { ReactNode } from "react";
import { Shape } from "../Shape/Shape";

export interface CardProps {
  image?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ image, children, ...props }) => {
  return (
    <Shape>
      <div {...props}>
        {image && <img src={image} alt="Card banner" />}
        {children}
      </div>
    </Shape>
  );
};
