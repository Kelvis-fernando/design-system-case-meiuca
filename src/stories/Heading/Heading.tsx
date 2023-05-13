import React from "react";
import { headingStyle } from "./Heading.style";

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, text }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag style={headingStyle}>{text}</HeadingTag>;
};
